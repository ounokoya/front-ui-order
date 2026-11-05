import { test, expect } from '@playwright/test'
import { open, button, diffRatio } from './helpers.js'

// Spec §7 — S21 à S23 : seuils calibrés en Phase 3 (specs/visuel/penpot/maquette.md, G3-2)

const screens = [
  { id: 'S21', ref: 'desktop.jpg', w: 1440, h: 900, max: 0.05 },
  { id: 'S22', ref: 'etats.jpg', w: 1440, h: 900, max: 0.05, hover: true },
  { id: 'S23', ref: 'mobile.jpg', w: 375, h: 709, max: 0.063 },
]

for (const { id, ref, w, h, max, hover } of screens) {
  test(`${id} — ${ref} (≤ ${(max * 100).toFixed(1)} %)`, async ({ page }, testInfo) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await open(page, w, h)
    await expect(button(page, 'Cancel Order')).toBeVisible()
    await page.evaluate(() => Promise.all([...document.images].map((img) => img.decode().catch(() => {}))))
    if (hover) await button(page, 'Proceed to Payment').hover()
    else await page.mouse.move(0, 0) // aucun survol pendant la capture

    const shot = await page.screenshot({ caret: 'hide', animations: 'disabled' })
    await testInfo.attach(ref.replace('.jpg', '.png'), { body: shot, contentType: 'image/png' })
    const ratio = diffRatio(shot, ref)
    testInfo.annotations.push({ type: 'pixels différents', description: `${(ratio * 100).toFixed(2)} %` })
    expect(ratio).toBeLessThanOrEqual(max)
  })
}
