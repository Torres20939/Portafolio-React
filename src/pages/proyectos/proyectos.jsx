import React from 'react';
import { Link } from 'react-router-dom';
import './proyectos.css';

function Proyectos() {
    return (
        <div className="proyectos-page">
            <Link to="/" className="back-button">
                ← Volver al inicio
            </Link>
            <h1>Mis Proyectos</h1>
            <p>Esta es la página de proyectos</p>
        </div>
    );
}

export default Proyectos;