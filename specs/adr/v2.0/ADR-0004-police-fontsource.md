# ADR-0004 : Red Hat Display par Fontsource

## Statut
Accepté (2026-11-05) — même situation et même choix que le Social proof et REST Countries (choix de Koya : Fontsource plutôt que le lien Google Fonts).

## Contexte
Le starter ne fournit **aucun fichier de police** ; le guide de style renvoie à Google Fonts (Red Hat Display 500, 700, 900). La maquette a été calée avec Red Hat Display chargée depuis Google Fonts ; les tests visuels comparent des pixels (S21 à S23) : la police doit être là au moment des captures.

## Options
| Option | Pour | Contre |
|---|---|---|
| **`@fontsource/red-hat-display` (choisie)** | Les fichiers de Google Fonts, en woff2 découpés par alphabet, servis avec le site ; aucun appel à un tiers ; tests indépendants du réseau | Une dépendance de plus |
| Lien Google Fonts | Ce que suggère le guide de style ; aucune dépendance | Dépend du réseau et de Google (vie privée, captures des tests) |
| Fichier copié d'un autre starter FM | Le fichier exact du calage | Fichier étranger au challenge, à tenir à jour à la main ; ADR-0002 parle des fichiers du starter |

## Décision
- `@fontsource/red-hat-display` en dépendance d'exécution ; seules les graisses 500, 700 et 900 sont importées dans `src/style.css`.
- `font-display: swap` (valeur du paquet).

## Conséquences
- Aucun appel à un serveur de polices.
- Si le rendu visuel s'écarte du calage au-delà des seuils, l'écart est repris en Phase 7 (seuils de la spec inchangés).
- Fitness function (test « ADR-0004 » de `tests/statique.spec.js`) : rien n'est chargé hors du domaine ; les graisses 500, 700 et 900 se chargent.
