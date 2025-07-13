// Fade-in Welcome Section on Load
document.addEventListener("DOMContentLoaded", () => {
  const welcomeSection = document.querySelector("main section:first-of-type");
  welcomeSection.style.opacity = 0;
  welcomeSection.style.transition = "opacity 2s ease-in-out";

  setTimeout(() => {
    welcomeSection.style.opacity = 1;
  }, 300);
});

// Scroll to Projects Section on Button Click
const ctaButton = document.querySelector("main section:first-of-type a");
const projectSection = document.querySelector(".projects-section");

if (ctaButton && projectSection) {
  ctaButton.addEventListener("click", (e) => {
    e.preventDefault();
    projectSection.scrollIntoView({ behavior: "smooth" });
  });
}

// Log Project Clicks
const projectLinks = document.querySelectorAll(".view-button");
projectLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Opening: " + link.previousElementSibling.previousElementSibling.textContent);
  });
});
