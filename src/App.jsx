import React, { useState, useEffect } from 'react';
import './styles/App.css';

function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const projects = [
        { 
            name: 'Gestión De Turnos Metro Medellín', 
            tech: 'React, Node.js, JavaScript', 
            year: '2025',
            description: 'Sistema de gestión de turnos para el Metro de Medellín'
        },
        { 
            name: 'Gestor de Correspondencia', 
            tech: 'Python, HTML, CSS', 
            year: '2025',
            description: 'Aplicación para gestión de documentos'
        },
        { 
            name: 'Escatica', 
            tech: 'Python, JavaScript, CSS', 
            year: '2024',
            description: 'Plataforma web educativa'
        },
    ];

    const skills = ['React', 'JavaScript', 'CSS', 'Node.js', 'Git & GitHub', 'HTML', 'Python', 'Django'];
    
    return (
        <div className="portafolio">
            {/* Navegación */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-brand">
                    <span className="brand-initial">MT</span>
                </div>
                <div className="nav-links">
                    <a href="#inicio">Inicio</a>
                    <a href="#proyectos">Proyectos</a>
                </div>
            </nav>

            {/* Contenido principal */}
            <main className="main-content">
                {/* Sección Hero */}
                <section className="hero-section" id="inicio">
                    <div className="hero-text">
                        <div className="greeting">
                            <span className="greeting-text">Hola, soy</span>
                        </div>
                        
                        <h1 className="hero-title">
                            Miguel Torres<span className="accent-dot">.</span>
                        </h1>
                        
                        <h2 className="hero-subtitle">
                            Desarrollador de Software
                        </h2>
                        
                        <div className="hero-description">
                            <p className="intro-text">
                                Desarrollador en formación apasionado por crear soluciones digitales 
                                únicas con código limpio y diseño intuitivo.
                            </p>
                            <p className="intro-subtext">
                                Tengo experiencia práctica en frontend y backend, trabajando con 
                                tecnologías como React, Node.js, Python y JavaScript.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="cta-buttons">
                            <a href="#proyectos" className="btn-primary">Ver Proyectos</a>
                            <a href="mailto:mt931109@gmail.com" className="btn-secondary">Contactar</a>
                        </div>

                        {/* Habilidades */}
                        <div className="skills-container">
                            <h3 className="section-subtitle">Stack Tecnológico</h3>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Panel de proyectos */}
                    <div className="projects-panel" id="proyectos">
                        <div className="panel-header">
                            <h2 className="panel-title">Proyectos</h2>
                            <span className="projects-count">{projects.length}</span>
                        </div>
                        
                        <div className="projects-list">
                            {projects.map((project, index) => (
                                <div key={index} className="project-item">
                                    <div className="project-number">0{index + 1}</div>
                                    <div className="project-content">
                                        <div className="project-header">
                                            <h3 className="project-name">{project.name}</h3>
                                            <span className="project-year">{project.year}</span>
                                        </div>
                                        <p className="project-description">{project.description}</p>
                                        <p className="project-tech">{project.tech}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <a href="#proyectos" className="view-all-link">
                            Ver todos los proyectos
                            <span className="arrow">→</span>
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer" id="contacto">
                    <div className="footer-content">
                        <div className="footer-left">
                            <h3 className="footer-title">¿Hablamos?</h3>
                            <p className="footer-description">
                                Estoy disponible para nuevos proyectos y colaboraciones.
                            </p>
                        </div>
                        <div className="footer-right">
                            <a href="mailto:mt931109@gmail.com" className="footer-email"> {/* Reemplazarlo por un icono de correo */}
                                mt931109@gmail.com
                            </a>
                            <div className="footer-links">
                                <a target="_blank" rel="noopener noreferrer">3106599989</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© 2025 Miguel Torres. Diseñado y desarrollado con ❤️</p>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default App;