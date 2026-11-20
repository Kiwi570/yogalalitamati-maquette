# Rapport d’audit

Projet : `yogalalitamati-maquette` · 20/11/2026 22:36:35 · 3 min · 4 page(s) · audit standard ciblé sur /contact,/approches,/activites,/404 (étapes : fichiers, films, mouvement)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261120-213352-standard-cible-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), films d’ouverture (6), films de transition (6), mouvement (6), effets du plan (15), souris immobile (2)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-203305-rapide-cible | rapide | /,/activites,/approches,/methode-tre,/a-propos,/contact,/404 | toutes | 141 | 70 | 1 | échecs |
| 20261120-205705-standard | standard | toutes | toutes | 3 | 57 | 1 | échecs |
| 20261120-212151-complet-partiel | complet | toutes | mesures, ecran | 5 | 48 | 0 | échecs |
| 20261120-212939-complet-cible-partiel | complet | /,/methode-tre | fichiers, mesures | 0 | 26 | 0 | complet |
| **20261120-213352-standard-cible-partiel** (celle-ci) | standard | /contact,/approches,/activites,/404 | fichiers, films, mouvement | 0 | 2 | 0 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/activites` — à 50 ms (différence 21 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 55 min de travail pour 115 min de budget, 16 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /activites, /approches, /contact.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture /activites (1366×768) : 2705 ms depuis le premier octet
- Ouverture /approches (1366×768) : 2647 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2643 ms depuis le premier octet
- Ouverture /activites (390×844) : 2601 ms depuis le premier octet
- Ouverture /approches (390×844) : 2615 ms depuis le premier octet
- film de l'ouverture /approches 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2640 ms depuis le premier octet

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
