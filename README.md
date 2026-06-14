# Site-ul Liceului Teoretic „Dunărea” Galați

Site de prezentare al liceului, cu design minimalist și modern, construit de la zero în **HTML, CSS și JavaScript** — fără framework-uri și fără build tools. Rapid, responsive și ușor de întreținut.

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

Stil minimalist modern cu accente de glassmorphism, font Inter și iconițe Material Symbols.

Toate culorile sunt definite o singură dată, la începutul lui `css/style.css`, în blocul `:root`:

```css
--primar: #00253e;    /* navy adânc — titluri, branding */
--secundar: #09639a;  /* albastru — linkuri, butoane */
--accent: #46ace0;    /* albastru accent — hover, evidențieri */
```

Schimbați o valoare acolo și se schimbă în tot site-ul.

Efectele (animația de intrare din hero, contoarele de la statistici, apariția
secțiunilor la scroll, micșorarea barei de navigație) sunt în `js/main.js`.

## Observații

- Antetul (bara de sus + meniul) și footer-ul sunt copiate identic în fiecare pagină.
  Dacă modificați meniul, modificați-l în **toate** cele 7 fișiere HTML.
- Anunțurile noi se adaugă în `index.html` copiind un bloc `<div class="anunt">...</div>`.
- Site-ul e responsive: pe telefon meniul devine hamburger (☰).
