const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const target = e.currentTarget.getAttribute('data-target');
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

let skillsAnimated = false;

function animateSkills() {
  if (skillsAnimated) return;
  
  const skillsSection = document.getElementById('skills');
  const rect = skillsSection.getBoundingClientRect();
  
  if (rect.top < window.innerHeight - 120) {
    const fills = document.querySelectorAll('.skill-fill');
    fills.forEach(fill => {
      const value = fill.getAttribute('data-value');
      if (value) {
        fill.style.width = value + '%';
      }
    });
    skillsAnimated = true;
  }
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1
  });

  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach(el => observer.observe(el));
}

observeElements();