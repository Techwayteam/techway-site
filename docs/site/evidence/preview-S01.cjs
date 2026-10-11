const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve('.local-backups/2026-10-11-S01-validation/out');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.ico': 'image/x-icon', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname);
  let file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403).end(); return; }
  if (file === root) file = path.join(root, 'index.html');
  if (!fs.existsSync(file)) file += '.html';
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404).end(); return; }
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
server.listen(4179, '127.0.0.1', () => console.log('S01 isolated preview: http://127.0.0.1:4179/blog/atendimento-ia-alem-respostas-automaticas (test date and cover only)'));
