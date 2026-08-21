document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-btn');
  const page1 = document.getElementById('page1');
  const page2 = document.getElementById('page2');
  const bgMusic = document.getElementById('bg-music');
  const particlesContainer = document.getElementById('particles-container');

  openBtn.addEventListener('click', () => {
    // Hide First Page & Show Second Page
    page1.classList.add('hidden');
    page2.classList.remove('hidden');

    // Play Music "Until I Found You"
    bgMusic.play().catch(err => {
      console.log("Audio play error: ", err);
    });

    // Start Floating Hearts & Sparkles Background
    createHearts();
  });

  function createHearts() {
    const items = ['❤️', '✨', '💖', '🧸', '🌸'];
    setInterval(() => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.textContent = items[Math.floor(Math.random() * items.length)];
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
      particle.style.fontSize = (Math.random() * 10 + 14) + 'px';

      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 7000);
    }, 350);
  }
});
