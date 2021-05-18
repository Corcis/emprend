import React from 'react'
import logo from '../../assets/static/logo.png'
import '../../assets/styles/components/ideas/Header.scss'
import axios from 'axios'
import {connect} from 'react-redux'

const Header = (props) => {

    const handleChange = ( event ) =>{
        axios.post('http://localhost:8000/api/logout?api_token='+props.user.token).then(
            response => { 
                localStorage.removeItem('name')
                localStorage.removeItem('email')
                localStorage.removeItem('token')
                window.location="/login"
            }
        ).catch(
            error => {
                console.log(error)
            }
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
                    <a className="nav_link  dropdown-toggle" href="#" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Nombre Usuario</a>
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
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps,null)(Header);