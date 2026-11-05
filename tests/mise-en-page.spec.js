import { test, expect } from '@playwright/test'
import { open, card, plan, button, footer, box, near, textBox } from './helpers.js'

// Spec §4 — S1 à S5 (positions de la maquette Penpot, à 1 px près)

test('S1 — 1440 × 900 : carte, forfait et bouton de la maquette', async ({ page }) => {
  await open(page, 1440, 900)
  near(await box(card(page)), { x: 495, y: 102, width: 450, height: 697 }, 'carte')
  near(await box(plan(page)), { x: 543, y: 519, width: 354, height: 98 }, 'forfait')
  near(await box(button(page, 'Proceed to Payment')), { x: 543, y: 651, width: 354, height: 48 }, 'Proceed')
})

test('S2 — 375 × 709 : carte mobile à 24 px des bords', async ({ page }) => {
  await open(page, 375, 709)
  near(await box(card(page)), { x: 24, y: 71, width: 327, height: 567 }, 'carte')
  near(await box(plan(page)), { x: 48, y: 406, width: 279, height: 82 }, 'forfait')
  near(await box(button(page, 'Proceed to Payment')), { x: 48, y: 513, width: 279, height: 48 }, 'Proceed')
})

test('S3 — 768 × 1024 : carte de 450 px centrée (Q-B3) ; 479 px : carte à 24 px des bords', async ({ page }) => {
  await open(page, 768, 1024)
  near(await box(card(page)), { x: 159, y: 164, width: 450, height: 697 }, 'carte')
  await open(page, 479, 900)
  near(await box(card(page)), { x: 24, width: 431 }, 'carte à 479 px')
})

for (const width of [320, 479, 480, 768, 1440]) {
  test(`S4 — ${width} px : pas de défilement horizontal`, async ({ page }) => {
    await open(page, width, 900)
    // présence d'abord : une page vide n'a jamais de défilement
    await expect(button(page, 'Cancel Order')).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBe(0)
  })
}

test('S5 — 1440 × 900 : pied de page centré sous la carte, dans la fenêtre', async ({ page }) => {
  await open(page, 1440, 900)
  const c = await box(card(page))
  // boîte sans arrondi (somme de deux demi-pixels)
  const f = await footer(page).boundingBox()
  const t = await textBox(footer(page))
  expect(f.y).toBeGreaterThanOrEqual(c.y + c.height)
  expect(f.y + f.height).toBeLessThanOrEqual(900)
  expect(Math.abs((t.left + t.right) / 2 - 720)).toBeLessThanOrEqual(1)
})
