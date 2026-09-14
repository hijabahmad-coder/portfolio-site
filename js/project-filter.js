/* =========================================================
   project-filter.js — category filter on the Projects page
   Module: owns only .filter-bar + .project-card behaviour.
   ========================================================= */

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
