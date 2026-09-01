document.addEventListener('DOMContentLoaded', () => {
  const deviceTag = document.getElementById('deviceTag');
  const hero = document.querySelector('.hero');
  const profileCard = document.querySelector('.profile-card');
  const heroCopy = document.querySelector('.hero-copy');

  const updateLayout = () => {
    const width = window.innerWidth;

    if (width <= 768) {
      deviceTag.textContent = 'Phone View';
      hero.classList.add('mobile-layout');
      hero.classList.remove('tablet-layout', 'desktop-layout');
      profileCard.style.transform = 'scale(1.02)';
      heroCopy.style.textAlign = 'center';
    } else if (width <= 1024) {
      deviceTag.textContent = 'Tablet View';
      hero.classList.add('tablet-layout');
      hero.classList.remove('mobile-layout', 'desktop-layout');
      profileCard.style.transform = 'scale(1)';
      heroCopy.style.textAlign = 'left';
    } else {
      deviceTag.textContent = 'Desktop View';
      hero.classList.add('desktop-layout');
      hero.classList.remove('mobile-layout', 'tablet-layout');
      profileCard.style.transform = 'scale(1)';
      heroCopy.style.textAlign = 'left';
    }
  };

  updateLayout();
  window.addEventListener('resize', updateLayout);
});
