# ADR-0006 : Carte centrée dans la fenêtre, pied de page en bas sans la décaler

## Statut
Accepté (2026-11-05) — même principe que le Results summary (ADR-0006).

## Contexte
La carte est centrée dans la fenêtre à toutes les largeurs ((495, 102) à 1440 × 900, (24, 71) à 375 × 709, (159, 164) à 768 × 1024). Sous 480 px, elle est à 24 px des bords avec les textes mobiles ; dès 480 px, elle mesure 450 px avec les textes desktop (Q-B3, G3-1). L'attribution (Q-B4), absente des images FM, doit tenir sous la carte sans la déplacer (S5).

## Options
| Option | Pour | Contre |
|---|---|---|
| **Grille de 3 rangées `1fr auto 1fr` sur toute la hauteur (choisie)** | La carte est exactement au centre, à toutes les largeurs ; le pied de page se place en bas de la 3e rangée ; si la fenêtre est trop basse, la page s'allonge au lieu de superposer | — |
| Pied de page en position absolue en bas de la fenêtre | Simple | Passe sur la carte dans une fenêtre basse |
| Pied de page dans le flux, sous la carte | Simple | Décale la carte de la moitié de la hauteur du pied de page |

## Décision
- `body` en grille `grid-rows-[1fr_auto_1fr]` de hauteur minimale `100dvh`, `main` dans la 2e rangée, `footer` en bas de la 3e.
- Carte : largeur `calc(100% - 3rem)` et marge interne de 24 px sous 480 px ; `28.125rem` (450 px) et marge interne de 48 px dès `sm` (480 px).
- Tailles de texte mobiles par défaut, desktop dès `sm` (tokens de l'ADR-0003).

## Conséquences
- Positions S1 à S5 tenues par une seule grille et un seul point de rupture ; rien ne se superpose quelle que soit la hauteur de la fenêtre.
- La carte passe de 431 px (à 479 px) à 450 px (15 px de marge à 480 px) : voulu par Q-B3, vérifié par S3 et S4.
