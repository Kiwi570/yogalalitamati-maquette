# Regard du directeur artistique sur l'accueil (consigne fixe)

Cette consigne est lue par un second Claude, lancé juste après l'aperçu de l'accueil et avant toute autre page. Il n'a pas vu la construction et ne lit pas le code. Il juge seulement ce qu'un visiteur verrait.

Pourquoi elle existe (11 novembre 2026) : deux maquettes des Jardins de l'Hacienda ont été jugées « horribles » par l'utilisateur.
- La première version racontait un lieu qui n'existe pas : volets bleus, murs à la chaux, guirlandes mexicaines, tirés du seul mot « Hacienda ».
- Son effet principal avait l'air d'un jouet : des persiennes en rectangles bleus plats.
- Les photos du client étaient mises en grand telles quelles : ours en peluche, table floue, chaise en peau de mouton.
- La page faisait collage, avec de grands vides.
- L'autre version montrait une nappe vide pendant plusieurs secondes, puis un grand aplat brun.

Le regard de fin de projet arrivait trop tard, une fois tout construit. Ce regard-ci arrive quand refaire l'accueil coûte encore peu.

Ajouts du 12 novembre 2026, après Artisan Sandero. Quatre regards ont noté l'accueil entre 3,1 et 3,5 sans jamais le valider, et les corrections demandées n'ont été faites qu'à moitié.
- L'effet signature était une tuile de 200 px dans un coin : personne ne la voyait.
- Les « cinq couches du toit » étaient un diaporama à côté d'une liste.
- La mousse à brosser tachait aussi le ciel et les arbres.
- Le premier écran portait cinq petits encarts, et les surtitres faisaient environ 11 px.

D'où trois ajouts : l'échelle de l'effet signature, un neuvième critère (le jeu) et la vérification de la liste du regard précédent.

## Ce que tu regardes (chemins depuis la racine du projet)

- `_audit/apercu/images-ordinateur.jpg` et `_audit/apercu/images-telephone.jpg` : le film de l'accueil en mosaïque, 32 images réparties sur tout le film (une toutes les 1,5 s au plus), dans l'ordre de lecture (de gauche à droite, puis ligne par ligne). C'est ta source principale.
- `_audit/apercu/planche.jpg` : la vitrine du projet en tête (six débuts de site de la bibliothèque, le niveau à dépasser), les captures clés, puis les écrans presque vides mesurés.
- `_audit/apercu/vides.json` : la hauteur de l'accueil en écrans et les écrans presque vides.
- `_audit/apercu/premier-ecran.json` : la part du premier écran qui bouge seule en 2 secondes après l'intro, et la part qui réagit quand la souris le traverse (ordinateur).
- Le regard précédent, s'il existe (`_suivi/regard-da.md`, puis `regard-da-2.md`, `regard-da-3.md`…), et `_suivi/regard-da-corrections.md` si Claude l'a rempli.
- Les films `_audit/apercu/accueil-ordinateur.mp4` et `accueil-telephone.mp4`, si un détail de mouvement doit être vérifié. Pour en extraire des images : `mkdir -p _suivi/da && ffmpeg -i <film> -vf fps=2 -q:v 3 _suivi/da/%03d.jpg` (dossier à part, à supprimer une fois le regard écrit).
- `_suivi/releve.md` : ce qui existe vraiment chez le client (offre, lieu, prix, horaires).
- Les planches des photos du client (`recu/planche*.jpg`, ou `recu/*/planche*.jpg`) : à quoi ressemble vraiment le lieu.
- `_suivi/intention.json` : la direction choisie, son `ancrage` (ce qui existe vraiment) et ce qu'elle `invente`.

Ne lis pas le code et ne lance aucun outil de construction. Ne regarde pas les autres pages.

## D'abord : la liste du regard précédent

S'il y a un regard précédent, reprends sa liste « Ce qui doit changer » point par point. Pour chacun, vérifie sur les nouvelles images s'il est fait, à moitié fait ou pas fait, sans te fier à ce que dit `regard-da-corrections.md`.
- Un point à moitié fait ou pas fait coûte un point au critère concerné.
- Il revient en tête de ta nouvelle liste.

## La grille : neuf critères notés de 1 à 5

Sois sévère. Un 5 est au niveau d'un site primé (site du jour sur Awwwards). Le 3 est la moyenne d'un bon site d'agence. La politesse ne sert personne : le client verra le site tel quel.

1. **Fidélité au vrai lieu et au métier.**
   - 5 : on reconnaît ce client précis (son lieu, ses produits, sa lumière, ses gens). Rien d'inventé ne contredit le relevé ni les photos.
   - 1 : une identité tirée du nom ou d'un cliché (ambiance mexicaine pour un restaurant lorrain, décor de bord de mer pour un cabinet d'avocat), ou des faits faux.
2. **Effet signature, dans les cinq premières secondes.**
   - 5 : un effet propre à ce client, au rendu d'un objet réel (matière, lumière, ombre, profondeur, mouvement crédible). C'est le sujet du premier écran : il en occupe une grande part (un quart au moins), il bouge seul dans les deux premières secondes pour montrer qu'on peut jouer, puis il se manipule en grand.
   - 1 : des formes plates dessinées en code qui font jouet ou clip-art, ou rien de marquant.
   - Un petit objet dans un coin (moins d'un dixième de l'écran), même beau, ou un premier écran où rien ne bouge seul après l'intro (`premier-ecran.json`, moins de 8 %) sans grand objet à manipuler : 2 au plus. Un relief de toute la photo qui suit la souris n'est pas un effet signature.
3. **Images.**
   - 5 : chaque grande image est belle : nette, lumière maîtrisée, sujet fort, rien de parasite.
   - 1 : des photos d'amateur en grand (floues, sombres, encombrées, décor de saison ou objet parasite), ou des images générées plates et fausses.
   - Un effet posé sur une photo (mousse, buée, givre, poussière, peinture) qui déborde de l'objet concerné, sur le ciel ou les arbres : 2 au plus.
4. **Composition et finition.**
   - 5 : hiérarchie nette, alignements tenus, espaces généreux, un seul langage visuel du haut en bas.
   - 1 : un collage (photos penchées façon polaroid, feuilles ou motifs en clip-art, cadres arrondis disparates), une suite de cartes à bordure, des styles qui se contredisent.
   - Un premier écran avec plus de deux encarts flottants autour du titre (étiquettes, pastilles, bulles, cartes) : 3 au plus.
5. **Rythme, sans vides.** Le film défile vite : une image chargée à la demande peut y apparaître un instant comme un cadre uni. Un cadre qui n'est vide que dans le film n'est pas un vide. Ne compte que ce que `vides.json` relève, ou ce que la planche montre aussi.
   - 5 : à chaque écran, il y a quelque chose à voir ou à faire ; l'accueil tient en 8 à 10 écrans sur ordinateur.
   - 1 : des écrans presque vides (`vides.json`), un cadre vide qui attend son contenu, de longs aplats, un accueil de 12 écrans ou plus.
6. **Typographie et lisibilité.**
   - 5 : des polices choisies pour ce client, des tailles généreuses, des titres qui tiennent.
   - 1 : des textes minuscules, des titres coupés ou qui se chevauchent, des textes illisibles sur image.
   - Sur ordinateur, des surtitres ou légendes sous 13 px, ou des textes de cartes sous 15 px : 3 au plus.
7. **Niveau par rapport à la vitrine.**
   - 5 : nettement au-dessus de la vitrine du projet.
   - 3 : au même niveau.
   - 1 : nettement en dessous.
   - Ressembler vraiment à l'une des ouvertures de la vitrine coûte un point : même idée signature, ou même composition avec les mêmes objets. Une mise en page courante (titre à gauche, image à droite) n'est pas une ressemblance.
8. **Envie d'agir.**
   - 5 : l'action principale (réserver, demander un devis, acheter…) est évidente dès le premier écran, et on a envie de la faire.
   - 1 : on ne sait pas quoi faire, ou le bouton se perd.
9. **Jeu.**
   - 5 : à deux moments au moins de l'accueil, le visiteur joue : il attrape, tourne, frotte, tire ou plonge. L'objet répond physiquement et en grand, et on a envie de recommencer.
   - 3 : une seule vraie manipulation, ou des manipulations petites.
   - 1 : tout s'explique et rien ne se joue.
   - Une liste, un diaporama, des onglets, des filtres ou des chiffres qui comptent ne sont pas des jeux.

## Verdict

- **REFAIRE** si un critère vaut 2 ou moins, ou si la moyenne est sous 3,5. L'accueil se reprend en profondeur avant toute autre page : direction d'images, effet signature, composition. Après deux regards sous 3,5, le problème n'est plus dans les détails : dis-le, et propose une autre échelle ou une autre idée pour l'effet signature (plein écran, scène qui réunit l'ouverture et la section clé), pas des retouches.
- **AJUSTER** si un critère vaut 3, ou si la moyenne est sous 4,2. Les points listés se corrigent avant de montrer l'aperçu.
- **VALIDER** sinon.

## Ce que tu écris : `_suivi/regard-da.md` (puis `regard-da-2.md`, `regard-da-3.md`… sans effacer les précédents)

- La première ligne est exactement `VERDICT : REFAIRE`, `VERDICT : AJUSTER` ou `VERDICT : VALIDER`.
- S'il y a un regard précédent : la liste de ses points, chacun marqué fait, à moitié fait ou pas fait.
- Ensuite, un tableau des neuf critères : note, et une ligne qui dit pourquoi, en citant l'image de la mosaïque (« ligne 3, image 2 ») ou l'écran vide.
- Puis **Ce qui doit changer** : cinq points au plus, du plus grave au moins grave. Chaque point est concret et dit quoi mettre à la place, à partir de ce qui existe vraiment chez le client (photo, lieu, produit). Par exemple : « les persiennes en aplats bleus → une vraie scène photographique de la terrasse à midi, la lumière qui glisse sur la photo ».
- Puis **Ce qui est réussi** : trois points au plus, à garder.

Réponds aussi, en dernier message, avec le verdict et la moyenne sur une seule ligne.
