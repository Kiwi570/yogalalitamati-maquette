/* Activités à venir (page de catégorie : agenda). Ouverture « grand titre puis bandeau » ; agenda du module
   agenda-des-dates (statuts au jour réel, compte à rebours, .ics, inscription préremplie), filtres par type et par lieu ;
   déroulé d'une session, Pauses en trois temps, questions pratiques, appel. */
import { html } from '../../outils/gabarit.mjs';
import { lotus } from '../gabarits/commun.mjs';
import { enrichir, appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'activites', fichier: 'activites', imagePartage: 'grok/activites-ouverture-1280.webp' };

const TYPES = { tre: 'typeAtelier', pause: 'typePause', yoga: 'typeYoga' };
const typeDe = (a) => (a.type === 'tre' && /Exploration/.test(a.titre) ? 'typeExploration' : TYPES[a.type]);
const zoneDe = (a) => (a.lieu === 'potton' ? 'estrie' : a.lieu === 'en-ligne' ? 'en-ligne' : 'saint-jean');

const textesAgenda = (c) => Object.fromEntries(['toutes', 'ajouter', 'ajoute', 'reserver', 'attente', 'complet', 'encours', 'aujourdhui', 'cesoir', 'demain', 'aucune', 'tampon'].map((k) => [k === 'toutes' ? 'tous' : k, c.s('activites.agenda.' + k)]));
const typesAgenda = (c) => ({ atelier: c.s('activites.agenda.typeAtelier'), pause: c.s('activites.agenda.typePause'), yoga: c.s('activites.agenda.typeYoga'), exploration: c.s('activites.agenda.typeExploration') });

export default (c) => {
  const liste = [...c.donnees.activites].sort((a, b) => new Date(a.debut) - new Date(b.debut)).map((a) => enrichir(c, a));
  const fQuand = new Intl.DateTimeFormat('fr-CA', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  return html`
<section class="page-ouverture ouverture-bandeau" id="debut">
  <div class="conteneur ouverture-bandeau-tete">
    <p class="surtitre" data-anime="gsap">${c.t('activites.tete.surtitre')}</p>
    <h1 class="titre-xl ouverture-titre" data-anime="gsap">
      <span class="masque-ligne"><span class="ouv-ligne">${c.t('activites.tete.titre1')} <em>${c.t('activites.tete.titre2')}</em></span></span>
      <span class="masque-ligne"><span class="ouv-ligne">${c.t('activites.tete.titre3')}</span></span>
    </h1>
    <div class="ouverture-bandeau-pied" data-anime="gsap">
      <p class="chapo masque-ecran-tres-bas">${c.t('activites.tete.texte')}</p>
      <p class="ouverture-actions">
        <a class="bouton" href="#agenda" data-action-principale data-sans-transition>${c.t('activites.tete.action')}</a>
        <span class="info-cle" data-info-cle><span class="pastille-vivante" aria-hidden="true"></span><span data-prochaine-texte>${liste.find((a) => new Date(a.fin) > Date.now()) ? html`${c.s('accueil.hero.prochain') + ' : '}<strong>${liste.find((a) => new Date(a.fin) > Date.now()).titre}</strong>, ${liste.find((a) => new Date(a.fin) > Date.now()).jourCourt}` : ''}</span></span>
      </p>
    </div>
  </div>
  <div class="ouverture-bandeau-image" data-iris-centre data-effet="bandeau-ouverture">
    ${c.media({ nom: 'grok/activites-ouverture', alt: c.s('activites.tete.alt'), priorite: true, classe: 'bandeau-media', sizes: '100vw' })}
  </div>
</section>

<section class="section agd" id="agenda" data-module="agenda-des-dates" aria-labelledby="agd-titre" data-textes="${JSON.stringify(textesAgenda(c))}" data-types="${JSON.stringify(typesAgenda(c))}">
  <div class="conteneur">
    <div class="agd__tete">
      <h2 class="agd__h2 titre-l" id="agd-titre" data-anime="lignes">${c.t('activites.agenda.titre')}</h2>
      <p class="agd__prochaine" data-prochaine aria-live="polite"></p>
    </div>
    <div class="agd__outils">
      <div class="agd__filtres" role="group" aria-label="${c.s('activites.agenda.types')}"></div>
      <p class="agd__compte" data-compte aria-live="polite"></p>
    </div>
    <div class="agd-lieux" role="group" aria-label="${c.s('activites.agenda.lieux')}" data-filtre-lieux hidden>
      <button type="button" class="agd__filtre" data-zone="" aria-pressed="true">${c.t('activites.agenda.tousLieux')}</button>
      <button type="button" class="agd__filtre" data-zone="saint-jean" aria-pressed="false">${c.t('activites.agenda.saintJean')}</button>
      <button type="button" class="agd__filtre" data-zone="estrie" aria-pressed="false">${c.t('activites.agenda.estrie')}</button>
      <button type="button" class="agd__filtre" data-zone="en-ligne" aria-pressed="false">${c.t('activites.agenda.enLigne')}</button>
    </div>
    <div class="agd__cadre">
      <ol class="agd__liste">
        ${liste.map((a) => html`<li class="agd__date" id="date-${a.id}" data-debut="${a.debut}" data-fin="${a.fin}" data-type="${c.s('activites.agenda.' + typeDe(a))}" data-zone="${zoneDe(a)}" data-en-ligne="${a.enLigne ? 'oui' : 'non'}" data-lieu="${a.lieuNom}" data-reserver="${c.url('contact', 'formulaire', `objet=activite&activite=${a.id}`)}">
          <h3 class="agd__titre">${a.titre}</h3>
          <time class="agd__quand" datetime="${a.debut}">${fQuand.format(new Date(a.debut))}</time>
          <p class="agd__sous">${a.sousTitre}</p>
          <p class="agd__lieu">${/^Jeudis/.test(a.horaire) ? a.horaire : a.horaire.split(', ').slice(1).join(', ')} · ${a.lieuCourt}</p>
          <p class="agd__texte">${a.texte}</p>
          <p class="agd__prix" data-prix><strong>${a.prix}</strong> ${c.t('commun.taxes')} <span>(${c.t('commun.avantTaxes', { prix: a.prixAvantTaxes })})</span></p>
        </li>`)}
      </ol>
    </div>
    <p class="agd__vide" hidden>${c.t('activites.agenda.vide')}</p>
  </div>
</section>

<section class="section session theme-lilas" id="session">
  <div class="conteneur deux-colonnes">
    <div>
      <p class="surtitre">${c.t('activites.session.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('activites.session.titre1')} <em>${c.t('activites.session.titre2')}</em></h2>
      <p class="chapo">${c.t('activites.session.texte')}</p>
      <ul class="puces" data-anime="cascade">
        <li>${c.t('activites.session.point1')}</li><li>${c.t('activites.session.point2')}</li><li>${c.t('activites.session.point3')}</li><li>${c.t('activites.session.point4')}</li>
      </ul>
    </div>
    <div class="session-visuels">
      ${c.media({ nom: 'groupe-sol', alt: c.s('activites.session.alt'), classe: 'session-media session-media--1', sizes: '(max-width: 760px) 92vw, 34vw', attrs: 'data-anime="rideau"' })}
      ${c.media({ nom: 'en-ligne', alt: c.donnees.images['en-ligne'].alt, classe: 'session-media session-media--2', sizes: '(max-width: 760px) 60vw, 20vw', attrs: 'data-fx="vitesse"' })}
    </div>
  </div>
</section>

<section class="section pause" id="pauses">
  <div class="conteneur deux-colonnes deux-colonnes--inverse">
    ${c.media({ nom: 'grok/activites-pause', alt: c.s('activites.pause.alt'), classe: 'pause-media', sizes: '(max-width: 760px) 92vw, 46vw', attrs: 'data-fx="parallaxe"' })}
    <div>
      <p class="surtitre">${c.t('activites.pause.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('activites.pause.titre1')} <em>${c.t('activites.pause.titre2')}</em></h2>
      <p>${c.t('activites.pause.texte')}</p>
      <ol class="temps">
        <li data-effet="temps"><span class="temps-num">1</span><strong>${c.t('activites.pause.temps1')}</strong><span>${c.t('activites.pause.temps1Texte')}</span></li>
        <li data-effet="temps"><span class="temps-num">2</span><strong>${c.t('activites.pause.temps2')}</strong><span>${c.t('activites.pause.temps2Texte')}</span></li>
        <li data-effet="temps"><span class="temps-num">3</span><strong>${c.t('activites.pause.temps3')}</strong><span>${c.t('activites.pause.temps3Texte')}</span></li>
      </ol>
    </div>
  </div>
</section>

<section class="section faq" id="faq">
  <div class="conteneur deux-colonnes deux-colonnes--faq">
    <div>
      <h2 class="titre-l" data-anime="lignes">${c.t('activites.faq.titre')}</h2>
      <div class="faq-liste" data-anime="cascade">
        ${c.donnees.faq.map((f) => html`<details class="faq-item"><summary>${f.q}</summary><p>${f.r}</p></details>`)}
      </div>
    </div>
    ${c.media({ nom: 'balles-pied', alt: c.donnees.images['balles-pied'].alt, classe: 'faq-media', sizes: '(max-width: 760px) 92vw, 34vw', attrs: 'data-fx="zoom"' })}
  </div>
</section>

${appelFinal(c, { titre1: c.t('activites.fin.titre1'), titre2: c.t('activites.fin.titre2'), texte: c.t('activites.fin.texte'), lotus: lotus({ classe: 'lotus-vivant', epaisseur: 18 }) })}
`;
};
