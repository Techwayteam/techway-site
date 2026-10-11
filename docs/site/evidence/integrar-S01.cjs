const fs = require('node:fs');
const sourcePath = 'data/blogPosts.json';
const original = fs.readFileSync(sourcePath, 'utf8');
const posts = JSON.parse(original);
const draft = JSON.parse(fs.readFileSync('docs/site/editorial/rascunhos/S01-integracao.json', 'utf8'));
const dateIndex = process.argv.indexOf('--date');
const date = process.argv[dateIndex + 1];
if (dateIndex < 0 || !/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('Explicit local edition date required');
if (posts.some((post) => post.slug === draft.slug)) throw new Error('S01 already integrated; review changes explicitly');
const { status, editorialId, receivedAt, ...post } = draft;
post.date = date;
for (const image of [post.featuredImage, ...post.content.sections.flatMap((section) => section.blocks.filter((block) => block.type === 'image').map((block) => block.src))]) {
  if (!fs.existsSync('public' + image)) throw new Error('Missing image: ' + image);
}
fs.writeFileSync('.local-backups/2026-10-11-S01-artifacts/blogPosts-before-S01.json', original);
// Append without rewriting any pre-existing post or its formatting.
const arrayEnd = original.lastIndexOf(']');
fs.writeFileSync(sourcePath, original.slice(0, arrayEnd).trimEnd() + ',\n' + JSON.stringify(post, null, 2) + '\n]\n');
draft.status = 'integrated_locally';
draft.date = date;
fs.writeFileSync('docs/site/editorial/rascunhos/S01-integracao.json', JSON.stringify(draft, null, 2) + '\n');
console.log('S01 integrated into local source: /blog/' + post.slug + '. No push or deployment.');
