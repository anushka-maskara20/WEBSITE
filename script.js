// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  });
});

// Simple three-slide hero carousel
const slides = [
  {
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85",
    alt: "Warm and inviting café interior",
    title: "Your happy place",
    subtitle: "Coffee • Comfort • Community"
  },
  {
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
    alt: "Coffee being prepared by hand",
    title: "Made with care",
    subtitle: "Small details • Big comfort"
  },
  {
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
    alt: "Sunlit café seating",
    title: "Stay awhile",
    subtitle: "Your corner of calm"
  }
];
let currentSlide = 0;
const heroImage = document.getElementById("heroImage");
const slideTitle = document.getElementById("slideTitle");
const slideSubtitle = document.getElementById("slideSubtitle");
const slideCount = document.getElementById("slideCount");

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  const slide = slides[currentSlide];
  heroImage.src = slide.image;
  heroImage.alt = slide.alt;
  slideTitle.textContent = slide.title;
  slideSubtitle.textContent = slide.subtitle;
  slideCount.textContent = `0${currentSlide + 1} / 0${slides.length}`;
}
document.getElementById("prevSlide").addEventListener("click", () => showSlide(currentSlide - 1));
document.getElementById("nextSlide").addEventListener("click", () => showSlide(currentSlide + 1));

// Filter the menu cards by category
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    menuCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});
