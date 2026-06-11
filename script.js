// --- Typing Effect (Hero Section Only) ---
const typingText = document.getElementById("typing-text");
if (typingText) {
  const text = "Hello, I'm Ashokkumar D";
  let index = 0;
  
  function typeEffect() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }
  window.addEventListener('load', typeEffect);
}

// --- Scroll Fade-in Animation Effect ---
const sections = document.querySelectorAll('.section');
if (sections.length > 0) {
  function revealSections() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', revealSections);
  window.addEventListener('load', revealSections);
  revealSections();
}

// --- Mobile Navigation Menu Toggle ---
const toggleBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Auto-close navigation panel overlay when any section link is clicked
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });
}