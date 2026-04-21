// Mobile nav
const hbg = document.getElementById('hbg');
const navlist = document.getElementById('navlist');
hbg.addEventListener('click', () => navlist.classList.toggle('open'));
navlist.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navlist.classList.remove('open')));

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.1 });
reveals.forEach(r => io.observe(r));

// Course filter
function filterCourses(btn, cat) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.card').forEach(c => {
    const match = cat === 'all' || c.dataset.cat === cat;
    c.style.display = match ? '' : 'none';
  });
}

// CTA email
function handleCta() {
  const email = document.getElementById('ctaEmail').value.trim();
  const msg = document.getElementById('cta-msg');
  if (!email || !email.includes('@')) {
    msg.style.color = 'rgba(255,200,200,0.9)';
    msg.textContent = '⚠️ Please enter a valid email address.';
    return;
  }
  msg.style.color = 'rgba(255,255,255,0.9)';
  msg.textContent = '🎉 You\'re in! Check your inbox for your free access link.';
  document.getElementById('ctaEmail').value = '';
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});