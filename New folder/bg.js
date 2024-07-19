function updateParticlesConfig() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  let particlesNumber = Math.max(
    100,
    Math.min(200, Math.floor((width * height) / 10000))
  );
  let particlesSize = Math.max(1, Math.min(3, width / 400));
  let lineWidth = Math.max(0.5, Math.min(3, width / 600)); // Adjust this formula for line width

  particlesJS("particles-js", {
    particles: {
      number: {
        value: particlesNumber,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#4d259e",
      },
      opacity: {
        value: 0.4,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: particlesSize,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#4d259e",
        opacity: 0.7,
        width: 2, // Dynamic line width
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    retina_detect: true,
  });
}

// Initial call
updateParticlesConfig();

// Update on window resize
window.addEventListener("resize", updateParticlesConfig);
