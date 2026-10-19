// Site perso de Marlène Ménoire : textes en français et en anglais, liens vers les applis.

// Adresse du profil LinkedIn : tant qu'elle est vide, les liens LinkedIn restent masqués
const LINKEDIN_URL = 'https://www.linkedin.com/in/marlene-menoire/';
const COLLECTION_URL = 'https://marl75.github.io/mes-livres/';

const TEXTS = {
  fr: {
    pageTitle: 'Marlène Ménoire · Des applis du quotidien',
    kicker: 'Bonjour, je suis Marlène',
    title1: 'Des applis du quotidien,',
    title2: 'faites avec soin.',
    bio: "Je conçois de petites applis web pour garder une trace de ce qui compte : ce qu'on lit, ce qu'on regarde, où l'on voyage. Simples, bilingues, installables sur téléphone.",
    linkedin: 'Me retrouver sur LinkedIn',
    appsLabel: 'Mes applis',
    colSub: 'Livres, films, séries et jeux',
    colDesc: "Tout ce que tu lis, regardes et joues au même endroit : remplissage automatique, scan du code-barres, où regarder un film, statistiques de l'année et recommandations personnalisées par Claude.",
    signup: 'Créer un compte',
    login: 'Se connecter',
    demo: 'Essayer sans compte →',
    tripsName: 'Mes Voyages',
    tripsDesc: 'Carte, planning et statistiques de voyage',
    routineDesc: 'Séances de sport et régularité',
    soon: 'Bientôt',
    aboutName: 'Qui suis-je ?',
    aboutDesc: 'Mon parcours et mes projets',
    foot: 'Applis web installables, en français et en anglais',
  },
  en: {
    pageTitle: 'Marlène Ménoire · Everyday apps',
    kicker: "Hi, I'm Marlène",
    title1: 'Everyday apps,',
    title2: 'made with care.',
    bio: 'I design small web apps to keep track of what matters: what you read, what you watch, where you travel. Simple, bilingual and installable on your phone.',
    linkedin: 'Find me on LinkedIn',
    appsLabel: 'My apps',
    colSub: 'Books, films, shows and games',
    colDesc: 'Everything you read, watch and play in one place: autofill, barcode scanning, where to watch a film, yearly stats and personalised recommendations by Claude.',
    signup: 'Create an account',
    login: 'Log in',
    demo: 'Try without an account →',
    tripsName: 'My Trips',
    tripsDesc: 'Map, timeline and travel stats',
    routineDesc: 'Workouts and consistency',
    soon: 'Coming soon',
    aboutName: 'About me',
    aboutDesc: 'My background and projects',
    foot: 'Installable web apps, in English and French',
  },
};

function pickLanguage() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (fromUrl === 'fr' || fromUrl === 'en') return fromUrl;
  try {
    const saved = localStorage.getItem('site-lang');
    if (saved === 'fr' || saved === 'en') return saved;
  } catch (e) {}
  return (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

// Liens vers Collection, dans la langue de la page
function appLink(kind, lang) {
  const params = new URLSearchParams();
  if (kind === 'signup') params.set('signup', '');
  if (kind === 'demo') params.set('demo', '');
  params.set('lang', lang);
  return `${COLLECTION_URL}?${params.toString().replace(/=(&|$)/g, '$1')}`;
}

function applyLanguage(lang) {
  const t = TEXTS[lang];
  document.documentElement.lang = lang;
  document.title = t.pageTitle;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-label]').forEach(el => el.setAttribute('aria-label', t[el.dataset.i18nLabel]));
  document.querySelectorAll('[data-app]').forEach(a => { a.href = appLink(a.dataset.app, lang); });
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  try { localStorage.setItem('site-lang', lang); } catch (e) {}
}

document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => applyLanguage(b.dataset.lang)));

if (LINKEDIN_URL) {
  document.querySelectorAll('[data-linkedin]').forEach(a => {
    a.href = LINKEDIN_URL;
    a.target = '_blank';
    a.rel = 'noopener';
    a.hidden = false;
  });
}

applyLanguage(pickLanguage());
