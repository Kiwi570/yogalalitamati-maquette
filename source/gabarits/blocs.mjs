/* Blocs partagés entre les pages : prochaines dates (calculées à la génération, recalculées au jour réel par site.js),
   carte de date, appel final. */
import { html } from '../../outils/gabarit.mjs';

const fJour = new Intl.DateTimeFormat('fr-CA', { weekday: 'short', day: 'numeric', month: 'short' });
const fNum = new Intl.DateTimeFormat('fr-CA', { day: 'numeric' });
const fMois = new Intl.DateTimeFormat('fr-CA', { month: 'short' });
const fSem = new Intl.DateTimeFormat('fr-CA', { weekday: 'long' });

export function enrichir(c, a) {
  const lieu = c.donnees.lieux.find((l) => l.id === a.lieu) || {};
  const d = new Date(a.debut);
  return {
    ...a,
    lieuCourt: a.enLigne && a.lieu !== 'en-ligne' ? `${lieu.court} ou en ligne` : lieu.court,
    lieuNom: lieu.nom,
    jourCourt: fJour.format(d).replace(/\./g, ''),
    num: fNum.format(d),
    mois: fMois.format(d).replace('.', ''),
    semaine: fSem.format(d),
    jours: Math.max(0, Math.ceil((d - Date.now()) / 86400000)),
  };
}

/* Toutes les activités à venir à la génération, triées ; les n premières visibles (site.js refait le tri au jour réel). */
export function prochaines(c, n, filtre = () => true) {
  const maintenant = Date.now();
  return c.donnees.activites
    .filter((a) => new Date(a.fin).getTime() > maintenant && filtre(a))
    .sort((a, b) => new Date(a.debut) - new Date(b.debut))
    .map((a, i) => ({ ...enrichir(c, a), visible: i < n }));
}

export function carteDate(c, d) {
  return html`<li class="date-carte date-carte--${d.type}" data-date data-debut="${d.debut}" data-fin="${d.fin}" data-resume="${d.titre}, ${d.jourCourt}, ${d.lieuCourt}"${d.visible ? '' : html` hidden`}>
  <p class="date-quand" aria-hidden="true"><span class="date-num">${d.num}</span><span class="date-mois">${d.mois}</span><span class="date-jour">${d.semaine}</span></p>
  <h3 class="date-titre">${d.titre}</h3>
  <p class="date-sous">${d.sousTitre}</p>
  <p class="date-infos">${d.horaire}<br>${d.lieuCourt}</p>
  <p class="date-prix" data-prix><strong>${d.prix}</strong> <span>${c.t('commun.taxes')}</span></p>
  ${c.lien('contact', { ancre: 'formulaire', params: `objet=activite&activite=${d.id}`, classe: 'lien-fleche', texte: c.t('commun.inscrire'), attrs: `aria-label="${c.s('commun.inscrire')} : ${d.titre}, ${d.jourCourt}"` })}
</li>`;
}

/* Appel final des pages intérieures : lotus vivant, titre, texte, deux actions. */
export function appelFinal(c, { titre1, titre2, texte, lotus }) {
  return html`<section class="section fin fin--court theme-prune" id="fin">
  <div class="conteneur fin-court-grille">
    <div class="fin-lotus" data-effet="lotus-fin">${lotus}</div>
    <div>
      <h2 class="titre-l" data-anime="lignes">${titre1} <em>${titre2}</em></h2>
      <p>${texte}</p>
      <p class="fin-actions">
        ${c.lien('contact', { classe: 'bouton bouton--lime', texte: c.t('commun.ecrire'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      </p>
    </div>
  </div>
</section>`;
}
