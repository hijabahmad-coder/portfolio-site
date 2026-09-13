/* =========================================================
   Hijab Ahmad — Portfolio
   script.js — shared interactivity across all pages
   ========================================================= */

/* ---------- 1. Responsive nav (hamburger menu) ---------- */
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

/* ---------- 2. Contact form validation ---------- */
function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  const status = form.querySelector('.form-status');

  const validators = {
    name: (value) => value.trim().length >= 2 || 'Please enter your full name.',
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || 'Enter a valid email address.',
    message: (value) => value.trim().length >= 10 || 'Message should be at least 10 characters.',
  };

  function validateField(field) {
    const rule = validators[field.name];
    if (!rule) return true;

    const result = rule(field.value);
    const group = field.closest('.form-group');
    const errorEl = group.querySelector('.error-msg');

    if (result === true) {
      group.classList.remove('invalid');
      return true;
    }

    group.classList.add('invalid');
    if (errorEl) errorEl.textContent = result;
    return false;
  }

  // Validate on blur, so errors show as the user moves through the form
  form.querySelectorAll('input, textarea').forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = Array.from(form.querySelectorAll('input, textarea'));
    const allValid = fields.map(validateField).every(Boolean);

    if (!allValid) {
      status.textContent = 'Please fix the highlighted fields before sending.';
      status.classList.add('show');
      return;
    }

    // No backend on a static site — confirm locally and reset the form
    status.textContent = `Thanks — this is a static demo so nothing was actually sent, but the form is validating correctly.`;
    status.classList.add('show');
    form.reset();
  });
}

/* ---------- 3. Project filter (Projects page) ---------- */
function initProjectFilter() {
  const filterBar = document.querySelector('.filter-bar');
  const cards = document.querySelectorAll('.project-card');
  if (!filterBar || cards.length === 0) return;

  filterBar.addEventListener('click', (event) => {
    const btn = event.target.closest('.filter-btn');
    if (!btn) return;

    filterBar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.filter;
    cards.forEach((card) => {
      const matches = category === 'all' || card.dataset.category === category;
      card.hidden = !matches;
    });
  });
}

/* ---------- 4. Accordion (Skills page) ---------- */
function initAccordion() {
  const triggers = document.querySelectorAll('.accordion-trigger');
  if (triggers.length === 0) return;

  triggers.forEach((trigger) => {
    const panel = document.getElementById(trigger.getAttribute('aria-controls'));

    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      trigger.setAttribute('aria-expanded', String(!isOpen));
      panel.style.maxHeight = isOpen ? '0px' : panel.scrollHeight + 'px';
    });
  });
}

/* ---------- 5. Footer year (small nice-to-have DOM touch) ---------- */
function setFooterYear() {
  const el = document.querySelector('#current-year');
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initContactForm();
  initProjectFilter();
  initAccordion();
  setFooterYear();
});
