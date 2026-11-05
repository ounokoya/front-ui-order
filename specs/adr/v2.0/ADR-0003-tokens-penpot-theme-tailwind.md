# ADR-0003 : Tokens Penpot → thème Tailwind (`@theme`)

## Statut
Accepté (2026-11-05) — même décision que les challenges précédents.

## Contexte
La bibliothèque Penpot (validée G3, `specs/visuel/penpot/maquette.md`) fixe les 6 couleurs FM, les 2 couleurs dérivées de G2 (Q-A1, Q-A2), la couleur des liens de l'attribution (Q-B4), la police, les tailles de texte, les rayons et les ombres. Décisions communes : ADR-0001, ADR-0002 (`frontmentor/specs/adr/`).

## Décision
- `src/style.css` déclare les tokens dans un seul bloc `@theme` et vide la palette par défaut (`--color-*: initial`).
- Les longueurs des tokens sont écrites en rem (règle FM).
- Correspondance :

| Penpot | `@theme` |
|---|---|
| Couleurs FM | `--color-white`, `--color-blue-50`, `--color-blue-100`, `--color-blue-700`, `--color-blue-950`, `--color-gray-600` (valeurs `hsl()` du style-guide ; Gray 600 n'est plus utilisée pour du texte) |
| Dérivées G2 | `--color-gray-aa` (`hsl(224, 23%, 46%)`, Q-A1), `--color-blue-hover` (`hsl(245, 75%, 62%)`, Q-A2) |
| Attribution (Q-B4) | `--color-link` (`hsl(228, 45%, 44%)`, couleur du starter) |
| Red Hat Display | `--font-sans` (chargement : ADR-0004) |
| Tailles de texte | `--text-title` (28 px) et `--text-title-mobile` (22 px), `--text-body` (16 px, interligne 26 px) et `--text-body-mobile` (15 px, interligne 25 px), `--text-plan` (16 px) et `--text-plan-mobile` (15 px), `--text-change` (14 px) et `--text-change-mobile` (13 px), `--text-button` (15 px), `--text-attribution` (11 px) |
| Rayons | `--radius-card` (20), `--radius-box` (10, encadré et bouton) |
| Ombres | `--shadow-card` (0 25 50, Blue 950 à 20 %), `--shadow-button` (0 14 20, Blue 700 à 35 %) |
- Point de rupture : `--breakpoint-sm: 30rem` (480 px, Q-B3, G3-1).

## Conséquences
- Changer une couleur du design = changer une ligne de `@theme`.
- Fitness function (test « ADR-0003 » de `tests/statique.spec.js`) : aucune couleur (`#…`, `rgb(`, `hsl(`) dans `index.html`, ni dans `src/style.css` hors des valeurs de tokens.
