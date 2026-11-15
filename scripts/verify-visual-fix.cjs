const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const posts=require('../data/blogPosts.json');
const out=path.resolve(__dirname,'../out');
for(const [name,minBytes] of [['techway-empreendedora-hq.avif',12000],['techway-assistente-hq.avif',4000]]){
  const src=path.resolve(__dirname,'../public/illustrations',name);
  const output=path.resolve(out,'illustrations',name);
  assert(fs.existsSync(src)&&fs.statSync(src).size>=minBytes,'Asset HQ ausente ou comprimido em excesso: '+name);
  assert(fs.existsSync(output),'Asset HQ ausente no export: '+name);
}
const home=fs.readFileSync(path.join(out,'index.html'),'utf8');
assert(home.includes('techway-empreendedora-hq.avif')&&home.includes('techway-assistente-hq.avif'),'Hero não usa assets HQ');
const listing=fs.readFileSync(path.join(out,'blog.html'),'utf8');
for(const content of ['tw-blog-hero','tw-blog-cards','tw-blog-card','tw-revamp']){
  assert(listing.includes(content),'Listagem sem design novo: '+content);
}
for(const post of posts){
  const html=fs.readFileSync(path.join(out,'blog',post.slug+'.html'),'utf8');
  assert(html.includes('tw-blog-article') && html.includes('tw-revamp'),'Artigo sem design novo: '+post.slug);
  assert(html.includes(post.title),'Título ausente: '+post.slug);
}
console.log('Visual blog/hero aprovado: assets HQ, listagem e '+posts.length+' artigos preservados.');
