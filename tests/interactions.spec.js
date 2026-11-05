import { test, expect } from '@playwright/test'
import { open, button, link, style, cssColor } from './helpers.js'

// Spec §5 et §6 — S10 à S16

const HOVER = 'hsl(245, 75%, 62%)'

test.beforeEach(async ({ page }) => {
  await open(page, 1440, 900)
})

test('S10 — survol de Proceed to Payment : fond plus clair AA, puis retour à Blue 700', async ({ page }) => {
  const b = button(page, 'Proceed to Payment')
  const blue = await cssColor(page, 'hsl(245, 75%, 52%)')
  expect(await style(b, 'backgroundColor')).toBe(blue)
  await b.hover()
  await expect.poll(() => style(b, 'backgroundColor')).toBe(await cssColor(page, HOVER))
  await page.mouse.move(0, 0)
  await expect.poll(() => style(b, 'backgroundColor')).toBe(blue)
})

test('S11 — survol de Change : plus clair AA, sans soulignement', async ({ page }) => {
  const b = button(page, 'Change')
  await b.hover()
  await expect.poll(() => style(b, 'color')).toBe(await cssColor(page, HOVER))
  await expect.poll(() => style(b, 'textDecorationLine')).toBe('none')
})

test('S12 — survol de Cancel Order : Blue 950', async ({ page }) => {
  const b = button(page, 'Cancel Order')
  await b.hover()
  await expect.poll(() => style(b, 'color')).toBe(await cssColor(page, 'hsl(223, 47%, 23%)'))
})

test('S13 — les 3 boutons ne mènent nulle part : ni navigation ni envoi (Q-B1)', async ({ page }) => {
  const url = page.url()
  const requests = []
  page.on('request', (r) => { if (r.isNavigationRequest() || r.method() !== 'GET') requests.push(`${r.method()} ${r.url()}`) })
  for (const name of ['Change', 'Proceed to Payment', 'Cancel Order']) {
    await button(page, name).click()
    await button(page, name).focus()
    await page.keyboard.press('Enter')
  }
  await page.waitForTimeout(300)
  expect(page.url()).toBe(url)
  expect(requests).toEqual([])
})

test('S14 — Tab : Change, Proceed, Cancel, puis les deux liens, chacun avec un contour de 2 px au moins', async ({ page }) => {
  const seen = []
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('Tab')
    seen.push(await page.evaluate(() => {
      const el = document.activeElement
      const s = getComputedStyle(el)
      return { name: el.textContent.trim(), outline: s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) >= 2 }
    }))
  }
  expect(seen.map((s) => s.name)).toEqual(['Change', 'Proceed to Payment', 'Cancel Order', 'Frontend Mentor', 'Koya Esdras'])
  for (const s of seen) expect.soft(s.outline, `contour sur « ${s.name} »`).toBe(true)
})

test('S15 — liens du pied de page : soulignés, sans soulignement au survol ; bonnes adresses', async ({ page }) => {
  await expect(link(page, 'Frontend Mentor')).toHaveAttribute('href', 'https://www.frontendmentor.io?ref=challenge')
  await expect(link(page, 'Koya Esdras')).toHaveAttribute('href', 'https://www.frontendmentor.io/profile/ounokoya')
  for (const name of ['Frontend Mentor', 'Koya Esdras']) {
    expect(await style(link(page, name), 'textDecorationLine'), name).toBe('underline')
    await link(page, name).hover()
    await expect.poll(() => style(link(page, name), 'textDecorationLine'), { message: `${name} survolé` }).toBe('none')
  }
})

test('S16 — prefers-reduced-motion : aucune transition sur les 3 boutons', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const name of ['Change', 'Proceed to Payment', 'Cancel Order']) {
    await button(page, name).hover()
    const none = await button(page, name).evaluate((el) => {
      const s = getComputedStyle(el)
      return s.transitionProperty === 'none' || s.transitionDuration.split(',').every((d) => parseFloat(d) === 0)
    })
    expect(none, name).toBe(true)
  }
})
