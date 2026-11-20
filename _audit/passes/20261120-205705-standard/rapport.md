# Rapport d’audit

Projet : `yogalalitamati-maquette` · 20/11/2026 22:19:12 · 22 min · 7 page(s) · audit standard

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261120-205705-standard` · version ?v=1
- Échecs : **3**
- À regarder : **57**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (77), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (15), souris immobile (5), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en vague |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-203305-rapide-cible | rapide | /,/activites,/approches,/methode-tre,/a-propos,/contact,/404 | toutes | 141 | 70 | 1 | échecs |
| **20261120-205705-standard** (celle-ci) | standard | toutes | toutes | 3 | 57 | 1 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte:nth-of-type(2) > p.ouverture-actions:nth-of-type(2) > a.bouton « Retour à l’accueil » _(1366×768 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte:nth-of-type(2) > p.ouverture-actions:nth-of-type(2) > span.introuvable-liens « Activités · Approches · Contact » _(1366×768 sansJs)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/approches` — div.approche-visuel:nth-of-type(1) > figure.media.approche-grande > picture > img « Des balles d'automassage lilas, turquoise et verte » — balles-soleil (4/5, faible, 28 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (11)

- **section sans visuel** — `/` — section#dates « CET HIVER Les prochains rendez-vous Ateliers, Paus » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/` — section#temoignages « ILS EN PARLENT Ce qu’en disent les participants Té » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/a-propos` — section#parcours « SON PARCOURS Vingt ans à se former Trente-deux for » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/activites` — section#agenda « L’agenda Prochaine date : Pause hivernale, dans 56 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **section sans visuel** — `/activites` — section#agenda « L’agenda Pause hivernale Samedi 16 janvier 2027 At » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/approches` — section#aussi « Et aussi Pleine conscience Facilitatrice en pleine » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/contact` — section#lieux « LES LIEUX Où se retrouver Fondation Poorna-Jnana Y » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 768×1024 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/methode-tre` — section#debut « 7 MÉTHODE TRE® 7 exercices, puis le corps relâche  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **section sans visuel** — `/methode-tre` — section#dates « PROCHAINES DATES TRE® Ateliers et sessions 24 JANV » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/methode-tre` — section#temoignages « TÉMOIGNAGES Ce qu’ils en retiennent « Un moyen pré » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/methode-tre` — section#debut « 7 7 exercices, puis le corps relâche Voir les atel » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 844×390 normal, 320×568 sansJs)_

### texte de contenu sous 13 px (ordinateur) (37)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « YOGA SOMATIQUE · MÉTHODE TRE® · AUTOMASSAGE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-visuel:nth-of-type(2) > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#approches > div.conteneur.section-tete > p.surtitre:nth-of-type(1) « LES APPROCHES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.approche-carte:nth-of-type(2) > a.approche-lien > figure.media.approche-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.approche-carte:nth-of-type(5) > a.approche-lien > figure.media.approche-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#tre > div.conteneur.scene-tre-grille > div.scene-tre-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « MÉTHODE TRE® » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#formats > div.conteneur.section-tete:nth-of-type(1) > div > p.surtitre « COMMENT PRATIQUER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.conteneur.formats-grille > li.format-carte.format-carte--prive:nth-of-type(1) > figure.media.format-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.conteneur.formats-grille > li.format-carte.format-carte--entreprises:nth-of-type(5) > figure.media.format-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#lieux > div.conteneur.lieux-grille > div > p.surtitre:nth-of-type(1) « OÙ PRATIQUER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#isabelle > div.conteneur.isabelle-grille > figure.media.isabelle-media > figcaption.media-legende « Photo : djubox.ca » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#isabelle > div.conteneur.isabelle-grille > div > p.surtitre:nth-of-type(1) « VOTRE ENSEIGNANTE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#temoignages > div.conteneur.section-tete:nth-of-type(1) > p.surtitre:nth-of-type(1) « ILS EN PARLENT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > div.introuvable-image:nth-of-type(1) > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — div.conteneur.ouverture-identite-grille > div.ouverture-identite-portrait:nth-of-type(2) > figure.media.portrait-media > figcaption.media-legende « Photo : djubox.ca » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#roles > div.conteneur.deux-colonnes:nth-of-type(1) > div > p.surtitre « CE QU’ELLE FAIT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#parcours > div.conteneur.section-tete:nth-of-type(1) > p.surtitre:nth-of-type(1) « SON PARCOURS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#lieux > div.conteneur.section-tete > p.surtitre « OÙ LA TROUVER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#livres > div.conteneur.livres-grille > div:nth-of-type(1) > p.surtitre « SES RÉALISATIONS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — section#debut > div.conteneur.ouverture-bandeau-tete:nth-of-type(1) > p.surtitre « HIVER ET PRINTEMPS 2027 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — section#debut > div.ouverture-bandeau-image:nth-of-type(2) > figure.media.bandeau-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — section#agenda > div.conteneur > div.agd__outils:nth-of-type(2) > p.agd__compte « 12 dates à venir » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — section#agenda > div.conteneur > div.agd__cadre:nth-of-type(4) > h3.agd__groupe-titre.agd__mois-premier « JANVIER 2027 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — div.conteneur > div.agd__cadre:nth-of-type(4) > div.agd__groupe:nth-of-type(1) > h3.agd__groupe-titre « FÉVRIER 2027 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — section#session > div.conteneur.deux-colonnes > div:nth-of-type(1) > p.surtitre:nth-of-type(1) « COMMENT ÇA SE PASSE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- … et 12 autres (rapport.json)

### typographie française (2)

- **typographie française** — `/activites` — div.ouverture-bandeau-pied > p.ouverture-actions:nth-of-type(2) > span.info-cle > span:nth-of-type(2) « Prochaine date : Pause hivernale, dans 56 jours » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/activites` — section#agenda > div.conteneur > div.agd__tete:nth-of-type(1) > p.agd__prochaine « Prochaine date : Pause hivernale, dans 56 jours » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/a-propos` — écran différent à la même position après rechargement (5.4 %), voir comparaisons/rechargement-a-propos-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/contact` — i — vapeur : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 55 min de travail pour 115 min de budget, 16 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /a-propos, /activites, /approches, /contact, /methode-tre.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2769 ms depuis le premier octet
- Ouverture /a-propos (1366×768) : 2607 ms depuis le premier octet
- Ouverture /activites (1366×768) : 2640 ms depuis le premier octet
- Ouverture /approches (1366×768) : 2645 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2586 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /methode-tre (1366×768) : 2902 ms depuis le premier octet
- Ouverture / (390×844) : 2723 ms depuis le premier octet
- Ouverture /a-propos (390×844) : 2596 ms depuis le premier octet
- film de l'ouverture /a-propos 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /activites (390×844) : 2617 ms depuis le premier octet
- Ouverture /approches (390×844) : 2646 ms depuis le premier octet
- Ouverture /contact (390×844) : 2617 ms depuis le premier octet
- Ouverture /methode-tre (390×844) : 2910 ms depuis le premier octet
- bords de l’écran /a-propos 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /approches 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 681 images d’intro, 16 de voile et 243 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /a-propos : aucune section épinglée ou plein écran.
- Tient dans l'écran /activites : aucune section épinglée ou plein écran.
- Tient dans l'écran /approches : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /methode-tre : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 429, tâche la plus longue 0 ms
- Fluidité /a-propos 1366×768 (molette) : 0 % d'images lentes sur 377, tâche la plus longue 0 ms
- Fluidité /activites 1366×768 (molette) : 0 % d'images lentes sur 390, tâche la plus longue 0 ms
- Fluidité /approches 1366×768 (molette) : 0 % d'images lentes sur 335, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 154, tâche la plus longue 0 ms
- Fluidité /methode-tre 1366×768 (molette) : 0 % d'images lentes sur 286, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1405, tâche la plus longue 0 ms
- Fluidité /a-propos 390×844 (doigt) : 0 % d'images lentes sur 1362, tâche la plus longue 0 ms
- Fluidité /activites 390×844 (doigt) : 0 % d'images lentes sur 1400, tâche la plus longue 0 ms
- Fluidité /approches 390×844 (doigt) : 0 % d'images lentes sur 1356, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /methode-tre 390×844 (doigt) : 0 % d'images lentes sur 1403, tâche la plus longue 0 ms
- Vitesse / : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /a-propos : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /activites : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /approches : 0.26 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.20 s de calcul au chargement (téléphone ralenti).
- Vitesse /methode-tre : 0.32 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/approches --seulement=fichiers,mesures
```
