function shatterText(event) {
    const container = document.querySelector('.sand-container');
    const text = document.getElementById('sand-text');
    
    const mouseX = event.clientX - container.getBoundingClientRect().left;
    const mouseY = event.clientY - container.getBoundingClientRect().top;
  
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'sand-particles';
    container.appendChild(particlesContainer);
  
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'sand-particle';
      const deltaX = (Math.random() - 0.5) * 200;
      const deltaY = (Math.random() - 0.5) * 200;
      particle.style.left = `${mouseX + deltaX}px`;
      particle.style.top = `${mouseY + deltaY}px`;
      particlesContainer.appendChild(particle);
    }
  
    text.style.opacity = '0';
  
    setTimeout(() => {
      container.removeChild(particlesContainer);
      text.style.opacity = '1';
    }, 1000);
  }