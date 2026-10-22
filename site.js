// Site perso de Marlène Ménoire : textes en français et en anglais, liens vers les applis.

// Adresse du profil LinkedIn : tant qu'elle est vide, les liens LinkedIn restent masqués
const LINKEDIN_URL = 'https://www.linkedin.com/in/marlene-menoire/';
const COLLECTION_URL = 'https://marl75.github.io/mes-livres/';
// Adresse de chaque appli (data-app-id sur les liens ; Ma Collection par défaut)
const APP_URLS = { collection: COLLECTION_URL, routine: 'https://marl75.github.io/fitness-coach/' };
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
    tripsName: 'Mes Voyages',
    tripsDesc: 'Carte, planning et statistiques de voyage',
    routineDesc: 'Séances de sport et régularité',
    soon: 'Bientôt',
    aboutName: 'Qui suis-je ?',
    foot: 'Applis web installables, en français et en anglais',
    privacy: "Mesure d'audience anonyme, sans cookie",
    toDark: 'Passer en mode sombre',
    toLight: 'Passer en mode clair',
    appName: 'Ma Collection',
    discoverApp: 'Découvrir l’appli →',
    colPageTitle: 'Ma Collection · Marlène Ménoire',
    back: '← Toutes mes applis',
    colTagline: "Les livres, films, séries et jeux qu'on te conseille, enfin rangés au même endroit.",
    storyKicker1: "Pourquoi je l'ai créée",
    story1: "Dès qu'on me conseillait un livre ou un film, je le notais dans un bloc-notes. Mais la liste s'allongeait et il devenait difficile de s'y retrouver. J'ai donc eu l'idée de me créer une appli facile à utiliser, une appli que j'aurais vraiment envie d'ouvrir.",
    storyKicker2: 'Pourquoi je la partage',
    story2: "En en parlant à des amis, je me suis rendu compte que l'intérêt était partagé. J'ai commencé à la leur faire essayer, et aujourd'hui ils l'utilisent au quotidien. Alors j'ai eu envie de l'ouvrir à tout le monde.",
    altDesktop: 'Ma Collection sur ordinateur',
    altMobile: 'Ma Collection sur téléphone',
    shotDesktop: '/img/collection-desktop-fr.jpg',
    shotMobile: '/img/collection-mobile-fr.jpg',
    featuresTitle: "Ce qu'elle sait faire",
    f1t: "Qui te l'a conseillé", f1d: "Note le nom de la personne qui t'a recommandé un titre, pour ne plus jamais l'oublier.",
    f2t: "Quatre types au même endroit", f2d: "Livres, films, séries et jeux vidéo, rangés selon où tu en es.",
    f3t: "Des fiches qui se remplissent seules", f3d: "Tape un titre ou scanne un livre : la fiche se remplit toute seule.",
    f4t: "Des idées par Claude", f4d: "Des suggestions choisies selon tes goûts, avec le pourquoi de chacune.",
    f5t: "Où regarder", f5d: "Pour chaque film ou série, les plateformes où le regarder.",
    f6t: "Ton année en chiffres", f6d: "Ce que tu as lu, vu et joué dans l'année, et tes coups de cœur.",
    f7t: "À partager", f7d: "Un lien pour montrer tes envies ou tes coups de cœur à tes proches, sans compte.",
    f8t: 'Partout, même hors ligne', f8d: "S'installe sur ton téléphone, fonctionne sans connexion, en français et en anglais.",
    ctaTitle: "Envie d'essayer ?",
    ctaText: "C'est gratuit. Tu peux aussi faire un tour dans la démo, sans créer de compte.",
    demoShort: 'Voir la démo',
    routinePageTitle: "Routine · Marlène Ménoire",
    routineCardDesc: "Note tes séances en un geste : tout est repris de la dernière fois. Chaque semaine, vois les muscles travaillés, tes minutes de cardio et ta progression.",
    routineTagline: "Tes séances de sport notées en un geste, et la réponse à une question simple : est-ce que je tiens le rythme que je me suis fixé ?",
    routineKicker1: "Pourquoi je l'ai créée",
    routineStory1: "Je voulais une appli simple et efficace pour noter les exercices de mes séances de sport et suivre ma progression. Je ne trouvais pas mon bonheur dans les applis existantes, au point de résilier celle que je payais : j'ai décidé de construire la mienne. Je l'utilise aujourd'hui tous les jours, et comme elle a plu à mes amis, j'ai eu envie de la partager.",
    routineKicker2: "Comment elle a grandi",
    routineStory2: "Je l'ai fait tester autour de moi, et chaque retour a changé quelque chose : une prise en main plus guidée, des séries plus simples à régler, un suivi plus lisible.",
    routineAlt1: "Une séance en cours dans Routine",
    routineAlt2: "L'onglet Suivi : séances, cardio, régularité et muscles de la semaine",
    routineAlt3: "La progression d'un exercice, avec sa courbe",
    routineShot1: "/img/routine-seance-fr.jpg",
    routineShot2: "/img/routine-suivi-fr.jpg",
    routineShot3: "/img/routine-progression-fr.jpg",
    routineCtaText: "C'est gratuit. La démo s'ouvre sur un compte d'exemple, avec douze semaines de séances : rien à créer.",
    r1t: "Des exercices faciles à retrouver",
    r1d: "Chaque exercice a son illustration, et ceux que tu fais souvent restent à portée de main.",
    r2t: "Tes séances types, prêtes à lancer",
    r2d: "Enregistre tes séances habituelles et relance-les en un instant.",
    r3t: "Une série, une coche",
    r3d: "Tes chiffres de la dernière fois sont déjà là : il ne reste qu'à cocher.",
    r4t: "Tes muscles cibles",
    r4d: "Choisis les muscles à travailler en priorité : l'appli te suggère les bons exercices.",
    r5t: "Ta semaine en un coup d'œil",
    r5d: "Vois tout de suite si tu as tenu ton objectif de séances de la semaine. De quoi te motiver à y retourner.",
    r6t: "Ta progression",
    r6d: "Une courbe par exercice, et un coup de pouce quand il est temps d'augmenter la charge.",
    r7t: "Des conseils pour bien faire",
    r7d: "Des conseils simples pour réussir chaque mouvement et éviter les erreurs.",
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
    legalLink: "Mentions et confidentialité",
    mentionsPageTitle: "Mentions et confidentialité · Marlène Ménoire",
    legalTitle: "Mentions et confidentialité",
    legalIntro: "Qui édite ce site, qui l’héberge, et ce que deviennent tes données.",
    legalEditorT: "Éditrice",
    legalEditor: "Ce site est édité à titre personnel par Marlène Ménoire, qui réside à Singapour. Pour toute question, écris-moi sur LinkedIn.",
    legalHostT: "Hébergement",
    legalHost: "GitHub Pages, un service de GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.",
    legalStatsT: "Mesure d’audience",
    legalStats: "Le site compte ses visites avec GoatCounter, sans cookie ni identifiant personnel : seuls des chiffres globaux sont conservés (pages vues, pays, navigateur, site d’origine). Aucune de ces données ne permet de t’identifier.",
    legalAppsT: "Tes données dans les applis",
    legalApps: "Le site lui-même ne recueille aucune donnée personnelle. Si tu crées un compte dans une appli, ton e-mail et ce que tu y enregistres sont conservés chez Google Firebase, réservés à ton compte. Chaque appli détaille tout dans sa page de confidentialité :",
    legalAppCol: "Confidentialité de Ma Collection",
    legalAppRoutine: "Confidentialité de Routine",
    legalRightsT: "Tes droits",
    legalRights: "Tu peux à tout moment demander l’accès à tes données, leur correction ou leur suppression, en m’écrivant sur LinkedIn.",
    legalOwnT: "Contenus",
    legalOwn: "Textes, images et applis : © 2026 Marlène Ménoire.",
    legalUpdated: "Dernière mise à jour : 22 octobre 2026.",
    nfPageTitle: "Page introuvable · Marlène Ménoire",
    nfTitle: "Cette page n’existe pas",
    nfText: "Le lien est peut-être ancien, ou il y a une faute de frappe dans l’adresse.",
    nfBack: "Revenir à l’accueil",
    langFrAria: "Version française",
    langEnAria: "English version",
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
    tripsName: 'My Trips',
    tripsDesc: 'Map, timeline and travel stats',
    routineDesc: 'Workouts and consistency',
    soon: 'Coming soon',
    aboutName: 'About me',
    foot: 'Installable web apps, in English and French',
    privacy: 'Anonymous visitor stats, no cookies',
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
    appName: 'My Collection',
    discoverApp: 'Discover the app →',
    colPageTitle: 'My Collection · Marlène Ménoire',
    back: '← All my apps',
    colTagline: 'The books, films, shows and games people recommend to you, finally in one place.',
    storyKicker1: 'Why I made it',
    story1: 'Whenever someone recommended a book or a film, I wrote it down in a notes app. But the list kept growing and it became hard to find anything. So I decided to build myself an easy app, one I would actually enjoy opening.',
    storyKicker2: "Why I'm sharing it",
    story2: 'Talking about it with friends, I realised they had the same need. I started letting them try it, and today they use it every day. So I wanted to open it to everyone.',
    altDesktop: 'My Collection on a computer',
    altMobile: 'My Collection on a phone',
    shotDesktop: '/img/collection-desktop.jpg',
    shotMobile: '/img/collection-mobile.jpg',
    featuresTitle: 'What it does',
    f1t: 'Who recommended it', f1d: 'Write down who recommended a title, so you never forget.',
    f2t: "Four types in one place", f2d: "Books, films, shows and video games, sorted by where you're at.",
    f3t: "Entries that fill themselves", f3d: "Type a title or scan a book: the entry fills itself in.",
    f4t: "Ideas by Claude", f4d: "Suggestions picked for your taste, with the reason behind each one.",
    f5t: "Where to watch", f5d: "For every film or show, where you can watch it.",
    f6t: "Your year in numbers", f6d: "What you read, watched and played this year, and your favourites.",
    f7t: "Made to share", f7d: "A link to show your wishlist or favourites to friends and family, no account needed.",
    f8t: 'Everywhere, even offline', f8d: 'Installs on your phone, works without a connection, in English and French.',
    ctaTitle: 'Want to try it?',
    ctaText: "It's free. You can also take a look at the demo, no account needed.",
    demoShort: 'See the demo',
    routinePageTitle: "Routine · Marlène Ménoire",
    routineCardDesc: "Log your workouts in one tap: everything is picked up from last time. Each week, see the muscles you worked, your cardio minutes and your progress.",
    routineTagline: "Your workouts logged in one tap, and the answer to a simple question: am I keeping the pace I set for myself?",
    routineKicker1: "Why I made it",
    routineStory1: "I wanted a simple, effective app to log the exercises from my workouts and track my progress. None of the existing apps really suited me, to the point that I cancelled the one I was paying for: I decided to build my own. I now use it every day, and since my friends liked it too, I wanted to share it.",
    routineKicker2: "How it grew",
    routineStory2: "I had people around me test it, and every piece of feedback changed something: an easier start, simpler sets, a clearer progress view.",
    routineAlt1: "A workout in progress in Routine",
    routineAlt2: "The Progress tab: workouts, cardio, streak and muscles this week",
    routineAlt3: "An exercise's progress, with its curve",
    routineShot1: "/img/routine-seance-en.jpg",
    routineShot2: "/img/routine-suivi-en.jpg",
    routineShot3: "/img/routine-progression-en.jpg",
    routineCtaText: "It is free. The demo opens on a sample account with twelve weeks of workouts: nothing to create.",
    r1t: "Exercises that are easy to find",
    r1d: "Every exercise has its illustration, and the ones you do often stay close at hand.",
    r2t: "Your usual workouts, ready to go",
    r2d: "Save your usual workouts and start them again in an instant.",
    r3t: "One set, one check",
    r3d: "Your numbers from last time are already there: all that's left is to check them off.",
    r4t: "Your target muscles",
    r4d: "Pick the muscles you want to focus on: the app suggests the right exercises.",
    r5t: "Your week at a glance",
    r5d: "See right away whether you hit your workout goal for the week. A nice nudge to go back.",
    r6t: "Your progress",
    r6d: "A curve for each exercise, and a nudge when it's time to add weight.",
    r7t: "Tips to get it right",
    r7d: "Simple tips to get every movement right and avoid common mistakes.",
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
    legalLink: "Legal notice and privacy",
    mentionsPageTitle: "Legal notice and privacy · Marlène Ménoire",
    legalTitle: "Legal notice and privacy",
    legalIntro: "Who publishes this site, who hosts it, and what happens to your data.",
    legalEditorT: "Publisher",
    legalEditor: "This site is published personally by Marlène Ménoire, who lives in Singapore. For any question, message me on LinkedIn.",
    legalHostT: "Hosting",
    legalHost: "GitHub Pages, a service of GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States.",
    legalStatsT: "Visitor statistics",
    legalStats: "The site counts visits with GoatCounter, with no cookies and no personal identifier: only overall figures are kept (pages viewed, country, browser, referring site). None of this data can identify you.",
    legalAppsT: "Your data in the apps",
    legalApps: "The site itself collects no personal data. If you create an account in an app, your email and what you save there are stored with Google Firebase, private to your account. Each app explains everything in its privacy page:",
    legalAppCol: "My Collection privacy",
    legalAppRoutine: "Routine privacy",
    legalRightsT: "Your rights",
    legalRights: "You can ask at any time to access, correct or delete your data by messaging me on LinkedIn.",
    legalOwnT: "Content",
    legalOwn: "Texts, images and apps: © 2026 Marlène Ménoire.",
    legalUpdated: "Last updated: 22 October 2026.",
    nfPageTitle: "Page not found · Marlène Ménoire",
    nfTitle: "This page doesn’t exist",
    nfText: "The link may be old, or there may be a typo in the address.",
    nfBack: "Back to the home page",
    langFrAria: "Version française",
    langEnAria: "English version",
  },
};

// Langue : donnée par l'adresse. Anglais à la racine (langue par défaut), français sous /fr/.
// Les pages des deux langues sont générées par tools/build.mjs à partir de src/.
const PAGE_LANG = location.pathname.startsWith('/fr/') || location.pathname === '/fr' ? 'fr' : 'en';
// La même page dans l'autre langue : /routine.html <-> /fr/routine.html
function pathIn(lang) {
  const page = location.pathname.replace(/^\/fr(\/|$)/, '/');
  return (lang === 'fr' ? '/fr' + page : page) + location.hash;
}
// Anciens liens en ?lang=… et choix mémorisé : on rejoint la bonne version
(function routeLanguage() {
  const wanted = new URLSearchParams(location.search).get('lang');
  let saved = null;
  // Clé neuve : l'ancien site enregistrait la langue à chaque visite, même sans choix du visiteur
  try { saved = localStorage.getItem('site-lang-choice'); } catch (e) {}
  const target = wanted === 'fr' || wanted === 'en' ? wanted : saved === 'fr' ? 'fr' : null;
  if (target && target !== PAGE_LANG) location.replace(pathIn(target));
})();
function pickLanguage() { return PAGE_LANG; }

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
  document.querySelectorAll('[data-lang]').forEach(a => { if (a.dataset.lang === lang) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
  currentLang = lang;
  if (document.getElementById('theme-btn')) updateThemeButton();
}

// FR · EN : des liens vers l'autre version ; le choix est retenu pour les visites suivantes
document.querySelectorAll('[data-lang]').forEach(a => {
  a.href = pathIn(a.dataset.lang);
  a.addEventListener('click', () => { try { localStorage.setItem('site-lang-choice', a.dataset.lang); } catch (e) {} });
});

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

// (la page d'erreur n'a pas de bouton de thème)
document.getElementById('theme-btn')?.addEventListener('click', () => {
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
  // Survol : on attend un court instant, pour qu'un simple passage de la souris ne fasse pas bouger l'étagère
  let hoverTimer = null;
  c.addEventListener('mouseenter', () => {
    if (!canHover.matches) return;
    hoverTimer = setTimeout(() => { if (Date.now() > cardLock) openCard(c); }, 180);
  });
  c.addEventListener('mouseleave', () => clearTimeout(hoverTimer));
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
