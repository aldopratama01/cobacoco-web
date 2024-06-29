document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('click', event => {
          event.preventDefault();
          document.querySelector(link.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Form validation
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', event => {
      event.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
          alert('Please fill out all fields.');
          return;
      }

      if (!validateEmail(email)) {
          alert('Please enter a valid email address.');
          return;
      }

      alert('Form submitted successfully!');
      form.reset();
  });

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
});
