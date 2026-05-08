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
// Переключение мобильного меню
function toggleMenu() {
  document.querySelector('nav').classList.toggle('active');
}

// Закрыть меню при клике на ссылку
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('nav').classList.remove('active');
  });
});