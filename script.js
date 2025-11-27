// Typing Effect (only on Hero page)
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

// Scroll Fade-in Effect
const sections = document.querySelectorAll('.section');
if (sections.length > 0) {
  function revealSections() {
    const triggerBottom = window.innerHeight / 5 * 4;
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

// Dynamic Skills
const skillsContainer = document.getElementById("skills-list");
if (skillsContainer) {
  const skills = [
    { name: "Python", img: "./assets/python.png", description: "Full-stack apps, automation, ML/AI basics" },
    { name: "JavaScript", img: "./assets/js.png", description: "Dynamic web pages, Node.js, DOM manipulation" },
    { name: "HTML5", img: "./assets/html.png", description: "Semantic markup for web pages" },
    { name: "CSS3", img: "./assets/css.png", description: "Styling web pages, Flexbox, Grid, Animations" },
    { name: "Linux", img: "./assets/linux.webp", description: "System management, shell scripting, cron jobs" },
    { name: "Kubernetes", img: "./assets/kubernetes.jpeg", description: "Container orchestration, pods, deployments" },
    { name: "AWS", img: "./assets/aws.webp", description: "Cloud services, EC2, S3, VPC, IAM" },
    { name: "Git", img: "./assets/git.png", description: "Version control, branching, collaboration" },
    { name: "Agile", img: "./assets/agile.jpeg", description: "Scrum, sprints, project management" },
    { name: "SQL", img: "./assets/sql.png", description: "Database queries, joins, data manipulation" }
  ];

  skills.forEach(skill => {
    const div = document.createElement("div");
    div.classList.add("skill-card");
    div.innerHTML = `
      <div class="skill-img-container">
        <img src="${skill.img}" alt="${skill.name}">
        <div class="skill-description">${skill.description}</div>
      </div>
      <span>${skill.name}</span>
    `;
    skillsContainer.appendChild(div);
  });
}

// Dynamic Projects
const projectsContainer = document.getElementById("projects-list");
if (projectsContainer) {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills and projects.",
      link: "https://github.com/AshokKumar2905/AshokkumarPortfolio"
    },
    {
      title: "Blog Platform",
      description: "A blogging platform with dynamic content.",
      link: "https://github.com/AshokKumar2905/My-learning"
    },
    {
      title: "CSV Server Solution (SRE Assignment)",
      description: "A production-ready Dockerized CSV server designed as part of a Site Reliability Engineer assignment.",
      link: "https://github.com/AshokKumar2905/csvserver-solution"
    }
  ];

  projects.forEach(project => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${project.title}</strong>: ${project.description} 
                     (<a href="${project.link}" target="_blank">View</a>)`;
    projectsContainer.appendChild(div);
  });
}

// Mobile Menu Toggle
const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav');

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}
