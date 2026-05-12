/**
 * theme.js — Wave-House Salon Dark / Light Mode Toggle
 * Enhanced with Font Awesome icon support and persistence.
 * Defaults to Light Mode as requested.
 */

// 1. Apply saved theme before page renders to prevent flash
(function () {
  const savedTheme = localStorage.getItem('wavehouse-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

  // Function to update icon based on theme
  const updateIcon = (theme) => {
    if (!themeIcon) return;
    if (theme === 'dark') {
      themeIcon.className = 'fas fa-sun'; // Sun for dark mode
    } else {
      themeIcon.className = 'fas fa-moon'; // Moon for light mode
    }
  };

  // Initial icon state
  const currentTheme = document.documentElement.getAttribute('data-theme');
  updateIcon(currentTheme);

  // Toggle theme on click
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('wavehouse-theme', next);
      updateIcon(next);
    });
  }

  // 4. Navbar Scroll Shadow
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        const theme = document.documentElement.getAttribute('data-theme');
        navbar.style.boxShadow = theme === 'dark' 
          ? '0 4px 30px rgba(0,0,0,0.5)' 
          : '0 4px 20px rgba(0,0,0,0.08)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    });
  }
});
