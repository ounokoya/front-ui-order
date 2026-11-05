# 2026-11-05 — Rapport d'exécution : Order summary component (v2.0.0)

> SDL-FM 1.5.0, Phases 7 et 8 (remise à niveau, étape B, lot 2). Tests sur le build de production (`vite build` + `vite preview`) ; parcours réel dans le navigateur intégré (configuration `os-preview`, `http://localhost:4202/front-ui-order/`), page affichée.

## 1. Tests automatiques (Phase 7)

`npm test` : **35 réussis sur 35**.

| Groupe | Scénarios | Résultat |
|---|---|---|
| Mise en page | S1 à S5 (1440, 375, 768 ; 479 px à 24 px des bords ; 320 à 1440 sans défilement horizontal ; pied de page) | ✅ 9 / 9 |
| Contenu | S6 à S9 (titre, phrase, forfait, 3 boutons, images décoratives chargées ; phrase sur 3 lignes à 1440 et 375 ; gris AA ; fond en thème sombre) | ✅ 5 / 5 |
| Interactions | S10 à S16 (survols AA, clics sans effet, ordre au clavier, liens, mouvements réduits) ; E1 (Phase 8) | ✅ 8 / 8 |
| Accessibilité | S17 : axe-core à 375 et 1440 px | ✅ 2 / 2 |
| HTML, JavaScript, règles FM | S18 (W3C Nu), S19 (html-validate au réglage de FM), S20 (eslint), longueurs en rem, aria-label, CSS logique ; fitness ADR-0003 et ADR-0004 | ✅ 8 / 8 |
| Visuel | S21 à S23 | ✅ 3 / 3 |

### Comparaison visuelle

| Écran | Image FM | Pixels différents | Seuil | Penpot (Phase 3) |
|---|---|---|---|---|
| Desktop 1440 × 900 | `desktop.jpg` | 0,93 % | 5,0 % | 1,71 % |
| États 1440 × 900 (Proceed survolé) | `etats.jpg` | 0,94 % | 5,0 % | 1,69 % |
| Mobile 375 × 709 | `mobile.jpg` | 4,20 % | 6,3 % | 5,31 % |

Contrôle rouge fait avant le code (Phase 4) : 27 échecs pour la bonne raison sur le starter et 5 tests de garde ; fitness functions (Phase 5) : 2 échecs attendus.

## 2. Parcours réel (Phase 8)

| Étape | 320 px | 768 px | 1440 px |
|---|---|---|---|
| Disposition | ✅ carte (24, 55) 272 × 590, phrase sur 5 lignes, pas de défilement horizontal | ✅ carte (159, 164) 450 × 697, motif desktop en haut, pied de page en bas | ✅ (tests S1, S5) |
| Police, images | ✅ Red Hat Display 500, 700 et 900 chargées ; illustration et icône chargées | — | ✅ |
| Clavier | — | — | ⚠️ E1 ; Entrée sur « Proceed to Payment » : rien ne se passe (Q-B1) ✅ |

## 3. Écarts relevés et suites

| # | Écart | Suite |
|---|---|---|
| E1 | Au clavier, le contour de focus des 3 boutons arrive en fondu de 200 ms depuis la couleur du texte (blanc pour « Proceed to Payment ») : `transition-colors` porte aussi sur `outline-color` | Corrigé : transitions limitées à `color` et `background-color` ; test E1 (couleur du contour dès l'arrivée du focus), rouge avant le correctif |

| Constat | Suite |
|---|---|
| À 320 px, « Annual Plan » tient sur 2 lignes dans l'encadré du forfait (190 px de contenu pour l'icône, le texte et « Change ») | Sans suite : lisible, rien ne déborde ; aucune image FM à cette largeur, aucune règle de FM concernée |

Constats de la construction (Phase 6) : l'encadré du forfait mesurait 104 px en desktop (deux lignes de 27 px plus hautes que l'icône) ; sa hauteur est fixée à 98 px (82 px en mobile), le texte centré.

## 4. Verdict

Conforme à la spec et à la maquette validée (G3). Prêt pour la Phase 9 (README).
