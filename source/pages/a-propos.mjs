/* À propos. Ouverture « nom en très grand et portrait » ; ses cinq rôles ; frise des formations filtrable par thème ;
   lieux et collaborations ; livres et CD ; appel. */
import { html } from '../../outils/gabarit.mjs';
import { lotus } from '../gabarits/commun.mjs';
import { appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'a-propos', fichier: 'a-propos', imagePartage: 'isabelle-portrait-800.webp' };

export default (c) => {
  const img = (n) => c.donnees.images[n] || {};
  const ans = new Date().getFullYear() - 2006;
  const f = c.donnees.formations;
  const annees = [...new Set(f.liste.map((x) => x.annee))].sort((a, b) => a - b);
  return html`
<section class="page-ouverture ouverture-identite" id="debut">
  <div class="conteneur ouverture-identite-grille">
    <div class="ouverture-identite-texte">
      <p class="surtitre" data-anime="gsap">${c.t('apropos.tete.surtitre')}</p>
      <h1 class="titre-xxl ouverture-titre" data-anime="gsap">
        <span class="masque-ligne"><span class="ouv-ligne">${c.t('apropos.tete.titre1')}</span></span>
        <span class="masque-ligne"><span class="ouv-ligne"><em>${c.t('apropos.tete.titre2')}</em></span></span>
      </h1>
      <p class="chapo" data-anime="gsap">${c.t('apropos.tete.texte')}</p>
      <p class="ouverture-actions" data-anime="gsap">
        ${c.lien('contact', { classe: 'bouton', texte: c.t('apropos.tete.action'), attrs: 'data-action-principale' })}
        <span class="info-cle" data-info-cle><strong class="gros-chiffre gros-chiffre--petit" data-compteur="${ans}">${ans}</strong> <span>${c.t('apropos.tete.depuis')}</span></span>
      </p>
    </div>
    <div class="ouverture-identite-portrait">
      ${c.media({ nom: 'isabelle-portrait', alt: c.s('apropos.tete.alt'), priorite: true, classe: 'portrait-media', ratio: '4 / 5', cadrage: '52% 26%', sizes: '(max-width: 760px) 56vw, 22vw', attrs: 'data-iris-centre', legende: c.t('accueil.isabelle.credit') })}
      <div class="portrait-lotus" data-effet="lotus">${lotus({ classe: 'lotus-vivant', epaisseur: 22 })}</div>
    </div>
  </div>
</section>

<section class="section roles theme-lilas" id="roles">
  <div class="conteneur deux-colonnes">
    <div>
      <p class="surtitre">${c.t('apropos.titres.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('apropos.titres.titre1')} <em>${c.t('apropos.titres.titre2')}</em> ${c.t('apropos.titres.titre3')}</h2>
    </div>
    <ol class="roles-liste" data-anime="cascade">
      ${['t1', 't2', 't3', 't4', 't5'].map((k, i) => html`<li><span class="roles-num">0${i + 1}</span>${c.t('apropos.titres.' + k)}</li>`)}
    </ol>
  </div>
  <div class="conteneur roles-photos">
    ${c.media({ nom: 'somatique-isabelle', alt: img('somatique-isabelle').alt, classe: 'roles-media', sizes: '(max-width: 760px) 92vw, 40vw', attrs: 'data-fx="parallaxe"' })}
    ${c.media({ nom: 'groupe-arbre', alt: img('groupe-arbre').alt, classe: 'roles-media roles-media--petit', sizes: '(max-width: 760px) 60vw, 24vw', attrs: 'data-fx="vitesse"' })}
  </div>
</section>

<section class="section parcours" id="parcours">
  <div class="conteneur section-tete">
    <p class="surtitre">${c.t('apropos.parcours.surtitre')}</p>
    <h2 class="titre-l" data-anime="lignes">${c.t('apropos.parcours.titre1')} <em>${c.t('apropos.parcours.titre2')}</em></h2>
    <p class="chapo">${c.t('apropos.parcours.texte')}</p>
  </div>
  <div class="conteneur parcours-filtres" role="group" aria-label="${c.s('apropos.parcours.filtres')}" data-filtres-parcours>
    <button type="button" class="pastille-filtre" data-theme="" aria-pressed="true">${c.t('apropos.parcours.tous')} <span>${f.liste.length}</span></button>
    ${f.themes.map((t) => html`<button type="button" class="pastille-filtre pastille-filtre--${t.id}" data-theme="${t.id}" aria-pressed="false">${t.nom} <span>${f.liste.filter((x) => x.theme === t.id).length}</span></button>`)}
  </div>
  <div class="conteneur frise">
    <div class="frise-trait" aria-hidden="true"><span data-effet="frise"></span></div>
    <ol class="frise-annees">
      ${annees.map((a) => html`<li class="frise-annee" data-annee="${a}">
        <p class="frise-an">${a}</p>
        <ul>${f.liste.filter((x) => x.annee === a).map((x) => html`<li class="formation formation--${x.theme}" data-theme="${x.theme}"><strong>${x.titre}</strong><span>${x.organisme}${x.duree ? html` · ${x.duree}` : ''}${x.periode ? html` · ${x.periode}` : ''}</span></li>`)}</ul>
      </li>`)}
    </ol>
  </div>
</section>

<section class="section lieux-apropos theme-lilas" id="lieux">
  <div class="conteneur section-tete">
    <p class="surtitre">${c.t('apropos.lieux.surtitre')}</p>
    <h2 class="titre-l" data-anime="lignes">${c.t('apropos.lieux.titre1')} <em>${c.t('apropos.lieux.titre2')}</em></h2>
  </div>
  <ul class="conteneur lieux-cartes" data-anime="cascade">
    ${c.donnees.lieux.filter((l) => !['simhananda', 'en-ligne'].includes(l.id)).map((l) => html`<li class="lieu-carte">
      ${l.logo ? html`<img class="lieu-logo" src="/assets/images/${l.logo}-240.webp" alt="${img(l.logo).alt}" width="120" height="${l.logo === 'logo-potton' ? 94 : 43}" loading="lazy">` : html`<span class="lieu-pictogramme" aria-hidden="true">${lotus({ epaisseur: 26 })}</span>`}
      <h3>${l.nom}</h3>
      <p>${l.adresse}<br>${l.ville}</p>
      <p class="lieu-quoi">${l.quoi}</p>
    </li>`)}
    <li class="lieu-carte"><span class="lieu-pictogramme" aria-hidden="true">${lotus({ epaisseur: 26 })}</span><h3>${c.t('apropos.lieux.maison')}</h3><p class="lieu-quoi">${c.t('apropos.lieux.maisonTexte')}</p></li>
    <li class="lieu-carte"><span class="lieu-pictogramme" aria-hidden="true">${lotus({ epaisseur: 26 })}</span><h3>${c.t('apropos.lieux.organismes')}</h3><p class="lieu-quoi">${c.t('apropos.lieux.organismesTexte')}</p></li>
  </ul>
</section>

<section class="section livres" id="livres">
  <div class="conteneur livres-grille">
    <div>
      <p class="surtitre">${c.t('apropos.livres.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('apropos.livres.titre1')} <em>${c.t('apropos.livres.titre2')}</em></h2>
      <ul class="livres-liste">
        <li><strong>${c.t('apropos.livres.livre1')}</strong><span>${c.t('apropos.livres.editeur')}</span></li>
        <li><strong>${c.t('apropos.livres.livre2')}</strong><span>${c.t('apropos.livres.editeur')}</span></li>
        <li><strong>${c.t('apropos.livres.cd')}</strong><span>${c.t('apropos.livres.cdTexte')}</span></li>
      </ul>
    </div>
    <div class="livres-couvertures">
      ${c.media({ nom: 'livre-bien-etre', alt: c.s('apropos.livres.alt1'), classe: 'livre livre--1', ratio: '4 / 5', sizes: '(max-width: 760px) 44vw, 18vw', attrs: 'data-effet="livres"' })}
      ${c.media({ nom: 'livre-enfants', alt: c.s('apropos.livres.alt2'), classe: 'livre livre--2', ratio: '4 / 5', sizes: '(max-width: 760px) 44vw, 18vw', attrs: 'data-effet="livres"' })}
    </div>
  </div>
</section>

${appelFinal(c, { titre1: c.t('apropos.fin.titre1'), titre2: c.t('apropos.fin.titre2'), texte: c.t('apropos.fin.texte'), lotus: lotus({ classe: 'lotus-vivant', epaisseur: 18 }) })}
`;
};
