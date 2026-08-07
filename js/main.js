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
// ===== FAQ SEARCH =====
const faqSearch = document.getElementById('faqSearch');
if (faqSearch) {
  faqSearch.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
      const question = item.querySelector('.accordion-button').textContent.toLowerCase();
      const answer = item.querySelector('.accordion-body').textContent.toLowerCase();
      if (question.includes(searchTerm) || answer.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
}
// ===== TESTIMONY FORM VALIDATION =====
const testimonyForm = document.getElementById('testimonyForm');
if (testimonyForm) {
  testimonyForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    const tName = document.getElementById('tName');
    if (tName.value.trim().length < 3) {
      tName.classList.add('is-invalid');
      isValid = false;
    } else {
      tName.classList.remove('is-invalid');
      tName.classList.add('is-valid');
    }

    const tCourse = document.getElementById('tCourse');
    if (tCourse.value === '') {
      tCourse.classList.add('is-invalid');
      isValid = false;
    } else {
      tCourse.classList.remove('is-invalid');
      tCourse.classList.add('is-valid');
    }

    const tStory = document.getElementById('tStory');
    if (tStory.value.trim().length < 30) {
      tStory.classList.add('is-invalid');
      isValid = false;
    } else {
      tStory.classList.remove('is-invalid');
      tStory.classList.add('is-valid');
    }

    if (isValid) {
      document.getElementById('testimonySuccess').classList.remove('d-none');
      testimonyForm.reset();
      testimonyForm.querySelectorAll('.is-valid').forEach(el => {
        el.classList.remove('is-valid');
      });
    }
  });
}