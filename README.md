# Marlène Ménoire · personal site

**Live: [marlenemenoire.com](https://marlenemenoire.com/)** · French and English

A one-page personal site presenting my apps:

- **[My Collection](https://marl75.github.io/mes-livres/)**: books, films, shows and games in one place, with personalised recommendations by Claude
- **[Routine](https://marl75.github.io/fitness-coach/)**: log workouts in one tap and see whether you keep it up (page `routine.html`, phone screenshots in `img/`)
- **My Trips**: coming soon

## Stack

- Plain HTML, CSS and JavaScript, no build step
- Texts in `site.js` (French and English); language follows the browser, `?lang=en` or `?lang=fr` forces it
- The LinkedIn link is set in `site.js` (`LINKEDIN_URL`); it stays hidden while empty
- Visitor stats: [GoatCounter](https://marlenemenoire.goatcounter.com), cookieless (`GOATCOUNTER_CODE` in `site.js`); clicks to My Collection are counted as events (`clic-demo` for “See the demo”, `clic-creer-compte`, `clic-connexion`), clicks to Routine as `routine-clic-demo`, `routine-clic-creer-compte`, `routine-clic-connexion` (links carry `data-app-id="routine"`), as are clicks to LinkedIn (`clic-linkedin`). Open the site with `#toggle-goatcounter` to stop counting your own visits
