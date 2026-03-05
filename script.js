// ── Form submission ──
function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-send');
  btn.textContent = '✅  Appointment Requested! We will call you shortly.';
  btn.style.background = '#139e8d';
  setTimeout(() => {
    btn.textContent = '✓  Request Appointment';
    btn.style.background = '';
    e.target.reset();
  }, 4000);
}

// ── Scroll reveal ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.svc-card, .doc-card, .testi-card, .why-row').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(22px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  obs.observe(el);
});

// ── Active nav highlight ──
const secs = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 90) cur = s.id; });
  links.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? '#1dbfac' : '';
  });
});
