const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const posts = require('../data/blogPosts.json');
const base = process.env.E2E_BASE_URL || 'http://127.0.0.1:4173';
const dir = path.resolve(__dirname,'../artifacts/visual-fix');
async function main(){
 fs.mkdirSync(dir,{recursive:true});
 const browser=await chromium.launch({headless:true});
 try{
  for(const viewport of [{id:'desktop',width:1440,height:900},{id:'mobile',width:390,height:844}]){
   const page=await browser.newPage({viewport:{width:viewport.width,height:viewport.height},deviceScaleFactor:1});
   await page.emulateMedia({reducedMotion:'reduce'});
   for(const item of [{url:'/',name:'home'}, {url:'/blog',name:'blog'},{url:'/blog/'+posts[0].slug,name:'artigo'}]){
    await page.goto(base+item.url,{waitUntil:'domcontentloaded'});
    await page.evaluate(()=>document.fonts.ready);
    if(item.name==='home'){
      const imgs=page.locator('#hero .tw-human, #hero .tw-bot');
      assert.equal(await imgs.count(),2);
      await page.waitForFunction(()=>[...document.querySelectorAll('#hero .tw-human, #hero .tw-bot')].every(x=>x.complete&&x.naturalWidth>0));
    }
    const metrics=await page.evaluate(()=>{
      const a=document.querySelector('article > header');
      const h=document.querySelector('.tw-revamp > header');
      return {overflow:document.documentElement.scrollWidth-window.innerWidth,
        logo:h?.querySelector('img')?.getAttribute('src')||'',
        articleHeaderPosition:a?getComputedStyle(a).position:null,
        h1:document.querySelectorAll('h1').length};
    });
    assert(metrics.overflow<=1,'Overflow em '+item.name+' '+viewport.id+': '+metrics.overflow);
    assert.equal(metrics.h1,1,'Esperado um H1 em '+item.name);
    assert(metrics.logo.includes('logo_techway_semslogan_transparent.png'),'Logo oficial não carregada');
    if(item.name==='artigo') assert.notEqual(metrics.articleHeaderPosition,'sticky','Cabeçalho do artigo não pode ser sticky');
    await page.screenshot({path:path.join(dir,item.name+'-'+viewport.id+'.png'),fullPage:item.name!=='home'});
    console.log('PASS '+item.name+' '+viewport.id);
   }
   await page.close();
  }
 } finally{await browser.close();}
}
main().catch(e=>{console.error(e);process.exitCode=1});
