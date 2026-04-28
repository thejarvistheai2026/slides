#!/usr/bin/env node
import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';

const serveDist = () => {
  const server = http.createServer((req, res) => {
    const filePath = path.join(process.cwd(), 'dist', req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(filePath);
    const contentTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml',
    };

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/plain' });
      res.end(data);
    });
  });

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port;
      console.log(`Server running at http://127.0.0.1:${port}`);
      resolve({ server, port });
    });
  });
};

async function exportToPDF() {
  if (!fs.existsSync('./dist')) {
    console.error('Error: dist folder not found. Run "npm run build" first.');
    process.exit(1);
  }

  console.log('Starting server...');
  const { server, port } = await serveDist();

  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });

  // Create context that respects reduced motion
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  const page = await context.newPage();

  // Navigate to the app
  await page.goto(`http://127.0.0.1:${port}`);
  console.log('Loading presentation...');

  // Wait for React to render fully
  await page.waitForTimeout(3000);

  // Inject script to complete all motion animations immediately
  await page.addScriptTag({
    content: `
      // Override Framer Motion to complete animations instantly
      if (window.__FRAMER_MOTION__) {
        window.__FRAMER_MOTION__.useReducedMotion = () => true;
      }

      // Force all motion elements to their final state
      const forceVisible = () => {
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
          const computed = window.getComputedStyle(el);
          // If element has opacity:0 or transform that hides it, override
          if (parseFloat(computed.opacity) === 0 || parseFloat(computed.opacity) < 0.1) {
            el.style.opacity = '1';
          }
          // Remove blur filters
          if (computed.filter.includes('blur')) {
            el.style.filter = 'none';
          }
          // Reset transforms that might hide content
          if (computed.transform.includes('translate') || computed.transform.includes('scale')) {
            el.style.transform = 'none';
          }
        });
      };

      // Run immediately and after a delay
      forceVisible();
      setTimeout(forceVisible, 500);
    `
  });

  await page.waitForTimeout(1000);

  const slideCount = 14;
  console.log(`Found ${slideCount} slides`);

  const desktopPath = path.join(process.env.HOME, 'Desktop', 'AI-Harness-Slides.pdf');
  const screenshots = [];

  for (let i = 0; i < slideCount; i++) {
    console.log(`Capturing slide ${i + 1}/${slideCount}...`);

    // Ensure all content is visible before capture
    await page.evaluate(() => {
      document.querySelectorAll('*').forEach(el => {
        const computed = window.getComputedStyle(el);
        if (parseFloat(computed.opacity) === 0 || parseFloat(computed.opacity) < 0.1) {
          el.style.opacity = '1';
        }
        if (computed.filter.includes('blur')) {
          el.style.filter = 'none';
        }
      });
    });

    await page.waitForTimeout(500);

    // Screenshot the full viewport
    const screenshot = await page.screenshot({
      type: 'png',
      fullPage: false
    });
    screenshots.push(screenshot);

    if (i < slideCount - 1) {
      await page.keyboard.press('ArrowRight');
      // Wait for slide transition + animations
      await page.waitForTimeout(2000);

      // Re-inject visibility fix after slide change
      await page.evaluate(() => {
        document.querySelectorAll('*').forEach(el => {
          el.style.opacity = '1';
          el.style.filter = 'none';
          el.style.transform = 'none';
        });
      });
      await page.waitForTimeout(500);
    }
  }

  console.log('Creating PDF...');

  const slideHtml = screenshots.map((ss) => {
    const base64 = ss.toString('base64');
    return `
      <div class="slide">
        <img src="data:image/png;base64,${base64}" />
      </div>
    `;
  }).join('');

  const printHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>AI Harness Slides</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { margin: 0; padding: 0; background: #0f172a; }
    @page {
      size: 1920px 1080px;
      margin: 0;
    }
    .slide {
      width: 1920px;
      height: 1080px;
      page-break-after: always;
      page-break-inside: avoid;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: #0f172a;
    }
    .slide:last-child {
      page-break-after: auto;
    }
    img {
      display: block;
      width: 1920px;
      height: 1080px;
      object-fit: contain;
    }
  </style>
</head>
<body>
  ${slideHtml}
</body>
</html>
  `;

  const printServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(printHtml);
  });

  await new Promise((resolve) => {
    printServer.listen(0, '127.0.0.1', resolve);
  });

  const printPort = printServer.address().port;
  const printPage = await context.newPage();
  await printPage.setViewportSize({ width: 1920, height: 1080 });
  await printPage.goto(`http://127.0.0.1:${printPort}`);
  await printPage.waitForTimeout(500);

  await printPage.pdf({
    path: desktopPath,
    width: '1920px',
    height: '1080px',
    printBackground: true,
    preferCSSPageSize: true,
  });

  printServer.close();
  await browser.close();
  server.close();

  console.log(`\n✅ PDF exported successfully!`);
  console.log(`📄 Saved to: ${desktopPath}`);
}

exportToPDF().catch(err => {
  console.error('Export failed:', err);
  process.exit(1);
});
