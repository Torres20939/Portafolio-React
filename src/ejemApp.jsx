import React, { useState } from 'react';
import './styles/App.css';

function App() {
    const [activeSection, setActiveSection] = useState('inicio');

    const projects = [
        { name: 'E-commerce Platform', tech: 'React, Node.js', year: '2024' },
        { name: 'Task Manager App', tech: 'React, Firebase', year: '2024' },
        { name: 'Weather Dashboard', tech: 'React, API Integration', year: '2023' },
        { name: 'Portfolio Generator', tech: 'React, CSS', year: '2023' }
    ];

    const skills = ['React', 'JavaScript', 'CSS3', 'Node.js', 'Git', 'Responsive Design'];

    return (
        <div className="portfolio">
            {/* Navegación */}
            <nav className="navbar">
                <div className="nav-brand">
                    <span className="brand-initial">D</span>
                </div>
                <div className="nav-links">
                    <a href="#inicio" onClick={() => setActiveSection('inicio')} 
                       className={activeSection === 'inicio' ? 'active' : ''}>Inicio</a>
                    <a href="#proyectos" onClick={() => setActiveSection('proyectos')}
                       className={activeSection === 'proyectos' ? 'active' : ''}>Proyectos</a>
                    <a href="#contacto" onClick={() => setActiveSection('contacto')}
                       className={activeSection === 'contacto' ? 'active' : ''}>Contacto</a>
                </div>
            </nav>

            {/* Contenido Principal */}
            <main className="main-content">
                {/* Sección Hero */}
                <section className="hero-section">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Bienvenido<span className="accent-dot">.</span>
                        </h1>
                        <div className="hero-description">
                            <p className="intro-text">
                                Mi nombre es <span className="highlight">Tu Nombre</span>. Soy desarrollador 
                                front-end apasionado por crear experiencias web modernas y funcionales.
                            </p>
                            <p className="intro-subtext">
                                Me especializo en React, JavaScript y diseño de interfaces intuitivas. 
                                Transformo ideas en aplicaciones web de alto rendimiento.
                            </p>
                        </div>
                        
                        {/* Skills */}
                        <div className="skills-container">
                            <h3 className="section-subtitle">Habilidades</h3>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Panel de Proyectos */}
                    <div className="projects-panel">
                        <h2 className="panel-title">Projects</h2>
                        <div className="projects-list">
                            {projects.map((project, index) => (
                                <div key={index} className="project-item">
                                    <div className="project-header">
                                        <h3 className="project-name">{project.name}</h3>
                                        <span className="project-year">{project.year}</span>
                                    </div>
                                    <p className="project-tech">{project.tech}</p>
                                </div>
                            ))}
                        </div>
                        
                        <button className="view-all-btn">Ver todos los proyectos →</button>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer">
                    <p>© 2025 Tu Nombre. Diseñado con pasión.</p>
                    <div className="social-links">
                        <a href="#" aria-label="GitHub">GitHub</a>
                        <a href="#" aria-label="LinkedIn">LinkedIn</a>
                        <a href="#" aria-label="Email">Email</a>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default App;