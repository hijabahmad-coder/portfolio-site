/* =========================================================
   form-validation.js — contact form validation
   Module: owns only the Contact page form. Does nothing on
   pages without #contact-form.
   ========================================================= */

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
    status.textContent = 'Thanks — this is a static demo so nothing was actually sent, but the form is validating correctly.';
    status.classList.add('show');
    form.reset();
  });
}
