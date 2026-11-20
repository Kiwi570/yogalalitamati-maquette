/* Accueil de Lalita Mati : direction « Relâcher ».
   Ouverture scindée (titre, photo, lotus du logo qui reçoit l'intro), prochaines dates, cinq approches,
   scène TRE (les vagues du logo pilotées au défilement), formats, lieux, Isabelle, témoignages, citation et appel. */
import { html } from '../../outils/gabarit.mjs';
import { lotus } from '../gabarits/commun.mjs';
import { prochaines, carteDate } from '../gabarits/blocs.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/accueil-ouverture-1280.webp' };

export default (c) => {
  const dates = prochaines(c, 4);
  const premiere = dates[0];
  const ans = new Date().getFullYear() - 2006;
  return html`
<section class="hero" id="debut">
  <div class="hero-texte">
    <p class="surtitre" data-anime="gsap">${c.t('accueil.hero.surtitre')}</p>
    <h1 class="hero-titre titre-xl" data-anime="gsap">
      <span class="masque-ligne"><span class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span>
      <span class="masque-ligne"><span class="hero-ligne"><em>${c.t('accueil.hero.titre2')}</em></span></span>
      <span class="masque-ligne"><span class="hero-ligne">${c.t('accueil.hero.titre3')}</span></span>
    </h1>
    <p class="hero-intro masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <div class="hero-actions" data-anime="gsap">
      ${c.lien('activites', { classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('contact', { classe: 'bouton bouton--contour', texte: c.t('commun.ecrire') })}
    </div>
    ${premiere ? html`<p class="hero-info" data-info-cle data-anime="gsap">
      <span class="pastille-vivante" aria-hidden="true"></span>
      <span>${c.t('accueil.hero.prochain') }${' : '}${c.lien('activites', { ancre: 'agenda', texte: html`<strong>${premiere.titre}</strong>, ${premiere.jourCourt}, ${premiere.lieuCourt}` })}</span>
    </p>` : ''}
  </div>
  <div class="hero-visuel">
    ${c.media({ nom: 'grok/accueil-ouverture', alt: c.s('pages.accueil.partageAlt'), priorite: true, classe: 'hero-media', sizes: '(max-width: 760px) 92vw, 44vw', attrs: 'data-fx="parallaxe" data-fx-force="6" data-boucle-css' })}
    <div class="hero-lotus" data-iris-centre="disque" data-effet="lotus" data-boucle-css>${lotus({ classe: 'lotus-vivant', epaisseur: 20 })}</div>
    <span class="balle balle--lilas hero-balle" aria-hidden="true" data-boucle-css></span>
  </div>
</section>

<section class="section dates" id="dates">
  <div class="conteneur dates-tete">
    <div>
      <p class="surtitre">${c.t('accueil.dates.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('accueil.dates.titre1')} <em>${c.t('accueil.dates.titre2')}</em></h2>
      <p class="chapo">${c.t('accueil.dates.texte')}</p>
    </div>
    ${premiere ? html`<p class="compte-jours"><strong class="compte-chiffre" data-jours data-effet="compte-jours">${premiere.jours}</strong><span>${c.t('accueil.dates.jours')}</span></p>` : ''}
  </div>
  <div class="conteneur dates-defile" tabindex="0" role="region" aria-label="${c.s('accueil.dates.titre1')} ${c.s('accueil.dates.titre2')}">
    <ol class="dates-grille" data-anime="cascade">
      ${dates.map((d) => carteDate(c, d))}
    </ol>
  </div>
  <p class="conteneur lien-suite">${c.lien('activites', { classe: 'lien-fleche', texte: c.t('accueil.dates.lien') })}</p>
</section>

<section class="section approches" id="approches">
  <div class="conteneur section-tete">
    <p class="surtitre">${c.t('accueil.approches.surtitre')}</p>
    <h2 class="titre-l" data-anime="lignes">${c.t('accueil.approches.titre1')}<em>${c.t('accueil.approches.titre2')}</em> ${c.t('accueil.approches.titre3')}</h2>
    <p class="chapo">${c.t('accueil.approches.texte')}</p>
  </div>
  <ul class="conteneur approches-grille">
    ${c.donnees.approches.map((a, i) => html`<li class="approche-carte" style="--i:${i}" data-effet="relachement">
      ${c.lien('approches', { ancre: a.id, classe: 'approche-lien', texte: html`
        ${c.media({ nom: a.image, alt: a.imageAlt, classe: 'approche-media', sizes: '(max-width: 760px) 80vw, (max-width: 1100px) 33vw, 20vw' })}
        <span class="approche-num">0${i + 1}</span>
        <span class="approche-titre">${a.titre}</span>
        <span class="approche-accroche">${a.accroche}</span>` })}
    </li>`)}
  </ul>
  <p class="conteneur lien-suite">${c.lien('approches', { classe: 'lien-fleche', texte: c.t('accueil.approches.lien') })}</p>
</section>

<section class="section scene-tre theme-prune" id="tre">
  <div class="conteneur scene-tre-grille">
    <div class="scene-tre-texte">
      <p class="surtitre">${c.t('accueil.tre.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('accueil.tre.titre1')} ${c.t('accueil.tre.titre2')} <em>${c.t('accueil.tre.titre3')}</em></h2>
      <p>${c.t('accueil.tre.texte')}</p>
      <ol class="etapes" data-anime="cascade">
        <li><span class="etape-num">1</span><strong>${c.t('accueil.tre.etape1')}</strong><span>${c.t('accueil.tre.etape1Texte')}</span></li>
        <li><span class="etape-num">2</span><strong>${c.t('accueil.tre.etape2')}</strong><span>${c.t('accueil.tre.etape2Texte')}</span></li>
        <li><span class="etape-num">3</span><strong>${c.t('accueil.tre.etape3')}</strong><span>${c.t('accueil.tre.etape3Texte')}</span></li>
      </ol>
      <p class="petit">${c.t('accueil.tre.fondateur')} ${c.t('commun.sante')}</p>
      <p>${c.lien('methode-tre', { classe: 'bouton bouton--lime', texte: c.t('accueil.tre.action') })}</p>
    </div>
    <div class="scene-tre-visuel" data-visuel aria-hidden="true">
      <svg class="vagues-tre" viewBox="0 0 600 420" preserveAspectRatio="xMidYMid meet" data-effet="vagues-tre">
        <path class="vt vt-1" d="M20 150 L580 150"/><path class="vt vt-2" d="M20 210 L580 210"/><path class="vt vt-3" d="M20 270 L580 270"/>
      </svg>
      <p class="vagues-etat"><span data-etat="tension">${c.t('accueil.tre.etatTension')}</span><span data-etat="tremblement">${c.t('accueil.tre.etatTremblement')}</span><span data-etat="calme">${c.t('accueil.tre.etatCalme')}</span></p>
    </div>
  </div>
</section>

<section class="section formats" id="formats">
  <div class="conteneur section-tete section-tete--ligne">
    <div>
      <p class="surtitre">${c.t('accueil.formats.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('accueil.formats.titre1')} <em>${c.t('accueil.formats.titre2')}</em></h2>
    </div>
    <p class="chapo">${c.t('accueil.formats.texte')}</p>
  </div>
  <div class="balles-piste" aria-hidden="true">
    <span class="balle balle--lilas" data-effet="balles"></span><span class="balle balle--turquoise" data-effet="balles"></span><span class="balle balle--lime" data-effet="balles"></span><span class="balle balle--ardoise" data-effet="balles"></span>
  </div>
  <ul class="conteneur formats-grille" data-anime="cascade">
    ${c.donnees.formats.map((f) => html`<li class="format-carte format-carte--${f.id}">
      ${c.media({ nom: f.image, alt: f.alt, classe: 'format-media', sizes: '(max-width: 760px) 92vw, 30vw' })}
      <h3>${f.titre}</h3>
      <p>${f.texte}</p>
      ${c.lien(f.lien, { params: f.params, classe: 'lien-fleche', texte: f.action })}
    </li>`)}
  </ul>
</section>

<section class="section lieux theme-lilas" id="lieux">
  <div class="conteneur lieux-grille">
    <div>
      <p class="surtitre">${c.t('accueil.lieux.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('accueil.lieux.titre1')} <em>${c.t('accueil.lieux.titre2')}</em></h2>
      <p class="chapo">${c.t('accueil.lieux.texte')}</p>
      <ul class="lieux-liste" data-anime="cascade">
        ${c.donnees.lieux.filter((l) => l.id !== 'simhananda').map((l) => html`<li data-lieu="${l.id}"><strong>${l.court}</strong><span>${l.quoi}</span></li>`)}
      </ul>
    </div>
    <figure class="carte-lieux" data-effet="lieux" data-visuel>
      ${carteSvg(c)}
      <figcaption>${c.t('commun.illustratif')}</figcaption>
    </figure>
  </div>
</section>

<section class="section isabelle" id="isabelle">
  <div class="conteneur isabelle-grille">
    ${c.media({ nom: 'isabelle-portrait', alt: c.s('apropos.tete.alt'), classe: 'isabelle-media', ratio: '4 / 5', cadrage: '52% 28%', sizes: '(max-width: 760px) 70vw, 26vw', attrs: 'data-anime="rideau"', legende: c.t('accueil.isabelle.credit') })}
    <div>
      <p class="surtitre">${c.t('accueil.isabelle.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.t('accueil.isabelle.titre1')} <em>${c.t('accueil.isabelle.titre2')}</em></h2>
      <p>${c.t('accueil.isabelle.texte')}</p>
      <dl class="isabelle-chiffres">
        <div><dt><span class="gros-chiffre" data-compteur="${ans}">${ans}</span></dt><dd>${c.t('accueil.isabelle.ans')}</dd></div>
        <div><dt><span class="gros-chiffre" data-compteur="${c.donnees.formations.liste.length}">${c.donnees.formations.liste.length}</span></dt><dd>${c.t('accueil.isabelle.formations')}</dd></div>
      </dl>
      <ul class="puces" data-anime="cascade">
        <li>${c.t('accueil.isabelle.titre1Role')}</li><li>${c.t('accueil.isabelle.titre2Role')}</li><li>${c.t('accueil.isabelle.titre3Role')}</li><li>${c.t('accueil.isabelle.titre4Role')}</li>
      </ul>
      <p>${c.lien('a-propos', { classe: 'lien-fleche', texte: c.t('accueil.isabelle.lien') })}</p>
    </div>
  </div>
</section>

<section class="section temoignages" id="temoignages">
  <div class="conteneur section-tete">
    <p class="surtitre">${c.t('accueil.temoignages.surtitre')}</p>
    <h2 class="titre-l" data-anime="lignes">${c.t('accueil.temoignages.titre')}</h2>
    <p class="chapo">${c.t('accueil.temoignages.texte')}</p>
  </div>
  <div class="conteneur temoignages-grille" data-anime="cascade">
    ${c.donnees.temoignages.slice(0, 3).map((t) => html`<figure class="temoignage">
      <blockquote><p>${'« ' + t.texte + ' »'}</p></blockquote>
      <figcaption><strong>${t.nom}</strong>, ${t.ville}</figcaption>
    </figure>`)}
  </div>
  <p class="conteneur lien-suite">${c.lien('methode-tre', { ancre: 'temoignages', classe: 'lien-fleche', texte: c.t('accueil.temoignages.lien') })}</p>
</section>

<section class="section fin theme-prune" id="fin">
  <div class="conteneur fin-grille">
    <figure class="citation">
      <blockquote><p data-anime="mots">${'« ' + c.s('accueil.fin.citation') + ' »'}</p></blockquote>
      <figcaption>${c.t('accueil.fin.auteur')}</figcaption>
    </figure>
    <div class="fin-appel">
      <div class="fin-lotus" data-effet="lotus-fin">${lotus({ classe: 'lotus-vivant', epaisseur: 18 })}</div>
      <h2 class="titre-l" data-anime="lignes">${c.t('accueil.fin.titre1')} <em>${c.t('accueil.fin.titre2')}</em></h2>
      <p>${c.t('accueil.fin.texte')}</p>
      <p class="fin-actions">
        ${c.lien('contact', { classe: 'bouton bouton--lime', texte: c.t('commun.ecrire'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      </p>
      <p class="petit">${c.s('accueil.fin.courriel') + ' : '}<span class="selectionnable">${c.site.contact.email}</span></p>
    </div>
  </div>
</section>
`;
};

/* Carte schématique des lieux : fleuve, rivière Richelieu, frontière, lieux qui s'allument (site.js). */
function carteSvg(c) {
  const lieux = c.donnees.lieux.filter((l) => l.carte !== false);
  return html`<svg class="carte-svg" viewBox="0 0 600 420" role="img" aria-label="${c.s('accueil.lieux.titre1')} ${c.s('accueil.lieux.titre2')}">
  <rect x="0" y="0" width="600" height="420" rx="24" class="carte-fond"/>
  <path class="carte-eau" d="M0 150 C 40 128 70 100 92 76 C 112 54 120 30 132 0" />
  <path class="carte-riviere" d="M168 420 C 176 340 186 260 195 196 C 204 140 220 80 236 0" />
  <path class="carte-lac" d="M584 300 C 596 330 600 370 596 420 L 600 420 L 600 300 Z" />
  <path class="carte-frontiere" d="M0 392 L600 392" />
  <text x="18" y="410" class="carte-etiquette carte-etiquette--douce">${c.t('accueil.lieux.frontiere')}</text>
  <text x="210" y="300" class="carte-etiquette carte-etiquette--douce" transform="rotate(-84 210 300)">${c.t('accueil.lieux.riviere')}</text>
  <text x="420" y="250" class="carte-etiquette carte-etiquette--region">${c.t('accueil.lieux.estrie')}</text>
  <circle cx="62" cy="86" r="5" class="carte-ville"/><text x="22" y="112" class="carte-etiquette">${c.t('accueil.lieux.montreal')}</text>
  ${lieux.map((l, i) => html`<g class="carte-lieu" data-lieu="${l.id}" style="--i:${i}">
    <circle cx="${l.x}" cy="${l.y}" r="22" class="carte-halo"/>
    <circle cx="${l.x}" cy="${l.y}" r="9" class="carte-point" data-repere/>
    <text x="${l.x > 400 ? l.x - 16 : l.x + 16}" y="${l.y - 16}" text-anchor="${l.x > 400 ? 'end' : 'start'}" class="carte-etiquette carte-etiquette--lieu">${l.court}</text>
  </g>`)}
</svg>`;
}
