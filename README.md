# Site-ul Liceului Teoretic „Dunărea” Galați

Șablon minimalist de site de prezentare, construit de la zero cu **HTML + CSS + JavaScript pur** (fără framework-uri, fără build tools). Conținutul și pozele au fost preluate de pe site-ul actual ([dunarea-info.ro](http://www.dunarea-info.ro)), iar structura e inspirată de [cnva.eu](https://cnva.eu/).

## Cum îl deschideți

Dați dublu-click pe `index.html` — se deschide direct în browser. Nu e nevoie de server sau instalări.

## Structura proiectului

```
index.html      → pagina principală (hero, statistici, specializări, anunțuri, galerie)
despre.html     → istoric, misiune, viziune, echipa managerială
oferta.html     → specializări, gimnaziu, certificări (ECDL, Oracle, CISCO...), pliant
elevi.html      → orar, regulament, burse, cabinet psihologic, Consiliul Elevilor
examene.html    → bacalaureat, evaluare națională, atestat, admitere
proiecte.html   → ROSE, CRED, Erasmus+, concursuri organizate de liceu
contact.html    → date de contact + hartă Google Maps
css/style.css   → tot designul (culori, layout, responsive)
js/main.js      → meniul de mobil + marcarea paginii active în meniu
assets/img/     → pozele preluate de pe site-ul vechi
```

## Cum modificați designul

Designul urmează sistemul „Dunărea Scholar" (generat cu Stitch — vezi DESIGN.md de pe Desktop):
minimalism modern + glassmorphism, font Inter, iconițe Material Symbols.

Toate culorile sunt definite o singură dată, la începutul lui `css/style.css`, în blocul `:root`:

```css
--primar: #00253e;    /* navy adânc — titluri, branding */
--secundar: #09639a;  /* albastru — linkuri, butoane */
--accent: #46ace0;    /* albastru accent — hover, evidențieri */
```

Schimbați o valoare acolo și se schimbă în tot site-ul.

Efectele (animația de intrare din hero, contoarele de la statistici, apariția
secțiunilor la scroll, micșorarea barei de navigație) sunt în `js/main.js`.

## Ce mai e de făcut (TODO)

- [ ] Înlocuiți link-urile `#` din `elevi.html` și `examene.html` cu PDF-urile reale
  (descărcați-le de pe site-ul vechi și puneți-le într-un folder `assets/docs/`)
- [ ] Cereți de la secretariat orarul actual și completați pagina Elevi
- [ ] Faceți poze noi cu clădirea liceului — pozele actuale sunt vechi (2014-2015)
  și nu există nicio poză bună cu exteriorul clădirii pentru hero
- [ ] Verificați că datele de contact sunt actuale (telefon, e-mail)
- [ ] Adăugați pagina GDPR / protecția datelor (textul există pe site-ul vechi)
- [ ] Când e gata, publicați-l gratuit pe GitHub Pages, Netlify sau Vercel

## Observații

- Antetul (bara de sus + meniul) și footer-ul sunt copiate identic în fiecare pagină.
  Dacă modificați meniul, modificați-l în **toate** cele 7 fișiere HTML.
- Anunțurile noi se adaugă în `index.html` copiind un bloc `<div class="anunt">...</div>`.
- Site-ul e responsive: pe telefon meniul devine hamburger (☰).
