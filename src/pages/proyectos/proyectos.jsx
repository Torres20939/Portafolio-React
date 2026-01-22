import { useState } from 'react';
import { ArrowUpRight, Code2, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import './proyectos.css';

function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const projectsData = [
        {
            id: 1,
            title: 'Gestión De Turnos Metro Medellín',
            category: 'Fullstack Application',
            description: 'Sistema integral de gestión de turnos para el Metro de Medellín. Permite a los usuarios agendar, modificar y cancelar citas de manera eficiente.',
            longDescription: 'Aplicación web completa desarrollada para optimizar la gestión de turnos en el Metro de Medellín. Incluye panel de administración, sistema de notificaciones en tiempo real, gestión de usuarios y reportes detallados. La plataforma permite a los usuarios visualizar disponibilidad, reservar turnos y recibir recordatorios automáticos.',
            technologies: ['React.js', 'Node.js', 'JavaScript', 'CSS'],
            features: [
                'Autenticación y autorización de usuarios',
                'Panel de administración completo',
                'Notificaciones en tiempo real',
                'Sistema de reportes y estadísticas',
                'Interfaz responsive y moderna'
            ],
            images: [
                '/assets/ProyectosImg/GestionTurnos/Captura de pantalla 2025-10-30 153435.png',
                '/assets/ProyectosImg/GestionTurnos/Captura de pantalla 2025-10-30 152845.png',
                '/assets/ProyectosImg/GestionTurnos/Captura de pantalla 2025-10-30 153012.png',
                '/assets/ProyectosImg/GestionTurnos/Captura de pantalla 2025-10-30 153115.png',
                '/assets/ProyectosImg/GestionTurnos/Captura de pantalla 2025-10-30 153417.png'
            ],
            coverImage: '/assets/ProyectosImg/GestionTurnos/Captura de pantalla 2025-10-30 153435.png',
            githubUrl: '#',
            liveUrl: '#',
            year: '2025',
            size: 'large'
        },
        {
            id: 2,
            title: 'Gestor de Correspondencia',
            category: 'Backend System',
            description: 'Aplicación robusta para la gestión y seguimiento de documentos y correspondencia empresarial con sistema de notificaciones.',
            longDescription: 'Sistema de gestión documental desarrollado con Python y Django. Permite el registro, clasificación y seguimiento de correspondencia empresarial. Incluye workflow de aprobaciones, almacenamiento seguro de documentos y trazabilidad completa de todas las operaciones.',
            technologies: ['Python', 'Django', 'HTML', 'CSS',],
            features: [
                'Registro y clasificación de documentos',
                'Workflow de aprobaciones multinivel',
                'Búsqueda avanzada y filtros',
                'Historial y trazabilidad completa',
                'Generación de reportes PDF'
            ],
            images: [
                '/assets/ProyectosImg/GertorCorrespondencia/Captura de pantalla 2025-08-19 074716.png',
                '/assets/ProyectosImg/GertorCorrespondencia/Captura de pantalla 2025-09-16 082124.png',
                '/assets/ProyectosImg/GertorCorrespondencia/portafolio 10.1.png',
                '/assets/ProyectosImg/GertorCorrespondencia/portafolio 10.2.png'
            ],
            coverImage: '/assets/ProyectosImg/GertorCorrespondencia/Captura de pantalla 2025-09-16 082124.png',
            githubUrl: '#',
            liveUrl: '#',
            year: '2025',
            size: 'medium'
        },
        {
            id: 3,
            title: 'Escatica',
            category: 'Educational Platform',
            description: 'Plataforma web educativa interactiva diseñada para facilitar el aprendizaje con recursos multimedia y seguimiento de progreso.',
            longDescription: 'Plataforma educativa desarrollada con Flask que ofrece cursos interactivos, evaluaciones automáticas y seguimiento del progreso del estudiante. Los instructores pueden crear contenido multimedia, asignar tareas y monitorear el rendimiento de sus estudiantes en tiempo real.',
            technologies: ['Python', 'JavaScript', 'CSS', 'Django', 'HTML'],
            features: [
                'Creación de cursos y lecciones',
                'Sistema de evaluaciones automáticas',
                'Seguimiento de progreso del estudiante',
                'Foros de discusión',
                'Contenido multimedia integrado'
            ],
            images: [
                '/assets/ProyectosImg/Escatica/Captura de pantalla 2026-01-07 185814.png',
                '/assets/ProyectosImg/Escatica/Captura de pantalla 2026-01-07 185822.png',
                '/assets/ProyectosImg/Escatica/Captura de pantalla 2026-01-07 185830.png',
                '/assets/ProyectosImg/Escatica/Captura de pantalla 2026-01-07 185901.png'
            ],
            coverImage: '/assets/ProyectosImg/Escatica/Captura de pantalla 2026-01-07 185814.png',
            githubUrl: '#',
            liveUrl: '#',
            year: '2024',
            size: 'medium'
        }
    ];

    const openProjectModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    };

    const closeProjectModal = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'unset';
    };

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) => 
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) => 
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
            );
        }
    };

    return (
        <div className="projects-page">
            {/* Header */}
            <header className="projects-header">
                <div className="header-content">
                    <div className="header-text">
                        <span className="header-label">Portafolio</span>
                        <h1 className="page-title">
                            Proyectos Destacados<span className="title-dot">.</span>
                        </h1>
                        <p className="page-subtitle">
                            Selección de mis trabajos más recientes en desarrollo web y software
                        </p>
                    </div>
                    <div className="projects-stats">
                        <div className="stat-item">
                            <span className="stat-number">{projectsData.length}</span>
                            <span className="stat-label">Proyectos</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2025</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Projects Gallery */}
            <section className="projects-gallery">
                {projectsData.map((project) => (
                    <article 
                        key={project.id}
                        className={`project-card project-card-${project.size}`}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        {/* Project Image */}
                        <div className="card-image-wrapper">
                            <img 
                                src={project.coverImage} 
                                alt={project.title}
                                className="card-image"
                            />
                            <div className="image-overlay"></div>
                        </div>

                        {/* Project Info */}
                        <div className="card-info">
                            <div className="card-header">
                                <span className="card-category">{project.category}</span>
                                <span className="card-year">{project.year}</span>
                            </div>

                            <h2 className="card-title">{project.title}</h2>
                            
                            <p className="card-description">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="card-technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="card-actions">
                                <button 
                                    onClick={() => openProjectModal(project)}
                                    className="action-link action-link-primary"
                                >
                                    <ExternalLink size={18} />
                                    <span>Ver Detalles</span>
                                    <ArrowUpRight size={16} className="arrow-icon" />
                                </button>
                            </div>
                        </div>

                        {/* Hover Indicator */}
                        {hoveredProject === project.id && (
                            <div className="hover-indicator">
                                <Code2 size={32} strokeWidth={1.5} />
                            </div>
                        )}
                    </article>
                ))}
            </section>

            {/* Modal de Proyecto */}
            {selectedProject && (
                <div className="project-modal-overlay" onClick={closeProjectModal}>
                    <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                        {/* Botón Cerrar */}
                        <button className="modal-close-btn" onClick={closeProjectModal}>
                            <X size={24} />
                        </button>

                        <div className="modal-content">
                            {/* Galería de Imágenes */}
                            <div className="modal-gallery">
                                <div className="gallery-main">
                                    <img 
                                        src={selectedProject.images[currentImageIndex]} 
                                        alt={`${selectedProject.title} - Imagen ${currentImageIndex + 1}`}
                                        className="gallery-main-image"
                                    />
                                    
                                    {/* Navegación de Imágenes */}
                                    {selectedProject.images.length > 1 && (
                                        <>
                                            <button className="gallery-nav gallery-nav-prev" onClick={prevImage}>
                                                <ChevronLeft size={32} />
                                            </button>
                                            <button className="gallery-nav gallery-nav-next" onClick={nextImage}>
                                                <ChevronRight size={32} />
                                            </button>
                                        </>
                                    )}

                                    {/* Indicador de imagen actual */}
                                    <div className="gallery-indicator">
                                        {currentImageIndex + 1} / {selectedProject.images.length}
                                    </div>
                                </div>

                                {/* Thumbnails */}
                                <div className="gallery-thumbnails">
                                    {selectedProject.images.map((image, index) => (
                                        <div 
                                            key={index}
                                            className={`thumbnail ${currentImageIndex === index ? 'thumbnail-active' : ''}`}
                                            onClick={() => setCurrentImageIndex(index)}
                                        >
                                            <img src={image} alt={`Thumbnail ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Información del Proyecto */}
                            <div className="modal-info">
                                <div className="modal-header">
                                    <div>
                                        <span className="modal-category">{selectedProject.category}</span>
                                        <h2 className="modal-title">{selectedProject.title}</h2>
                                    </div>
                                    <span className="modal-year">{selectedProject.year}</span>
                                </div>

                                <p className="modal-description">
                                    {selectedProject.longDescription}
                                </p>

                                {/* Características */}
                                <div className="modal-features">
                                    <h3 className="features-title">Características Principales</h3>
                                    <ul className="features-list">
                                        {selectedProject.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tecnologías */}
                                <div className="modal-technologies">
                                    <h3 className="tech-title">Tecnologías Utilizadas</h3>
                                    <div className="tech-grid">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span key={index} className="tech-item">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="projects-footer">
                <p>© 2025 Miguel Torres. Hecho con 🖤</p>
                <div className="footer-social">
                    <p>mt931109@gmail.com</p>
                </div>
            </footer>
        </div>
    );
}

export default Projects;