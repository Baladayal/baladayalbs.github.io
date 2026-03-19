const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      sectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((item) => sectionObserver.observe(item));

const profileImage = document.getElementById('profile-image');
const photoShell = document.getElementById('photo-shell');

if (profileImage && photoShell) {
  profileImage.addEventListener('error', () => {
    photoShell.classList.add('no-image');
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = anchor.getAttribute('href');
    if (!target || target === '#') {
      return;
    }

    const section = document.querySelector(target);
    if (!section) {
      return;
    }

    event.preventDefault();
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
