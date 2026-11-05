# Spec — Order summary component (refonte v2.0.0)

> SDL-FM 1.5.0 Phase 4 (remise à niveau, étape B, lot 2). Sources : analyse validée (G2) `specs/visuel/front-ui-order-analyse.*`, maquette validée (G3) `specs/visuel/penpot/maquette.md`, décisions dans `specs/brainstorming/2026-11-05-front-ui-order.md`.
> Cette spec dit **quoi** et **pourquoi**, jamais **comment**.

## 1. Objectif

Le récapitulatif d'une commande d'abonnement musical : une illustration, un titre, une phrase, le forfait choisi (Annual Plan, $59.99/year) avec un bouton pour le changer, puis deux actions : payer ou annuler. Les trois boutons n'ont pas de destination dans le challenge (Q-B1).

## 2. Composants et contenu

| Composant | Contenu | Élément HTML attendu |
|---|---|---|
| Carte | tout ce qui suit, sauf le pied de page | `article` dans `main` |
| Illustration | `illustration-hero.svg` (450 × 220), décorative (Q-B2) | `img alt=""` |
| Titre | « Order Summary » | `h1` |
| Phrase | « You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like! » | `p` |
| Forfait | icône `icon-music.svg` décorative ; « Annual Plan » ; « $59.99/year » ; « Change » | groupe nommé par « Annual Plan » ; `button type="button"` pour Change (Q-B1) |
| Actions | « Proceed to Payment », « Cancel Order » | `button type="button"` (Q-B1) |
| Pied de page (Q-B4) | « Challenge by Frontend Mentor. Coded by Koya Esdras. » ; liens vers `https://www.frontendmentor.io?ref=challenge` et `https://www.frontendmentor.io/profile/ounokoya` | `footer` |

La page a pour titre « Frontend Mentor | Order summary card » et la langue `en`.

## 3. Tokens

Couleurs, typographie et mesures : `specs/reference/tokens.md` (FM) et la bibliothèque Penpot (`specs/visuel/penpot/maquette.md`). Valeurs dérivées retenues (G2) :

| Token | Valeur | Usage |
|---|---|---|
| Gray texte AA | `hsl(224, 23%, 46%)` | phrase, prix, Cancel Order (Q-A1) |
| Survol AA | `hsl(245, 75%, 62%)` | bouton et Change survolés (Q-A2) |
| Lien de l'attribution | `hsl(228, 45%, 44%)` | couleur du starter |

Fond de page Blue 100 avec le motif en vague en haut (`pattern-background-desktop.svg`, `pattern-background-mobile.svg` sous 480 px), à pleine largeur.

## 4. Responsive

| Largeur | Disposition |
|---|---|
| < 480 px | Carte à 24 px des bords, marge interne 24, textes de la maquette mobile (titre 22 px, phrase 15 px). |
| ≥ 480 px (Q-B3, G3-1) | Carte de 450 px, marge interne 48, textes de la maquette desktop (titre 28 px, phrase 16 px). |

La carte est centrée dans la fenêtre. Positions de la maquette, à 1 px près :

| Élément | 1440 × 900 | 375 × 709 | 768 × 1024 |
|---|---|---|---|
| Carte | (495, 102) 450 × 697 | (24, 71) 327 × 567 | (159, 164) 450 × 697 |
| Illustration | 450 × 220 en haut de la carte | 327 × 160 | — |
| Forfait | (543, 519) 354 × 98 | (48, 406) 279 × 82 | — |
| Proceed to Payment | (543, 651) 354 × 48 | (48, 513) 279 × 48 | — |

La phrase tient sur 3 lignes, comme sur les images FM. Le pied de page ne déplace pas la carte : centré en bas de la fenêtre. La page reste utilisable de 320 px aux grands écrans, sans défilement horizontal.

## 5. États et interactions

| Élément | Normal | Survol | Focus clavier |
|---|---|---|---|
| Change | Blue 700, souligné | Survol AA, sans soulignement (Q-A2) | contour 2 px Blue 950, décalé de 2 px |
| Proceed to Payment | fond Blue 700, ombre Blue 700 | fond Survol AA (Q-A2) | contour 2 px Blue 950, décalé de 2 px |
| Cancel Order | Gray texte AA | Blue 950 | contour 2 px Blue 950, décalé de 2 px |
| Liens du pied de page | soulignés, `#3E52A3` | soulignement retiré | contour 2 px Blue 950, décalé de 2 px |

| Événement | Effet |
|---|---|
| Clic ou Entrée sur Change, Proceed to Payment, Cancel Order | rien : pas de navigation, pas d'envoi (Q-B1) |

Pas d'animation exigée ; toute transition est supprimée si `prefers-reduced-motion: reduce`.

## 6. Accessibilité

### Contrats

| # | Contrat |
|---|---|
| A1 | Un seul `h1` : « Order Summary ». |
| A2 | Illustration et icône décoratives : ignorées par les lecteurs d'écran (Q-B2). |
| A3 | Le forfait est un groupe nommé par « Annual Plan » : « Change » s'y rapporte. |
| A4 | Contraste AA (4,5:1) pour tous les textes, y compris les survols (Q-A1, Q-A2). |
| A5 | Ordre clavier : Change, Proceed to Payment, Cancel Order, puis les deux liens ; focus visible (2 px au moins). |
| A6 | Le fond de la page est déclaré : le même en thème clair ou sombre de l'appareil. |
| A7 | Pas de transition si `prefers-reduced-motion: reduce`. |

### Noms accessibles utilisés par les tests

| Élément | Rôle | Nom |
|---|---|---|
| Carte | article | — (elle a la taille et la place de la carte : S1 à S3) |
| Titre | heading (niveau 1) | « Order Summary » |
| Forfait | group | « Annual Plan » |
| Boutons | button | « Change », « Proceed to Payment », « Cancel Order » |
| Pied de page | contentinfo | liens « Frontend Mentor » et « Koya Esdras » |

## 7. Critères d'acceptation

```
Mise en page (positions de la maquette, à 1 px près)
S1  Given 1440 × 900   Then carte (495, 102) 450 × 697 ; forfait (543, 519) 354 × 98 ; Proceed (543, 651) 354 × 48
S2  Given 375 × 709    Then carte (24, 71) 327 × 567 ; forfait (48, 406) 279 × 82 ; Proceed (48, 513) 279 × 48
S3  Given 768 × 1024   Then carte (159, 164) 450 × 697 ; given 479 px  Then carte à 24 px des bords
S4  Given 320, 479, 480, 768, 1440 px  Then pas de défilement horizontal
S5  Given 1440 × 900   Then le pied de page est sous la carte, centré, dans la fenêtre

Contenu
S6  Given la page  Then h1 « Order Summary », la phrase, le forfait (Annual Plan, $59.99/year, Change), Proceed, Cancel ;
                   3 boutons type="button" ; aucune image exposée aux lecteurs d'écran (illustration et icône chargées)
S7  Given 1440 × 900 et 375 × 709  Then la phrase tient sur 3 lignes
S8  Given la page  Then phrase, prix et Cancel Order en hsl(224, 23%, 46%) ; Change en Blue 700, souligné (Q-A1)
S9  Given l'appareil en thème sombre  Then le fond de la page reste Blue 100 (A6)

Interactions
S10 Given Proceed to Payment  When je le survole  Then son fond devient hsl(245, 75%, 62%) ; When je le quitte  Then Blue 700
S11 Given Change  When je le survole  Then hsl(245, 75%, 62%) et plus de soulignement
S12 Given Cancel Order  When je le survole  Then Blue 950
S13 Given les 3 boutons  When je clique ou appuie sur Entrée  Then l'adresse ne change pas et rien n'est envoyé
S14 Given la page  When j'appuie sur Tab cinq fois  Then Change, Proceed to Payment, Cancel Order, « Frontend Mentor », « Koya Esdras »,
                   chacun avec un contour de 2 px au moins
S15 Given un lien du pied de page  When je le survole  Then son soulignement disparaît
S16 Given prefers-reduced-motion: reduce  When je survole les boutons  Then aucune transition n'est jouée

Accessibilité et règles FM
S17 Given 375 et 1440 px  Then axe-core : aucune violation sérieuse ou critique
S18 Given le HTML servi  Then validateur W3C Nu : aucune erreur
S19 Given le HTML servi  Then html-validate au réglage de FM : aucune erreur
S20 Given le JavaScript du dépôt  Then eslint au réglage de FM : aucune erreur
    (et les tests de garde des règles FM déjà vues : longueurs en rem, aria-label, CSS logique)

Visuel (seuils calibrés en Phase 3, G3-2)
S21 1440 × 900 vs desktop.jpg ≤ 5,0 %
S22 1440 × 900, Proceed to Payment survolé vs etats.jpg ≤ 5,0 %
S23 375 × 709 vs mobile.jpg ≤ 6,3 %
```
