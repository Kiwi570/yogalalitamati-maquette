/* Méthode TRE®. Ouverture « chiffre en très grand » (7) avec les ondes sur l'eau ; ce que c'est (vagues qui passent
   de la tension au calme au défilement) ; le fondateur ; quatre façons de commencer ; prochaines dates TRE® ;
   les cinq témoignages ; appel. */
import { html } from '../../outils/gabarit.mjs';
import { lotus } from '../gabarits/commun.mjs';
import { prochaines, carteDate, appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'methode-tre', fichier: 'methode-tre', imagePartage: 'grok/tre-ouverture-1280.webp' };

export default (c) => {
  const img = (n) => c.donnees.images[n] || {};
  const dates = prochaines(c, 3, (a) => a.type === 'tre');
  return html`
<section class="page-ouverture ouverture-chiffre theme-prune" id="debut">
  <div class="conteneur ouverture-chiffre-grille">
    <p class="grand-chiffre" aria-hidden="true" data-iris-centre><span data-effet="chiffre-sept">${c.t('tre.tete.chiffre')}</span></p>
    <div class="ouverture-chiffre-texte">
      <p class="surtitre" data-anime="gsap">${c.t('tre.tete.surtitre')}</p>
      <h1 class="titre-xl ouverture-titre" data-anime="gsap">
        <span class="visuellement-cache">${c.t('tre.tete.chiffre')} </span>
        <span class="masque-ligne"><span class="ouv-ligne">${c.t('tre.tete.titre1')}</span></span>
        <span class="masque-ligne"><span class="ouv-ligne">${c.t('tre.tete.titre2')}</span></span>
        <span class="masque-ligne"><span class="ouv-ligne"><em>${c.t('tre.tete.titre3')}</em></span></span>
      </h1>
      <p class="chapo masque-ecran-bas" data-anime="gsap">${c.t('tre.tete.texte')}</p>
      <p class="ouverture-actions" data-anime="gsap">
        <a class="bouton bouton--lime" href="#dates" data-action-principale data-sans-transition>${c.t('tre.tete.action')}</a>
        ${dates[0] ? html`<span class="info-cle" data-info-cle><span class="pastille-vivante" aria-hidden="true"></span><span>${c.s('accueil.hero.prochain') + ' : '}<strong>${dates[0].titre}</strong>, ${dates[0].jourCourt}</span></span>` : ''}
      </p>
    </div>
    <div class="ouverture-chiffre-image">
      ${c.media({ nom: 'grok/tre-ouverture', alt: c.s('tre.tete.alt'), priorite: true, classe: 'chiffre-media', sizes: '(max-width: 760px) 60vw, 22vw', attrs: 'data-fx="zoom"' })}
    </div>
  </div>
</section>

<section class="section tre-quoi" id="quoi">
  <div class="conteneur deux-colonnes">
    <div>
      <p class="surtitre">${c.t('tre.quoi.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('tre.quoi.titre1')} <em>${c.t('tre.quoi.titre2')}</em></h2>
      <p>${c.t('tre.quoi.texte1')}</p>
      <p>${c.t('tre.quoi.texte2')}</p>
      <p class="petit">${c.t('commun.sante')}</p>
    </div>
    <figure class="ondes" data-visuel>
      <svg class="vagues-tre vagues-tre--clair" viewBox="0 0 600 420" aria-hidden="true" data-effet="vagues-tre">
        <path class="vt vt-1" d="M20 150 L580 150"/><path class="vt vt-2" d="M20 210 L580 210"/><path class="vt vt-3" d="M20 270 L580 270"/>
      </svg>
      <p class="vagues-etat" aria-hidden="true"><span data-etat="tension">${c.t('accueil.tre.etatTension')}</span><span data-etat="tremblement">${c.t('accueil.tre.etatTremblement')}</span><span data-etat="calme">${c.t('accueil.tre.etatCalme')}</span></p>
      <figcaption>${c.t('tre.quoi.legende')}</figcaption>
    </figure>
  </div>
</section>

<section class="section fondateur theme-lilas" id="fondateur">
  <div class="conteneur fondateur-grille">
    ${c.media({ nom: 'berceli', alt: c.s('tre.fondateur.alt'), classe: 'fondateur-media', ratio: '1 / 1', sizes: '200px', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre">${c.t('tre.fondateur.surtitre')}</p>
      <h2 class="titre-m" data-anime="lignes">${c.t('tre.fondateur.titre')}</h2>
      <p>${c.t('tre.fondateur.texte')}</p>
    </div>
  </div>
</section>

<section class="section tre-formats" id="formats">
  <div class="conteneur section-tete">
    <p class="surtitre">${c.t('tre.formats.surtitre')}</p>
    <h2 class="titre-l" data-anime="lignes">${c.t('tre.formats.titre1')} <em>${c.t('tre.formats.titre2')}</em></h2>
  </div>
  <div class="conteneur tre-formats-grille">
    ${c.media({ nom: 'tre-position', alt: img('tre-position').alt, classe: 'tre-formats-media', sizes: '(max-width: 760px) 92vw, 30vw', attrs: 'data-fx="parallaxe"' })}
    <ol class="formats-liste" data-anime="cascade">
      <li><strong>${c.t('tre.formats.prive')}</strong><span>${c.t('tre.formats.priveTexte')}</span>${c.lien('contact', { ancre: 'formulaire', params: 'objet=prive', classe: 'lien-fleche', texte: c.t('approches.lienPrive') })}</li>
      <li><strong>${c.t('tre.formats.atelier')}</strong><span>${c.t('tre.formats.atelierTexte')}</span><a class="lien-fleche" href="#dates" data-sans-transition>${c.t('approches.lienActivites')}</a></li>
      <li><strong>${c.t('tre.formats.session')}</strong><span>${c.t('tre.formats.sessionTexte')}</span>${c.lien('activites', { classe: 'lien-fleche', texte: c.t('approches.lienActivites') })}</li>
      <li><strong>${c.t('tre.formats.organisme')}</strong><span>${c.t('tre.formats.organismeTexte')}</span>${c.lien('contact', { ancre: 'formulaire', params: 'objet=entreprise', classe: 'lien-fleche', texte: c.t('commun.ecrire') })}</li>
    </ol>
  </div>
</section>

<section class="section dates dates--tre theme-lilas" id="dates">
  <div class="conteneur dates-tete">
    <div>
      <p class="surtitre">${c.t('tre.dates.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('tre.dates.titre')}</h2>
    </div>
  </div>
  <ol class="conteneur dates-grille dates-grille--3" data-anime="cascade">
    ${dates.map((d) => carteDate(c, d))}
  </ol>
  <p class="conteneur lien-suite">${c.lien('activites', { classe: 'lien-fleche', texte: c.t('tre.dates.lien') })}</p>
</section>

<section class="section temoignages temoignages--tous" id="temoignages">
  <div class="conteneur section-tete">
    <p class="surtitre">${c.t('tre.temoignages.surtitre')}</p>
    <h2 class="titre-l" data-anime="lignes">${c.t('tre.temoignages.titre1')} <em>${c.t('tre.temoignages.titre2')}</em></h2>
  </div>
  <ul class="conteneur temoignages-mur">
    ${c.donnees.temoignages.map((t, i) => html`<li class="temoignage temoignage--${i}" style="--i:${i}" data-effet="temoignages-vague"><blockquote><p>${'« ' + t.texte + ' »'}</p></blockquote><p class="temoignage-qui"><strong>${t.nom}</strong>, ${t.ville}</p></li>`)}
  </ul>
  <p class="conteneur petit">${c.t('tre.temoignages.note')}</p>
</section>

${appelFinal(c, { titre1: c.t('tre.fin.titre1'), titre2: c.t('tre.fin.titre2'), texte: c.t('tre.fin.texte'), lotus: lotus({ classe: 'lotus-vivant', epaisseur: 18 }) })}
`;
};
