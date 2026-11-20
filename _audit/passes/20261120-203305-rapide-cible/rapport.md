# Rapport d’audit

Projet : `yogalalitamati-maquette` · 20/11/2026 21:53:30 · 20 min · 7 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/activites,/approches,/methode-tre,/a-propos,/contact,/404

## Résumé

- Statut : **141 échec(s)**
- Passe : `20261120-203305-rapide-cible` · version ?v=1
- Échecs : **141**
- À regarder : **70**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (42), films d’ouverture (12), films de transition (12), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (15), souris immobile (5), vitesse (6), captures (1)

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

## Échecs

### image de partage (6)

- **image de partage** — `a-propos.html` — fichier introuvable : /assets/partage/a-propos-fr.jpg
- **image de partage** — `activites.html` — fichier introuvable : /assets/partage/activites-fr.jpg
- **image de partage** — `approches.html` — fichier introuvable : /assets/partage/approches-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `methode-tre.html` — fichier introuvable : /assets/partage/methode-tre-fr.jpg

### textes qui se chevauchent (34)

- **textes qui se chevauchent** — `/` — div.conteneur.lieux-grille > figure.carte-lieux > svg.carte-svg > text.carte-etiquette.carte-etiquette--douce:nth-of-type(2) — avec div.conteneur.lieux-grille > figure.carte-lieux > svg.carte-svg > text.carte-etiquette:nth-of-type(5) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — dl.isabelle-chiffres > div:nth-of-type(2) > dt > span.gros-chiffre « 32 » — avec div > dl.isabelle-chiffres > div:nth-of-type(2) > dd « formations suivies depuis 2005 » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — ul.conteneur.approches-grille > li.approche-carte:nth-of-type(5) > a.approche-lien > span.approche-accroche:nth-of-type(3) « Des séances individuelles, construites selon vos b » — avec section#approches > p.conteneur.lien-suite > a.lien-fleche « Les approches en détail » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/activites` — li#date-pause-hiver-potton > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > strong « 46,00 $ » — avec li#date-pause-hiver-potton > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > span « (40 $ avant taxes) » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/activites` — li#date-intro-tre-hiver > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > strong « 57,50 $ » — avec li#date-intro-tre-hiver > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > span « (50 $ avant taxes) » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/activites` — li#date-tre-hiver-ligne > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > strong « 230 $ » — avec li#date-tre-hiver-ligne > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > span « (200 $ avant taxes) » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/activites` — li#date-yoga-doux-hiver > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > strong « 230 $ » — avec li#date-yoga-doux-hiver > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > span « (200 $ avant taxes) » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/activites` — li#date-tre-hiver-presentiel > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > strong « 230 $ » — avec li#date-tre-hiver-presentiel > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > span « (200 $ avant taxes) » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/activites` — li#date-pause-hiver-saint-jean > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > strong « 46,00 $ » — avec li#date-pause-hiver-saint-jean > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > span « (40 $ avant taxes) » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/activites` — li#date-intro-tre-printemps > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > strong « 57,50 $ » — avec li#date-intro-tre-printemps > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > span « (50 $ avant taxes) » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/activites` — li#date-pause-printemps-potton > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > strong « 46,00 $ » — avec li#date-pause-printemps-potton > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > span « (40 $ avant taxes) » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/activites` — li#date-tre-printemps-ligne > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > strong « 184 $ » — avec li#date-tre-printemps-ligne > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > span « (160 $ avant taxes) » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/activites` — li#date-yoga-doux-printemps > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > strong « 184 $ » — avec li#date-yoga-doux-printemps > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > span « (160 $ avant taxes) » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/activites` — li#date-tre-printemps-presentiel > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > strong « 184 $ » — avec li#date-tre-printemps-presentiel > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > span « (160 $ avant taxes) » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/activites` — li#date-pause-printemps-saint-jean > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > strong « 46,00 $ » — avec li#date-pause-printemps-saint-jean > div.agd__corps:nth-of-type(2) > p.agd__prix:nth-of-type(5) > span « (40 $ avant taxes) » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/activites` — li#date-pause-hiver-potton > p.agd__prix:nth-of-type(4) > strong « 46,00 $ » — avec li#date-pause-hiver-potton > p.agd__prix:nth-of-type(4) > span « (40 $ avant taxes) » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/activites` — li#date-intro-tre-hiver > p.agd__prix:nth-of-type(4) > strong « 57,50 $ » — avec li#date-intro-tre-hiver > p.agd__prix:nth-of-type(4) > span « (50 $ avant taxes) » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/activites` — li#date-tre-hiver-ligne > p.agd__prix:nth-of-type(4) > strong « 230 $ » — avec li#date-tre-hiver-ligne > p.agd__prix:nth-of-type(4) > span « (200 $ avant taxes) » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/activites` — li#date-yoga-doux-hiver > p.agd__prix:nth-of-type(4) > strong « 230 $ » — avec li#date-yoga-doux-hiver > p.agd__prix:nth-of-type(4) > span « (200 $ avant taxes) » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/activites` — li#date-tre-hiver-presentiel > p.agd__prix:nth-of-type(4) > strong « 230 $ » — avec li#date-tre-hiver-presentiel > p.agd__prix:nth-of-type(4) > span « (200 $ avant taxes) » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/activites` — li#date-pause-hiver-saint-jean > p.agd__prix:nth-of-type(4) > strong « 46,00 $ » — avec li#date-pause-hiver-saint-jean > p.agd__prix:nth-of-type(4) > span « (40 $ avant taxes) » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/activites` — li#date-intro-tre-printemps > p.agd__prix:nth-of-type(4) > strong « 57,50 $ » — avec li#date-intro-tre-printemps > p.agd__prix:nth-of-type(4) > span « (50 $ avant taxes) » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/activites` — li#date-pause-printemps-potton > p.agd__prix:nth-of-type(4) > strong « 46,00 $ » — avec li#date-pause-printemps-potton > p.agd__prix:nth-of-type(4) > span « (40 $ avant taxes) » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/activites` — li#date-tre-printemps-ligne > p.agd__prix:nth-of-type(4) > strong « 184 $ » — avec li#date-tre-printemps-ligne > p.agd__prix:nth-of-type(4) > span « (160 $ avant taxes) » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/activites` — li#date-yoga-doux-printemps > p.agd__prix:nth-of-type(4) > strong « 184 $ » — avec li#date-yoga-doux-printemps > p.agd__prix:nth-of-type(4) > span « (160 $ avant taxes) » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/activites` — li#date-tre-printemps-presentiel > p.agd__prix:nth-of-type(4) > strong « 184 $ » — avec li#date-tre-printemps-presentiel > p.agd__prix:nth-of-type(4) > span « (160 $ avant taxes) » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/activites` — li#date-pause-printemps-saint-jean > p.agd__prix:nth-of-type(4) > strong « 46,00 $ » — avec li#date-pause-printemps-saint-jean > p.agd__prix:nth-of-type(4) > span « (40 $ avant taxes) » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/approches` — div.conteneur.approche-grille > div.approche-visuel:nth-of-type(1) > figure.media.approche-grande > figcaption.mention-ia « Illustration générée » — avec section#accompagnement > div.conteneur.approche-grille > div.approche-visuel:nth-of-type(1) > span.approche-grand-num « 05 » _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/methode-tre` — ul.conteneur.temoignages-mur > li.temoignage.temoignage--4:nth-of-type(5) > p.temoignage-qui > strong « Daniel P. » — avec section#temoignages > p.conteneur.petit « Expériences personnelles de participants : chacun  » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/methode-tre` — section#temoignages > ul.conteneur.temoignages-mur > li.temoignage.temoignage--4:nth-of-type(5) > p.temoignage-qui « Daniel P., Longueuil » — avec section#temoignages > p.conteneur.petit « Expériences personnelles de participants : chacun  » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/methode-tre` — ul.conteneur.temoignages-mur > li.temoignage.temoignage--2:nth-of-type(3) > blockquote > p « « Surtout il m'apporte le calme et la détente en l » — avec section#temoignages > p.conteneur.petit « Expériences personnelles de participants : chacun  » _(1366×768 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/methode-tre` — ul.conteneur.temoignages-mur > li.temoignage.temoignage--3:nth-of-type(4) > p.temoignage-qui > strong « Louise L. » — avec section#temoignages > p.conteneur.petit « Expériences personnelles de participants : chacun  » _(844×390 normal)_
- **textes qui se chevauchent** — `/methode-tre` — section#temoignages > ul.conteneur.temoignages-mur > li.temoignage.temoignage--3:nth-of-type(4) > p.temoignage-qui « Louise L., Longueuil » — avec section#temoignages > p.conteneur.petit « Expériences personnelles de participants : chacun  » _(844×390 normal)_
- **textes qui se chevauchent** — `/methode-tre` — header > div.entete-rangee > div.entete-actions > a.menu-sansjs:nth-of-type(2) « Menu » — avec section#debut > div.conteneur.ouverture-chiffre-grille > p.grand-chiffre > span « 7 » _(390×844 sansJs)_

### zone tactile sous 44 px (6)

- **zone tactile sous 44 px** — `/` — section#formats > ul.conteneur.formats-grille > li.format-carte.format-carte--prive:nth-of-type(1) > a.lien-fleche « Demander une séance » — 240 × 40 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs)_
- **zone tactile sous 44 px** — `/` — section#formats > ul.conteneur.formats-grille > li.format-carte.format-carte--session:nth-of-type(2) > a.lien-fleche « Voir les sessions » — 240 × 40 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — section#formats > ul.conteneur.formats-grille > li.format-carte.format-carte--ateliers:nth-of-type(3) > a.lien-fleche « Voir les ateliers » — 240 × 40 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — section#formats > ul.conteneur.formats-grille > li.format-carte.format-carte--en-ligne:nth-of-type(4) > a.lien-fleche « Voir les cours en ligne » — 240 × 40 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs)_
- **zone tactile sous 44 px** — `/` — section#formats > ul.conteneur.formats-grille > li.format-carte.format-carte--entreprises:nth-of-type(5) > a.lien-fleche « Proposer un atelier » — 240 × 40 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs)_
- **zone tactile sous 44 px** — `/contact` — dl.coordonnees > div:nth-of-type(2) > dd > a.selectionnable « izabellule@hotmail.com » — 189 × 28 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > div.hero-actions > a.bouton:nth-of-type(1) « Voir l’hiver 2027 » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte:nth-of-type(2) > p.ouverture-actions:nth-of-type(2) > a.bouton « Retour à l’accueil » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/activites` — div.conteneur.ouverture-bandeau-tete:nth-of-type(1) > div.ouverture-bandeau-pied > p.ouverture-actions:nth-of-type(2) > a.bouton « Voir les dates » _(320×568 sansJs)_

### premier écran : information clé hors de l’écran (6)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(3) « Prochain rendez-vous : Pause hivernale, sam 16 jan » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte:nth-of-type(2) > p.ouverture-actions:nth-of-type(2) > span.introuvable-liens « Activités · Approches · Contact » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/activites` — div.conteneur.ouverture-bandeau-tete:nth-of-type(1) > div.ouverture-bandeau-pied > p.ouverture-actions:nth-of-type(2) > span.info-cle « Prochain rendez-vous : Pause hivernale, sam 16 jan » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/approches` — section#debut > div.conteneur.ouverture-plein-texte > p.ouverture-actions:nth-of-type(3) > span.info-cle « TRE® · Yoga doux · Yoga somatique · Automassage ·  » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — div.conteneur.ouverture-scindee-grille > div:nth-of-type(1) > dl.coordonnees > div:nth-of-type(2) « COURRIEL izabellule@hotmail.com » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/methode-tre` — div.conteneur.ouverture-chiffre-grille > div.ouverture-chiffre-texte:nth-of-type(1) > p.ouverture-actions:nth-of-type(3) > span.info-cle « Prochain rendez-vous : Introduction à la méthode T » _(320×568 sansJs)_

### élément recouvert (3)

- **élément recouvert** — `/` — div.conteneur.lieux-grille > figure.carte-lieux > svg.carte-svg > g.carte-lieu.allume:nth-of-type(1) — par div.conteneur.lieux-grille > figure.carte-lieux > svg.carte-svg > rect.carte-fond _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — div.conteneur.lieux-grille > figure.carte-lieux > svg.carte-svg > g.carte-lieu.allume:nth-of-type(2) — par div.conteneur.lieux-grille > figure.carte-lieux > svg.carte-svg > rect.carte-fond _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — div.conteneur.lieux-grille > figure.carte-lieux > svg.carte-svg > g.carte-lieu.allume:nth-of-type(3) — par div.conteneur.lieux-grille > figure.carte-lieux > svg.carte-svg > rect.carte-fond _(1366×768 normal, 390×844 normal)_

### accessibilité (axe) : color-contrast (5)

- **accessibilité (axe) : color-contrast** — `/` — span[data-etat="tension"] ; span[data-etat="tremblement"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/a-propos` — li:nth-child(1) > .roles-num ; li:nth-child(2) > .roles-num ; li:nth-child(3) > .roles-num — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/approches` — #yoga-doux > .approche-grille.conteneur > .approche-visuel > .approche-grand-num[aria-hidden="true"] ; #automassage > .approche-grille.conteneur > .approche-visuel > .approche-grand-num[aria-hidden="true"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/methode-tre` — span[data-etat="tension"] ; span[data-etat="tremblement"] ; .actif — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/methode-tre` — .actif ; span[data-etat="tremblement"] ; span[data-etat="calme"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

### contraste sur image (2)

- **contraste sur image** — `/404` — h1.titre-xl.ouverture-titre > span.masque-ligne:nth-of-type(2) > span.ouv-ligne > em « on revient. » — 1.12:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_
- **contraste sur image** — `/404` — section#debut > div.conteneur.introuvable-texte:nth-of-type(2) > p.chapo:nth-of-type(1) « Cette page n’existe pas, ou plus. Rien de grave :  » — 3.21:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### contraste insuffisant (18)

- **contraste insuffisant** — `/a-propos` — div.conteneur.deux-colonnes:nth-of-type(1) > ol.roles-liste.fx-fini > li:nth-of-type(1) > span.roles-num « 01 » — 3.83:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/a-propos` — div.conteneur.deux-colonnes:nth-of-type(1) > ol.roles-liste.fx-fini > li:nth-of-type(2) > span.roles-num « 02 » — 3.83:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/a-propos` — div.conteneur.deux-colonnes:nth-of-type(1) > ol.roles-liste.fx-fini > li:nth-of-type(3) > span.roles-num « 03 » — 3.83:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/a-propos` — div.conteneur.deux-colonnes:nth-of-type(1) > ol.roles-liste.fx-fini > li:nth-of-type(4) > span.roles-num « 04 » — 3.83:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/a-propos` — div.conteneur.deux-colonnes:nth-of-type(1) > ol.roles-liste.fx-fini > li:nth-of-type(5) > span.roles-num « 05 » — 3.83:1 (minimum 4.5:1) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/a-propos` — div.conteneur.deux-colonnes:nth-of-type(1) > ol.roles-liste > li:nth-of-type(1) > span.roles-num « 01 » — 3.83:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/a-propos` — div.conteneur.deux-colonnes:nth-of-type(1) > ol.roles-liste > li:nth-of-type(2) > span.roles-num « 02 » — 3.83:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/a-propos` — div.conteneur.deux-colonnes:nth-of-type(1) > ol.roles-liste > li:nth-of-type(3) > span.roles-num « 03 » — 3.83:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/a-propos` — div.conteneur.deux-colonnes:nth-of-type(1) > ol.roles-liste > li:nth-of-type(4) > span.roles-num « 04 » — 3.83:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/a-propos` — div.conteneur.deux-colonnes:nth-of-type(1) > ol.roles-liste > li:nth-of-type(5) > span.roles-num « 05 » — 3.83:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/approches` — section#tre > div.conteneur.approche-grille > div.approche-visuel:nth-of-type(1) > span.approche-grand-num « 01 » — 1.37:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_
- **contraste insuffisant** — `/approches` — section#yoga-doux > div.conteneur.approche-grille > div.approche-visuel:nth-of-type(1) > span.approche-grand-num « 02 » — 1.37:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_
- **contraste insuffisant** — `/approches` — section#yoga-somatique > div.conteneur.approche-grille > div.approche-visuel:nth-of-type(1) > span.approche-grand-num « 03 » — 1.37:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_
- **contraste insuffisant** — `/approches` — section#automassage > div.conteneur.approche-grille:nth-of-type(1) > div.approche-visuel:nth-of-type(1) > span.approche-grand-num « 04 » — 1.06:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_
- **contraste insuffisant** — `/approches` — ol.gestes-liste > li:nth-of-type(1) > button.geste > span.geste-num:nth-of-type(1) « 1 » — 4.41:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_
- **contraste insuffisant** — `/approches` — section#accompagnement > div.conteneur.approche-grille > div.approche-visuel:nth-of-type(1) > span.approche-grand-num « 05 » — 1.37:1 (minimum 3:1) _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_
- **contraste insuffisant** — `/methode-tre` — div.conteneur.deux-colonnes > figure.ondes > p.vagues-etat > span.actif:nth-of-type(3) « CALME » — 4.41:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/methode-tre` — div.conteneur.deux-colonnes > figure.ondes > p.vagues-etat > span.actif:nth-of-type(1) « TENSION » — 4.41:1 (minimum 4.5:1) _(1366×768 normal, 844×390 normal)_

### photo faible affichée en grand (9)

- **photo faible affichée en grand** — `/a-propos` — div.conteneur.roles-photos:nth-of-type(2) > figure.media.roles-media:nth-of-type(1) > picture > img « Isabelle Cloutier dans son studio, assise, penchée » — somatique-isabelle (3/5, faible, 53 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/approches` — div.approche-visuel:nth-of-type(1) > figure.media.approche-grande > picture > img « Allongée, genoux pliés, une personne pratique un e » — tre-position (3/5, faible, 49 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/approches` — div.approche-visuel:nth-of-type(1) > figure.media.approche-grande > picture > img « Isabelle Cloutier dans son studio, assise, penchée » — somatique-isabelle (3/5, faible, 49 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/approches` — div.approche-visuel:nth-of-type(1) > figure.media.approche-grande > picture > img « Des balles d'automassage lilas, turquoise et verte » — balles-soleil (4/5, faible, 65 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/approches` — div.approche-visuel:nth-of-type(1) > figure.media.approche-grande > picture > img « Allongée, genoux pliés, une personne pratique un e » — tre-position (3/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/approches` — div.approche-visuel:nth-of-type(1) > figure.media.approche-grande > picture > img « Isabelle Cloutier dans son studio, assise, penchée » — somatique-isabelle (3/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/approches` — div.approche-visuel:nth-of-type(1) > figure.media.approche-grande > picture > img « Des balles d'automassage lilas, turquoise et verte » — balles-soleil (4/5, faible, 41 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/methode-tre` — div.conteneur.tre-formats-grille:nth-of-type(2) > figure.media.tre-formats-media > picture > img « Allongée, genoux pliés, une personne pratique un e » — tre-position (3/5, faible, 65 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/methode-tre` — div.conteneur.tre-formats-grille:nth-of-type(2) > figure.media.tre-formats-media > picture > img « Allongée, genoux pliés, une personne pratique un e » — tre-position (3/5, faible, 34 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### texte coupé (1)

- **texte coupé** — `/methode-tre` — section#debut > div.conteneur.ouverture-chiffre-grille > p.grand-chiffre > span « 7 » — coupé par section#debut « 7 MÉTHODE TRE® 7 exercices, puis le corps relâche  » _(390×844 sansJs, 320×568 sansJs)_

### ouverture : élément visible, caché puis réaffiché (flash) (19)

- **ouverture : élément visible, caché puis réaffiché (flash)** — `/` — section#debut > div.hero-texte > p.surtitre « Yoga somatique · Méthode TRE® · Automass » _(1366×768 film, 390×844 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/` — section#debut > div.hero-texte > p.hero-intro.masque-ecran-tres-bas « Avec Isabelle Cloutier, enseignante depu » _(1366×768 film, 390×844 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/` — section#debut > div.hero-texte > p.hero-info « Prochain rendez-vous : Pause hivernale,  » _(1366×768 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/` — p.hero-info > span > a « Pause hivernale, sam 16 janv, Potton Spr » _(1366×768 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/a-propos` — div.conteneur.ouverture-identite-grille > div.ouverture-identite-texte > p.ouverture-actions « Lui écrire 20 ans d’enseignement » _(1366×768 film, 390×844 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/a-propos` — div.ouverture-identite-texte > p.ouverture-actions > a.bouton « Lui écrire » _(1366×768 film, 390×844 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/a-propos` — div.ouverture-identite-texte > p.ouverture-actions > span.info-cle « 20 ans d’enseignement » _(1366×768 film, 390×844 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/approches` — section#debut > div.conteneur.ouverture-plein-texte > p.surtitre « Approches somatiques » _(1366×768 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/approches` — section#debut > div.conteneur.ouverture-plein-texte > p.chapo.masque-ecran-tres-bas « Une approche corps-esprit qui relie la s » _(1366×768 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/contact` — div.conteneur.ouverture-scindee-grille > div > dl.coordonnees « Téléphone514-570-2260 Courrielizabellule » _(1366×768 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/contact` — div > dd > a.bouton « 514-570-2260 » _(1366×768 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/contact` — div > dl.coordonnees > div « Courrielizabellule@hotmail.com » _(1366×768 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/contact` — div > dd > a.selectionnable « izabellule@hotmail.com » _(1366×768 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/methode-tre` — div.conteneur.ouverture-chiffre-grille > div.ouverture-chiffre-texte > p.ouverture-actions « Voir les ateliers Prochain rendez-vous : » _(1366×768 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/methode-tre` — div.ouverture-chiffre-texte > p.ouverture-actions > a.bouton.bouton--lime « Voir les ateliers » _(1366×768 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/methode-tre` — div.ouverture-chiffre-texte > p.ouverture-actions > span.info-cle « Prochain rendez-vous : Introduction à la » _(1366×768 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/approches` — section#debut > div.conteneur.ouverture-plein-texte > p.ouverture-actions « Commencer par le TRE® TRE® · Yoga doux · » _(390×844 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/approches` — div.conteneur.ouverture-plein-texte > p.ouverture-actions > a.bouton « Commencer par le TRE® » _(390×844 film)_
- **ouverture : élément visible, caché puis réaffiché (flash)** — `/approches` — div.conteneur.ouverture-plein-texte > p.ouverture-actions > span.info-cle « TRE® · Yoga doux · Yoga somatique · Auto » _(390×844 film)_

### transition : élément visible, caché puis réaffiché (flash) (29)

- **transition : élément visible, caché puis réaffiché (flash)** — `/ → /activites` — section#debut > div.conteneur.ouverture-bandeau-tete > div.ouverture-bandeau-pied « Ateliers d’introduction au TRE®, Pauses  » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/ → /activites` — div.conteneur.ouverture-bandeau-tete > div.ouverture-bandeau-pied > p.chapo.masque-ecran-tres-bas « Ateliers d’introduction au TRE®, Pauses  » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/ → /activites` — div.conteneur.ouverture-bandeau-tete > div.ouverture-bandeau-pied > p.ouverture-actions « Voir les dates Prochain rendez-vous : Pa » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/ → /activites` — div.ouverture-bandeau-pied > p.ouverture-actions > a.bouton « Voir les dates » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/ → /activites` — div.ouverture-bandeau-pied > p.ouverture-actions > span.info-cle « Prochain rendez-vous : Pause hivernale,  » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/a-propos → /activites` — section#debut > div.conteneur.ouverture-bandeau-tete > div.ouverture-bandeau-pied « Ateliers d’introduction au TRE®, Pauses  » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/a-propos → /activites` — div.conteneur.ouverture-bandeau-tete > div.ouverture-bandeau-pied > p.chapo.masque-ecran-tres-bas « Ateliers d’introduction au TRE®, Pauses  » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/a-propos → /activites` — div.conteneur.ouverture-bandeau-tete > div.ouverture-bandeau-pied > p.ouverture-actions « Voir les dates Prochain rendez-vous : Pa » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/a-propos → /activites` — div.ouverture-bandeau-pied > p.ouverture-actions > a.bouton « Voir les dates » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/a-propos → /activites` — div.ouverture-bandeau-pied > p.ouverture-actions > span.info-cle « Prochain rendez-vous : Pause hivernale,  » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/activites → /approches` — section#debut > div.conteneur.ouverture-plein-texte > p.chapo.masque-ecran-tres-bas « Une approche corps-esprit qui relie la s » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/activites → /approches` — section#debut > div.conteneur.ouverture-plein-texte > p.ouverture-actions « Commencer par le TRE® TRE® · Yoga doux · » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/activites → /approches` — div.conteneur.ouverture-plein-texte > p.ouverture-actions > a.bouton « Commencer par le TRE® » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/activites → /approches` — div.conteneur.ouverture-plein-texte > p.ouverture-actions > span.info-cle « TRE® · Yoga doux · Yoga somatique · Auto » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/approches → /activites` — section#debut > div.conteneur.ouverture-bandeau-tete > div.ouverture-bandeau-pied « Ateliers d’introduction au TRE®, Pauses  » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/approches → /activites` — div.conteneur.ouverture-bandeau-tete > div.ouverture-bandeau-pied > p.chapo.masque-ecran-tres-bas « Ateliers d’introduction au TRE®, Pauses  » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/approches → /activites` — div.conteneur.ouverture-bandeau-tete > div.ouverture-bandeau-pied > p.ouverture-actions « Voir les dates Prochain rendez-vous : Pa » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/approches → /activites` — div.ouverture-bandeau-pied > p.ouverture-actions > a.bouton « Voir les dates » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/approches → /activites` — div.ouverture-bandeau-pied > p.ouverture-actions > span.info-cle « Prochain rendez-vous : Pause hivernale,  » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/contact → /activites` — section#debut > div.conteneur.ouverture-bandeau-tete > div.ouverture-bandeau-pied « Ateliers d’introduction au TRE®, Pauses  » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/contact → /activites` — div.conteneur.ouverture-bandeau-tete > div.ouverture-bandeau-pied > p.chapo.masque-ecran-tres-bas « Ateliers d’introduction au TRE®, Pauses  » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/contact → /activites` — div.conteneur.ouverture-bandeau-tete > div.ouverture-bandeau-pied > p.ouverture-actions « Voir les dates Prochain rendez-vous : Pa » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/contact → /activites` — div.ouverture-bandeau-pied > p.ouverture-actions > a.bouton « Voir les dates » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/contact → /activites` — div.ouverture-bandeau-pied > p.ouverture-actions > span.info-cle « Prochain rendez-vous : Pause hivernale,  » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/methode-tre → /activites` — section#debut > div.conteneur.ouverture-bandeau-tete > div.ouverture-bandeau-pied « Ateliers d’introduction au TRE®, Pauses  » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/methode-tre → /activites` — div.conteneur.ouverture-bandeau-tete > div.ouverture-bandeau-pied > p.chapo.masque-ecran-tres-bas « Ateliers d’introduction au TRE®, Pauses  » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/methode-tre → /activites` — div.conteneur.ouverture-bandeau-tete > div.ouverture-bandeau-pied > p.ouverture-actions « Voir les dates Prochain rendez-vous : Pa » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/methode-tre → /activites` — div.ouverture-bandeau-pied > p.ouverture-actions > a.bouton « Voir les dates » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/methode-tre → /activites` — div.ouverture-bandeau-pied > p.ouverture-actions > span.info-cle « Prochain rendez-vous : Pause hivernale,  » _(1366×768 film, 390×844 film)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 1 de donnees/site.json

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/methode-tre` — 0 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### texte de contenu sous 13 px (ordinateur) (37)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « YOGA SOMATIQUE · MÉTHODE TRE® · AUTOMASSAGE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-visuel:nth-of-type(2) > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#approches > div.conteneur.section-tete > p.surtitre:nth-of-type(1) « LES APPROCHES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.approche-carte:nth-of-type(2) > a.approche-lien > figure.media.approche-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.approche-carte:nth-of-type(5) > a.approche-lien > figure.media.approche-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#tre > div.conteneur.scene-tre-grille > div.scene-tre-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « MÉTHODE TRE® » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#formats > div.conteneur.section-tete:nth-of-type(1) > div > p.surtitre « COMMENT PRATIQUER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.conteneur.formats-grille > li.format-carte.format-carte--prive:nth-of-type(1) > figure.media.format-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.conteneur.formats-grille > li.format-carte.format-carte--entreprises:nth-of-type(5) > figure.media.format-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#lieux > div.conteneur.lieux-grille > div > p.surtitre:nth-of-type(1) « OÙ PRATIQUER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#isabelle > div.conteneur.isabelle-grille > figure.media.isabelle-media > figcaption.media-legende « Photo : djubox.ca » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#isabelle > div.conteneur.isabelle-grille > div > p.surtitre:nth-of-type(1) « VOTRE ENSEIGNANTE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#temoignages > div.conteneur.section-tete:nth-of-type(1) > p.surtitre:nth-of-type(1) « ILS EN PARLENT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > div.introuvable-image:nth-of-type(1) > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — div.conteneur.ouverture-identite-grille > div.ouverture-identite-portrait:nth-of-type(2) > figure.media.portrait-media > figcaption.media-legende « Photo : djubox.ca » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#roles > div.conteneur.deux-colonnes:nth-of-type(1) > div > p.surtitre « CE QU’ELLE FAIT » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#parcours > div.conteneur.section-tete:nth-of-type(1) > p.surtitre:nth-of-type(1) « SON PARCOURS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#lieux > div.conteneur.section-tete > p.surtitre « OÙ LA TROUVER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/a-propos` — section#livres > div.conteneur.livres-grille > div:nth-of-type(1) > p.surtitre « SES RÉALISATIONS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — section#debut > div.conteneur.ouverture-bandeau-tete:nth-of-type(1) > p.surtitre « HIVER ET PRINTEMPS 2027 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — section#debut > div.ouverture-bandeau-image:nth-of-type(2) > figure.media.bandeau-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — section#agenda > div.conteneur > div.agd__outils:nth-of-type(2) > p.agd__compte « 12 dates à venir » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — section#agenda > div.conteneur > div.agd__cadre:nth-of-type(4) > h3.agd__groupe-titre.agd__mois-premier « JANVIER 2027 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — div.conteneur > div.agd__cadre:nth-of-type(4) > div.agd__groupe:nth-of-type(1) > h3.agd__groupe-titre « FÉVRIER 2027 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/activites` — section#session > div.conteneur.deux-colonnes > div:nth-of-type(1) > p.surtitre:nth-of-type(1) « COMMENT ÇA SE PASSE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- … et 12 autres (rapport.json)

### section sans visuel (11)

- **section sans visuel** — `/` — section#dates « CET HIVER Les prochains rendez-vous Ateliers, Paus » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/` — section#temoignages « ILS EN PARLENT Ce qu’en disent les participants Té » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/a-propos` — section#parcours « SON PARCOURS Vingt ans à se former Trente-deux for » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/activites` — section#agenda « L’agenda Prochaine date : Pause hivernale, dans 56 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal)_
- **section sans visuel** — `/activites` — section#agenda « L’agenda Pause hivernale Samedi 16 janvier 2027 At » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/approches` — section#aussi « Et aussi Pleine conscience Facilitatrice en pleine » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_
- **section sans visuel** — `/contact` — section#lieux « LES LIEUX Où se retrouver Fondation Poorna-Jnana Y » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **section sans visuel** — `/methode-tre` — section#debut « 7 MÉTHODE TRE® 7 exercices, puis le corps relâche  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/methode-tre` — section#dates « PROCHAINES DATES TRE® Ateliers et sessions 24 JANV » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/methode-tre` — section#temoignages « TÉMOIGNAGES Ce qu’ils en retiennent « Un moyen pré » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/methode-tre` — section#debut « 7 7 exercices, puis le corps relâche Voir les atel » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal)_

### typographie française (14)

- **typographie française** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(3) > span:nth-of-type(2) « Prochain rendez-vous : Pause hivernale, sam 16 jan » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/` — div.conteneur.temoignages-grille:nth-of-type(2) > figure.temoignage:nth-of-type(1) > blockquote > p « « Un moyen précieux que je conseille à tous. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — div.conteneur.temoignages-grille:nth-of-type(2) > figure.temoignage:nth-of-type(2) > blockquote > p « « Mon meilleur allié pour faire face aux inévitabl » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — div.conteneur.temoignages-grille:nth-of-type(2) > figure.temoignage:nth-of-type(3) > blockquote > p « « Surtout il m'apporte le calme et la détente en l » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — div.conteneur.fin-grille > figure.citation > blockquote > p « « Vous est-il possible de retrouver les clefs de v » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/` — section#fin > div.conteneur.fin-grille > div.fin-appel > p.petit:nth-of-type(3) « Courriel : izabellule@hotmail.com » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/activites` — div.ouverture-bandeau-pied > p.ouverture-actions:nth-of-type(2) > span.info-cle > span:nth-of-type(2) « Prochaine date : Pause hivernale, dans 56 jours » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/activites` — section#agenda > div.conteneur > div.agd__tete:nth-of-type(1) > p.agd__prochaine « Prochaine date : Pause hivernale, dans 56 jours » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/methode-tre` — div.ouverture-chiffre-texte:nth-of-type(1) > p.ouverture-actions:nth-of-type(3) > span.info-cle > span:nth-of-type(2) « Prochain rendez-vous : Introduction à la méthode T » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/methode-tre` — ul.conteneur.temoignages-mur > li.temoignage.temoignage--0:nth-of-type(1) > blockquote > p « « Un moyen précieux que je conseille à tous. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/methode-tre` — ul.conteneur.temoignages-mur > li.temoignage.temoignage--1:nth-of-type(2) > blockquote > p « « Mon meilleur allié pour faire face aux inévitabl » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/methode-tre` — ul.conteneur.temoignages-mur > li.temoignage.temoignage--2:nth-of-type(3) > blockquote > p « « Surtout il m'apporte le calme et la détente en l » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/methode-tre` — ul.conteneur.temoignages-mur > li.temoignage.temoignage--3:nth-of-type(4) > blockquote > p « « Méthode facile à intégrer dans notre quotidien.  » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/methode-tre` — ul.conteneur.temoignages-mur > li.temoignage.temoignage--4:nth-of-type(5) > blockquote > p « « Définitivement, ça vaut le coup de l'essayer. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/a-propos` — écran différent à la même position après rechargement (4.0 %), voir comparaisons/rechargement-a-propos-*.png _(1366×768)_

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
- Audit rapide : étapes lourdes sur /, /a-propos, /activites, /approches, /contact, /methode-tre.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2715 ms depuis le premier octet
- Ouverture /a-propos (1366×768) : 2624 ms depuis le premier octet
- Ouverture /activites (1366×768) : 2611 ms depuis le premier octet
- Ouverture /approches (1366×768) : 2639 ms depuis le premier octet
- film de l'ouverture /approches 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (1366×768) : 2614 ms depuis le premier octet
- Ouverture /methode-tre (1366×768) : 2902 ms depuis le premier octet
- Ouverture / (390×844) : 2738 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /a-propos (390×844) : 2626 ms depuis le premier octet
- Ouverture /activites (390×844) : 2607 ms depuis le premier octet
- film de l'ouverture /activites 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /approches (390×844) : 2643 ms depuis le premier octet
- Ouverture /contact (390×844) : 2601 ms depuis le premier octet
- Ouverture /methode-tre (390×844) : 2898 ms depuis le premier octet
- bords de l’écran /approches 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 610 images d’intro, 12 de voile et 204 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /a-propos : aucune section épinglée ou plein écran.
- Tient dans l'écran /activites : aucune section épinglée ou plein écran.
- Tient dans l'écran /approches : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /methode-tre : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 416, tâche la plus longue 0 ms
- Fluidité /a-propos 1366×768 (molette) : 0 % d'images lentes sur 384, tâche la plus longue 0 ms
- Fluidité /activites 1366×768 (molette) : 0 % d'images lentes sur 388, tâche la plus longue 0 ms
- Fluidité /approches 1366×768 (molette) : 0 % d'images lentes sur 342, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 168, tâche la plus longue 0 ms
- Fluidité /methode-tre 1366×768 (molette) : 0 % d'images lentes sur 282, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1414, tâche la plus longue 0 ms
- Fluidité /a-propos 390×844 (doigt) : 0 % d'images lentes sur 1381, tâche la plus longue 0 ms
- Fluidité /activites 390×844 (doigt) : 0 % d'images lentes sur 1409, tâche la plus longue 0 ms
- Fluidité /approches 390×844 (doigt) : 0 % d'images lentes sur 1407, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /methode-tre 390×844 (doigt) : 0 % d'images lentes sur 1412, tâche la plus longue 0 ms
- Vitesse / : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /a-propos : 0.23 s de calcul au chargement (téléphone ralenti).
- Vitesse /activites : 0.24 s de calcul au chargement (téléphone ralenti).
- Vitesse /approches : 0.24 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.20 s de calcul au chargement (téléphone ralenti).
- Vitesse /methode-tre : 0.23 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,films
```
