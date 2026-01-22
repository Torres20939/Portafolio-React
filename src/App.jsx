import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './styles/App.css';
import Proyectos from './pages/proyectos/proyectos.jsx';
import Habilidades from './pages/habilidades/habilidades.jsx';

// Mover los datos fuera del componente para que no se recreen
const projects = [
    { 
        name: 'Gestión De Turnos Metro Medellín', 
        tech: 'React.js, Node.js, JavaScript', 
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

const skills = ['React.js', 'JavaScript', 'CSS', 'Node.js', 'Git & GitHub', 'HTML', 'Python', 'Django'];

// Componente de Inicio - usando useCallback para evitar recrearlo en cada render - fuera de app
const Inicio = React.memo(() => {
    return (
        <>
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
                        <Link to="/proyectos" className="btn-primary">Ver Proyectos</Link>
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
                    
                    <Link to="/proyectos" className="view-all-link">
                        Ver todos los proyectos
                        <span className="arrow">→</span>
                    </Link>
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
                        <a href="mailto:mt931109@gmail.com" className="footer-email">
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
        </>
    );
});

function App() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Optimización: usar throttle para limitar las actualizaciones
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const isScrolled = window.scrollY > 50;
                    setScrolled(prev => prev !== isScrolled ? isScrolled : prev);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <div className="portafolio">
            {/* Navegación */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-brand">
                    <Link to="/">
                        <span className="brand-initial">MT</span>
                    </Link>
                </div>
                <div className="nav-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/proyectos">Proyectos</Link>
                    <Link to="/habilidades">Habilidades</Link>
                </div>
            </nav>

            {/* Contenido principal */}
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/habilidades" element={<Habilidades />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;