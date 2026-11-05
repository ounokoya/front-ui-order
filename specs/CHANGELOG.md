# Changelog

Format : [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) · Versions : [SemVer](https://semver.org/lang/fr/).

## [2.0.0] — 2026-11-05

Refonte complète de la solution de 2023 (SDL-FM 1.5.0, remise à niveau du profil, étape B, lot 2), à partir du starter actuel, dans le même dépôt.

### Added
- Carte à 24 px des bords sous 480 px, de 450 px au-delà, centrée dans la fenêtre (Q-B3, G3-1, ADR-0006) ; motif en vague en fond (ADR-0005).
- Couleurs AA : gris `hsl(224, 23%, 46%)` pour la phrase, le prix et « Cancel Order » (Q-A1) ; survols en `hsl(245, 75%, 62%)` (Q-A2).
- Forfait nommé « Annual Plan » ; trois `button type="button"` sans destination (Q-B1) ; illustration et icône décoratives (Q-B2).
- Red Hat Display servie avec le site par Fontsource (ADR-0004).
- Attribution de Koya Esdras, contour de focus Blue 950 (Q-B4).
- Tests : 23 scénarios de la spec, axe-core, validateur W3C Nu, html-validate et eslint réglés comme FM, règles FM déjà vues, fitness functions des ADR-0003 et ADR-0004, comparaisons visuelles (0,93 % ; 0,94 % ; 4,20 % pour un seuil de 6,3 %).

### Fixed
- Contour de focus des boutons affiché d'un coup, sans fondu depuis la couleur du texte (E1, Phase 8).

### Changed
- Vite 8 et Tailwind CSS v4 (tokens dans `@theme`, ADR-0003) au lieu de Vite et Tailwind v3 ; publication sur GitHub Pages (branche `gh-pages`) au lieu de Netlify.

### Removed
- Code de 2023 (restes du modèle Vite, dont `counter.js`) et README du starter.
