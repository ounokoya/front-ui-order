# Mise à jour de la solution sur Frontend Mentor

> SDL-FM 1.5.0 Phase 13 (refonte v2.0.0). Textes préparés pour le formulaire « Edit solution » de la solution de 2023 : https://www.frontendmentor.io/solutions/order-summary-component-cN1_pZjfrM (titre « flex box »). La modification est publique et faite au nom de Koya : elle n'est envoyée qu'avec son accord, au moment de l'envoi. Pas de nouveaux points (solution déjà soumise).
>
> **Envoyée le 2026-11-05** avec l'accord de Koya, textes ci-dessous inchangés (les 4 tags existent sur FM) ; rapport : 0 remarque (`specs/analyse/2026-11-05-rapport-fm.md`).

## Informations générales

| Champ | Valeur |
|---|---|
| Solution title (70 caractères max) | Order summary card with WCAG AA colours, Tailwind v4 & Playwright (65) |
| Repository URL | https://github.com/ounokoya/front-ui-order |
| Live site URL | https://ounokoya.github.io/front-ui-order/ |
| Tags (5 max, hors HTML/CSS/JS) | `tailwind-css`, `vite`, `accessibility`, `playwright` |
| Visibilité | Public |
| Capture | « Regenerate screenshot » : la page a changé depuis 2023 |

Après l'envoi : « Regenerate report » (vérifications automatiques gratuites), en vérifiant d'abord que la solution n'a pas de rapport IA (sinon un crédit serait consommé : accord de Koya).

## What are you most proud of, and what would you do differently next time?

I'm most proud of keeping the design while making it readable: the grey text (3.92:1 on white) only loses lightness, to `hsl(224, 23%, 46%)` (5.44:1), and the hover colour keeps white text at 5.29:1. The plan is a group named by "Annual Plan", so the "Change" button relates to it. Screenshots differ from the design JPGs by 0.93 % (desktop), 0.94 % (hover states) and 4.20 % (mobile) of pixels, and the 35 Playwright tests pass on the live site.

This is a rebuild of my 2023 solution. Next time, I'd write the focus-ring test before choosing transitions (see below).

## What challenges did you encounter, and how did you overcome them?

- **A fading focus ring**: Tailwind's `transition-colors` also animates `outline-color`, so on the keyboard the ring of "Proceed to Payment" faded in from white. A test reads the ring colour the moment the button gets focus; `transition-[color,background-color]` fixed it.
- **The plan box**: its two text lines were taller than the 48 px icon, so the box grew to 104 px; a fixed height with centred content matches the design's 98 px.

## What specific areas of your project would you like help with?

1. The three buttons have no destination in the challenge, so they are `button type="button"` without a handler. Would you use links instead?
2. Is `role="group"` with `aria-labelledby` the right way to tie "Change" to the plan?
