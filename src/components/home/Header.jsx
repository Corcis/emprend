import React from 'react'
import logo from '../../assets/static/logo.png'
import '../../assets/styles/components/home/Header.scss'

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src={ logo } alt="Logo" height="24" className="d-inline-block align-text-top"/> 
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav_link" aria-current="page" href="#inicio">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav_link" href="#nosotros">Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav_link" href="#servicios">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav_link" href="#caracteristicas">Características</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav_link" href="#equipo">Equipo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav_link" href="#contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;