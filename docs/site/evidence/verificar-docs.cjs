const fs = require('node:fs');
const path = require('node:path');
function markdownFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? markdownFiles(file) : entry.name.endsWith('.md') ? [file] : [];
  });
}
let references = 0;
const missing = [];
for (const file of markdownFiles('docs/site')) {
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1].split('#')[0];
    if (!target || /^[a-z]+:\/\//i.test(target) || target.startsWith('mailto:')) continue;
    references++;
    if (!fs.existsSync(path.resolve(path.dirname(file), target))) missing.push({ file, target });
  }
}
console.log(JSON.stringify({ references, missing }));
if (missing.length) process.exitCode = 1;
