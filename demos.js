// Accueil : un petit téléphone rejoue chaque appli dans sa carte, quand la carte est ouverte.
// Purement décoratif (aria-hidden) ; si le visiteur réduit les animations, on montre une image fixe.
// Couvertures : Open Library, comme dans Ma Collection.

(() => {
  const lang = document.documentElement.lang === 'fr' ? 'fr' : 'en';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cover = id => `https://covers.openlibrary.org/b/id/${id}-M.jpg`;
  const img = id => `<img class="cov" src="${cover(id)}" alt="" loading="lazy">`;
  const stars = n => `<span class="stars">${[1, 2, 3, 4, 5].map(i => `<i${i <= n ? ' class="on"' : ''}>★</i>`).join('')}</span>`;

  const T = {
    fr: {
      search: 'Rechercher…', chips: ['Terminés 9', 'En cours 3', 'À découvrir 5'], book: 'Livre',
      addTitle: 'Ajouter un élément', typed: 'La Maison', add: 'Ajouter à ma collection',
      recoTitle: 'Recos de Claude', why: 'Parce que tu as aimé La Maison vide et Atmosphere',
      r1: 'Une saga familiale lumineuse, entre Rwanda et France.', r2: 'Une descente aux enfers savante et sombre.', r3: 'Un retour haletant à Panem.',
      upper: 'Haut du corps', today: 'Séance du jour', ex: 'Tirage vertical', last: 'dernière fois 3 × 10 · 40 kg',
      weight: 'POIDS', reps: 'RÉP.', addSet: '+ Série', finish: 'Terminer',
      next1: 'Rowing assis', next2: 'Développé militaire', planned: '3 séries prévues',
      toast: '✓ Séance enregistrée · 4 exercices', tabs: ['Séance', 'Suivi', 'Réglages'],
      week: 'Semaine du 16 nov.', progress: 'Suivi', days: 'LMMJVSD', sessions: 'séances', cardio: 'min de cardio',
      muscles: ['Dos', 'Épaules', 'Biceps', 'Jambes', 'Abdos', 'Pectoraux'],
      progSub: '8 dernières semaines', gain: 'en 8 semaines', current: 'charge actuelle', tip: 'Objectif atteint, essaie 42,5 kg',
    },
    en: {
      search: 'Search…', chips: ['Finished 9', 'In progress 3', 'To discover 5'], book: 'Book',
      addTitle: 'Add an item', typed: 'La Maison', add: 'Add to my collection',
      recoTitle: 'Picks from Claude', why: 'Because you liked La Maison vide and Atmosphere',
      r1: 'A luminous family saga between Rwanda and France.', r2: 'A dark, scholarly descent into hell.', r3: 'A gripping return to Panem.',
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
  const B = {
    maison: { t: 'La Maison vide', a: 'Laurent Mauvignier', c: 15153530 },
    onyx: { t: 'Onyx Storm', a: 'Rebecca Yarros', c: 14826089 },
    careless: { t: 'Careless People', a: 'Sarah Wynn-Williams', c: 14852090 },
    atmo: { t: 'Atmosphere', a: 'Taylor Jenkins Reid', c: 15098710 },
    abund: { t: 'Abundance', a: 'Ezra Klein, Derek Thompson', c: 15123873 },
    jaca: { t: 'Jacaranda', a: 'Gaël Faye', c: 15174817 },
    kata: { t: 'Katabasis', a: 'R. F. Kuang', c: 15117021 },
    sunrise: { t: 'Sunrise on the Reaping', a: 'Suzanne Collins', c: 14847912 },
  };
  const item = (b, n, k) => `<div class="c-item${k ? ' new' : ''}"${k ? ` data-k="${k}"` : ''}>${img(b.c)}<div><b>${b.t}</b><em>${b.a} · ${T.book}</em>${stars(n)}</div></div>`;
  const reco = (b, txt, k) => `<div class="c-item" data-k="${k}">${img(b.c)}<div><b>${b.t}</b><em>${b.a}</em><span>${txt}</span></div></div>`;

  const SCREENS = {
    collection: `
      <div class="screen">
        <div class="c-top"><span class="serif">${lang === 'fr' ? 'Ma Collection' : 'My Collection'}</span><span class="c-icons"><span data-k="spark">✦</span><span>▥</span></span></div>
        <div class="c-search">${T.search}</div>
        <div class="c-chips">${T.chips.map(c => `<span>${c}</span>`).join('')}</div>
        <div class="c-list">${item(B.maison, 0, 'newitem')}${item(B.onyx, 4)}${item(B.careless, 5)}${item(B.atmo, 4)}${item(B.abund, 4)}</div>
      </div>
      <span class="fab" data-k="fab">+</span>
      <div class="sheet" data-k="sheet">
        <span class="serif">${T.addTitle}</span>
        <div class="field"><span data-k="typed"></span><span class="caret"></span></div>
        <div class="sug" data-k="sug">${img(B.maison.c)}<div><b>${B.maison.t}</b><em>${B.maison.a} · 2025</em></div></div>
        <span class="add" data-k="add">${T.add}</span>
      </div>
      <div class="reco" data-k="reco">
        <span class="serif">${T.recoTitle}</span>
        <span class="why">${T.why}</span>
        ${reco(B.jaca, T.r1, 'r1')}${reco(B.kata, T.r2, 'r2')}${reco(B.sunrise, T.r3, 'r3')}
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
      return { $, wait, moveTo, tap, away, each, mark };
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
    a.$('newitem').classList.remove('new'); await a.wait(600);
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
    a.$('newitem').classList.add('new'); a.$('reco').classList.remove('on');
    a.$('newitem').querySelectorAll('.stars i').forEach(i => i.classList.remove('on'));
    ['r1', 'r2', 'r3'].forEach(k => a.$(k).classList.remove('on'));
  }, a => {
    a.$('newitem').classList.remove('new');
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

  // ----- Branchement : on joue la démo de la carte ouverte seulement, et seulement quand elle est visible -----
  const MAKERS = { collection, routine };
  const players = [];
  document.querySelectorAll('[data-demo]').forEach(slot => {
    const app = slot.dataset.demo;
    slot.innerHTML = `<div class="phone"><div class="scr">${SCREENS[app]}</div></div>`;
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
