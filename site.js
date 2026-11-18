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
    pageTitle: 'Marlène Ménoire · Product leader',
    kicker: 'Bonjour, je suis Marlène',
    title1: "L'IA accélère les développements.",
    title2: 'Mon métier\u00a0: choisir quoi construire.',
    bio: "Product leader depuis 8 ans sur des produits data pour la ville (mobilité, commerce, bâtiment), je mets en place les systèmes d'IA qui laissent aux équipes produit le temps des vraies décisions.",
    bio2: "Basée à Singapour, avec plaisir pour un café si vous êtes dans la région.",
    bio3: "On peut parler produit, IA, ou d'un domaine que je ne connais pas encore.",
    pathLabel: 'Mon parcours',
    stonalYears: '2023 – auj.',
    stonalRole: 'PM, Head of Product, puis CPO en mission via Freelance.com',
    stonal1: "de bâtiments gérés dans l'application",
    stonal2: 'utilisateurs actifs par mois, ×2 en un an',
    mau: '2\u00a0600+',
    mytraffic1: "Aider les enseignes à choisir où s'installer",
    mytraffic2: "du chiffre d'affaires",
    explainRole: 'Modélisation des transports',
    explain1: 'et ses 200 km de métro',
    explain2: 'Prévisions nationales de trafic',
    filStart: ", école d'ingénieurs · 2015 – 2018",
    sideKicker: 'Sur mon temps libre',
    sideT1: "L'IA dans les mains,",
    sideT2: "de l'idée à l'appli.",
    sideText: 'Des applis nées de mes propres besoins, conçues et codées seule avec Claude. Gratuites, à essayer sans rien installer.',
    sideCurious: "Curieuse, j'aime voir jusqu'où on peut aller avec l'IA, pour en mesurer le potentiel comme les limites et les risques.",
    linkedin: 'Me retrouver sur LinkedIn',
    linkedinContact: 'Me contacter sur LinkedIn',
    appsLabel: 'Mes applis',
    colSub: 'Livres, films, séries et jeux',
    colDesc: "Garde au même endroit tous les livres, films, séries et jeux qu'on te conseille. Simple et agréable à utiliser au quotidien, avec en prime des recommandations de Claude choisies selon tes goûts.",
    signup: 'Créer un compte',
    login: 'Se connecter',
    tripsName: 'Mes Voyages',
    tripsDesc: 'Carte, planning et statistiques de voyage',
    routineDesc: 'Séances de sport et régularité',
    soon: 'Bientôt',
    aboutName: 'Mon parcours',
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
    motionLabel: "L'appli en mouvement",
    colStep1t: 'Ajoute un titre', colStep1d: "Tape quelques lettres ou scanne le livre, la fiche se remplit toute seule.",
    colStep2t: 'Note-le en un geste', colStep2d: 'Cinq étoiles pour retrouver tes coups de cœur, et le nom de qui te l\'a conseillé.',
    colStep3t: 'Laisse Claude te conseiller', colStep3d: 'Des suggestions choisies selon tes goûts, avec le pourquoi de chacune.',
    rouStep1t: 'Note tes séries', rouStep1d: 'Tout est repris de la dernière fois. Une coche par série, et la séance est enregistrée.',
    rouStep2t: 'Vois ta semaine', rouStep2d: 'Tes séances, tes minutes de cardio et les muscles travaillés, en un coup d\'œil.',
    rouStep3t: 'Suis ta progression', rouStep3d: 'Une courbe par exercice, et une suggestion de charge quand tu atteins ton objectif.',
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
    routineKicker2: "Comment elle a évolué",
    routineStory2: "Je l'ai fait tester autour de moi, et chaque retour a permis de faire évoluer l'application : une prise en main plus simple, des séries plus rapides à noter, un suivi plus clair.",
    routineCtaText: "C'est gratuit. La démo s'ouvre sur un compte d'exemple, avec douze semaines de séances : rien à créer.",
    r2t: "Tes séances types, toutes prêtes",
    r2d: "Enregistre une séance habituelle, par exemple « Haut du corps » : la fois suivante, tous ses exercices sont prêts, avec tes chiffres.",
    r3t: "Repars de la dernière fois",
    r3d: "Tes poids et répétitions de la séance précédente s'affichent : tu sais où tu en étais, et tu peux viser un peu plus. Valider une série ne prend qu'une seconde.",
    r4t: "Des exercices adaptés à tes objectifs",
    r4d: "Choisis les muscles que tu veux renforcer : l'appli te suggère les exercices adaptés.",
    r5t: "Ta semaine en un coup d'œil",
    r5d: "Vois tout de suite si tu as tenu ton objectif de séances de la semaine. De quoi te motiver à y retourner.",
    r6t: "Ta progression",
    r6d: "Une courbe par exercice, et un coup de pouce quand il est temps d'augmenter la charge.",
    r7t: "Des conseils pour bien faire l'exercice",
    r7d: "Pour chaque exercice, les bons gestes pour éviter de te blesser.",
    r8t: "Partout, même hors ligne",
    r8d: "S'installe sur ton téléphone, fonctionne sans connexion à la salle, en français et en anglais.",
    aboutPageTitle: 'Mon parcours · Marlène Ménoire',
    aboutTagline: "Ingénieure transport devenue product leader, avec huit ans passés à transformer des données sur la ville en produits qui aident à décider.",
    seeApps: 'Voir mes applis',
    backHome: '← Accueil',
    xpLabel: 'Expériences',
    xpBuildings: 'Bâtiment', xpRetail: 'Commerce', xpMobility: 'Mobilité',
    cpoWhen: 'depuis juin 2026', cpoNote: 'En mission pour Stonal, salariée de Freelance.com',
    hopWhen: 'juil. 2024 – fév. 2026', pmWhen: 'juil. 2023 – juil. 2024',
    stonalText: "Une plateforme de gestion des bâtiments, appuyée sur leurs données et utilisée surtout par des bailleurs sociaux pour suivre la performance énergétique et planifier les rénovations. J'ai porté sa phase de croissance avec une plateforme en self-onboarding, qui rend les clients autonomes dans la gestion de leur patrimoine, et j'ai monté l'équipe produit.",
    fig1: "gérés dans l'application", fig2: 'en 3 trimestres', fig3: 'utilisateurs actifs par mois, ×2 en un an', fig4: 'Management de', fig4b: 'personnes',
    mytrafficText: "Des données de fréquentation et de trafic pour aider les enseignes à choisir où s'installer. Avec nos clients, j'ai repensé l'expérience pour la rendre plus simple au quotidien.",
    fig5: "du chiffre d'affaires", fig6b: 'Mensuel → hebdo', fig6: "fréquence d'usage",
    explainJob: 'Consultante, modélisation des transports',
    explainText: 'Des modèles de transport multimodaux pour les acteurs publics, dont le Grand Paris Express, les prévisions nationales de trafic routier et la refonte d’un réseau ferroviaire régional.',
    aiWorkTitle: "L'IA, au travail",
    ai1t: 'Une base de connaissances générée depuis le code', ai1d: "La référence commune de l'entreprise et des outils d'IA. Elle écrit seule le guide utilisateur et les notes de version.",
    ai2t: 'Les retours clients pré-analysés', ai2d: 'Consolidés pour les équipes, avec les cas simples traités automatiquement. En cours.',
    ai3t: 'Et mes propres applis', ai3d: 'Ma Collection et Routine, conçues et codées seule avec Claude, sur mon temps libre.',
    eduTitle: 'Formation et recherche',
    tagSchool: 'Formation', tagResearch: 'Recherche',
    schoolSub: "École d'ingénieurs, Lyon · 2015 – 2018",
    schoolText: "Diplôme d'ingénieure en transport et mobilité (MEng). C'est là que j'ai appris à modéliser comment les gens se déplacent.",
    paperTitle: "Prédire la demande d'autopartage à Montréal",
    paperSub: 'Article scientifique, première autrice · Transportation Research Procedia, Elsevier, 2020',
    paperText: "Écrit lors d'un stage de recherche à Polytechnique Montréal, avec les données de Communauto. Au-delà du nombre de voitures, la marchabilité, la démographie et l'accès au bus comptent.",
    aboutCtaTitle: "Envie d'échanger ?",
    aboutCtaText: "Basée à Singapour, avec plaisir pour un café si vous êtes dans la région.",
    aboutCtaText2: "On peut parler produit, IA, ou d'un domaine que je ne connais pas encore.",
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
    pageTitle: 'Marlène Ménoire · Product leader',
    kicker: "Hi, I'm Marlène",
    title1: 'AI speeds up development.',
    title2: 'My job: deciding what to build.',
    bio: 'A product leader for 8 years on data products for cities (mobility, retail, buildings), I set up the AI systems that give product teams time for the decisions that matter.',
    bio2: "Based in Singapore, happy to grab a coffee if you're in the area.",
    bio3: "Happy to talk product, AI, or a field I don't know yet.",
    pathLabel: 'My path',
    stonalYears: '2023 – now',
    stonalRole: 'PM, Head of Product, then CPO on assignment via Freelance.com',
    stonal1: 'of buildings managed in the app',
    stonal2: 'monthly active users, ×2 in a year',
    mau: '2,600+',
    mytraffic1: 'Helping retailers choose where to open',
    mytraffic2: 'of company revenue',
    explainRole: 'Transport modelling',
    explain1: 'and its 200 km of metro',
    explain2: 'National traffic forecasts',
    filStart: ', engineering school · 2015 – 2018',
    sideKicker: 'In my own time',
    sideT1: 'Hands-on with AI,',
    sideT2: 'from idea to live app.',
    sideText: 'Apps born from my own needs, designed and coded on my own with Claude. Free, and nothing to install.',
    sideCurious: "I'm curious to see how far AI can go, to understand its potential as well as its limits and risks.",
    linkedin: 'Find me on LinkedIn',
    linkedinContact: 'Message me on LinkedIn',
    appsLabel: 'My apps',
    colSub: 'Books, films, shows and games',
    colDesc: 'Keep every book, film, show and game people recommend to you in one place. Simple and pleasant to use every day, with recommendations from Claude picked for your taste.',
    signup: 'Create an account',
    login: 'Log in',
    tripsName: 'My Trips',
    tripsDesc: 'Map, timeline and travel stats',
    routineDesc: 'Workouts and consistency',
    soon: 'Coming soon',
    aboutName: 'My path',
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
    motionLabel: 'The app in motion',
    colStep1t: 'Add a title', colStep1d: 'Type a few letters or scan the book, and the entry fills itself in.',
    colStep2t: 'Rate it in one tap', colStep2d: 'Five stars to find your favourites again, and the name of who recommended it.',
    colStep3t: 'Let Claude recommend', colStep3d: 'Suggestions picked for your taste, each with the reason why.',
    rouStep1t: 'Log your sets', rouStep1d: 'Everything carries over from last time. One tick per set, and the workout is saved.',
    rouStep2t: 'See your week', rouStep2d: 'Your workouts, cardio minutes and the muscles you worked, at a glance.',
    rouStep3t: 'Track your progress', rouStep3d: 'A curve for each exercise, and a weight suggestion when you hit your target.',
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
    routineKicker2: "How it evolved",
    routineStory2: "I had people around me test it, and every piece of feedback helped the app evolve: an easier start, faster sets to log, a clearer progress view.",
    routineCtaText: "It is free. The demo opens on a sample account with twelve weeks of workouts: nothing to create.",
    r2t: "Your usual workouts, ready made",
    r2d: "Save a usual workout, like “Upper body”: next time, all its exercises are ready, with your numbers.",
    r3t: "Pick up where you left off",
    r3d: "Your weights and reps from last time are right there: you know where you stood, and can aim a little higher. Logging a set takes a second.",
    r4t: "Exercises suited to your goals",
    r4d: "Pick the muscles you want to strengthen: the app suggests suitable exercises.",
    r5t: "Your week at a glance",
    r5d: "See right away whether you hit your workout goal for the week. A nice nudge to go back.",
    r6t: "Your progress",
    r6d: "A curve for each exercise, and a nudge when it's time to add weight.",
    r7t: "Tips to do each exercise right",
    r7d: "For each exercise, the right moves to avoid getting hurt.",
    r8t: "Everywhere, even offline",
    r8d: "Installs on your phone, works without a connection at the gym, in English and French.",
    aboutPageTitle: 'My path · Marlène Ménoire',
    aboutTagline: "A transport engineer turned product leader, with eight years spent turning data about cities into products that help people decide.",
    seeApps: 'See my apps',
    backHome: '← Home',
    xpLabel: 'Experience',
    xpBuildings: 'Buildings', xpRetail: 'Retail', xpMobility: 'Mobility',
    cpoWhen: 'since June 2026', cpoNote: 'On assignment for Stonal, employed by Freelance.com',
    hopWhen: 'Jul 2024 – Feb 2026', pmWhen: 'Jul 2023 – Jul 2024',
    stonalText: 'A building management platform, built on building data and used mostly by social housing providers to track energy performance and plan renovations. I led its growth phase with a self-onboarding platform that lets clients manage their property portfolio on their own, and I built the product team.',
    fig1: 'managed in the app', fig2: 'in 3 quarters', fig3: 'monthly active users, ×2 in a year', fig4: 'Managing', fig4b: 'people',
    mytrafficText: "Footfall and traffic data to help retailers choose where to open. Together with our clients, I redesigned the experience to make it simpler to use every day.",
    fig5: 'of company revenue', fig6b: 'Monthly → weekly', fig6: 'usage',
    explainJob: 'Consultant, transport modelling',
    explainText: 'Multimodal transport models for public bodies, including the Grand Paris Express, national road traffic forecasts and a regional rail redesign.',
    aiWorkTitle: 'AI, at work',
    ai1t: 'A knowledge base generated from the code', ai1d: 'The shared reference for the company and its AI tools. It writes the user guide and release notes on its own.',
    ai2t: 'Customer feedback, pre-analysed', ai2d: 'Consolidated for the teams, with simple cases handled automatically. In progress.',
    ai3t: 'And my own apps', ai3d: 'My Collection and Routine, designed and coded on my own with Claude, in my own time.',
    eduTitle: 'Education and research',
    tagSchool: 'Education', tagResearch: 'Research',
    schoolSub: 'Engineering school, Lyon · 2015 – 2018',
    schoolText: 'MEng in transport and mobility engineering. Where I learned to model how people move.',
    paperTitle: 'Predicting carsharing demand in Montreal',
    paperSub: 'Peer-reviewed paper, lead author · Transportation Research Procedia, Elsevier, 2020',
    paperText: 'Written during a research internship at Polytechnique Montréal, with data from Communauto. Beyond the number of cars, walkability, demographics and bus access all matter.',
    aboutCtaTitle: 'Want to connect?',
    aboutCtaText: "Based in Singapore, happy to grab a coffee if you're in the area.",
    aboutCtaText2: "Happy to talk product, AI, or a field I don't know yet.",
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

// ----- Accueil : le parcours en fil -----
// Une seule étape ouverte à la fois (Stonal au départ). Ordinateur : au survol ; téléphone et clavier : au toucher ou à la touche Entrée.
const filItems = [...document.querySelectorAll('.fil-item')];
function openFil(item) {
  filItems.forEach(it => {
    const on = it === item;
    it.classList.toggle('open', on);
    it.querySelector('.fil-head').setAttribute('aria-expanded', on);
  });
}
filItems.forEach(it => {
  let hoverTimer = null;
  it.addEventListener('mouseenter', () => { if (canHover.matches) hoverTimer = setTimeout(() => openFil(it), 150); });
  it.addEventListener('mouseleave', () => clearTimeout(hoverTimer));
  it.querySelector('.fil-head').addEventListener('click', () => openFil(it));
});

// ----- Pages des applis : les étapes à côté du téléphone suivent l'animation (événements « demo-step » de demos.js) -----
document.querySelectorAll('.motion').forEach(m => {
  const steps = [...m.querySelectorAll('[data-step]')];
  const light = n => steps.forEach(s => s.classList.toggle('on', Number(s.dataset.step) === n));
  light(1);
  m.addEventListener('demo-step', e => light(e.detail));
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) m.classList.add('still');
});
// Ordinateur + téléphone (Ma Collection) : la composition suit la largeur de sa colonne
document.querySelectorAll('.motion-devices').forEach(w => {
  const g = w.querySelector('.devices');
  const fit = () => g.style.setProperty('--g', Math.min(1, w.clientWidth / 620));
  fit();
  new ResizeObserver(fit).observe(w);
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
// Clics vers le profil LinkedIn (accueil et « Mon parcours »)
document.querySelectorAll('[data-linkedin]').forEach(a => a.addEventListener('click', () => {
  if (window.goatcounter.count) window.goatcounter.count({ path: 'clic-linkedin', title: 'LinkedIn', event: true });
}));
