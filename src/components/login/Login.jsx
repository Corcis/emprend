import React, { useState } from 'react'
import '../../assets/styles/components/login/Login.scss'
import LogoBlanco from '../../assets/static/logo_blanco.png'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect, useStore } from 'react-redux'
import { setUser } from '../../actions/index'
import axios from 'axios'

//Componente para el login de usuarios registrados
const Login = (props) => {
    //Constante para el formulario con el email de mi usuario a loguearse
    const [ form, setForm] = useState({
        email: "",
    })

    //Seteamos el valor del email cuando el suario escriba algo en el campo de Usuario
    const handleChange = ( event ) =>{
        setForm({
            ...form,
            [ event.target.name ] : event.target.value
        })
    }

    //Fucnion para el envio a validacion del usuario a la API
    const handleSubmit = ( event ) =>{
        event.preventDefault()
        props.setUser(form)
        //Consumimos la API enviando los valores de usuario y contraseña
        axios.post(process.env.API+'/api/login',form).then(
            response => { 
                //Si la API encuentra algun usuario con los valores ingresados se asignan los valores al localStorage que simula la SESSION iniciada
                localStorage.name = response.data.data.name
                localStorage.email = response.data.data.email
                localStorage.token = response.data.data.api_token
                props.setUser(response.data.data)
                //Redireccionamos a vista de ideas
                props.history.push('/ideasLista')
            }
        ).catch(
            error => {
                //Si no se encuentra coincidencias con los datos ingresados se muetsra un mensaje de error
                document.getElementById('alerta_registro').style.display = "block";
                setTimeout(function(){ 
                    document.getElementById('alerta_registro').style.display = "none"; 
                }, 10000); 
            }
        )
    }

    return (
        <div className="container-fluid contenedor_login">
            <div className="row justify-content-end">
                <div className="col-12">
                    <img src={LogoBlanco} className="logo_login"/>
                </div>
            </div>
            <div className="row justify-content-end" id="alerta_registro">
                <div className="col-12">
                    <div className="alert alert-danger" role="alert">No se ha podido iniciar sesión, por favor compruebe sus datos y vuelva a intentar</div>
                </div>
            </div>
            <form onSubmit={ handleSubmit }>
                <div className="row">
                    <div className="elmentos_end">
                        <label htmlFor="exampleInputEmail1" className="form-label name_label">Usuario</label>
                        <input type="text" name="email" className="form-control form-control-lg" onChange={handleChange}/>
                    </div>
                    <div className="elmentos_end">
                        <label htmlFor="exampleInputPassword1" className="form-label name_label">Password</label>
                        <input type="password" name="password" className="form-control form-control-lg" onChange={handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 elmentos_end btn_enviar">
                        <button type="submit" className="btn btn-emprend btn-lg">Enviar <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    setUser
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);