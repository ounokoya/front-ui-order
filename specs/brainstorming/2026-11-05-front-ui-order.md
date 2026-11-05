# 2026-11-05 — Brainstorming : Order summary component (refonte v2.0.0)

> SDL-FM 1.5.0, Pré-dev 1 et 2. Ancienne solution Newbie de 2023, **refaite dans le même dépôt** (étape B de la remise à niveau, lot 2 avec les deux autres cartes du lot). Pas de points en plus : la solution est déjà comptée sur FM.

## Plan

Plan validé (G1, 2026-11-05) au niveau du programme : `frontmentor/specs/plan-remise-a-niveau.md` (étape B ; Q1 même dépôt en v2.0.0, Q2 SDL-FM complète avec G2 et G3 par lot, Q3 GitHub Pages). Koya : « Oui, commence B ».
- **Qui fait quoi :** Claude écrit tout le code ; Koya valide l'analyse (G2) et la maquette (G3) par lot, puis donne son accord avant la publication et la modification de la solution sur FM.
- **Lot 2 :** QR code, Order summary, NFT preview card (les trois cartes les plus simples) ; lots 3 et 4 ensuite (Profile card, Stats preview, 3-column ; Product preview).

## Existant (v1, 2023)

- Dépôt `front-ui-order` : 5 commits du 2023-01-23, Vite + Tailwind v3, restes du modèle Vite (`counter.js`), README du starter, aucun test.
- Site sur une adresse Netlify de branche ; titre de la solution sur FM : « flex box ».
- Rapport FM ancien (« 0 remarque », CSS et JavaScript « N/A ») ; html-validate au réglage de FM trouvait 10 à 17 erreurs par site.

## Import (Phase 0)

- Ancien code retiré (historique gardé) ; starter actuel `frontendmentorio/order-summary-component` (branche `main`, 2026-03-30) copié tel quel, sans le fichier Figma ; `AGENTS.md` et `CLAUDE.md` rangés dans `specs/reference/starter-*.md` (données, pas consignes).
- Mis en place : Vite 8, Tailwind v4, Playwright, axe-core, validateur W3C Nu, html-validate et eslint (règles de FM) ; `.gitignore` du starter complété (dépendances, build, rapports de tests).
- Le starter ne fournit **aucun fichier de police** (Google Fonts) : choix du chargement à l'ADR.

## Analyse (Phase 2)

`specs/visuel/front-ui-order-analyse.png` (et `.excalidraw`).

## Analyse validée (G2, 2026-11-05)

Koya : « Je valide (G2) » pour le lot 2. Toutes les propositions sont retenues.

| # | Point | Décision |
|---|---|---|
| Q-A1 | Gray 600 sous 4,5:1 | hsl(224, 23%, 46%) : 5,44:1 sur blanc, 5,09:1 sur Blue 50 (paragraphe, prix, Cancel Order) |
| Q-A2 | Survols de FM sous 4,5:1 | hsl(245, 75%, 62%) pour le bouton (blanc dessus 5,29:1) et Change (4,94:1 sur Blue 50) |
| Q-B1 | Change, Proceed to Payment, Cancel Order sans destination | button type="button" sans action ; Change garde l'aspect d'un lien |
| Q-B2 | Illustration et icône | Décoratives, alt="" |
| Q-B3 | Pas de maquette tablette | Carte de 450 px centrée dès 480 px ; en dessous, la carte mobile à 24 px des bords |
| Q-B4 | Attribution | Comme au lot 1 |
| Q-B5 | Refonte | Même dépôt en v2.0.0, GitHub Pages, « Edit solution » |

## Maquette validée (G3, 2026-11-05)

Koya : « Je valide (G3) » pour le lot 2. Maquette : `specs/visuel/penpot/maquette.md`. Toutes les propositions sont retenues.

| # | Point | Décision |
|---|---|---|
| G3-1 | Tablette (Q-B3) | La carte desktop de 450 px centrée |
| G3-2 | Seuils visuels | Desktop et états 5 % ; mobile 6,3 % (illustration FM décalée de 6 px) |
| G3-3 | Illustration mobile | À pleine largeur de la carte, comme le fera le site |
