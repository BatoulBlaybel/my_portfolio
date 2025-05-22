import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
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

    const fadeElements = document.querySelectorAll('.projects .fade-in');
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const projectsData = [
    {
      title: "Lung Cancer Survival Time Analysis",
      category: "biostatistics",
      status: "completed",
      tags: ["Biostatistics", "Survival Analysis", "Healthcare"],
      description: "A comprehensive study examining factors influencing survival outcomes among lung cancer patients, with a focus on developing corrected survival time estimates that account for various confounding variables.",
      image: "/project-biostat.jpg"
    },
    {
      title: "Mental Health Impact Study",
      category: "research",
      status: "in-progress",
      tags: ["Research", "Survey Design", "Health Analytics"],
      description: "An ongoing study exploring the relationship between negative language exposure and both mental and physical health outcomes, using a comprehensive survey instrument and statistical analysis.",
      image: "/project-mental-health.jpg"
    },
    {
      title: "Bike Buyers Performance Analysis",
      category: "data-analysis",
      status: "completed",
      tags: ["Excel", "Data Analysis", "Business Intelligence"],
      description: "An Excel-based analysis examining purchasing patterns and customer characteristics within the bicycle retail sector to identify key factors influencing buying decisions.",
      image: "/project-bike.jpg"
    },
    {
      title: "Job Satisfaction Dashboard",
      category: "data-analysis",
      status: "completed",
      tags: ["Power BI", "HR Analytics", "Visualization"],
      description: "A Power BI project transforming complex human resources data into an intuitive, interactive dashboard revealing critical insights about employee satisfaction and organizational performance.",
      image: "/project-job.jpg"
    },
    {
      title: "Airbnb Market Analysis",
      category: "data-visualization",
      status: "completed",
      tags: ["Tableau", "Market Analysis", "Geospatial"],
      description: "A Tableau visualization project transforming complex Airbnb listing data into an intuitive, interactive exploration of rental market dynamics across multiple dimensions.",
      image: "/project-airbnb.jpg"
    },
    {
      title: "COVID-19 Data Analysis",
      category: "data-analysis",
      status: "completed",
      tags: ["SQL", "Tableau", "Public Health"],
      description: "A comprehensive analysis combining SQL and Tableau to create an in-depth exploration of pandemic patterns and impacts, revealing disparities across demographic groups.",
      image: "/project-covid.jpg"
    },
    {
      title: "Movie Industry Analysis",
      category: "data-science",
      status: "completed",
      tags: ["Python", "Machine Learning", "Predictive Modeling"],
      description: "A Python-based data science project delivering a comprehensive analysis of the film industry's evolving landscape, examining factors influencing commercial success.",
      image: "/project-movie.jpg"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'biostatistics' ? 'active' : ''}`}
            onClick={() => setFilter('biostatistics')}
          >
            Biostatistics
          </button>
          <button 
            className={`filter-btn ${filter === 'data-analysis' ? 'active' : ''}`}
            onClick={() => setFilter('data-analysis')}
          >
            Data Analysis
          </button>
          <button 
            className={`filter-btn ${filter === 'data-visualization' ? 'active' : ''}`}
            onClick={() => setFilter('data-visualization')}
          >
            Data Visualization
          </button>
          <button 
            className={`filter-btn ${filter === 'data-science' ? 'active' : ''}`}
            onClick={() => setFilter('data-science')}
          >
            Data Science
          </button>
          <button 
            className={`filter-btn ${filter === 'research' ? 'active' : ''}`}
            onClick={() => setFilter('research')}
          >
            Research
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card fade-in ${project.status === 'in-progress' ? 'in-progress' : ''}`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                <span className={`project-status status-${project.status}`}>
                  {project.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
                <p className="project-description">{project.description}</p>
                <a href="#" className="project-link">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
