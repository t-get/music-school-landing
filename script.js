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