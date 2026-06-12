document.addEventListener("DOMContentLoaded", () => {
  
  // Element Viewport Intersection Trigger Action
  const sectionRevealOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  };

  const sectionRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
        observer.unobserve(entry.target);
      }
    });
  }, sectionRevealOptions);

  const targetSections = document.querySelectorAll(".viewport-section");
  targetSections.forEach(section => {
    sectionRevealObserver.observe(section);
  });

  // Capsule Navigation Active Class Updates
  const menuLinkElements = document.querySelectorAll(".nav-link");
  const activeNavigationOptions = {
    threshold: 0.4,
    rootMargin: "-10% 0px -50% 0px"
  };

  const activeNavigationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeSectionId = entry.target.getAttribute("id");
        menuLinkElements.forEach(link => {
          if (link.getAttribute("href") === `#${activeSectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, activeNavigationOptions);

  targetSections.forEach(section => {
    if(section.getAttribute("id")) {
      activeNavigationObserver.observe(section);
    }
  });

  // Circular Layout Core Calculator Logic
  const circularBadgeText = document.querySelector(".rotating-text");
  if (circularBadgeText) {
    const rawString = circularBadgeText.innerText;
    circularBadgeText.innerText = ""; 
    
    const totalRotationDegrees = 360;
    const computedCharacterDelta = totalRotationDegrees / rawString.length;

    for (let index = 0; index < rawString.length; index++) {
      const characterElement = document.createElement("span");
      characterElement.innerText = rawString[index];
      characterElement.style.position = "absolute";
      characterElement.style.left = "50%";
      characterElement.style.transformOrigin = "0 50px"; 
      characterElement.style.transform = `translateX(-50%) rotate(${index * computedCharacterDelta}deg)`;
      circularBadgeText.appendChild(characterElement);
    }
  }
});