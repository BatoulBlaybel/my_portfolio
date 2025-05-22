import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Animation effect when component mounts
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('visible');
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content fade-in">
          <h1>Data Science & Statistical Analysis</h1>
          <p>Transforming complex data into actionable insights through statistical rigor and creative visualization</p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
