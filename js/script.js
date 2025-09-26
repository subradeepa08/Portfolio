
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

// Toggle menu on button click
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close menu when a link is clicked
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

// Fade-in project cards on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.15});

const contactSection = document.querySelector('.contact');
observer.observe(contactSection);

const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => observer.observe(item));

const eduCards = document.querySelectorAll('.education-card');
eduCards.forEach(card => observer.observe(card));








