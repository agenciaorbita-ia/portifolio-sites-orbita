// Órbita — Portfólio · interações básicas

// ===== Menu mobile =====
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('menu');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});

// Fecha o menu ao clicar em um link (mobile)
nav.addEventListener('click', (e) => {
  if (e.target.matches('.nav__link')) {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// ===== Animação de entrada (scroll reveal) =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Duplica o grupo de uma esteira para o loop ficar contínuo (trilha anda -50%)
function duplicateMarqueeGroup(track, groupSelector) {
  const group = track.querySelector(groupSelector);
  const clone = group.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  clone.querySelectorAll('[tabindex]').forEach((el) => el.setAttribute('tabindex', '-1'));
  track.appendChild(clone);
}

// ===== Depoimentos: esteira contínua =====
const qtCarousel = document.getElementById('qt-carousel');
if (qtCarousel) {
  duplicateMarqueeGroup(qtCarousel.querySelector('.qt-track'), '.qt-group');
}

// ===== Portfólio: esteira infinita (marquee) + scroll da captura no hover =====
const carousel = document.getElementById('pf-carousel');

if (carousel) {
  const track = carousel.querySelector('.pf-track');
  const SCROLL_SPEED = 260;    // px/s do vai-e-vem da captura no hover

  duplicateMarqueeGroup(track, '.pf-group');

  // Define distância e duração do scroll interno de cada card
  const setScrollVars = () => {
    track.querySelectorAll('.pf-card').forEach((card) => {
      const viewport = card.querySelector('.pf-card__viewport');
      const img = viewport.querySelector('img');
      const distance = Math.max(0, img.offsetHeight - viewport.offsetHeight);
      card.style.setProperty('--pf-dist', `${distance}px`);
      card.style.setProperty('--pf-dur', `${Math.max(4, distance / SCROLL_SPEED)}s`);
    });
  };
  window.addEventListener('load', setScrollVars);
  window.addEventListener('resize', setScrollVars);
  track.querySelectorAll('img').forEach((img) => img.addEventListener('load', setScrollVars));
  setScrollVars();

  // Toque (mobile, sem hover): um toque inicia o percurso, outro para
  track.querySelectorAll('.pf-card').forEach((card) => {
    card.addEventListener('click', () => card.classList.toggle('is-touring'));
  });

  // Dificulta a cópia das capturas (clique direito / arrastar)
  carousel.addEventListener('contextmenu', (e) => e.preventDefault());
  carousel.addEventListener('dragstart', (e) => e.preventDefault());
}

// ===== FAQ: fecha os outros itens ao abrir um =====
document.querySelectorAll('.faq__item').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq__item[open]').forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});
