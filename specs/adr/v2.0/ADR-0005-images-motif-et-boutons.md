# ADR-0005 : Illustration et icône en `img` décoratifs, motif en fond CSS ; trois boutons sans script

## Statut
Accepté (2026-11-05) — décisions G2 (Q-B1, Q-B2).

## Contexte
Le starter fournit l'illustration `illustration-hero.svg` (450 × 220), l'icône `icon-music.svg` et le motif en vague en deux versions (`pattern-background-desktop.svg` 1440 × 437, `pattern-background-mobile.svg` 375 × 194). L'illustration et l'icône sont décoratives (Q-B2, A2). Les trois boutons n'ont pas de destination (Q-B1, S13).

## Options
| Option | Pour | Contre |
|---|---|---|
| **Illustration et icône en `img alt=""`, motif en `background-image` du `body` (choisie)** | La place de l'illustration est réservée par `width` et `height` ; le motif, purement décoratif, reste hors du HTML et change de fichier avec la largeur sans balisage en plus | — |
| Motif en `img` ou `picture` | Fichier choisi par le navigateur | Un élément décoratif de plus dans le HTML, à positionner sous la carte |
| Boutons en liens `href="#"` | — | Ce ne sont pas des destinations (Q-B1) ; un lien vide ajoute « # » à l'adresse |

## Décision
- Illustration : `img` `width="450" height="220"`, `alt=""`, à pleine largeur de la carte, coins du haut arrondis par la carte (`overflow: clip`).
- Icône : `img` 48 × 48, `alt=""`.
- Motif : fond du `body` en Blue 100, `pattern-background-mobile.svg` sous 480 px, `pattern-background-desktop.svg` au-delà, en haut, à pleine largeur, sans répétition.
- Forfait : un groupe (`role="group"`) nommé par « Annual Plan » (`aria-labelledby`, règle FM sur `aria-label`).
- Boutons : `button type="button"`, sans gestionnaire ; `src/main.js` n'importe que la feuille de style.

## Conséquences
- Aucun décalage de mise en page au chargement ; aucune erreur JavaScript possible à l'exécution.
- Vérifié par S6 (images chargées, aucune image exposée), S13 (clics sans effet) et les comparaisons visuelles (S21 à S23).
