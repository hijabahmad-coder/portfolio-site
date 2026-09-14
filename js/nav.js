/* =========================================================
   nav.js — responsive nav (hamburger menu)
   Module: owns only the mobile nav toggle behaviour.
   ========================================================= */

function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if (!toggle || !navList) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    navList.classList.toggle('open');
  });

  // Close the menu when a link is tapped (mobile)
  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('open');
    });
  });
}
