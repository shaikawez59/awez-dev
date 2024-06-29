document.addEventListener("DOMContentLoaded", function() {
  const toggleMenu = document.querySelector('.toggle-menu');
  const nav = document.querySelector('header nav');

  toggleMenu.addEventListener('click', function() {
    nav.classList.toggle('show-menu');
    toggleMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!nav.contains(event.target) && !toggleMenu.contains(event.target)) {
      nav.classList.remove('show-menu');
      toggleMenu.classList.remove('active');
    }
  });

  // Smooth scrolling for menu links
  const menuLinks = document.querySelectorAll('header nav a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - nav.offsetHeight,
        behavior: 'smooth'
      });
      nav.classList.remove('show-menu');
      toggleMenu.classList.remove('active');
    });
  });
});
