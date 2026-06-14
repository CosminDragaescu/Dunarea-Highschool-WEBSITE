document.addEventListener("DOMContentLoaded", () => {
  // Meniul hamburger pe mobil
  const burger = document.querySelector(".nav-burger");
  const links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => links.classList.toggle("deschis"));
  }

  // Marchează automat link-ul activ din meniu, în funcție de pagina curentă
  const paginaCurenta = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === paginaCurenta) a.classList.add("activ");
  });

  // Bara de navigație se micșorează ușor la scroll
  const nav = document.querySelector(".nav");
  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // Animație de intrare în trepte pentru hero (badge → titlu → text → butoane)
  document.querySelectorAll(".stagger-item").forEach((item, index) => {
    setTimeout(() => item.classList.add("activ"), 300 + index * 150);
  });

  // Contor animat pentru statistici (numără de la 0 până la data-target)
  const animeazaContor = (contor) => {
    const tinta = +contor.dataset.target;
    const durata = 2000;
    const pas = tinta / (durata / 16);
    let curent = 0;
    const actualizeaza = () => {
      curent += pas;
      if (curent < tinta) {
        contor.textContent = Math.ceil(curent);
        requestAnimationFrame(actualizeaza);
      } else {
        contor.textContent = tinta;
      }
    };
    actualizeaza();
  };

  // Elementele cu .scroll-reveal apar când intră în viewport;
  // tot atunci pornesc și contoarele din interiorul lor
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("vizibil");
        entry.target.querySelectorAll(".contor").forEach(animeazaContor);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
});
