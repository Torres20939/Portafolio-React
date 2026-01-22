import React from 'react';
import { Code, Heart, MessageCircle, Users, Lightbulb, Target, Globe, Award } from 'lucide-react';
import './Habilidades.css';

function Habilidades() {
    const habilidadesTecnicas = [
        {
            categoria: 'Frontend',
            skills: [
                { nombre: 'React', nivel: 'Basico', porcentaje: 40 },
                { nombre: 'JavaScript', nivel: 'Intermedio', porcentaje: 50 },
                { nombre: 'HTML & CSS', nivel: 'Avanzado', porcentaje: 80 }
            ]
        },
        {
            categoria: 'Backend',
            skills: [
                { nombre: 'Node.js', nivel: 'Intermedio', porcentaje: 50 },
                { nombre: 'Python', nivel: 'Avanzado', porcentaje: 70 },
                { nombre: 'Django', nivel: 'Intermedio', porcentaje: 50 }
            ]
        },
        {
            categoria: 'Herramientas & Otros',
            skills: [
                { nombre: 'Git & GitHub', nivel: 'Avanzado', porcentaje: 80 },
                { nombre: 'Responsive Design', nivel: 'Avanzado', porcentaje: 85 }
            ]
        }
    ];

    const habilidadesBlandas = [
        {
            nombre: 'Trabajo en Equipo',
            descripcion: 'Capacidad para colaborar efectivamente con equipos multidisciplinarios',
            icono: Users,
        },
        {
            nombre: 'Comunicación',
            descripcion: 'Habilidad para expresar ideas de forma clara y efectiva',
            icono: MessageCircle,
        },
        {
            nombre: 'Resolución de Problemas',
            descripcion: 'Enfoque analítico para encontrar soluciones creativas',
            icono: Lightbulb,
        },
        {
            nombre: 'Adaptabilidad',
            descripcion: 'Flexibilidad para ajustarse a nuevos desafíos y tecnologías',
            icono: Target,
        },
        {
            nombre: 'Empatía',
            descripcion: 'Comprensión de las necesidades del usuario y del equipo',
            icono: Heart,
        },
        {
            nombre: 'Aprendizaje Continuo',
            descripcion: 'Motivación constante por adquirir nuevos conocimientos',
            icono: Award,
        }
    ];

    const idiomas = [
        {
            nombre: 'Español',
            nivel: 'Nativo',
            porcentaje: 100,
            certificacion: 'Lengua materna'
        },
        {
            nombre: 'Inglés',
            nivel: 'Basico',
            porcentaje: 35,
            certificacion: 'A2'
        }
    ];

    return (
        <div className="pagina-habilidades">
            {/* Encabezado */}
            <header className="encabezado-habilidades">
                <div className="contenedor-encabezado">
                    <span className="etiqueta-seccion">Competencias</span>
                    <h1 className="titulo-principal">
                        Mis Habilidades<span className="punto-acento">.</span>
                    </h1>
                    <p className="subtitulo-principal">
                        Un resumen completo de mis capacidades técnicas, personales y lingüísticas
                    </p>
                </div>
            </header>

            {/* Habilidades Técnicas */}
            <section className="seccion-tecnicas">
                <div className="contenedor-seccion">
                    <div className="encabezado-seccion">
                        <Code size={40} className="icono-seccion" />
                        <h2 className="titulo-seccion">Habilidades Técnicas</h2>
                        <p className="descripcion-seccion">
                            Tecnologías y frameworks con los que tengo experiencia práctica
                        </p>
                    </div>

                    <div className="grilla-habilidades-tecnicas">
                        {habilidadesTecnicas.map((grupo, index) => (
                            <div key={index} className="tarjeta-categoria">
                                <h3 className="titulo-categoria">{grupo.categoria}</h3>
                                <div className="lista-skills">
                                    {grupo.skills.map((skill, idx) => (
                                        <div key={idx} className="item-skill">
                                            <div className="info-skill">
                                                <span className="nombre-skill">{skill.nombre}</span>
                                                <span className="etiqueta-nivel">{skill.nivel}</span>
                                            </div>
                                            <div className="barra-progreso">
                                                <div 
                                                    className="progreso-fill" 
                                                    style={{ width: `${skill.porcentaje}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Habilidades Blandas */}
            <section className="seccion-blandas">
                <div className="contenedor-seccion">
                    <div className="encabezado-seccion">
                        <Heart size={40} className="icono-seccion" />
                        <h2 className="titulo-seccion">Habilidades Blandas</h2>
                        <p className="descripcion-seccion">
                            Competencias interpersonales que complementan mis habilidades técnicas
                        </p>
                    </div>

                    <div className="grilla-habilidades-blandas">
                        {habilidadesBlandas.map((habilidad, index) => {
                            const IconoComponente = habilidad.icono;
                            return (
                                <div key={index} className="tarjeta-blanda">
                                    <div className="icono-blanda">
                                        <IconoComponente size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="nombre-blanda">{habilidad.nombre}</h3>
                                    <p className="descripcion-blanda">{habilidad.descripcion}</p>
                                    <span className="nivel-blanda">{habilidad.nivel}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Idiomas */}
            <section className="seccion-idiomas">
                <div className="contenedor-seccion">
                    <div className="encabezado-seccion">
                        <Globe size={40} className="icono-seccion" />
                        <h2 className="titulo-seccion">Idiomas</h2>
                        <p className="descripcion-seccion">
                            Competencias lingüísticas y niveles de dominio
                        </p>
                    </div>

                    <div className="grilla-idiomas">
                        {idiomas.map((idioma, index) => (
                            <div key={index} className="tarjeta-idioma">
                                <div className="encabezado-idioma">
                                    <h3 className="nombre-idioma">{idioma.nombre}</h3>
                                    <span className="nivel-idioma">{idioma.nivel}</span>
                                </div>
                                
                                <div className="contenedor-progreso-circular">
                                    <svg className="progreso-circular" viewBox="0 0 120 120">
                                        <circle 
                                            className="circulo-fondo"
                                            cx="60" 
                                            cy="60" 
                                            r="50"
                                        />
                                        <circle 
                                            className="circulo-progreso"
                                            cx="60" 
                                            cy="60" 
                                            r="50"
                                            style={{
                                                strokeDasharray: `${idioma.porcentaje * 3.14}, 314`,
                                                strokeDashoffset: 0
                                            }}
                                        />
                                    </svg>
                                    <div className="texto-porcentaje">
                                        <span className="numero-porcentaje">{idioma.porcentaje}%</span>
                                    </div>
                                </div>

                                <p className="certificacion-idioma">{idioma.certificacion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="pie-pagina-habilidades">
                <p>© 2025 Miguel Torres. Hecho con 🖤</p>
                <div className="enlaces-pie">
                    <p>mt931109@gmail.com</p>
                </div>
            </footer>
        </div>
    );
}

export default Habilidades;