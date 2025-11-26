// small interactive touches for the static page

// set current year
document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  if (nav.classList.contains('open')) {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
  } else {
    nav.style.display = '';
  }
});

// contact form: open mailto with content (since GitHub Pages has no server)
function sendMail(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  if(!name || !email || !message){
    status.textContent = 'Please complete all fields.';
    return false;
  }

  // Create a mailto link
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailto = `mailto:achchhelal@example.com?subject=${subject}&body=${body}`;

  // Open user's mail client
  window.location.href = mailto;
  status.textContent = 'Opening your email client...';
  return false;
}

// Animate elements on scroll (Intersection Observer)
(function() {
  const appearEls = document.querySelectorAll('.animate-fadein, .animate-pop');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    appearEls.forEach(el => {
      // prep: set to invisible (if not already set in CSS)
      if (!el.style.opacity) el.style.opacity = 0;
      observer.observe(el);
      // Start with animation paused:
      el.style.animationPlayState = 'paused';
    });
  } else {
    // fallback: show all instantly
    appearEls.forEach(el => (el.style.opacity = 1));
  }
})();