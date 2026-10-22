// Site perso de Marlène Ménoire : textes en français et en anglais, liens vers les applis.

// Adresse du profil LinkedIn : tant qu'elle est vide, les liens LinkedIn restent masqués
const LINKEDIN_URL = 'https://www.linkedin.com/in/marlene-menoire/';
const COLLECTION_URL = 'https://marl75.github.io/mes-livres/';
// Adresse de chaque appli (data-app-id sur les liens ; Ma Collection par défaut)
const APP_URLS = { collection: COLLECTION_URL, routine: 'https://marl75.github.io/fitness-coach/' };
// Captures de l'appli, dans la langue de la page
const SHOTS = COLLECTION_URL + 'screenshots/';
// Mesure d'audience GoatCounter (sans cookie) : https://marlenemenoire.goatcounter.com
// Pour ne pas compter ses propres visites : ouvrir le site avec #toggle-goatcounter à la fin de l'adresse
const GOATCOUNTER_CODE = 'marlenemenoire';

const TEXTS = {
  fr: {
    pageTitle: 'Marlène Ménoire · Des applis du quotidien',
    kicker: 'Bonjour, je suis Marlène',
    title1: 'Des applis du quotidien,',
    title2: 'faites avec soin.',
    bio: "Je conçois de petites applis web pour se simplifier la vie au quotidien, sur ces petites choses qui comptent : la lecture ou les jeux vidéo, le sport, les voyages. Simples, bilingues, installables sur téléphone.",
    linkedin: 'Me retrouver sur LinkedIn',
    appsLabel: 'Mes applis',
    colSub: 'Livres, films, séries et jeux',
    colDesc: "Garde au même endroit tous les livres, films, séries et jeux qu'on te conseille. Simple et agréable à utiliser au quotidien, avec en prime des recommandations de Claude choisies selon tes goûts.",
    signup: 'Créer un compte',
    login: 'Se connecter',
    demo: 'Essayer sans compte →',
    tripsName: 'Mes Voyages',
    tripsDesc: 'Carte, planning et statistiques de voyage',
    routineDesc: 'Séances de sport et régularité',
    soon: 'Bientôt',
    aboutName: 'Qui suis-je ?',
    aboutDesc: 'Mon parcours et mes projets IA',
    foot: 'Applis web installables, en français et en anglais',
    privacy: "Mesure d'audience anonyme, sans cookie",
    toDark: 'Passer en mode sombre',
    toLight: 'Passer en mode clair',
    appName: 'Ma Collection',
    colMore: 'Son histoire →',
    colPageTitle: 'Ma Collection · Marlène Ménoire',
    back: '← Toutes mes applis',
    colTagline: "Les livres, films, séries et jeux qu'on te conseille, enfin rangés au même endroit.",
    storyKicker1: "Pourquoi je l'ai créée",
    story1: "Dès qu'on me conseillait un livre ou un film, je le notais dans un bloc-notes. Mais la liste s'allongeait et il devenait difficile de s'y retrouver. J'ai donc eu l'idée de me créer une appli facile à utiliser, une appli que j'aurais vraiment envie d'ouvrir.",
    storyKicker2: 'Pourquoi je la partage',
    story2: "En en parlant à des amis, je me suis rendu compte que l'intérêt était partagé. J'ai commencé à la leur faire essayer, et aujourd'hui ils l'utilisent au quotidien. Alors j'ai eu envie de l'ouvrir à tout le monde.",
    altDesktop: 'Ma Collection sur ordinateur',
    altMobile: 'Ma Collection sur téléphone',
    shotDesktop: SHOTS + 'collection-desktop-fr.png',
    shotMobile: SHOTS + 'collection-mobile-fr.png',
    featuresTitle: "Ce qu'elle sait faire",
    f1t: "Qui te l'a conseillé", f1d: "Note le nom de la personne qui t'a recommandé un titre, pour ne plus jamais l'oublier.",
    f2t: 'Quatre types au même endroit', f2d: 'Livres, films, séries et jeux vidéo, rangés en terminés, en cours, à découvrir, abandonnés ou en wishlist.',
    f3t: 'Des fiches qui se remplissent seules', f3d: "Tape un titre ou scanne le code-barres d'un livre : couverture, auteur et année arrivent tout seuls.",
    f4t: 'Des idées par Claude', f4d: "Des recommandations personnalisées à partir de ce que tu as aimé, avec l'explication de chaque suggestion.",
    f5t: 'Où regarder', f5d: 'Pour chaque film ou série à voir, les plateformes de streaming où le trouver.',
    f6t: 'Ton année en chiffres', f6d: 'Statistiques par type, objectifs annuels et une rétrospective de tes coups de cœur.',
    f7t: 'À partager', f7d: "Un lien pour montrer ta wishlist ou tes coups de cœur à tes proches, sans qu'ils aient besoin d'un compte.",
    f8t: 'Partout, même hors ligne', f8d: "S'installe sur ton téléphone, fonctionne sans connexion, en français et en anglais.",
    ctaTitle: "Envie d'essayer ?",
    ctaText: "C'est gratuit. Tu peux aussi faire un tour dans la démo, sans créer de compte.",
    demoShort: 'Voir la démo',
    routinePageTitle: "Routine · Marlène Ménoire",
    routineCardDesc: "Note tes séances en un geste : tout est repris de la dernière fois. Chaque semaine, vois les muscles travaillés, tes minutes de cardio et ta progression.",
    routineTagline: "Tes séances de sport notées en un geste, et la réponse à une question simple : est-ce que je tiens le rythme ?",
    routineKicker1: "Pourquoi je l'ai créée",
    routineStory1: "Pour suivre mes séances, je passais par une appli payante qui ne faisait jamais tout à fait ce que je voulais. Je voulais une appli qui retienne tout de la dernière fois, poids, répétitions et réglages de la machine, pour noter une série en un geste entre deux efforts, et qui me dise si je travaille vraiment les muscles que je vise.",
    routineKicker2: "Comment elle a grandi",
    routineStory2: "Je l'ai fait tester autour de moi, et chaque retour a changé quelque chose : une prise en main plus guidée, des séries plus simples à régler, un suivi plus lisible. Elle est maintenant prête pour tout le monde.",
    routineAlt1: "Une séance en cours dans Routine",
    routineAlt2: "L'onglet Suivi : séances, cardio, régularité et muscles de la semaine",
    routineAlt3: "La progression d'un exercice, avec sa courbe",
    routineShot1: "img/routine-seance-fr.jpg",
    routineShot2: "img/routine-suivi-fr.jpg",
    routineShot3: "img/routine-progression-fr.jpg",
    routineCtaText: "C'est gratuit. La démo s'ouvre sur un compte d'exemple, avec douze semaines de séances : rien à créer.",
    r1t: "Tout est déjà rempli",
    r1d: "Poids, répétitions, réglages de la machine, vitesse et pente : la séance reprend ce que tu as fait la dernière fois.",
    r2t: "Tes séances types en un geste",
    r2d: "Enregistre une séance comme routine, puis relance-la d'un geste la fois suivante.",
    r3t: "Une série, un geste",
    r3d: "Un tableau des séries avec une coche par série ; poids et répétitions se règlent avec deux compteurs identiques.",
    r4t: "Tes muscles cibles",
    r4d: "Choisis les muscles à développer ou à ménager : les bons exercices passent en premier, les autres sont signalés.",
    r5t: "Ta semaine en un coup d'œil",
    r5d: "Les jours travaillés pour chaque muscle et tes minutes de cardio, face aux repères de l'ACSM et de l'OMS.",
    r6t: "Ta progression",
    r6d: "Une courbe par exercice, et une suggestion de charge quand tu atteins ton objectif de répétitions.",
    r7t: "Bien faire chaque exercice",
    r7d: "Une figure qui montre le mouvement et les muscles travaillés, et des conseils tirés de sources fiables.",
    r8t: "Partout, même hors ligne",
    r8d: "S'installe sur ton téléphone, fonctionne sans connexion à la salle, en français et en anglais.",
    aboutPageTitle: 'Qui suis-je ? · Marlène Ménoire',
    aboutTagline: "Leader produit hands-on, curieuse de ce que l'IA change dans notre façon de créer des produits.",
    seeApps: 'Voir mes applis',
    aboutKicker1: 'Mon métier',
    about1: "Je suis leader produit, et j'aime rester proche du terrain : écouter les utilisateurs pour bien comprendre leurs besoins, faire des choix, et mettre les mains dans le produit plutôt que de le regarder de loin.",
    aboutKicker2: 'Mon terrain de jeu',
    about2: "Sur mon temps personnel, j'ai eu envie de creuser l'usage de l'IA en pratique. De l'idée à la mise en ligne, j'ai fini par créer de toutes pièces mes propres applis.",
    aboutResultsTitle: 'Ce que ça a donné',
    a1t: 'Créées de toutes pièces', a1d: "Idée, design, code et mise en ligne : chaque appli est pensée et construite de bout en bout, avec l'IA comme binôme.",
    a2t: 'Gratuites', a2d: 'Ma Collection et Routine sont gratuites et ouvertes à tous. Mes Voyages arrive bientôt.',
    a3t: 'Fini les petits abonnements', a3d: "Elles remplacent aujourd'hui de petites applis que je payais, et font exactement ce dont j'ai besoin.",
    a4t: 'Apprendre en faisant', a4d: "Une façon concrète de comprendre ce que l'IA change pour les équipes produit : en la pratiquant moi-même.",
    aboutCtaTitle: "Envie d'en parler ?",
    aboutCtaText: "Mon parcours complet est sur LinkedIn. N'hésite pas à m'y écrire.",
  },
  en: {
    pageTitle: 'Marlène Ménoire · Everyday apps',
    kicker: "Hi, I'm Marlène",
    title1: 'Everyday apps,',
    title2: 'made with care.',
    bio: 'I design small web apps that make everyday life easier, for the little things that matter: reading or gaming, sport, travel. Simple, bilingual and installable on your phone.',
    linkedin: 'Find me on LinkedIn',
    appsLabel: 'My apps',
    colSub: 'Books, films, shows and games',
    colDesc: 'Keep every book, film, show and game people recommend to you in one place. Simple and pleasant to use every day, with recommendations from Claude picked for your taste.',
    signup: 'Create an account',
    login: 'Log in',
    demo: 'Try without an account →',
    tripsName: 'My Trips',
    tripsDesc: 'Map, timeline and travel stats',
    routineDesc: 'Workouts and consistency',
    soon: 'Coming soon',
    aboutName: 'About me',
    aboutDesc: 'My background and AI projects',
    foot: 'Installable web apps, in English and French',
    privacy: 'Anonymous visitor stats, no cookies',
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
    appName: 'My Collection',
    colMore: 'Its story →',
    colPageTitle: 'My Collection · Marlène Ménoire',
    back: '← All my apps',
    colTagline: 'The books, films, shows and games people recommend to you, finally in one place.',
    storyKicker1: 'Why I made it',
    story1: 'Whenever someone recommended a book or a film, I wrote it down in a notes app. But the list kept growing and it became hard to find anything. So I decided to build myself an easy app, one I would actually enjoy opening.',
    storyKicker2: "Why I'm sharing it",
    story2: 'Talking about it with friends, I realised they had the same need. I started letting them try it, and today they use it every day. So I wanted to open it to everyone.',
    altDesktop: 'My Collection on a computer',
    altMobile: 'My Collection on a phone',
    shotDesktop: SHOTS + 'collection-desktop.png',
    shotMobile: SHOTS + 'collection-mobile.png',
    featuresTitle: 'What it does',
    f1t: 'Who recommended it', f1d: 'Write down who recommended a title, so you never forget.',
    f2t: 'Four types in one place', f2d: 'Books, films, shows and video games, sorted into finished, in progress, up next, dropped or wishlist.',
    f3t: 'Entries that fill themselves', f3d: "Type a title or scan a book's barcode: cover, author and year come in on their own.",
    f4t: 'Ideas by Claude', f4d: 'Personalised recommendations based on what you loved, with the reason behind each suggestion.',
    f5t: 'Where to watch', f5d: 'For every film or show on your list, the streaming services where you can find it.',
    f6t: 'Your year in numbers', f6d: 'Stats per type, yearly goals and a look back at your favourites.',
    f7t: 'Made to share', f7d: 'A link to show your wishlist or favourites to friends and family, no account needed.',
    f8t: 'Everywhere, even offline', f8d: 'Installs on your phone, works without a connection, in English and French.',
    ctaTitle: 'Want to try it?',
    ctaText: "It's free. You can also take a look at the demo, no account needed.",
    demoShort: 'See the demo',
    routinePageTitle: "Routine · Marlène Ménoire",
    routineCardDesc: "Log your workouts in one tap: everything is picked up from last time. Each week, see the muscles you worked, your cardio minutes and your progress.",
    routineTagline: "Your workouts logged in one tap, and the answer to a simple question: am I keeping it up?",
    routineKicker1: "Why I made it",
    routineStory1: "To track my workouts, I used a paid app that never quite did what I wanted. I wanted an app that remembers everything from last time, weights, reps and machine setup, so I can log a set in one tap between efforts, and that tells me whether I'm really working the muscles I'm aiming for.",
    routineKicker2: "How it grew",
    routineStory2: "I had people around me test it, and every piece of feedback changed something: an easier start, simpler sets, a clearer progress view. It is now ready for everyone.",
    routineAlt1: "A workout in progress in Routine",
    routineAlt2: "The Progress tab: workouts, cardio, streak and muscles this week",
    routineAlt3: "An exercise's progress, with its curve",
    routineShot1: "img/routine-seance-en.jpg",
    routineShot2: "img/routine-suivi-en.jpg",
    routineShot3: "img/routine-progression-en.jpg",
    routineCtaText: "It is free. The demo opens on a sample account with twelve weeks of workouts: nothing to create.",
    r1t: "Everything is already filled in",
    r1d: "Weights, reps, machine setup, speed and incline: each workout picks up what you did last time.",
    r2t: "Your usual workouts in one tap",
    r2d: "Save a workout as a routine, then start it again in one tap next time.",
    r3t: "One set, one tap",
    r3d: "A table of sets with a check for each; weight and reps are set with two matching counters.",
    r4t: "Your target muscles",
    r4d: "Pick the muscles to develop or go easy on: the right exercises come first, the others are flagged.",
    r5t: "Your week at a glance",
    r5d: "Days each muscle was worked and your cardio minutes, against the ACSM and WHO benchmarks.",
    r6t: "Your progress",
    r6d: "A curve for every exercise, and a weight suggestion when you reach your rep target.",
    r7t: "Do every exercise right",
    r7d: "A figure showing the movement and the muscles worked, with tips from reliable sources.",
    r8t: "Everywhere, even offline",
    r8d: "Installs on your phone, works without a connection at the gym, in English and French.",
    aboutPageTitle: 'About me · Marlène Ménoire',
    aboutTagline: 'A hands-on product leader, curious about how AI is changing the way we build products.',
    seeApps: 'See my apps',
    aboutKicker1: 'What I do',
    about1: 'I lead product, and I like staying close to the ground: listening to users to truly understand their needs, making the calls, and getting my hands into the product rather than watching it from afar.',
    aboutKicker2: 'My playground',
    about2: 'In my own time, I wanted to dig into using AI. From idea to launch, I ended up building my own apps from scratch.',
    aboutResultsTitle: 'What came out of it',
    a1t: 'Built from scratch', a1d: 'Idea, design, code and launch: every app is thought through and built end to end, with AI as my sidekick.',
    a2t: 'Free', a2d: 'My Collection and Routine are free and open to everyone. My Trips is coming soon.',
    a3t: 'No more small subscriptions', a3d: 'They now replace small apps I used to pay for, and do exactly what I need.',
    a4t: 'Learning by doing', a4d: 'A hands-on way to understand what AI changes for product teams: by using it myself.',
    aboutCtaTitle: 'Want to talk?',
    aboutCtaText: 'My full background is on LinkedIn. Feel free to message me there.',
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

// Liens vers une appli, dans la langue de la page
function appLink(kind, lang, app = 'collection') {
  const params = new URLSearchParams();
  if (kind === 'signup') params.set('signup', '');
  if (kind === 'demo') params.set('demo', '');
  params.set('lang', lang);
  return `${APP_URLS[app]}?${params.toString().replace(/=(&|$)/g, '$1')}`;
}

function applyLanguage(lang) {
  const t = TEXTS[lang];
  document.documentElement.lang = lang;
  document.title = t[document.documentElement.dataset.titleKey || 'pageTitle'];
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-src]').forEach(el => { el.src = t[el.dataset.i18nSrc]; });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = t[el.dataset.i18nAlt]; });
  document.querySelectorAll('[data-i18n-label]').forEach(el => el.setAttribute('aria-label', t[el.dataset.i18nLabel]));
  document.querySelectorAll('[data-app]').forEach(a => { a.href = appLink(a.dataset.app, lang, a.dataset.appId); });
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  try { localStorage.setItem('site-lang', lang); } catch (e) {}
  currentLang = lang;
  if (document.getElementById('theme-btn')) updateThemeButton();
}

document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => applyLanguage(b.dataset.lang)));

// Mode sombre : le choix fait avec le bouton prime sur le réglage du système
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
let currentLang = 'fr';

function isDark() {
  const forced = document.documentElement.dataset.theme;
  return forced ? forced === 'dark' : darkQuery.matches;
}

function updateThemeButton() {
  const btn = document.getElementById('theme-btn');
  const label = TEXTS[currentLang][isDark() ? 'toLight' : 'toDark'];
  btn.setAttribute('aria-label', label);
  btn.title = label;
  document.querySelector('meta[name="theme-color"]').content = isDark() ? '#0f0e13' : '#ffffff';
}

document.getElementById('theme-btn').addEventListener('click', () => {
  const next = isDark() ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('site-theme', next); } catch (e) {}
  updateThemeButton();
});
darkQuery.addEventListener('change', updateThemeButton);

if (LINKEDIN_URL) {
  document.querySelectorAll('[data-linkedin]').forEach(a => {
    a.href = LINKEDIN_URL;
    a.target = '_blank';
    a.rel = 'noopener';
    a.hidden = false;
  });
}

applyLanguage(pickLanguage());

// ----- Accueil : cartes d'appli en accordéon -----
// Une seule carte ouverte à la fois. Ordinateur : au survol (ou au clavier) ; téléphone : un premier
// toucher ouvre la carte, ses boutons et liens marchent ensuite. Les parties repliées sont « inert ».
const appCards = [...document.querySelectorAll('.pile .app-card')];
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
let cardLock = 0; // le temps de l'animation, pour que le changement de taille ne rouvre pas l'autre carte
function openCard(card) {
  if (card.classList.contains('open')) return;
  cardLock = Date.now() + 400;
  appCards.forEach(c => {
    const on = c === card;
    c.classList.toggle('open', on);
    c.querySelector('.book-more').inert = !on;
  });
}
appCards.forEach(c => {
  c.querySelector('.book-more').inert = !c.classList.contains('open');
  c.addEventListener('mouseenter', () => { if (canHover.matches && Date.now() > cardLock) openCard(c); });
  c.addEventListener('focusin', () => openCard(c));
  c.addEventListener('click', e => { if (!c.classList.contains('open')) { e.preventDefault(); openCard(c); } });
});

// ----- Mesure d'audience -----
// Une page = son chemin sans paramètres (?lang=, ?ref=…) pour ne pas éclater les chiffres ;
// la source (?ref=linkedin, utm_source…) reste lue par GoatCounter comme provenance.
window.goatcounter = {
  path: () => location.pathname.replace(/\/index\.html$/, '/') || '/',
};
if (GOATCOUNTER_CODE) {
  const gc = document.createElement('script');
  gc.async = true;
  gc.src = 'https://gc.zgo.at/count.js';
  gc.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;
  document.head.appendChild(gc);
}
// Clics vers les applis, comptés comme événements (affichés dans l'onglet Site de la page admin) :
// clic-demo… pour Ma Collection, routine-clic-demo… pour Routine
const CLICK_EVENTS = { signup: 'clic-creer-compte', login: 'clic-connexion', demo: 'clic-demo' };
document.querySelectorAll('[data-app]').forEach(a => a.addEventListener('click', () => {
  const name = CLICK_EVENTS[a.dataset.app] && (a.dataset.appId === 'routine' ? 'routine-' : '') + CLICK_EVENTS[a.dataset.app];
  if (name && window.goatcounter.count) window.goatcounter.count({ path: name, title: a.textContent.trim(), event: true });
}));
// Clics vers le profil LinkedIn (accueil et « Qui suis-je ? »)
document.querySelectorAll('[data-linkedin]').forEach(a => a.addEventListener('click', () => {
  if (window.goatcounter.count) window.goatcounter.count({ path: 'clic-linkedin', title: 'LinkedIn', event: true });
}));
