import React, { useEffect } from 'react';

const Skills = () => {
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

    const fadeElements = document.querySelectorAll('.skills .fade-in');
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const skillsData = [
    {
      title: "Data Analysis & Statistics",
      icon: "chart-line",
      description: "Expertise in statistical methodologies including survival analysis, hypothesis testing, and exploratory data analysis. Proficient in handling complex datasets and deriving meaningful insights through rigorous statistical approaches."
    },
    {
      title: "Data Visualization",
      icon: "chart-pie",
      description: "Creating compelling visualizations that transform complex data into clear, actionable insights using Tableau, Power BI, and Python visualization libraries. Specialized in time-series, geospatial, and multivariate relationship visualization."
    },
    {
      title: "Programming & Tools",
      icon: "code",
      description: "Proficient in Python for data manipulation, statistical modeling, and machine learning implementation. Experienced with SQL for database queries and Excel for advanced analysis and transformation tasks."
    },
    {
      title: "Business Intelligence",
      icon: "lightbulb",
      description: "Designing intuitive dashboards that bridge technical analysis and business decision-making. Experience in identifying key performance indicators and establishing data refresh processes for current, valuable insights."
    },
    {
      title: "Research & Methodology",
      icon: "microscope",
      description: "Combining scientific rigor with practical application in research design. Experienced in survey implementation, experimental design, and mixed-methods approaches with a commitment to ethical standards."
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="skill-icon">
                <i className={`fas fa-${skill.icon}`}></i>
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
