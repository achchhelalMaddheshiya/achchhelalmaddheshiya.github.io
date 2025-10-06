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
