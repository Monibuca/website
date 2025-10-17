// Copy button functionality
document.querySelectorAll('.copy-button').forEach(button => {
  button.addEventListener('click', () => {
    const codeId = button.getAttribute('data-target');
    const codeElement = document.getElementById(codeId);
    const text = codeElement.textContent;

    navigator.clipboard.writeText(text).then(() => {
      const originalText = button.textContent;
      button.textContent = '已复制!';
      button.style.background = 'rgba(0,255,0,0.2)';

      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = 'transparent';
      }, 2000);
    });
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Header scroll effect
const header = document.querySelector('header');
if (header) {
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
  });

  header.style.transition = 'transform 0.3s ease-in-out';
}

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(section);
});

// Add fade-in class for animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style); 