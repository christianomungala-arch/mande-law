// ===== DARK MODE TOGGLE =====
const darkModeBtn = document.getElementById('darkModeBtn');

// Remember user preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  if (darkModeBtn) darkModeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
}

if (darkModeBtn) {
  darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    darkModeBtn.innerHTML = isDark
      ? '<i class="bi bi-sun-fill"></i>'
      : '<i class="bi bi-moon-fill"></i>';
  });
}

// ===== BACK TO TOP BUTTON =====
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
// ===== SERVICES FILTER =====
const serviceFilterBtns = document.querySelectorAll('.filter-btn');
const serviceCards = document.querySelectorAll('.service-card');
const noResults = document.getElementById('noResults');

serviceFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // Reset all buttons
    serviceFilterBtns.forEach(b => {
      b.classList.remove('btn-navy', 'active');
      b.classList.add('btn-outline-navy');
    });

    // Highlight clicked button
    btn.classList.remove('btn-outline-navy');
    btn.classList.add('btn-navy', 'active');

    const filterValue = btn.getAttribute('data-filter');
    let visibleCount = 0;

    // Show or hide cards
    serviceCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filterValue === 'all' || category === filterValue) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Show no results message if needed
    if (noResults) {
      if (visibleCount === 0) {
        noResults.classList.remove('d-none');
      } else {
        noResults.classList.add('d-none');
      }
    }
  });
});
// ===== NEWSLETTER FORM =====
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('newsletterMsg').classList.remove('d-none');
    newsletterForm.reset();
  });
}