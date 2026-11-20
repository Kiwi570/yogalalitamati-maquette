/* Effets propres à Lalita Mati (direction « Relâcher »). Le socle gère l'ouverture, les transitions, l'en-tête,
   le menu, les boucles, les mesures et la bibliothèque d'effets posés par attributs dans les pages.
   Ici : les vagues du logo (elles tremblent puis s'apaisent, comme le TRE), l'intro qui finit sur le lotus de la page,
   et les effets du plan, chacun marqué data-effet="nom" : lotus, relachement, vagues-tre, balles, lieux, compte-jours,
   chiffre-sept, temps, frise, livres, temoignages-vague, balle-gestes, lotus-fin, vapeur. */
import { demarrer, boucle, etat, versObjet } from './socle/index.js?v=1';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const petit = () => window.matchMedia('(max-width: 760px)').matches;

/* ---------- Vagues : une onde dessinée entre x0 et x1, enveloppe douce aux extrémités ---------- */
function onde(x0, x1, y, amp, periodes, phase, n = 48, enveloppe = 0) {
  let d = '';
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const env = enveloppe ? Math.pow(Math.sin(Math.PI * t), enveloppe) : 1;
    const yy = y - amp * env * Math.sin(t * periodes * Math.PI * 2 + phase);
    d += (i ? ' L' : 'M') + (x0 + (x1 - x0) * t).toFixed(1) + ' ' + yy.toFixed(1);
  }
  return d;
}

/* Les deux vagues d'un lotus : état { amp, per, vit } tweenable ; dessin piloté par le temps (même vitesse partout). */
const LOTUS = new Map();
function vaguesLotus(svg, etatDepart = { amp: 11, per: 3, vit: 1.2 }) {
  if (LOTUS.has(svg)) return LOTUS.get(svg);
  const v1 = svg.querySelector('.lotus-vague--1'), v2 = svg.querySelector('.lotus-vague--2');
  if (!v1 || !v2) return null;
  const e = { ...etatDepart, phase: 0 };
  const dessiner = (dt = 0) => {
    e.phase += dt * e.vit;
    v1.setAttribute('d', onde(258, 532, 625, e.amp, e.per, e.phase));
    v2.setAttribute('d', onde(258, 532, 665, e.amp, e.per, e.phase + 0.9));
  };
  e.dessiner = dessiner;
  LOTUS.set(svg, e);
  boucle(svg, (dt) => dessiner(Math.min(dt, 0.05)));
  return e;
}

/* ---------- Intro : le lotus se dessine, ses vagues tremblent puis s'apaisent, il glisse sur le lotus de la page ---------- */
function intro() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  const svg = $('.ouverture-lotus');
  const e = svg ? vaguesLotus(svg, { amp: 4, per: 12, vit: 40 }) : null;
  if (svg) {
    tl.fromTo(svg.querySelector('.lotus-cercle'), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.7, ease: 'power2.inOut' }, 0)
      .fromTo(svg.querySelector('.lotus-petales'), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.9, ease: 'power2.inOut' }, 0.1)
      .fromTo(svg.querySelectorAll('.lotus-point'), { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: 0.08 }, 0.55);
  }
  if (e) {
    /* Le tremblement (TRE) : vite et serré, puis une onde lente et large. */
    tl.to(e, { amp: 20, duration: 0.35, ease: 'power2.out' }, 0.1)
      .to(e, { amp: 11, per: 3, vit: 1.4, duration: 0.6, ease: 'power2.inOut' }, 0.7);
  }
  tl.fromTo('.ouverture-panneau .ouverture-nom, .ouverture-panneau .ouverture-ligne', { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.08 }, 0.3)
    .to('.ouverture-panneau .ouverture-nom, .ouverture-panneau .ouverture-ligne', { opacity: 0, duration: 0.25 }, 1.0);
  versObjet(tl, { a: 1.1 });
  arriveePage(tl, 1.55);
  return tl;
}

/* Premier écran de chaque page : lignes du titre qui montent, puis le reste. */
function arriveePage(tl, t = 0) {
  const lignes = $$('.hero-ligne, .ouv-ligne');
  const blocs = $$('main [data-anime="gsap"]');
  tl.set(blocs.filter((b) => b.matches('h1')), { opacity: 1 }, t);
  tl.fromTo(lignes, { yPercent: 120 }, { yPercent: 0, y: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out' }, t);
  const autres = blocs.filter((b) => !b.matches('h1'));
  tl.fromTo(autres, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out' }, t + 0.15);
  return tl;
}

/* ---------- Dates au jour réel : dates passées retirées, n premières montrées, information clé à jour ---------- */
function datesReelles() {
  const now = Date.now();
  $$('.dates-grille').forEach((ol) => {
    const cartes = $$('[data-date]', ol);
    const n = cartes.filter((c) => !c.hidden).length || 4;
    let vues = 0;
    cartes.forEach((c) => {
      const fini = new Date(c.dataset.fin).getTime() < now;
      c.hidden = fini || vues >= n;
      if (!c.hidden) vues++;
    });
  });
  const premiere = $('.dates-grille [data-date]:not([hidden])');
  const info = $('.hero-info a strong');
  if (premiere && info) {
    const [titre, ...reste] = premiere.dataset.resume.split(', ');
    info.textContent = titre;
    if (info.nextSibling) info.nextSibling.textContent = ', ' + reste.join(', ');
  }
  const jours = $('[data-jours]');
  if (jours && premiere) jours.dataset.cible = Math.max(0, Math.ceil((new Date(premiere.dataset.debut) - now) / 86400000));
}

function compteJours() {
  const el = $('[data-jours]');
  if (!el) return;
  const cible = +el.dataset.cible || +el.textContent || 0;
  el.textContent = cible;
  if (!gsap || !ST) return;
  const o = { n: 0 };
  gsap.fromTo(el, { scale: 0.6 }, { scale: 1, duration: 1.1, ease: 'elastic.out(1, .5)', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  gsap.fromTo(o, { n: 0 }, { n: cible, duration: 1.2, ease: 'power2.out', onUpdate: () => { el.textContent = Math.round(o.n); }, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
}

/* ---------- Lotus des pages : ils respirent (vagues lentes) et tournent un peu au défilement ---------- */
function lotusVivants() {
  $$('.lotus-vivant').forEach((svg) => vaguesLotus(svg, svg.closest('.hero-lotus') ? { amp: 15, per: 3, vit: 2.4 } : undefined));
  $$('[data-effet="lotus"], [data-effet="lotus-fin"]').forEach((el) => {
    gsap.fromTo(el, { rotate: -8 }, { rotate: 10, ease: 'none', scrollTrigger: { trigger: el.closest('section') || el, start: 'top bottom', end: 'bottom top', scrub: 0.8 } });
  });
}

/* ---------- Relâchement : les cartes arrivent légèrement inclinées et se posent ---------- */
function relachement() {
  $$('[data-effet="relachement"]').forEach((el, i) => {
    const r = (i % 2 ? 1 : -1) * 2;
    gsap.fromTo(el, { rotate: r, y: 18 + (i % 3) * 8 }, { rotate: 0, y: 0, ease: 'power2.out', scrollTrigger: { trigger: el.parentElement, start: 'top 95%', end: 'top 60%', scrub: 0.5 } });
  });
}

/* ---------- Scène TRE : tension, tremblements, calme, selon le défilement ---------- */
function vaguesTre() {
  $$('[data-effet="vagues-tre"]').forEach((svg) => {
    const chemins = $$('.vt', svg);
    const etats = $$('.vagues-etat span', svg.parentElement);
    const e = { p: 0, phase: 0 };
    const lisse = { amp: 2, per: 30, vit: 50 };
    ST.create({ trigger: svg, start: 'top 85%', end: 'bottom 25%', onUpdate: (s) => { e.p = s.progress; } });
    gsap.fromTo(svg, { y: 30 }, { y: -30, ease: 'none', scrollTrigger: { trigger: svg, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
    let etatActif = '';
    boucle(svg, (dt) => {
      const p = e.p;
      /* Cible selon la phase, puis lissage dans le temps. */
      let c;
      if (p < 0.28) c = { amp: 3 + p * 8, per: 26, vit: 46 };
      else if (p < 0.62) c = { amp: 32, per: 13, vit: 26 };
      else c = { amp: 20, per: 2.2, vit: 1.6 };
      const k = 1 - Math.exp(-dt * 3.2);
      lisse.amp += (c.amp - lisse.amp) * k; lisse.per += (c.per - lisse.per) * k; lisse.vit += (c.vit - lisse.vit) * k;
      e.phase += Math.min(dt, 0.05) * lisse.vit;
      chemins.forEach((ch, i) => ch.setAttribute('d', onde(20, 580, 150 + i * 60, lisse.amp * (1 - i * 0.12), lisse.per, e.phase + i * 1.1, 96, 1.2)));
      const nom = p < 0.28 ? 'tension' : p < 0.62 ? 'tremblement' : 'calme';
      if (nom !== etatActif) { etatActif = nom; etats.forEach((s) => s.classList.toggle('actif', s.dataset.etat === nom)); }
    });
  });
}

/* ---------- Balles qui roulent jusqu'à leur place ---------- */
function balles() {
  $$('[data-effet="balles"]').forEach((b, i) => {
    gsap.fromTo(b, { x: () => -window.innerWidth * (0.45 + i * 0.08), rotate: -540 - i * 90 }, {
      x: 0, rotate: 0, ease: 'bounce.out', immediateRender: false,
      scrollTrigger: { trigger: b.parentElement, start: 'top 95%', end: 'top 45%', scrub: 0.9, invalidateOnRefresh: true },
    });
  });
}

/* ---------- Carte des lieux : les lieux s'allument l'un après l'autre ---------- */
function lieux() {
  $$('[data-effet="lieux"]').forEach((fig) => {
    gsap.fromTo(fig, { scale: 0.94, rotate: -1.5 }, { scale: 1, rotate: 0, ease: 'power2.out', scrollTrigger: { trigger: fig, start: 'top 95%', end: 'top 40%', scrub: 0.6 } });
    ST.create({ trigger: fig, start: 'top 70%', once: true, onEnter: () => $$('.carte-lieu', fig).forEach((g) => g.classList.add('allume')) });
  });
}

/* ---------- Méthode TRE : le grand 7 frémit puis se pose, et glisse au défilement ---------- */
function chiffreSept() {
  const el = $('[data-effet="chiffre-sept"]');
  if (!el) return;
  gsap.fromTo(el, { y: 0, rotate: 0 }, { y: 80, rotate: -4, ease: 'none', scrollTrigger: { trigger: el.closest('section'), start: 'top top', end: 'bottom top', scrub: 0.6 } });
}
function frissonSept(tl, t) {
  const el = $('[data-effet="chiffre-sept"]');
  if (!el) return;
  tl.fromTo(el, { x: -6 }, { x: 0, duration: 1.1, ease: 'elastic.out(1.4, .12)' }, t);
}

/* ---------- Pauses en trois temps, témoignages en vague, livres, frise ---------- */
function petitsEffets() {
  $$('[data-effet="temps"]').forEach((li, i) => {
    gsap.fromTo(li, { x: -(24 + i * 16) }, { x: 0, ease: 'power2.out', scrollTrigger: { trigger: li.parentElement, start: 'top 92%', end: 'top 45%', scrub: 0.6 } });
  });
  $$('[data-effet="temoignages-vague"]').forEach((li, i) => {
    gsap.fromTo(li, { y: 24 + (i % 3) * 12 }, { y: 0, ease: 'power2.out', scrollTrigger: { trigger: li.parentElement, start: 'top 95%', end: 'top 60%', scrub: 0.5 } });
  });
  $$('[data-effet="livres"]').forEach((f, i) => {
    gsap.fromTo(f, { y: 60 + i * 40, rotate: i ? 4 : -4 }, { y: 0, rotate: i ? 2 : -2, ease: 'none', scrollTrigger: { trigger: f.parentElement, start: 'top bottom', end: 'bottom 40%', scrub: 0.6 } });
  });
  const trait = $('[data-effet="frise"]');
  if (trait) gsap.fromTo(trait, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: trait.closest('.frise'), start: 'top 75%', end: 'bottom 60%', scrub: 0.5 } });
}

/* ---------- Approches : cinq gestes de l'automassage, joués au défilement ou au toucher ---------- */
function balleGestes() {
  const balle = $('[data-effet="balle-gestes"]');
  if (!balle) return;
  const racine = balle.closest('.gestes');
  const tissu = $('.gestes-tissu', racine);
  const boutons = $$('.geste', racine);
  const jeux = {
    masser: () => gsap.timeline().to(balle, { x: 140, rotate: 300, duration: 0.9, ease: 'sine.inOut' }).to(balle, { x: 0, rotate: 0, duration: 0.9, ease: 'sine.inOut' }),
    compresser: () => gsap.timeline().to(balle, { y: 14, scaleY: 0.78, scaleX: 1.16, duration: 0.5, ease: 'power2.out' }).to(tissu, { scaleY: 0.7, duration: 0.5 }, 0).to([balle, tissu], { y: 0, scaleY: 1, scaleX: 1, duration: 0.8, ease: 'elastic.out(1, .5)' }, 1),
    etirer: () => gsap.timeline().to(tissu, { scaleX: 1.12, duration: 0.8, ease: 'sine.inOut' }).to(tissu, { scaleX: 1, duration: 0.8, ease: 'sine.inOut' }),
    contracter: () => gsap.timeline().to(tissu, { scaleY: 1.5, duration: 0.45, ease: 'power2.out' }).to(balle, { y: -10, duration: 0.45, ease: 'power2.out' }, 0).to([tissu, balle], { scaleY: 1, y: 0, duration: 0.6, ease: 'power2.inOut' }, 0.9),
    relacher: () => gsap.timeline().to(tissu, { scaleY: 0.85, duration: 0.9, ease: 'sine.out' }).to(balle, { y: 4, scale: 1.04, duration: 0.9, ease: 'sine.out' }, 0).to([tissu, balle], { scaleY: 1, y: 0, scale: 1, duration: 0.9, ease: 'sine.inOut' }),
  };
  let enCours = null, actif = '';
  const jouer = (nom) => {
    if (nom === actif) return;
    actif = nom;
    boutons.forEach((b) => b.setAttribute('aria-pressed', b.dataset.geste === nom ? 'true' : 'false'));
    enCours?.progress(1).kill();
    gsap.set([balle, tissu], { clearProps: 'transform' });
    enCours = jeux[nom]?.();
  };
  boutons.forEach((b) => b.addEventListener('click', () => { actif = ''; jouer(b.dataset.geste); }));
  ST.create({ trigger: racine, start: 'top 75%', end: 'bottom 35%', onUpdate: (s) => jouer(boutons[Math.min(boutons.length - 1, Math.floor(s.progress * boutons.length))].dataset.geste) });
}

/* ---------- Bandeau de l'agenda : l'image s'élargit au défilement ---------- */
function bandeau() {
  const el = $('[data-effet="bandeau-ouverture"]');
  if (!el) return;
  gsap.fromTo(el, { clipPath: 'inset(0% 4% 0% 4% round 32px)' }, { clipPath: 'inset(0% 0% 0% 0% round 32px)', ease: 'none', scrollTrigger: { trigger: el, start: 'top 60%', end: 'bottom 30%', scrub: 0.6 } });
}

/* ---------- Agenda (module agenda-des-dates) : types, lieux, filtres de l'adresse ---------- */
async function agenda() {
  const racine = $('.agd[data-module="agenda-des-dates"]');
  if (!racine) return;
  const { init } = await import('./modules/agenda.js?v=1');
  const params = new URLSearchParams(location.search);
  const types = JSON.parse(racine.dataset.types || '{}');
  let zone = params.get('lieu') || '';
  const visible = (li) => !zone || (zone === 'en-ligne' ? li.dataset.enLigne === 'oui' : li.dataset.zone === zone);
  const api = await init(racine, { textes: JSON.parse(racine.dataset.textes || '{}'), fuseau: 'America/Toronto', filtre: types[params.get('type')] || '', visible });
  const groupe = $('[data-filtre-lieux]', racine);
  if (groupe) {
    groupe.hidden = false;
    const maj = () => $$('button', groupe).forEach((b) => b.setAttribute('aria-pressed', b.dataset.zone === zone ? 'true' : 'false'));
    maj();
    groupe.addEventListener('click', (ev) => {
      const b = ev.target.closest('button'); if (!b) return;
      zone = b.dataset.zone; maj(); api.actualiser();
      const u = new URL(location.href); if (zone) u.searchParams.set('lieu', zone); else u.searchParams.delete('lieu');
      history.replaceState(history.state, '', u);
    });
  }
  /* Filtre par type gardé dans l'adresse. */
  $('.agd__filtres', racine)?.addEventListener('click', (ev) => {
    const b = ev.target.closest('.agd__filtre'); if (!b) return;
    const cle = Object.keys(types).find((k) => types[k] === b.dataset.type);
    const u = new URL(location.href); if (cle) u.searchParams.set('type', cle); else u.searchParams.delete('type');
    history.replaceState(history.state, '', u);
  });
  /* Prochaine date dans l'information clé de l'ouverture. */
  const prochaine = $('[data-prochaine]', racine), cle = $('[data-prochaine-texte]');
  if (prochaine && cle && prochaine.textContent) cle.textContent = prochaine.textContent;
  ST?.refresh();
}

/* ---------- À propos : formations filtrées par thème ---------- */
function parcours() {
  const groupe = $('[data-filtres-parcours]');
  if (!groupe) return;
  groupe.addEventListener('click', (ev) => {
    const b = ev.target.closest('button'); if (!b) return;
    const theme = b.dataset.theme;
    $$('button', groupe).forEach((x) => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
    $$('.formation').forEach((f) => { f.hidden = !!theme && f.dataset.theme !== theme; });
    $$('.frise-annee').forEach((a) => { a.hidden = !$$('.formation', a).some((f) => !f.hidden); });
    $$('.frise-annee:not([hidden]) .formation:not([hidden])').forEach((f, i) => gsap?.fromTo(f, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, delay: Math.min(i, 8) * 0.03, clearProps: 'opacity,transform' }));
  });
}

/* ---------- Contact : activités passées retirées de la liste, champ « activité » selon l'objet ---------- */
function contact() {
  const objet = $('#f-objet'), activite = $('#f-activite');
  if (!objet || !activite) return;
  const now = Date.now();
  $$('option[data-fin]', activite).forEach((o) => { if (new Date(o.dataset.fin).getTime() < now) o.remove(); });
  const params = new URLSearchParams(location.search);
  if (params.get('activite') && activite.value) objet.value = 'activite';
}

demarrer({
  preparer() {
    datesReelles();
    contact();
    parcours();
    if (!gsap || !ST) return;
    lotusVivants();
    relachement();
    vaguesTre();
    balles();
    lieux();
    chiffreSept();
    petitsEffets();
    balleGestes();
    bandeau();
    compteJours();
    agenda();
  },
  jouer() {
    if (!gsap) return null;
    const tl = intro();
    frissonSept(tl, 1.8);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('main [data-anime="gsap"]', { opacity: 1, y: 0 });
    gsap.set('.hero-ligne, .ouv-ligne', { yPercent: 0, y: 0 });
    const svg = $('.ouverture-lotus');
    if (svg) { gsap.set(svg.querySelectorAll('.lotus-cercle, .lotus-petales'), { strokeDashoffset: 0 }); gsap.set(svg.querySelectorAll('.lotus-point'), { opacity: 1 }); }
  },
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline({ delay: 0.12 });
    arriveePage(tl, 0);
    frissonSept(tl, 0.2);
  },
});
