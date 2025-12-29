const http = require('http');
const path = require('path');
const fs = require('fs');

const buildDir = path.join(__dirname, 'build');
const port = process.env.PORT || 5008;

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.html': return 'text/html; charset=utf-8';
    case '.js': return 'application/javascript; charset=utf-8';
    case '.css': return 'text/css; charset=utf-8';
    case '.png': return 'image/png';
    case '.jpg':
    case '.jpeg': return 'image/jpeg';
    case '.svg': return 'image/svg+xml';
    case '.json': return 'application/json';
    case '.webp': return 'image/webp';
    case '.gif': return 'image/gif';
    case '.ico': return 'image/x-icon';
    default: return 'application/octet-stream';
  }
}

const server = http.createServer((req, res) => {
  try {
    let reqPath = decodeURIComponent(req.url.split('?')[0]);
    if (reqPath === '/') reqPath = '/index.html';

    // Prevent path traversal
    const safePath = path.normalize(path.join(buildDir, reqPath));
    if (!safePath.startsWith(buildDir)) {
      res.statusCode = 400;
      res.end('Bad request');
      return;
    }

    fs.stat(safePath, (err, stats) => {
      if (err || !stats.isFile()) {
        // fallback to index.html for SPA routing
        const indexPath = path.join(buildDir, 'index.html');
        fs.stat(indexPath, (iErr, iStats) => {
          if (iErr || !iStats.isFile()) {
            res.statusCode = 404;
            res.end('Not found');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          fs.createReadStream(indexPath).pipe(res);
        });
        return;
      }

      res.writeHead(200, { 'Content-Type': contentType(safePath) });
      fs.createReadStream(safePath).pipe(res);
    });
  } catch (e) {
    res.statusCode = 500;
    res.end('Server error');
  }
});

server.listen(port, () => {
  console.log(`Static preview server running at http://localhost:${port}/`);
  console.log(`Serving directory: ${buildDir}`);
});

server.on('error', (err) => {
  console.error('Server error:', err.message);
});
