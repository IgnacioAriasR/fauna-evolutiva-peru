// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('visible'); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => observer.observe(el));

// Nav shrink on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Parallax hero (suave)
const heroBg = document.querySelector('.hero-bg-parallax');
if(heroBg){
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBg.style.transform = `translateY(${y * 0.3}px)`;
  }, { passive: true });
}
