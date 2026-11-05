import { test, expect } from '@playwright/test'
import { open, card, title, sentence, plan, button, lineCount, style, cssColor } from './helpers.js'

// Spec §2, §3 et §6 — S6 à S9

const GRAY = 'hsl(224, 23%, 46%)'

test('S6 — titre, phrase, forfait, 3 boutons ; images décoratives mais chargées', async ({ page }) => {
  await open(page, 1440, 900)
  await expect(title(page)).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
  await expect(sentence(page)).toBeVisible()
  await expect(plan(page).getByText('Annual Plan', { exact: true })).toBeVisible()
  await expect(plan(page).getByText('$59.99/year', { exact: true })).toBeVisible()
  await expect(plan(page).getByRole('button', { name: 'Change' })).toBeVisible()
  for (const name of ['Change', 'Proceed to Payment', 'Cancel Order']) await expect(button(page, name)).toHaveAttribute('type', 'button')
  await expect(card(page).getByRole('img')).toHaveCount(0)
  const imgs = card(page).locator('img')
  expect(await imgs.count()).toBeGreaterThanOrEqual(2)
  for (let i = 0; i < await imgs.count(); i++) expect(await imgs.nth(i).evaluate((img) => img.complete && img.naturalWidth > 0), `image ${i + 1}`).toBe(true)
})

for (const [w, h] of [[1440, 900], [375, 709]]) {
  test(`S7 — ${w} px : la phrase tient sur 3 lignes`, async ({ page }) => {
    await open(page, w, h)
    expect(await lineCount(sentence(page))).toBe(3)
  })
}

test('S8 — gris AA (Q-A1) pour la phrase, le prix et Cancel Order ; Change en Blue 700, souligné', async ({ page }) => {
  await open(page, 1440, 900)
  const gray = await cssColor(page, GRAY)
  expect(await style(sentence(page), 'color')).toBe(gray)
  expect(await style(plan(page).getByText('$59.99/year', { exact: true }), 'color')).toBe(gray)
  expect(await style(button(page, 'Cancel Order'), 'color')).toBe(gray)
  expect(await style(button(page, 'Change'), 'color')).toBe(await cssColor(page, 'hsl(245, 75%, 52%)'))
  expect(await style(button(page, 'Change'), 'textDecorationLine')).toBe('underline')
})

test('S9 — appareil en thème sombre : le fond de la page reste Blue 100 (A6)', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await open(page, 375, 709)
  expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe(await cssColor(page, 'hsl(225, 100%, 94%)'))
})
