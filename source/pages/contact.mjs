/* Contact. Ouverture scindée courte (titre, téléphone, courriel, tasse) ; formulaire simulé prérempli par l'adresse
   (?objet=activite&activite=…) ; lieux et adresses ; réseaux. */
import { html } from '../../outils/gabarit.mjs';
import { lotus } from '../gabarits/commun.mjs';
import { enrichir } from '../gabarits/blocs.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/contact-ouverture-1280.webp' };

export default (c) => {
  const k = c.site.contact;
  const activites = [...c.donnees.activites].sort((a, b) => new Date(a.debut) - new Date(b.debut)).map((a) => enrichir(c, a));
  return html`
<section class="page-ouverture ouverture-scindee" id="debut">
  <div class="conteneur ouverture-scindee-grille">
    <div>
      <p class="surtitre" data-anime="gsap">${c.t('contact.tete.surtitre')}</p>
      <h1 class="titre-xl ouverture-titre" data-anime="gsap">
        <span class="masque-ligne"><span class="ouv-ligne">${c.t('contact.tete.titre1')}</span></span>
        <span class="masque-ligne"><span class="ouv-ligne"><em>${c.t('contact.tete.titre2')}</em></span></span>
      </h1>
      <p class="chapo masque-ecran-tres-bas" data-anime="gsap">${c.t('contact.tete.texte')}</p>
      <dl class="coordonnees" data-anime="gsap">
        <div><dt>${c.t('contact.tete.telephone')}</dt><dd><a class="bouton" href="tel:${k.telephoneLien}" data-action-principale>${k.telephone}</a></dd></div>
        <div data-info-cle><dt>${c.t('contact.tete.courriel')}</dt><dd><a class="selectionnable" href="mailto:${k.email}">${k.email}</a></dd></div>
      </dl>
    </div>
    <div class="ouverture-scindee-image">
      ${c.media({ nom: 'grok/contact-ouverture', alt: c.s('contact.tete.alt'), priorite: true, classe: 'scindee-media', sizes: '(max-width: 760px) 70vw, 26vw', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="6"' })}
      <span class="vapeur" aria-hidden="true" data-boucle-css><i data-effet="vapeur"></i><i data-effet="vapeur"></i><i data-effet="vapeur"></i></span>
    </div>
  </div>
</section>

<section class="section formulaire-section theme-lilas" id="formulaire">
  <div class="conteneur deux-colonnes deux-colonnes--formulaire">
    <div>
      <h2 class="titre-l" data-anime="lignes">${c.t('contact.formulaire.titre')}</h2>
      <p>${c.t('contact.formulaire.etapes')}</p>
      <div class="formulaire-lotus" data-effet="lotus-fin">${lotus({ classe: 'lotus-vivant', epaisseur: 18 })}</div>
    </div>
    <form data-formulaire class="formulaire" action="#" novalidate>
      <div class="champ"><label for="f-objet">${c.t('contact.formulaire.sujet')}</label>
        <select id="f-objet" name="objet">
          <option value="activite">${c.t('contact.formulaire.sujetActivite')}</option>
          <option value="prive">${c.t('contact.formulaire.sujetPrive')}</option>
          <option value="entreprise">${c.t('contact.formulaire.sujetEntreprise')}</option>
          <option value="studio">${c.t('contact.formulaire.sujetStudio')}</option>
          <option value="autre" selected>${c.t('contact.formulaire.sujetAutre')}</option>
        </select></div>
      <div class="champ" data-champ-activite><label for="f-activite">${c.t('contact.formulaire.activite')}</label>
        <select id="f-activite" name="activite">
          <option value="">${c.t('contact.formulaire.activiteAucune')}</option>
          ${activites.map((a) => html`<option value="${a.id}" data-fin="${a.fin}">${a.titre} · ${a.jourCourt} · ${a.lieuCourt} · ${a.prix}</option>`)}
        </select></div>
      <div class="champ"><label for="f-nom">${c.t('contact.formulaire.nom')}</label><input id="f-nom" name="nom" autocomplete="name" required></div>
      <div class="champ"><label for="f-email">${c.t('contact.formulaire.email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ"><label for="f-tel">${c.t('contact.formulaire.tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel"></div>
      <div class="champ"><label for="f-message">${c.t('contact.formulaire.message')}</label><textarea id="f-message" name="message" rows="5" required></textarea></div>
      <p class="mention-donnees">${c.t('contact.formulaire.donnees')}</p>
      <button type="submit" class="bouton">${c.t('contact.formulaire.envoyer')}</button>
      <p data-message-envoi role="status" tabindex="-1" hidden data-texte="${c.s('contact.formulaire.simule')}"></p>
    </form>
  </div>
</section>

<section class="section contact-lieux" id="lieux">
  <div class="conteneur section-tete">
    <p class="surtitre">${c.t('contact.lieux.surtitre')}</p>
    <h2 class="titre-l" data-anime="lignes">${c.t('contact.lieux.titre1')} <em>${c.t('contact.lieux.titre2')}</em></h2>
  </div>
  <ul class="conteneur adresses" data-anime="cascade">
    ${c.donnees.lieux.map((l) => html`<li class="adresse"><span class="adresse-point adresse-point--${l.id}" aria-hidden="true"></span><h3>${l.nom}</h3>${l.precision ? html`<p class="adresse-precision">${l.precision}</p>` : ''}<p>${l.adresse}<br>${l.ville}</p><p class="lieu-quoi">${l.quoi}</p></li>`)}
  </ul>
  <div class="conteneur reseaux">
    <p><strong>${c.t('contact.reseaux.titre')}</strong> ${c.t('contact.reseaux.texte')}</p>
    <p class="reseaux-liens">
      <a class="bouton bouton--contour" href="${k.facebook}" target="_blank" rel="noopener">${c.t('commun.facebook')}<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a>
      <a class="bouton bouton--contour" href="${k.youtube}" target="_blank" rel="noopener">${c.t('commun.youtube')}<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a>
    </p>
  </div>
</section>
`;
};
