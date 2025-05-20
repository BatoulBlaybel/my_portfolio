import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Animation effect for fade-in elements
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.about .fade-in');
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image fade-in">
            <img src="/placeholder-profile.jpg" alt="Data Scientist" />
          </div>
          
          <div className="about-text fade-in">
            <h3>Professional Introduction</h3>
            <p>
              As a dedicated data scientist and statistical analyst, I blend analytical precision with creative problem-solving to extract meaningful insights from complex datasets. My journey in the world of data began with a fascination for how numbers tell stories—stories that can drive decisions, shape strategies, and ultimately transform organizations.
            </p>
            
            <p>
              With expertise spanning biostatistics, data visualization, and predictive modeling, I approach each project as an opportunity to uncover hidden patterns and translate them into actionable intelligence. My professional path has been guided by a commitment to statistical rigor and a passion for making data accessible.
            </p>
            
            <h3>Technical Expertise</h3>
            <p>
              My technical toolkit includes proficiency in statistical analysis using R and Python, data visualization with Tableau and Power BI, and database management with SQL. I am experienced in implementing machine learning algorithms for classification, regression, and clustering problems, with a focus on interpretable models that provide not just predictions but insights.
            </p>
            
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
