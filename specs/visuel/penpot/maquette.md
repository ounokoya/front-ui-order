# Maquette Penpot — Order summary component (refonte v2.0.0)

> SDL-FM 1.5.0 Phase 3 (remise à niveau, étape B, lot 2). Fichier Penpot : « FM Newbie » (créé par Koya ; nom vérifié avant chaque écriture), page « Order summary ». **Validée (G3, 2026-11-05)** avec les propositions : carte de 450 px en tablette (Q-B3), seuils 5 % (desktop, états) et 6,3 % (mobile), illustration à pleine largeur en mobile.
> Décisions G2 appliquées : gris AA (Q-A1), survols AA (Q-A2), trois boutons sans destination (Q-B1), illustration et icône décoratives (Q-B2), tablette (Q-B3), attribution (Q-B4).

## Rendu des exports

L'exportateur PNG de Penpot n'a pas les polices (M16). Chaque écran est exporté en **SVG**, ses `<style>` sont retirés, puis il est rendu dans Chromium avec **Red Hat Display** chargée depuis Google Fonts (500, 700, 900). Les textes centrés ont leurs retours à la ligne écrits en dur. Red Hat Display est placée 1 à 2 px plus haut par Penpot que par le modèle CSS : correction mesurée par taille et graisse (`storage.FIX`).

L'illustration (`illustration-hero.svg`) déborde de sa viewBox une fois importée (groupe de 458 × 302) : elle est posée dans un cadre qui la coupe à 450 × 220 (327 × 160 en mobile, version mise à l'échelle par un groupe `scale()`).

## Bibliothèque

### Couleurs (groupe « Order summary »)

| Groupe | Nom | Valeur |
|---|---|---|
| FM | Blue 100 (fond), Blue 700 (bouton, Change), Blue 50 (encadré), Gray 600, Blue 950 (titres, survol de Cancel), White | `#E0E8FF`, `#3829E0`, `#F5F7FF`, `#7280A7`, `#1F2F56`, `#FFFFFF` |
| Dérivées G2 | Gray texte AA (Q-A1) : paragraphe, prix, Cancel Order | `#5A6990` = `hsl(224, 23%, 46%)`, 5,44:1 sur blanc, 5,09:1 sur Blue 50 |
| Dérivées G2 | Survol AA (Q-A2) : bouton et Change survolés | `#6255E7` = `hsl(245, 75%, 62%)`, blanc dessus 5,29:1, 4,94:1 sur Blue 50 |
| Attribution | Lien (starter), 5,83:1 sur Blue 100 ; texte Blue 950 | `#3E52A3` |

Motif de fond : `pattern-background-desktop.svg` (1440 × 437) et `pattern-background-mobile.svg` (375 × 194), `#D6E1FF`, en haut de la page.

### Typographie (Red Hat Display)

| Usage | Desktop | Mobile |
|---|---|---|
| « Order Summary » (h1) | 900, 28 px | 900, 22 px |
| Paragraphe | 500, 16 px, interligne 26 px | 500, 15 px, interligne 25 px |
| « Annual Plan » · prix | 900 · 500, 16 px | 15 px |
| « Change » | 700, 14 px, souligné | 13 px |
| « Proceed to Payment » · « Cancel Order » | 900, 15 px | 900, 15 px |
| Attribution | 500, 11 px | idem |

### Mesures (px)

| Élément | Desktop 1440 × 900 | Mobile 375 × 709 |
|---|---|---|
| Carte | 450 × 697 en (495, 102), rayon 20, ombre 0 25 50 Blue 950 20 % | 327 × 567 en (24, 71) |
| Illustration | 450 × 220 en haut | 327 × 160 |
| Marges internes | 48 | 24 |
| Titre · paragraphe (capitales) | 273 · 325 sous le haut de la carte | 198 · 243 |
| Encadré du forfait | 354 × 98 à y 417, rayon 10 ; icône 48 à (24, 25) ; textes à x 92 ; Change à 25 du bord droit | 279 × 82 à y 335 ; icône à (16, 17) ; textes à x 84 |
| Bouton | 354 × 48 à y 549, rayon 10, ombre 0 14 20 Blue 700 35 % | 279 × 48 à y 442 |
| Cancel Order (capitales) | 633 | 519 |

Tablette 768 × 1024 (proposition Q-B3) : la carte desktop centrée en (159, 163), motif desktop.

## Composants (`composants.png`)

| Composant | États |
|---|---|
| Change | Normal (Blue 700, souligné) · Survol (`#6255E7`, sans soulignement, Q-A2) · Focus clavier (contour 2 px Blue 950 décalé de 2 px) |
| Proceed to Payment | Normal (Blue 700) · Survol (`#6255E7`, Q-A2) · Focus clavier |
| Cancel Order | Normal (gris AA) · Survol (Blue 950) · Focus clavier |
| Attribution | Normal · Survol (soulignement retiré) · Focus clavier |

## Écrans et seuils visuels (calibrage 1.1.0)

Écart = part des pixels dont un canal diffère de plus de 40 sur 255. Seuil de l'écran pour la Phase 7 = **max(5 %, écart + 1 point)**.

| Écran Penpot | Image FM | Écart | Seuil Phase 7 |
|---|---|---|---|
| Desktop · Order summary | `desktop.jpg` | 1,71 % | 5,0 % |
| Desktop · états (survols) | `etats.jpg` | 1,69 % | 5,0 % |
| Mobile · Order summary | `mobile.jpg` | 5,31 % | 6,3 % |

Notes :
- Écarts voulus avec l'image : gris AA (Q-A1) et couleurs de survol AA (Q-A2).
- Mobile : dans l'image FM, l'illustration est décalée de 6 px vers la gauche dans la carte, à la même échelle (meilleur calage) ; la maquette, comme le site, la pose à pleine largeur. C'est l'essentiel de l'écart mobile.
- Écran sans image FM : **Tablette · Order summary (proposition Q-B3)**.

## Prototype

| Parcours | Enchaînement |
|---|---|
| **Desktop · survols (Change, bouton, Cancel)** | pointeur sur le bouton → écran des états ; pointeur qui sort → retour (fondu 200 ms) |

Les trois boutons n'ont pas de destination (Q-B1) ; leurs survols et focus sont montrés par les composants.

## Fichiers

- `desktop.png`, `desktop-etats.png`, `mobile.png`, `tablette.png` : rendus des 4 écrans ; `apercu-maquette.png`.
- `comparaison-*.png` : image FM | maquette | écarts en rouge (moitié de la taille).
- `composants.png` : les composants et leurs états (échelle 2).
