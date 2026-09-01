const menuButton = document.querySelector('.menu-btn');
const sideNav = document.querySelector('.side-nav');
const navLinks = [...document.querySelectorAll('.side-nav a')];

menuButton?.addEventListener('click', () => {
  sideNav.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    sideNav.classList.remove('open');
  });
});

const sections = [...document.querySelectorAll('main section[id]')];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-25% 0px -60% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));
