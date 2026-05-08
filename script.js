const revealItems = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      item.classList.add("is-visible");
    }
  });
};

revealOnScroll();
window.addEventListener("scroll", revealOnScroll);

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Переключение мобильного меню
function toggleMenu() {
  document.querySelector('.nav').classList.toggle('active');
}

// Закрыть меню при клике на ссылку
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('active');
  });
});