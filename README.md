# Lalita Mati — maquette du site d'Isabelle Cloutier

Maquette du nouveau site de Yoga Lalita Mati (yoga somatique, méthode TRE®, automassage avec balles, pleine conscience), à partir du site actuel https://www.yogalalitamati.com.

- Adresse de la maquette : https://yogalalitamati-maquette.vercel.app
- Direction « Relâcher » : lin rosé, lilas du studio, prune ; lime et turquoise des balles d'automassage. Titres Bricolage Grotesque, texte Hanken Grotesk.
- L'idée qui relie le site : les deux vagues du logo (lotus) deviennent le geste du TRE®. Elles tremblent puis s'apaisent dans l'intro, dans la scène « Sept exercices » et sur la page Méthode TRE®. Le voile entre les pages est en vague.
- Pages : Accueil, Activités (agenda), Approches somatiques, Méthode TRE®, À propos, Contact, 404.

## À fournir par la cliente (à compléter)

| Élément | Où | État |
|---|---|---|
| Mentions légales (éditrice, coordonnées, NEQ ou équivalent) | pied de page | à compléter |
| Politique de confidentialité (Loi 25, Québec) | pied de page, formulaire de contact | à compléter |
| Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse vérifiée le 20 novembre 2026 dans les conditions publiées par Vercel) | mentions légales | à compléter |
| Assurances professionnelles | mentions légales | à compléter |
| Crédits des illustrations générées (11 images marquées « Illustration générée ») | mentions légales | à compléter |
| Crédit photo du portrait : djubox.ca (repris du site actuel) | À propos, accueil | à confirmer |
| Adresse de la Clinique ATMA (Vieux-Longueuil) | Contact, À propos | remplacée par « donnée à la prise de rendez-vous » |
| Adresse du Centre Simhananda (Saint-Jean) | Activités, Contact | remplacée par « donnée à l'inscription » |
| Numéro de téléphone : le site actuel affiche 514 570 2260 et 514-570-220 | partout | 514-570-2260 retenu, à confirmer |
| Prix du studio virtuel (formules YOGA et PLUS) | page Studio virtuel (v2) | absents du site actuel |
| Nombre de places des ateliers | Activités | non affiché faute d'information |
| Retraites (annoncées sur le site actuel, aucune datée) | Accueil | non affichées faute de dates |
| Portrait du Dr David Berceli (photo reprise de la page TRE®) | Méthode TRE® | à confirmer (droit d'usage) |

## Ce qui a été retiré ou reformulé

- Les bienfaits sont formulés sans promesse (« aider à », « favoriser ») et chaque page de soin rappelle que ces approches ne remplacent pas un suivi médical ou psychologique. Au Québec, la psychothérapie et le titre de psychothérapeute sont réservés (Loi 21) : l'accompagnement somatique est présenté comme un complément, jamais comme une psychothérapie.
- Les prix sont affichés taxes incluses, avec le montant avant taxes en petit (le site actuel affichait les deux sans explication).
- Le blog (4 articles de 2020-2021) et le studio virtuel ne sont pas repris dans cette version (v2 possible).
- Les témoignages sont repris tels quels de la page TRE® du site actuel, en extraits.

## À la mise en ligne définitive

- Retirer : la balise `noindex` (gabarit `source/gabarits/commun.mjs`) et l'en-tête `X-Robots-Tag` de `vercel.json` ; le formulaire simulé (le brancher sur un vrai envoi) ; les boutons « S'inscrire » simulés (les relier à la vraie réservation) ; les mentions « à compléter » du pied de page.
- Garder : la mention « Illustration générée » sur chaque image créée par IA.

## Technique

- Site statique (HTML, CSS, JavaScript), prêt pour Vercel sans étape de construction.
- Les pages sont générées depuis `donnees/` (textes, activités, lieux, formations, témoignages) : `node outils/generer.mjs`. Ne jamais modifier les pages `.html` à la main.
- Agenda : module `agenda-des-dates` de la bibliothèque (statuts au jour réel, compte à rebours, ajout au calendrier .ics, inscription préremplie), avec un filtre par lieu en plus.
- Audit : `node _audit/audit.mjs` (voir `_audit/README.md`) ; rapport dans `_audit/rapport/rapport.md`.
