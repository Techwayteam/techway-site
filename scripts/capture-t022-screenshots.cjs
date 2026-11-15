const fs = require('node:fs')
const path = require('node:path')
const assert = require('node:assert/strict')
const { chromium } = require('playwright')

const root = path.resolve(__dirname, '../artifacts/t022')
const base = process.env.E2E_BASE_URL || 'http://127.0.0.1:4173'

async function main() {
  fs.mkdirSync(root, { recursive: true })
  const browser = await chromium.launch({ headless: true })
  try {
    for (const item of [
      { name: 'desktop', width: 1440, height: 900 },
      { name: 'tablet', width: 768, height: 900 },
      { name: 'mobile', width: 390, height: 844 },
    ]) {
      const page = await browser.newPage({ viewport: { width: item.width, height: item.height }, deviceScaleFactor: 1 })
      await page.goto(base, { waitUntil: 'domcontentloaded' })
      await page.locator('#hero .tw-human').waitFor()
      await page.waitForFunction(() => {
        const logo = document.querySelector('header a.tw-brand-frame img')
        return !!logo && logo.getAttribute('src')?.includes('logo_techway_semslogan_transparent.png')
          && logo.complete && logo.naturalWidth > 0 && !document.querySelector('.tw-brand-mark')
      }, { timeout: 25000 })
      await page.waitForFunction(() => {
        const images = [...document.querySelectorAll('#hero .tw-human, #hero .tw-bot')]
        return images.length === 2 && images.every(image => image.complete && image.naturalWidth > 0)
      }, { timeout: 25000 })
      await page.evaluate(() => document.fonts.ready)
      await page.emulateMedia({ reducedMotion: 'reduce' })
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
      assert(overflow <= 1, `Rolagem horizontal em ${item.name}: ${overflow}px`)
      assert.equal(await page.locator('h1').count(), 1, 'Esperado um H1 na home')
      await page.screenshot({ path: path.join(root, `${item.name}-hero.png`) })
      await page.screenshot({ path: path.join(root, `${item.name}-full.png`), fullPage: true })
      console.log(`T022 print ${item.name}: sem overflow, logo oficial e duas imagens 3D carregadas, H1 único`)
      await page.close()
    }
  } finally {
    await browser.close()
  }
}
main().catch(e => { console.error(e); process.exitCode = 1 })
