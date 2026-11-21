// Accueil : un petit téléphone rejoue chaque appli dans sa carte, quand la carte est ouverte.
// Purement décoratif (aria-hidden) ; si le visiteur réduit les animations, on montre une image fixe.
// Couvertures : Open Library, comme dans Ma Collection.

(() => {
  const lang = document.documentElement.lang === 'fr' ? 'fr' : 'en';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cover = id => `https://covers.openlibrary.org/b/id/${id}-M.jpg`;
  const img = id => `<span class="cov"><img src="${cover(id)}" alt="" loading="lazy"></span>`;
  // Icônes au trait, reprises de l'appli (plus d'emoji ni de symboles)
  const svg = d => `<svg viewBox="0 0 24 24">${d}</svg>`;
  const ICON = {
    star: svg('<path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/>'),
    search: svg('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>'),
    spark: svg('<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>'),
    bars: svg('<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'),
    plus: svg('<path d="M12 5v14M5 12h14"/>'),
    check: svg('<path d="M20 6 9 17l-5-5"/>'),
    sync: svg('<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>'),
    livre: svg('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'),
    film: svg('<rect x="2" y="2" width="20" height="20" rx="2.18"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/>'),
    serie: svg('<rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/>'),
    jeu: svg('<rect x="2" y="6" width="20" height="12" rx="6"/><path d="M6 12h4M8 10v4"/><circle cx="15" cy="13" r="1"/><circle cx="18" cy="11" r="1"/>'),
  };
  const stars = n => `<span class="stars">${[1, 2, 3, 4, 5].map(i => `<i${i <= n ? ' class="on"' : ''}>${ICON.star}</i>`).join('')}</span>`;

  const T = {
    fr: {
      app: 'Ma Collection', tagline: 'Livres, films, séries et jeux', search: 'Rechercher', add: 'Ajouter', ideas: 'Idées',
      typeTabs: ['Tout', 'Livres', 'Films', 'Séries', 'Jeux'], cats: ['Lu', 'En cours', 'À lire'], books: 'livres', book: 'Livre',
      months: ['nov.', 'oct.', 'sept.', 'août', 'juil.', 'juin', 'mai'],
      addTitle: 'Ajouter un livre', types: ['Livre', 'Film', 'Série', 'Jeu'], autofill: 'Remplir automatiquement', typed: 'La Maison', save: 'Enregistrer',
      recoTitle: 'Recommandations', recoIntro: 'Des idées choisies par Claude, à partir de ce que tu as aimé.',
      because: t => `Inspiré par « ${t} »`, recoAdd: '+ Ajouter', recoDismiss: 'Pas pour moi',
      r1: 'Un roman puissant sur la mémoire de la guerre civile en Algérie.', r2: 'Une saga familiale foisonnante, du Venezuela à la France.', r3: 'Le pouvoir russe vu de l’intérieur, par un conseiller de l’ombre.',
      synced: 'Synchronisé depuis ton téléphone',
      upper: 'Haut du corps', today: 'Séance du jour', ex: 'Tirage vertical', last: 'dernière fois 3 × 10 · 40 kg',
      weight: 'POIDS', reps: 'RÉP.', addSet: '+ Série', finish: 'Terminer',
      next1: 'Rowing assis', next2: 'Développé militaire', planned: '3 séries prévues',
      toast: '✓ Séance enregistrée · 4 exercices', tabs: ['Séance', 'Suivi', 'Réglages'],
      week: 'Semaine du 16 nov.', progress: 'Suivi', days: 'LMMJVSD', sessions: 'séances', cardio: 'min de cardio',
      muscles: ['Dos', 'Épaules', 'Biceps', 'Jambes', 'Abdos', 'Pectoraux'],
      progSub: '8 dernières semaines', gain: 'en 8 semaines', current: 'charge actuelle', tip: 'Objectif atteint, essaie 42,5 kg',
    },
    en: {
      app: 'My Collection', tagline: 'Books, films, shows and games', search: 'Search', add: 'Add', ideas: 'Ideas',
      typeTabs: ['All', 'Books', 'Films', 'Shows', 'Games'], cats: ['Read', 'Reading', 'To read'], books: 'books', book: 'Book',
      months: ['Nov', 'Oct', 'Sep', 'Aug', 'Jul', 'Jun', 'May'],
      addTitle: 'Add a book', types: ['Book', 'Film', 'Show', 'Game'], autofill: 'Autofill', typed: 'La Maison', save: 'Save',
      recoTitle: 'Recommendations', recoIntro: 'Ideas picked by Claude, based on what you loved.',
      because: t => `Inspired by “${t}”`, recoAdd: '+ Wishlist', recoDismiss: 'Not for me',
      r1: 'A powerful novel about the memory of Algeria’s civil war.', r2: 'A sweeping family saga, from Venezuela to France.', r3: 'Russian power seen from inside, through a shadow adviser.',
      synced: 'Synced from your phone',
      upper: 'Upper body', today: "Today's workout", ex: 'Lat pulldown', last: 'last time 3 × 10 · 40 kg',
      weight: 'WEIGHT', reps: 'REPS', addSet: '+ Set', finish: 'Finish',
      next1: 'Seated cable row', next2: 'Shoulder press', planned: '3 sets planned',
      toast: '✓ Workout saved · 4 exercises', tabs: ['Workout', 'Progress', 'Settings'],
      week: 'Week of 16 Nov', progress: 'Progress', days: 'MTWTFSS', sessions: 'workouts', cardio: 'cardio min',
      muscles: ['Back', 'Shoulders', 'Biceps', 'Legs', 'Abs', 'Chest'],
      progSub: 'Last 8 weeks', gain: 'in 8 weeks', current: 'current weight', tip: 'Target reached, try 42.5 kg',
    },
  }[lang];

  // Livres sortis en 2024-2025, de styles différents (identifiants de couverture Open Library)
  // Romans français et étrangers récents, couvertures vérifiées sur Open Library ; les recos suivent les livres aimés
  const B = {
    maison: { t: 'La Maison vide', a: 'Laurent Mauvignier', c: 15153530, y: 2025 },
    jaca: { t: 'Jacaranda', a: 'Gaël Faye', c: 15174817, y: 2024 },
    kolkhoze: { t: 'Kolkhoze', a: 'Emmanuel Carrère', c: 15200564, y: 2025 },
    tigre: { t: 'Triste tigre', a: 'Neige Sinno', c: 14641340, y: 2023 },
    inter: { t: 'Intermezzo', a: 'Sally Rooney', c: 15248784, y: 2024 },
    anomalie: { t: 'L’Anomalie', a: 'Hervé Le Tellier', c: 10660381, y: 2020 },
    adapter: { t: 'S’adapter', a: 'Clara Dupont-Monod', c: 12384869, y: 2021 },
    perdre: { t: 'Se perdre', a: 'Annie Ernaux', c: 968944, y: 2001 },
    houris: { t: 'Houris', a: 'Kamel Daoud', c: 15115330, y: 2024 },
    jaguar: { t: 'Le Rêve du jaguar', a: 'Miguel Bonnefoy', c: 14831361, y: 2024 },
    mage: { t: 'Le Mage du Kremlin', a: 'Giuliano da Empoli', c: 14658436, y: 2022 },
  };
  // Une ligne du journal : couverture reliée, titre, mois de lecture, auteur et année, étoiles
  const row = (b, n, m, k) => `<div class="c-row${k ? ' new' : ''}"${k ? ` data-k="${k}"` : ''}>${img(b.c)}<div>
    <div class="c-head"><b>${b.t}</b><time>${T.months[m]}</time></div>
    <div class="c-meta">${ICON.livre}<span>${b.a}</span><span class="sep">·</span><span>${b.y}</span></div>${stars(n)}</div></div>`;
  const reco = (b, txt, from, k) => `<div class="rc" data-k="${k}">${img(b.c)}<div><b>${b.t}</b><em>${T.book} · ${b.a} · ${b.y}</em><p>${txt}</p><small>${T.because(from.t)}</small>
    <div class="rc-act"><span>${T.recoAdd}</span><span>${T.recoDismiss}</span></div></div></div>`;
  // Compteurs (onglet Livres, filtre Lu, année) : +1 quand le livre est ajouté
  const COUNTS = [20, 8, 6, 4, 2];
  const n = v => `<small data-inc="${v}">${v}</small>`;
  const tabs = () => `<div class="c-tabs">${T.typeTabs.map((t, i) => `<span${i === 1 ? ' class="on"' : ''}>${t}${i < 2 ? n(COUNTS[i]) : `<small>${COUNTS[i]}</small>`}</span>`).join('')}</div>`;
  const chips = () => `<div class="c-chips">${T.cats.map((t, i) => `<span${i ? '' : ' class="on"'}><i style="background:${['#6dbfa8', '#6a9bd4', '#d4936a'][i]}"></i>${t}${i ? `<small>${[0, 3, 5][i]}</small>` : n(8)}</span>`).join('')}</div>`;
  const year = () => `<div class="c-year"><b>2026</b><span><i data-inc="8">8</i> ${T.books}</span></div>`;
  const bump = (root, on) => root.querySelectorAll('[data-inc]').forEach(e => { e.textContent = +e.dataset.inc + (on ? 1 : 0); });

  const SCREENS = {
    collection: `
      <div class="screen">
        <div class="c-top"><span class="c-logo serif">${T.app}</span><span class="c-icons"><span><i class="c-av">M</i></span><span class="c-ideas" data-k="spark">${ICON.spark}</span><span>${ICON.bars}</span></span></div>
        <div class="c-search">${ICON.search}${T.search}</div>
        ${tabs()}
        ${chips()}
        ${year()}
        <div class="c-list">${row(B.maison, 0, 0, 'newitem')}${row(B.jaca, 5, 1)}${row(B.kolkhoze, 4, 2)}${row(B.tigre, 5, 3)}${row(B.inter, 4, 4)}</div>
      </div>
      <span class="fab" data-k="fab">${ICON.plus}</span>
      <div class="sheet" data-k="sheet">
        <span class="serif">${T.addTitle}</span>
        <div class="c-types">${['livre', 'film', 'serie', 'jeu'].map((k, i) => `<span${i ? '' : ' class="on"'}>${ICON[k]}${T.types[i]}</span>`).join('')}</div>
        <span class="c-label">${T.autofill}</span>
        <div class="field">${ICON.search}<span data-k="typed"></span><span class="caret"></span></div>
        <div class="sug" data-k="sug">${img(B.maison.c)}<div><b>${B.maison.t}</b><em>${B.maison.a} · ${B.maison.y}</em></div></div>
        <span class="add" data-k="add">${T.save}</span>
      </div>
      <div class="reco" data-k="reco">
        <span class="serif">${T.recoTitle}</span>
        <span class="reco-intro">${T.recoIntro}</span>
        ${reco(B.houris, T.r1, B.maison, 'r1')}${reco(B.jaguar, T.r2, B.jaca, 'r2')}${reco(B.mage, T.r3, B.kolkhoze, 'r3')}
      </div>`,
    routine: `
      <div class="screen" data-k="s1">
        <span class="r-top">${T.upper} · <span data-k="count">0</span> / 4</span>
        <span class="r-title serif">${T.today}</span>
        <div class="r-card">
          <div class="r-ex"><span class="r-ic">⟟</span><div><b>${T.ex}</b><span>${T.last}</span></div></div>
          <div class="r-head"><span>#</span><span>${T.weight}</span><span>${T.reps}</span><span></span></div>
          ${[1, 2, 3].map(i => `<div class="r-row" data-k="row${i}"><span class="n">${i}</span><span class="v">40</span><span class="v"${i === 2 ? ' data-k="reps2"' : ''}>10</span><span class="ck">✓</span></div>`).join('')}
          <div class="r-btns"><span>${T.addSet}</span><span data-k="finish">${T.finish}</span></div>
        </div>
        <div class="r-next"><span class="r-ic">⌐</span><div><b>${T.next1}</b><span>${T.planned}</span></div></div>
        <div class="r-next"><span class="r-ic">⊓</span><div><b>${T.next2}</b><span>${T.planned}</span></div></div>
      </div>
      <div class="screen off-r" data-k="s2">
        <span class="r-top" style="color:#ffc49e">${T.week}</span>
        <span class="r-title serif">${T.progress}</span>
        <div class="s-week" data-k="bars">${[62, 0, 80, 45, 0, 95, 0].map(h => `<i${h ? '' : ' class="rest"'} data-h="${h || 10}"></i>`).join('')}</div>
        <div class="s-days">${[...T.days].map(d => `<span>${d}</span>`).join('')}</div>
        <div class="s-kpis"><div><b data-k="kpi1">0</b><span>${T.sessions}</span></div><div><b data-k="kpi2">0</b><span>${T.cardio}</span></div></div>
        <div class="s-mus" data-k="mus">${T.muscles.map((m, i) => `<span${[0, 1, 3].includes(i) ? ' class="hot"' : ''}>${m}</span>`).join('')}</div>
      </div>
      <div class="screen off-r" data-k="s3">
        <span class="r-top" style="color:#ffc49e">${T.progSub}</span>
        <span class="r-title serif">${T.ex}</span>
        <div class="p-chart"><svg viewBox="0 0 140 70" preserveAspectRatio="none" aria-hidden="true"><polyline data-k="curve" pathLength="1" points="2,62 21,58 40,52 59,49 78,41 97,35 116,27 138,16"/></svg><span class="p-max">40 kg</span><span class="p-min">30 kg</span></div>
        <div class="s-kpis"><div><b data-k="gain">+0 kg</b><span>${T.gain}</span></div><div><b>40 kg</b><span>${T.current}</span></div></div>
        <div class="p-tip" data-k="tip">↑ ${T.tip}</div>
      </div>
      <div class="toast" data-k="toast">${T.toast}</div>
      <div class="tabbar">${T.tabs.map((t, i) => `<span data-k="tab${i + 1}"${i ? '' : ' class="on"'}>${t}</span>`).join('')}</div>`,
  };

  // ----- Petit moteur : un doigt qui se déplace et touche, des étapes qu'on peut interrompre -----
  function makePlayer(root, script, reset, still) {
    root.insertAdjacentHTML('beforeend', '<span class="finger" data-k="finger"></span>');
    const $ = k => root.querySelector(`[data-k="${k}"]`);
    const finger = $('finger');
    let run = 0;
    function api(id) {
      const wait = ms => new Promise((res, rej) => setTimeout(() => (id === run ? res() : rej('stop')), ms));
      const moveTo = (el, dx = 0.5, dy = 0.5) => {
        // k : agrandissement du téléphone (pages des applis), pour placer le doigt au bon endroit
        const r = root.getBoundingClientRect(), e = el.getBoundingClientRect(), k = r.width / root.offsetWidth || 1;
        finger.style.left = `${(e.left - r.left + e.width * dx) / k}px`;
        finger.style.top = `${(e.top - r.top + e.height * dy) / k}px`;
        return wait(600);
      };
      // Étape de l'histoire en cours (pages des applis : la liste d'étapes à côté du téléphone s'allume)
      const mark = n => { if (id === run) root.dispatchEvent(new CustomEvent('demo-step', { detail: n, bubbles: true })); };
      const tap = async (el, cls) => {
        await moveTo(el);
        finger.classList.add('down'); if (cls) el.classList.add(cls);
        await wait(170);
        finger.classList.remove('down'); if (cls) setTimeout(() => el.classList.remove(cls), 200);
        await wait(150);
      };
      const away = () => { finger.style.left = '78%'; finger.style.top = '112%'; return wait(400); };
      const each = async (list, ms, fn) => { for (const x of list) { fn(x); await wait(ms); } };
      return { $, root, wait, moveTo, tap, away, each, mark };
    }
    return {
      start() {
        const id = ++run;
        reset(api(id));
        if (reduce) { still(api(id)); return; }
        const loop = () => {
          reset(api(id));
          finger.style.left = '78%'; finger.style.top = '112%';
          script(api(id)).then(() => { if (id === run) loop(); }, () => {});
        };
        loop();
      },
      stop() { run++; },
    };
  }

  // Ma Collection : on ajoute « La Maison vide », on le note, puis on ouvre les recos de Claude
  const collection = root => makePlayer(root, async a => {
    const typed = a.$('typed');
    a.mark(1);
    await a.wait(700);
    await a.tap(a.$('fab'), 'hit');
    a.$('sheet').classList.add('on'); await a.wait(500);
    await a.moveTo(typed.parentNode, 0.3);
    await a.each([...T.typed], 120, () => { typed.textContent = T.typed.slice(0, typed.textContent.length + 1); });
    a.$('sug').classList.add('on'); await a.wait(500);
    await a.tap(a.$('add'), 'hit');
    a.$('sheet').classList.remove('on'); a.away(); await a.wait(400);
    a.$('newitem').classList.remove('new'); bump(a.root, true); await a.wait(600);
    const st = [...a.$('newitem').querySelectorAll('.stars i')];
    a.mark(2);
    await a.moveTo(st[4]);
    await a.each(st, 110, s => s.classList.add('on'));
    await a.wait(700);
    a.mark(3);
    await a.tap(a.$('spark'), 'hit');
    a.$('reco').classList.add('on'); a.away(); await a.wait(450);
    await a.each(['r1', 'r2', 'r3'], 350, k => a.$(k).classList.add('on'));
    await a.wait(2800);
  }, a => {
    a.$('sheet').classList.remove('on'); a.$('sug').classList.remove('on'); a.$('typed').textContent = '';
    a.$('newitem').classList.add('new'); a.$('reco').classList.remove('on'); bump(a.root, false);
    a.$('newitem').querySelectorAll('.stars i').forEach(i => i.classList.remove('on'));
    ['r1', 'r2', 'r3'].forEach(k => a.$(k).classList.remove('on'));
  }, a => {
    a.$('newitem').classList.remove('new'); bump(a.root, true);
    a.$('newitem').querySelectorAll('.stars i').forEach(i => i.classList.add('on'));
  });

  // Routine : on valide trois séries, on termine la séance, puis on regarde le suivi de la semaine
  const routine = root => makePlayer(root, async a => {
    const rows = [a.$('row1'), a.$('row2'), a.$('row3')];
    const check = async i => {
      await a.tap(rows[i].querySelector('.ck'));
      rows[i].classList.add('done'); rows[i].classList.remove('active');
      if (rows[i + 1]) { rows[i + 1].classList.remove('dim'); rows[i + 1].classList.add('active'); }
      await a.wait(300);
    };
    a.mark(1);
    await a.wait(700);
    await check(0);
    const reps = a.$('reps2');
    await a.tap(reps);
    reps.textContent = '11'; reps.classList.add('bump'); await a.wait(250); reps.classList.remove('bump');
    await check(1);
    await check(2);
    await a.tap(a.$('finish'), 'hit');
    a.$('count').textContent = '1'; a.$('toast').classList.add('on'); a.away(); await a.wait(1300);
    a.$('toast').classList.remove('on');
    a.mark(2);
    await a.tap(a.$('tab2'));
    a.$('tab1').classList.remove('on'); a.$('tab2').classList.add('on');
    a.$('s1').classList.add('off-l'); a.$('s2').classList.remove('off-r'); a.away(); await a.wait(450);
    a.$('bars').querySelectorAll('i').forEach((b, i) => setTimeout(() => { b.style.height = `${b.dataset.h}%`; }, i * 90));
    await a.each(Array.from({ length: 20 }, (_, i) => i + 1), 40, n => {
      a.$('kpi1').textContent = Math.round(4 * n / 20); a.$('kpi2').textContent = Math.round(95 * n / 20);
    });
    await a.each([...a.$('mus').children], 120, s => s.classList.add('on'));
    await a.wait(900);
    a.mark(3);
    await a.tap(a.$('mus').children[0]);
    a.$('s2').classList.add('off-l'); a.$('s3').classList.remove('off-r'); a.away(); await a.wait(500);
    a.$('curve').classList.add('drawn');
    await a.each(Array.from({ length: 10 }, (_, i) => i + 1), 100, n => { a.$('gain').textContent = `+${n} kg`; });
    a.$('tip').classList.add('on');
    await a.wait(2800);
  }, a => {
    ['row1', 'row2', 'row3'].forEach((k, i) => { const r = a.$(k); r.classList.remove('done', 'active'); r.classList.toggle('dim', i > 0); });
    a.$('row1').classList.add('active'); a.$('reps2').textContent = '10'; a.$('count').textContent = '0';
    a.$('toast').classList.remove('on'); a.$('tab1').classList.add('on'); a.$('tab2').classList.remove('on');
    a.$('s1').classList.remove('off-l'); a.$('s2').classList.add('off-r');
    a.$('bars').querySelectorAll('i').forEach(b => { b.style.height = '0'; });
    a.$('kpi1').textContent = '0'; a.$('kpi2').textContent = '0';
    [...a.$('mus').children].forEach(s => s.classList.remove('on'));
    a.$('s2').classList.remove('off-l'); a.$('s3').classList.add('off-r');
    a.$('curve').classList.remove('drawn'); a.$('gain').textContent = '+0 kg'; a.$('tip').classList.remove('on');
  }, a => {
    ['row1', 'row2', 'row3'].forEach(k => { a.$(k).classList.add('done'); a.$(k).classList.remove('dim', 'active'); });
  });

  // ----- Ma Collection sur ordinateur : la même bibliothèque, qui se met à jour quand le téléphone ajoute et note un livre -----
  // Écran passif : il suit les étapes du téléphone voisin (événements « demo-step » de la section .motion)
  const DESKTOP = `
    <div class="lp-screen"><div class="scr scr-collection lp-scr">
      <div class="lp-bar"><i></i><i></i><i></i><span>marl75.github.io/mes-livres</span></div>
      <div class="lp-app">
        <div class="lp-head">
          <div><span class="c-logo serif">${T.app}</span><small>${T.tagline}</small></div>
          <div class="c-search">${ICON.search}${T.search}</div>
          <div class="lp-tools"><span class="lp-btn lp-add">${ICON.plus}${T.add}</span><span class="lp-btn"><i class="c-av">M</i>Marlène</span><span class="lp-btn lp-ideas" data-k="badge">${ICON.spark}${T.ideas}<i>3</i></span><span class="lp-btn">${ICON.bars}</span><span class="lp-btn">${ICON.sync}</span></div>
        </div>
        ${tabs()}
        ${chips()}
        <div class="lp-grid">${year()}${row(B.maison, 0, 0, 'dnew')}${row(B.jaca, 5, 1)}${row(B.kolkhoze, 4, 2)}${row(B.tigre, 5, 3)}${row(B.inter, 4, 4)}${row(B.anomalie, 4, 5)}${row(B.adapter, 5, 6)}</div>
      </div>
      <div class="toast lp-toast" data-k="dtoast">${ICON.check}${T.synced}</div>
    </div></div>
    <div class="lp-base"></div>`;
  document.querySelectorAll('[data-demo-desktop]').forEach(d => {
    d.innerHTML = DESKTOP;
    const $ = k => d.querySelector(`[data-k="${k}"]`);
    const stars = () => [...$('dnew').querySelectorAll('.stars i')];
    let timers = [];
    const later = (ms, fn) => timers.push(setTimeout(fn, ms));
    const reset = () => { timers.forEach(clearTimeout); timers = []; $('dnew').classList.add('new'); bump(d, false); stars().forEach(s => s.classList.remove('on')); $('dtoast').classList.remove('on'); $('badge').classList.remove('on'); };
    if (reduce) { $('dnew').classList.remove('new'); bump(d, true); stars().forEach(s => s.classList.add('on')); $('badge').classList.add('on'); return; }
    (d.closest('.motion') || document).addEventListener('demo-step', e => {
      if (e.detail === 1) reset();
      if (e.detail === 2) {
        // le livre vient d'être ajouté sur le téléphone : il arrive sur l'ordinateur, puis ses étoiles
        later(300, () => { $('dnew').classList.remove('new'); bump(d, true); $('dtoast').classList.add('on'); });
        later(1500, () => stars().forEach((s, i) => setTimeout(() => s.classList.add('on'), i * 110)));
        later(2600, () => $('dtoast').classList.remove('on'));
      }
      if (e.detail === 3) later(900, () => $('badge').classList.add('on'));
    });
  });

  // ----- Branchement : on joue la démo de la carte ouverte seulement, et seulement quand elle est visible -----
  const MAKERS = { collection, routine };
  const players = [];
  document.querySelectorAll('[data-demo]').forEach(slot => {
    const app = slot.dataset.demo;
    slot.innerHTML = `<div class="phone"><div class="scr scr-${app}">${SCREENS[app]}</div></div>`;
    const card = slot.closest('.app-card') || slot;
    const p = { card, player: MAKERS[app](slot.querySelector('.scr')), playing: false, visible: false };
    players.push(p);
  });
  function sync() {
    players.forEach(p => {
      const should = (!p.card.classList.contains('app-card') || p.card.classList.contains('open')) && p.visible && !document.hidden;
      if (should && !p.playing) { p.playing = true; p.player.start(); }
      if (!should && p.playing) { p.playing = false; p.player.stop(); }
    });
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { const p = players.find(x => x.card === e.target); if (p) p.visible = e.isIntersecting; });
    sync();
  });
  players.forEach(p => {
    io.observe(p.card);
    // l'accordéon (site.js) ajoute ou retire la classe « open »
    new MutationObserver(() => setTimeout(sync, 350)).observe(p.card, { attributes: true, attributeFilter: ['class'] });
  });
  document.addEventListener('visibilitychange', sync);
})();
