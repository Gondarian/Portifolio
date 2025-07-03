// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Interactive Contact Form with Formspree
const contactForm = document.querySelector('.contact-form');
const formMessage = document.querySelector('.form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Validate fields
        const name = contactForm.querySelector('input[name="name"]');
        const email = contactForm.querySelector('input[name="email"]');
        const subject = contactForm.querySelector('input[name="subject"]');
        const message = contactForm.querySelector('textarea[name="message"]');

        if (!name.value.trim() || !email.value.trim() || !subject.value.trim() || !message.value.trim()) {
            e.preventDefault();
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.color = 'red';
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            e.preventDefault();
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = 'red';
            return;
        }
        // On successful submit, let the form submit to Formspree
        // Show a success message after redirect (optional, if using AJAX)
        // For now, Formspree will show its own thank you page
    });
}

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  }
})

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up")
    }
  })
}, observerOptions)

// Observe all sections and cards
document.querySelectorAll("section, .project-card, .skill-category, .stat").forEach((el) => {
  observer.observe(el)
})

// Scrollspy for navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Sequential Typewriter Effect for Hero Section
function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.textContent = '';
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

document.addEventListener('DOMContentLoaded', function() {
    const titleEl = document.getElementById('hero-title');
    const subtitleEl = document.getElementById('hero-subtitle');
    const descEl = document.getElementById('hero-description');

    // Extract text content (remove HTML tags for typing)
    const titleText = "Hi, I'm Alebel";
    const subtitleText = "Full Stack Developer & Creative Problem Solver";
    const descText = "I create beautiful, functional, and user-centered digital experiences. Passionate about clean code and innovative solutions.";

    typeWriter(titleEl, titleText, 50, function() {
        typeWriter(subtitleEl, subtitleText, 35, function() {
            typeWriter(descEl, descText, 20);
        });
    });
});

// Smooth scroll for anchor links
const navLinksScroll = document.querySelectorAll('.nav-link');
navLinksScroll.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after click
      document.querySelector('.nav-menu').classList.remove('active');
    }
  });
});

// Section fade-in animation on scroll
const sectionsFade = document.querySelectorAll('section');
function revealSections() {
  const trigger = window.innerHeight * 0.85;
  sectionsFade.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < trigger) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

const hamburgerBtn = document.querySelector('.hamburger');
const navMenuMobile = document.querySelector('.nav-menu');
if (hamburgerBtn && navMenuMobile) {
  hamburgerBtn.addEventListener('click', () => {
    navMenuMobile.classList.toggle('active');
  });
  hamburgerBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navMenuMobile.classList.toggle('active');
    }
  });
}

document.querySelectorAll('.project-more-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const card = this.closest('.project-card');
    card.classList.toggle('expanded');
    this.textContent = card.classList.contains('expanded') ? 'Less' : 'More';
  });
});

const aboutMoreBtn = document.querySelector('.about-more-btn');
const aboutContent = document.querySelector('.about-content');
if (aboutMoreBtn && aboutContent) {
  aboutMoreBtn.addEventListener('click', function() {
    aboutContent.classList.toggle('expanded');
    this.textContent = aboutContent.classList.contains('expanded') ? 'Less' : 'More';
  });
}
