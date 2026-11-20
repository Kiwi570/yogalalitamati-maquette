/* Page 404 aux couleurs de Lalita Mati : tapis vide, balle qui roule, chemins utiles. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="page-ouverture introuvable" id="debut">
  <div class="introuvable-image" data-iris-centre>
    ${c.media({ nom: 'grok/page-404', alt: c.s('introuvable.alt'), priorite: true, classe: 'introuvable-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="5"' })}
  </div>
  <div class="conteneur introuvable-texte">
    <h1 class="titre-xl ouverture-titre" data-anime="gsap">
      <span class="masque-ligne"><span class="ouv-ligne">${c.t('introuvable.titre1')}</span></span>
      <span class="masque-ligne"><span class="ouv-ligne"><em>${c.t('introuvable.titre2')}</em></span></span>
    </h1>
    <p class="chapo" data-anime="gsap">${c.t('introuvable.texte')}</p>
    <p class="ouverture-actions" data-anime="gsap">
      ${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}
      <span class="introuvable-liens" data-info-cle>${c.lien('activites')} · ${c.lien('approches')} · ${c.lien('contact')}</span>
    </p>
  </div>
</section>
`;
