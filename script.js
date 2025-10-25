// 1) Dynamic footer year
(function setYear() {
  const span = document.getElementById('year');
  if (span) span.textContent = new Date().getFullYear();
})();

// 2) Smooth-scroll for in-page quick links (e.g., #projects, #about, #contact)
(function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', href);
      }
    });
  });
})();

// 3) Optional: Swap avatar to prevent layout shift if image fails
(function robustAvatar() {
  const img = document.querySelector('.avatar img');
  if (!img) return;
  img.addEventListener('error', () => {
    img.alt = 'Profile picture unavailable';
    img.style.opacity = '0.6';
  });
})();