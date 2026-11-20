/* Approches somatiques. Ouverture plein cadre (vue de haut, titre à gauche) ; sommaire collant ;
   une section par approche ; démonstration des cinq gestes de l'automassage par une balle animée ; et aussi ; appel. */
import { html } from '../../outils/gabarit.mjs';
import { lotus } from '../gabarits/commun.mjs';
import { appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'approches', fichier: 'approches', imagePartage: 'grok/approches-ouverture-1280.webp' };

const GESTES = ['masser', 'compresser', 'etirer', 'contracter', 'relacher'];

export default (c) => {
  const img = (n) => c.donnees.images[n] || {};
  return html`
<section class="page-ouverture ouverture-plein" id="debut">
  ${c.media({ nom: 'grok/approches-ouverture', alt: c.s('approches.tete.alt'), priorite: true, classe: 'plein-media', sizes: '100vw', cadrage: '62% 50%', attrs: 'data-fx="zoom" data-fx-force="8"' })}
  <div class="conteneur ouverture-plein-texte">
    <p class="surtitre" data-anime="gsap">${c.t('approches.tete.surtitre')}</p>
    <h1 class="titre-xl ouverture-titre" data-anime="gsap">
      <span class="masque-ligne"><span class="ouv-ligne">${c.t('approches.tete.titre1')}</span></span>
      <span class="masque-ligne"><span class="ouv-ligne">${c.t('approches.tete.titre2')} <em>${c.t('approches.tete.titre3')}</em></span></span>
    </h1>
    <p class="chapo masque-ecran-tres-bas" data-anime="gsap">${c.t('approches.tete.texte')}</p>
    <p class="ouverture-actions" data-anime="gsap">
      ${c.lien('methode-tre', { classe: 'bouton', texte: c.t('approches.tete.action'), attrs: 'data-action-principale' })}
      <span class="info-cle" data-info-cle>${c.donnees.approches.map((a) => a.court).join(' · ')}</span>
    </p>
    <div class="badge-lotus" data-iris-centre="disque" data-effet="lotus">${lotus({ classe: 'lotus-vivant', epaisseur: 20 })}</div>
  </div>
</section>

<nav class="sommaire-approches" data-sommaire aria-label="${c.s('approches.sommaire')}">
  <ul class="conteneur">
    ${c.donnees.approches.map((a, i) => html`<li><a href="#${a.id}" data-sans-transition><span>0${i + 1}</span> ${a.court}</a></li>`)}
  </ul>
</nav>

${c.donnees.approches.map((a, i) => html`<section class="section approche${i % 2 ? ' approche--inverse' : ''}${a.id === 'automassage' ? ' theme-lilas' : ''}" id="${a.id}">
  <div class="conteneur approche-grille">
    <div class="approche-visuel">
      ${c.media({ nom: a.image, alt: a.imageAlt, classe: 'approche-grande', sizes: '(max-width: 760px) 92vw, 40vw', attrs: i % 2 && a.image.startsWith('grok/') ? 'data-fx="parallaxe"' : 'data-anime="rideau"' })}
      <span class="approche-grand-num" aria-hidden="true">0${i + 1}</span>
    </div>
    <div class="approche-texte">
      <h2 class="titre-l" data-anime="lignes">${a.titre}</h2>
      <p class="chapo">${a.accroche}</p>
      <p>${a.texte}</p>
      ${a.id === 'automassage' ? gestes(c) : html`<ul class="etiquettes" data-anime="cascade">${a.gestes.map((g) => html`<li>${g}</li>`)}</ul>`}
      <p class="approche-liens">
        ${a.id === 'tre' ? c.lien('methode-tre', { classe: 'lien-fleche', texte: c.t('approches.lienTre') }) : ''}
        ${a.id === 'accompagnement' ? c.lien('contact', { ancre: 'formulaire', params: 'objet=prive', classe: 'lien-fleche', texte: c.t('approches.lienPrive') }) : c.lien('activites', { classe: 'lien-fleche', texte: c.t('approches.lienActivites') })}
      </p>
    </div>
  </div>
  ${a.id === 'automassage' ? html`<div class="conteneur automassage-galerie" aria-label="${c.s('approches.balle.galerie')}" role="group">
    ${['balles-pied', 'balle-nuque', 'balles-soleil'].map((n) => c.media({ nom: n, alt: img(n).alt, classe: 'galerie-vignette', sizes: '(max-width: 760px) 46vw, 24vw', attrs: 'data-fx="vitesse" data-fx-force="2"' }))}
  </div>` : ''}
</section>`)}

<section class="section aussi" id="aussi">
  <div class="conteneur">
    <h2 class="titre-m" data-anime="lignes">${c.t('approches.aussi.titre')}</h2>
    <div class="aussi-grille" data-anime="cascade">
      <article><h3>${c.t('approches.aussi.conscience')}</h3><p>${c.t('approches.aussi.conscienceTexte')}</p></article>
      <article><h3>${c.t('approches.aussi.rmt')}</h3><p>${c.t('approches.aussi.rmtTexte')}</p></article>
      <article class="aussi-sante"><p>${c.t('commun.sante')}</p></article>
    </div>
  </div>
</section>

${appelFinal(c, { titre1: c.t('approches.fin.titre1'), titre2: c.t('approches.fin.titre2'), texte: c.t('approches.fin.texte'), lotus: lotus({ classe: 'lotus-vivant', epaisseur: 18 }) })}
`;
};

/* Cinq gestes de l'automassage : une balle qui les montre (site.js, effet « balle-gestes »). Le texte de chaque geste
   est visible sans interaction ; toucher un geste rejoue la balle. */
function gestes(c) {
  return html`<div class="gestes">
  <p class="gestes-titre"><strong>${c.t('approches.balle.titre')}</strong> <span class="gestes-aide">${c.t('approches.balle.texte')}</span></p>
  <div class="gestes-scene" aria-hidden="true" data-visuel>
    <span class="gestes-sol"></span><span class="gestes-tissu"></span><span class="balle balle--turquoise gestes-balle" data-effet="balle-gestes"></span>
  </div>
  <ol class="gestes-liste">
    ${GESTES.map((g, i) => html`<li><button type="button" class="geste" data-geste="${g}" aria-pressed="${i === 0 ? 'true' : 'false'}"><span class="geste-num">${i + 1}</span><strong>${c.t('approches.balle.' + g)}</strong><span>${c.t('approches.balle.' + g + 'Texte')}</span></button></li>`)}
  </ol>
</div>`;
}
