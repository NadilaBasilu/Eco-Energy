document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu functionality
  const hamburger = document.querySelector('.hamburger');
  const navItems = document.querySelector('.nav-items');
  const overlay = document.querySelector('.overlay');
  const dropdowns = document.querySelectorAll('.dropdown');
  const subDropdowns = document.querySelectorAll('.sub-dropdown');
  const navButtons = document.querySelector('.nav-buttons');
  
  // On mobile, move nav-buttons into nav-items
  function checkMobile() {
      if (window.innerWidth <= 768) {
          if (!document.querySelector('.nav-items .nav-buttons')) {
              navItems.appendChild(navButtons);
          }
      } else {
          const navbar = document.querySelector('.navbar');
          if (document.querySelector('.nav-items .nav-buttons')) {
              navbar.appendChild(navButtons);
          }
      }
  }
  
  // Run on load
  checkMobile();
  
  // Ensure menu is fully hidden on page load for mobile
  if (window.innerWidth <= 768) {
      navItems.style.right = '-100%';
  }
  
  hamburger.addEventListener('click', function() {
      navItems.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.style.overflow = navItems.classList.contains('active') ? 'hidden' : '';
  });
  
  overlay.addEventListener('click', function() {
      navItems.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
  });
  
  // Mobile dropdown toggle
  dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('a');
      
      link.addEventListener('click', function(e) {
          if (window.innerWidth <= 768) {
              e.preventDefault();
              dropdown.classList.toggle('open');
              
              // Close other open dropdowns
              dropdowns.forEach(d => {
                  if (d !== dropdown) d.classList.remove('open');
              });
          }
      });
  });
  
  // Mobile sub-dropdown toggle
  subDropdowns.forEach(subDropdown => {
      const link = subDropdown.querySelector('a');
      
      link.addEventListener('click', function(e) {
          if (window.innerWidth <= 768) {
              e.preventDefault();
              e.stopPropagation(); // Prevent triggering parent dropdown toggle
              subDropdown.classList.toggle('open');
          }
      });
  });
  
  // Close menu when clicking menu items (except dropdowns)
  const menuLinks = document.querySelectorAll('.nav-items a:not(.dropdown > a):not(.sub-dropdown > a):not(.nav-buttons a)');
  
  menuLinks.forEach(link => {
      link.addEventListener('click', function() {
          if (window.innerWidth <= 768) {
              navItems.classList.remove('active');
              overlay.classList.remove('active');
              document.body.style.overflow = '';
          }
      });
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
      checkMobile();
      
      if (window.innerWidth > 768) {
          navItems.classList.remove('active');
          overlay.classList.remove('active');
          document.body.style.overflow = '';
          
          // Reset all opened dropdowns
          dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
          subDropdowns.forEach(subDropdown => subDropdown.classList.remove('open'));
      }
  });
});