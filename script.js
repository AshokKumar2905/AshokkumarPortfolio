// ===== Typing Effect =====
const typedTextElement = document.getElementById("typed-text");
const phrases = [
  "Python Full Stack Developer",
  "DevOps & Cloud Learner",
  "Problem Solver",
  "Loves Explaining Tech Simply"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  if (!typedTextElement) return;

  if (!isDeleting) {
    typedTextElement.textContent = currentPhrase.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1100);
      return;
    }
  } else {
    typedTextElement.textContent = currentPhrase.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  const speed = isDeleting ? 60 : 120;
  setTimeout(type, speed);
}

type();

// ===== Dynamic Skills =====
const skills = [
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "Flask / Django (learning)",
  "Git & GitHub",
  "Linux Basics",
  "Docker (learning)",
  "AWS (learning)",
  "SQL / Databases",
  "Problem Solving",
  "Agile Basics"
];

const skillsContainer = document.getElementById("skills-container");

if (skillsContainer) {
  skills.forEach((skill) => {
    const chip = document.createElement("span");
    chip.className = "skill-chip";
    chip.textContent = skill;
    skillsContainer.appendChild(chip);
  });
}

// ===== Dynamic Projects =====
const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Responsive portfolio built with HTML, CSS, and JavaScript to showcase my skills, projects, and experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/AshokKumar2905/AshokkumarPortfolio"
  },
  {
    title: "CSVServer Solution",
    description:
      "Assignment for Site Reliability Engineer intern: containerized CSV server with Docker, proper logging, and scaling.",
    tags: ["Docker", "Linux", "Shell", "DevOps"],
    link: "https://github.com/AshokKumar2905/csvserver-solution"
  },
  {
    title: "Blog Platform (Concept)",
    description:
      "A simple blog platform idea to post articles and notes, focusing on clean structure and readability.",
    tags: ["Python", "Web", "Learning Project"],
    link: "#"
  }
];

const projectsContainer = document.getElementById("projects-container");

if (projectsContainer) {
  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tags">
        ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
      </div>
      ${
        project.link && project.link !== "#"
          ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer">View on GitHub →</a>`
          : ""
      }
    `;

    projectsContainer.appendChild(card);
  });
}

// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
}

// ===== Active Link on Scroll (basic) =====
const sections = document.querySelectorAll("section[id]");

function onScroll() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionTop = current.offsetTop - 80;
    const sectionHeight = current.offsetHeight;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelectorAll(".nav__link")
        .forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(
        `.nav__link[href="#${sectionId}"]`
      );
      if (activeLink) activeLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScroll);

// ===== Footer Year =====
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
