import React, { useState } from 'react'
import './styles/App.css'

function App() {
    const [activeSection, setActiveSection] = useState('inicio');

    const projects = [
        { name: 'Gestion De Turnos Metro Medellin', tech: 'React, Node.js, JavaScript', year: '2025' },
        { name: 'Gestor de Correspondencia', tech: 'Python, HTML, CSS', year: '2025' },
        { name: 'Escatica', tech: 'Python, JavaScript, CSS', year: '2024' },
    ];

    const skills = ['React', 'JavaScript', 'CSS', 'Node.js', 'Git & GitHub', 'HTML', 'Python', 'Django'];
    
    return (
        <div className="portafolio">
            {/* Navegacion */}
            <nav className="navbar">
                <div className="nav-brand">
                    <span className="brand-initial">MT</span>
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

            {/* Contenido principal */}
            <main className="main-content">
                {/* Seccion Hero */}
                <section className="hero-section">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Bienvenido<span className="accent-dot">.</span>
                        </h1>
                        <div className="hero-description">
                            <p className="intro-text">
                                Mi nombre es <span className="highlight">Miguel Torres</span>. Soy desarrollador de Software en formacion
                                apasionado en crear ideas digitales unicas con codigo limpio y diseño intuitivo
                            </p>
                            <p className="intro-subtext">
                            Tengo experiencia práctica en frontend y backend, trabajando con tecnologías como React, Node.js, Python y JavaScript.
                            </p>
                        </div>

                        {/* Habilidades */}
                        <div className="skills-container">
                            <h3 className="section-subtitle">Habilidades</h3>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* panel de proyectos */}
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
                    <p>© 2025 Miguel Torres, Hecho con ❤️</p>
                    <div className="social-links">
                        <a aria-label="Email">mt931109@gmail.com</a>
                    </div>                  
                </footer>
            </main>
        </div>
    );
}

export default App