# Rapport d’audit

Projet : `yogalalitamati-maquette` · 20/11/2026 22:28:51 · 7 min · 7 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261120-212151-complet-partiel` · version ?v=1
- Échecs : **5**
- À regarder : **48**
- Non lancé : **0**
- Contrôles passés : mesures (273), balayage (6)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-203305-rapide-cible | rapide | /,/activites,/approches,/methode-tre,/a-propos,/contact,/404 | toutes | 141 | 70 | 1 | échecs |
| 20261120-205705-standard | standard | toutes | toutes | 3 | 57 | 1 | échecs |
| **20261120-212151-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 5 | 48 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(3) « Prochain rendez-vous : Pause hivernale, sam 16 jan » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/methode-tre` — div.conteneur.ouverture-chiffre-grille > div.ouverture-chiffre-texte:nth-of-type(1) > p.ouverture-actions:nth-of-type(3) > span.info-cle « Prochain rendez-vous : Introduction à la méthode T » _(375×667 normal, 375×667 sansJs, 375×667 sansWebgl)_

### texte coupé (1)

- **texte coupé** — `/methode-tre` — section#debut > div.conteneur.ouverture-chiffre-grille > p.grand-chiffre > span « 7 » — coupé par section#debut « 7 MÉTHODE TRE® 7 exercices, puis le corps relâche  » _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/methode-tre` — nav > ul > li:nth-of-type(1) > a « Activités » — avec section#debut > div.conteneur.ouverture-chiffre-grille > p.grand-chiffre > span « 7 » _(1024×768 sansJs)_
- **textes qui se chevauchent** — `/methode-tre` — nav > ul > li:nth-of-type(2) > a « Approches » — avec section#debut > div.conteneur.ouverture-chiffre-grille > p.grand-chiffre > span « 7 » _(1024×768 sansJs)_

## À regarder

### section sans visuel (11)

- **section sans visuel** — `/` — section#dates « CET HIVER Les prochains rendez-vous Ateliers, Paus » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#temoignages « ILS EN PARLENT Ce qu’en disent les participants Té » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/a-propos` — section#parcours « SON PARCOURS Vingt ans à se former Trente-deux for » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/activites` — section#agenda « L’agenda Prochaine date : Pause hivernale, dans 56 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +20)_
- **section sans visuel** — `/activites` — section#agenda « L’agenda Pause hivernale Samedi 16 janvier 2027 At » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +7)_
- **section sans visuel** — `/approches` — section#aussi « Et aussi Pleine conscience Facilitatrice en pleine » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#lieux « LES LIEUX Où se retrouver Fondation Poorna-Jnana Y » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/methode-tre` — section#debut « 7 7 exercices, puis le corps relâche Voir les atel » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 844×390 normal, 320×568 sansJs, 320×568 sansWebgl, 844×390 sansJs, 844×390 sansWebgl)_
- **section sans visuel** — `/methode-tre` — section#dates « PROCHAINES DATES TRE® Ateliers et sessions 24 JANV » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/methode-tre` — section#temoignages « TÉMOIGNAGES Ce qu’ils en retiennent « Un moyen pré » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/methode-tre` — section#debut « 7 MÉTHODE TRE® 7 exercices, puis le corps relâche  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 390×844 normal, 768×1024 normal, 1024×768 normal, 1000×560 normal, 375×667 sansJs, +9)_

### texte de contenu sous 13 px (ordinateur) (37)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « YOGA SOMATIQUE · MÉTHODE TRE® · AUTOMASSAGE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-visuel:nth-of-type(2) > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#approches > div.conteneur.section-tete > p.surtitre:nth-of-type(1) « LES APPROCHES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.approche-carte:nth-of-type(2) > a.approche-lien > figure.media.approche-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.approche-carte:nth-of-type(5) > a.approche-lien > figure.media.approche-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#tre > div.conteneur.scene-tre-grille > div.scene-tre-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « MÉTHODE TRE® » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#formats > div.conteneur.section-tete:nth-of-type(1) > div > p.surtitre « COMMENT PRATIQUER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.conteneur.formats-grille > li.format-carte.format-carte--prive:nth-of-type(1) > figure.media.format-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.conteneur.formats-grille > li.format-carte.format-carte--entreprises:nth-of-type(5) > figure.media.format-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#lieux > div.conteneur.lieux-grille > div > p.surtitre:nth-of-type(1) « OÙ PRATIQUER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#isabelle > div.conteneur.isabelle-grille > figure.media.isabelle-media > figcaption.media-legende « Photo : djubox.ca » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#isabelle > div.conteneur.isabelle-grille > div > p.surtitre:nth-of-type(1) « VOTRE ENSEIGNANTE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#temoignages > div.conteneur.section-tete:nth-of-type(1) > p.surtitre:nth-of-type(1) « ILS EN PARLENT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > div.introuvable-image:nth-of-type(1) > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — div.conteneur.ouverture-identite-grille > div.ouverture-identite-portrait:nth-of-type(2) > figure.media.portrait-media > figcaption.media-legende « Photo : djubox.ca » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#roles > div.conteneur.deux-colonnes:nth-of-type(1) > div > p.surtitre « CE QU’ELLE FAIT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#parcours > div.conteneur.section-tete:nth-of-type(1) > p.surtitre:nth-of-type(1) « SON PARCOURS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#lieux > div.conteneur.section-tete > p.surtitre « OÙ LA TROUVER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#livres > div.conteneur.livres-grille > div:nth-of-type(1) > p.surtitre « SES RÉALISATIONS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — section#debut > div.conteneur.ouverture-bandeau-tete:nth-of-type(1) > p.surtitre « HIVER ET PRINTEMPS 2027 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — section#debut > div.ouverture-bandeau-image:nth-of-type(2) > figure.media.bandeau-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — section#agenda > div.conteneur > div.agd__outils:nth-of-type(2) > p.agd__compte « 12 dates à venir » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — section#agenda > div.conteneur > div.agd__cadre:nth-of-type(4) > h3.agd__groupe-titre.agd__mois-premier « JANVIER 2027 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — div.conteneur > div.agd__cadre:nth-of-type(4) > div.agd__groupe:nth-of-type(1) > h3.agd__groupe-titre « FÉVRIER 2027 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — section#session > div.conteneur.deux-colonnes > div:nth-of-type(1) > p.surtitre:nth-of-type(1) « COMMENT ÇA SE PASSE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- … et 12 autres (rapport.json)

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /a-propos : aucune section épinglée ou plein écran.
- Tient dans l'écran /activites : aucune section épinglée ou plein écran.
- Tient dans l'écran /approches : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /methode-tre : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/methode-tre --seulement=fichiers,mesures
```
