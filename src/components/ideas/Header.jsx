import React from 'react'
import logo from '../../assets/static/logo.png'
import '../../assets/styles/components/ideas/Header.scss'
import axios from 'axios'
import {connect} from 'react-redux'

//Header usado para las vistas de ideas (registro y listado)
const Header = (props) => {

    //Funcion para cerrar sesión de usuario
    const handleChange = ( event ) =>{
        axios.post(process.env.API+'/api/logout?api_token='+props.user.token).then(
            response => { 
                //Vaciamos el localStorage de la sesion del usuario
                localStorage.removeItem('name')
                localStorage.removeItem('email')
                localStorage.removeItem('token')
                window.location="/login"
            }
        ).catch(
            error => {    }
        )
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={ logo } alt="Logo" height="24" className="d-inline-block align-text-top"/> 
                </a>
                <div className="collapse d-flex flex-row-reverse bd-highlight" id="navbarNavAltMarkup">
                    <ul className="navbar-nav dropdown">
                    <a className="nav_link  dropdown-toggle" href="#" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false">{localStorage.name}</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item nav_link" href="/ideasRegister">Registrar idea</a></li>
                            <li><a className="dropdown-item nav_link" href="/ideasLista">Lista de ideas</a></li>
                            <li><a className="dropdown-item nav_link" href="#" onClick={handleChange}>Cerrar sesión</a></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

//Me ayuda a poder enviar el token de usuario al momento de hacer el logout 
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps,null)(Header);