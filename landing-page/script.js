// Add this to script.js
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  let offset = window.scrollY;
  hero.style.backgroundPositionY = offset * 0.5 + "px";
});
const trustCards = document.querySelectorAll('.trust-card');

window.addEventListener('scroll', () => {
  trustCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(top < windowHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
/* ================= SCROLL ANIMATIONS ================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".animate").forEach(el => observer.observe(el));

