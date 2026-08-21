document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const openingScreen = document.getElementById('opening-screen');
  const mainContent = document.getElementById('main-content');
  const bgMusic = document.getElementById('bg-music');
  const musicToggle = document.getElementById('music-toggle');
  const envelope = document.getElementById('envelope');
  const particlesContainer = document.getElementById('particles-container');

  // Start Experience
  startBtn.addEventListener('click', () => {
    openingScreen.classList.add('hidden');
    mainContent.classList.remove('hidden');
    musicToggle.classList.remove('hidden');

    // Play Music
    bgMusic.play().catch(() => {
      console.log('Autoplay prevented');
    });

    // Start Floating Particles
    createParticles();
  });

  // Music Toggle
  musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicToggle.textContent = '🎵';
    } else {
      bgMusic.pause();
      musicToggle.textContent = '🔇';
    }
  });

  // Open Letter
  envelope.addEventListener('click', () => {
    envelope.classList.add('open');
  });

  // Create Floating Hearts & Stars
  function createParticles() {
    const symbols = ['❤️', '✨', '🧸', '🌸'];
    setInterval(() => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.animationDuration = Math.random() * 3 + 4 + 's';
      particle.style.fontSize = Math.random() * 12 + 12 + 'px';
      
      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 7000);
    }, 400);
  }
});
