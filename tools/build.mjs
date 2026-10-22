// Génère les pages du site dans les deux langues, à partir des modèles de src/ et des textes de site.js.
//   anglais (langue par défaut) : /index.html, /routine.html…   français : /fr/index.html, /fr/routine.html…
// Après toute modification de src/ ou des textes de site.js :  node tools/build.mjs
// (l'action GitHub « Pages à jour » vérifie que les pages générées correspondent bien aux sources).
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://marlenemenoire.com';
const LANGS = ['en', 'fr'];

// Textes : l'objet TEXTS de site.js (seule source des traductions)
const js = readFileSync(join(ROOT, 'site.js'), 'utf8');
const pre = js.slice(0, js.indexOf('const TEXTS = {'));
const block = js.slice(js.indexOf('const TEXTS = {'), js.indexOf('\n};', js.indexOf('const TEXTS = {')) + 3);
const TEXTS = new Function(`${pre}\n${block}\nreturn TEXTS;`)();
const APP_URLS = new Function(`${pre}\nreturn APP_URLS;`)();

// Ce que lisent Google et les aperçus de partage (LinkedIn, WhatsApp…), page par page
const META = {
  index: {
    type: 'website',
    fr: { desc: 'Des applis du quotidien, faites avec soin : Ma Collection pour suivre ses livres, films, séries et jeux, Routine pour ses séances de sport, et bientôt Mes Voyages.',
      ogTitle: 'Marlène Ménoire · Des applis du quotidien', ogDesc: 'Des applis web simples, bilingues et installables sur téléphone : Ma Collection, pour ses livres, films, séries et jeux, et Routine, pour ses séances de sport.' },
    en: { desc: 'Everyday apps, made with care: My Collection to track the books, films, shows and games people recommend, Routine for your workouts, and soon My Trips.',
      ogTitle: 'Marlène Ménoire · Everyday apps', ogDesc: 'Simple, bilingual web apps you can install on your phone: My Collection for books, films, shows and games, and Routine for your workouts.' },
    image: lang => `${SITE}/img/og-${lang}.jpg`,
  },
  collection: {
    type: 'article',
    fr: { desc: 'L’histoire de Ma Collection : une appli pour garder les livres, films, séries et jeux qu’on nous conseille, et ne plus les perdre dans un bloc-notes.',
      ogTitle: 'Ma Collection · l’histoire de l’appli', ogDesc: 'Livres, films, séries et jeux qu’on nous conseille, enfin rangés au même endroit, avec des recommandations par Claude.' },
    en: { desc: 'The story of My Collection: an app to keep the books, films, shows and games people recommend, instead of losing them in a notes app.',
      ogTitle: 'My Collection · the story of the app', ogDesc: 'The books, films, shows and games people recommend, finally in one place, with recommendations by Claude.' },
    image: () => 'https://marl75.github.io/mes-livres/og-image.png',
  },
  routine: {
    type: 'article',
    fr: { desc: 'L’histoire de Routine : une appli pour noter ses séances de sport en un geste et voir si l’on tient le rythme.',
      ogTitle: 'Routine · l’histoire de l’appli', ogDesc: 'Tes séances de sport notées en un geste, tes muscles de la semaine et ta progression, sur ton téléphone.' },
    en: { desc: 'The story of Routine: an app to log your workouts in one tap and see whether you keep it up.',
      ogTitle: 'Routine · the story of the app', ogDesc: 'Your workouts logged in one tap, the muscles you worked this week and your progress, on your phone.' },
    image: lang => `${SITE}/img/routine-suivi-${lang}.jpg`,
  },
  about: {
    type: 'profile',
    fr: { desc: 'Leader produit hands-on, j’ai creusé l’usage de l’IA sur mon temps personnel jusqu’à créer mes propres applis, gratuites.',
      ogTitle: 'Qui suis-je ? · Marlène Ménoire', ogDesc: 'Leader produit hands-on, curieuse de ce que l’IA change dans notre façon de créer des produits.' },
    en: { desc: 'A hands-on product leader, I explored AI in practice in my own time, all the way to building my own free apps.',
      ogTitle: 'About me · Marlène Ménoire', ogDesc: 'A hands-on product leader, curious about how AI is changing the way we build products.' },
    image: lang => `${SITE}/img/og-about-${lang}.jpg`,
  },
  mentions: {
    type: 'website',
    fr: { desc: 'Qui édite ce site, qui l’héberge, et ce que deviennent tes données.', ogTitle: 'Mentions et confidentialité · Marlène Ménoire', ogDesc: 'Qui édite ce site, qui l’héberge, et ce que deviennent tes données.' },
    en: { desc: 'Who publishes this site, who hosts it, and what happens to your data.', ogTitle: 'Legal notice and privacy · Marlène Ménoire', ogDesc: 'Who publishes this site, who hosts it, and what happens to your data.' },
    image: lang => `${SITE}/img/og-${lang}.jpg`,
  },
};

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = s => esc(s).replace(/"/g, '&quot;');
const urlOf = (lang, page) => `${SITE}${lang === 'fr' ? '/fr' : ''}/${page === 'index' ? '' : page + '.html'}`;
function appLink(kind, lang, app = 'collection') {
  const q = [kind === 'signup' && 'signup', kind === 'demo' && 'demo', `lang=${lang}`].filter(Boolean).join('&');
  return `${APP_URLS[app]}?${q}`;
}

function build(page, lang) {
  const t = TEXTS[lang];
  let html = readFileSync(join(ROOT, 'src', `${page}.html`), 'utf8');
  const titleKey = (html.match(/data-title-key="(\w+)"/) || [, 'pageTitle'])[1];
  const missing = key => { throw new Error(`Texte « ${key} » absent en ${lang} (site.js)`); };
  const tx = key => (key in t ? t[key] : missing(key));

  html = html.replace(/<html lang="fr"/, `<html lang="${lang}"`);
  // Textes : <… data-i18n="clé">texte</…>
  html = html.replace(/(<(\w+)\b[^>]*\bdata-i18n="(\w+)"[^>]*>)([^<]*)(<\/\2>)/g, (m, open, tag, key, _, close) => open + esc(tx(key)) + close);
  // Attributs traduits : images, textes alternatifs, libellés
  html = html.replace(/<[^>]+\bdata-i18n-src="(\w+)"[^>]*>/g, (m, key) => m.replace(/\ssrc="[^"]*"/, ` src="${attr(tx(key))}"`));
  html = html.replace(/<[^>]+\bdata-i18n-alt="(\w+)"[^>]*>/g, (m, key) => m.replace(/\salt="[^"]*"/, ` alt="${attr(tx(key))}"`));
  html = html.replace(/<[^>]+\bdata-i18n-label="(\w+)"[^>]*>/g, (m, key) => m.replace(/\saria-label="[^"]*"/, ` aria-label="${attr(tx(key))}"`));
  // Liens vers les applis, dans la langue de la page
  html = html.replace(/<a\b[^>]*\bdata-app="(\w+)"[^>]*>/g, m => {
    const kind = m.match(/data-app="(\w+)"/)[1], app = (m.match(/data-app-id="(\w+)"/) || [, 'collection'])[1];
    return m.replace(/\shref="[^"]*"/, ` href="${attr(appLink(kind, lang, app))}"`);
  });
  // FR · EN : liens vers la même page dans chaque langue
  html = html.replace(/<a\b[^>]*\bdata-lang="(fr|en)"[^>]*>/g, (m, l) => {
    let a = m.replace(/\shref="[^"]*"/, ` href="${l === 'fr' ? '/fr' : ''}/${page === 'index' ? '' : page + '.html'}"`);
    return l === lang ? a.replace('<a ', '<a aria-current="true" ') : a;
  });

  const meta = META[page];
  if (meta) {
    const m = meta[lang];
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(tx(titleKey))}</title>`);
    html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${attr(m.desc)}">`);
    html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${attr(m.ogTitle)}">`);
    html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${attr(m.ogDesc)}">`);
    html = html.replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${attr(meta.image(lang))}">`);
    const alt = LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${urlOf(l, page)}">`).join('\n');
    html = html.replace(/(<meta property="og:type" content=")[^"]*(">)/, `$1${meta.type}$2
<meta property="og:url" content="${urlOf(lang, page)}">
<meta property="og:locale" content="${lang === 'fr' ? 'fr_FR' : 'en_US'}">
<link rel="canonical" href="${urlOf(lang, page)}">
${alt}
<link rel="alternate" hreflang="x-default" href="${urlOf('en', page)}">`);
  } else {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(tx(titleKey))}</title>`);
  }

  // Pages françaises sous /fr/ : les fichiers communs sont un dossier plus haut
  if (lang === 'fr') html = html.replace(/\b(href|src)="(?!https?:|\/|#|mailto:)([^"]+\.(?:css|js|svg|jpg|png)(?:\?[^"]*)?)"/g, '$1="../$2"');

  const left = [...html.matchAll(/data-i18n="(\w+)"/g)].length;
  const done = [...html.matchAll(/(<(\w+)\b[^>]*\bdata-i18n="\w+"[^>]*>)[^<]*<\/\2>/g)].length;
  if (left !== done) throw new Error(`${page} (${lang}) : ${left - done} texte(s) non traduit(s) (balise imbriquée ?)`);
  return `<!DOCTYPE html>\n<!-- Page générée par tools/build.mjs depuis src/${page}.html : modifier src/ ou site.js, puis relancer « node tools/build.mjs » -->\n` + html.replace(/^<!DOCTYPE html>\n/, '');
}

mkdirSync(join(ROOT, 'fr'), { recursive: true });
const pages = readdirSync(join(ROOT, 'src')).filter(f => f.endsWith('.html')).map(f => f.replace('.html', ''));
for (const page of pages) {
  if (page === '404') { writeFileSync(join(ROOT, '404.html'), build(page, 'en')); continue; }
  for (const lang of LANGS) writeFileSync(join(ROOT, lang === 'fr' ? 'fr' : '', `${page}.html`), build(page, lang));
}

// Plan du site pour les moteurs de recherche, avec la page équivalente dans l'autre langue
const urls = pages.filter(p => p !== '404').flatMap(page => LANGS.map(lang => `  <url>
    <loc>${urlOf(lang, page)}</loc>
${LANGS.map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${urlOf(l, page)}"/>`).join('\n')}
  </url>`));
writeFileSync(join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`);
console.log(`${pages.length} modèles → ${pages.length * 2 - 1} pages, sitemap.xml`);
