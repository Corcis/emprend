import React, { useState } from 'react'
import '../../assets/styles/components/register/Register.scss'
import LogoBlanco from '../../assets/static/logo_blanco.png'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import {connect} from 'react-redux'
import { setUser } from '../../actions/index'

//Componente para el registro de un nuevo usuario
const Register = (props) => {
    //Constante con los valores necesarios para el registro del usuario
    const [ form, setForm] = useState({
        email: "",
        name: "",
        password: "",
        password_confirmation: "",
    })

    //Seteamos la informacion mientras se va ingresando
    const handleChange = ( event ) =>{
        setForm({
            ...form,
            [ event.target.name ] : event.target.value
        })
    }

    //funcion para el almacenamiento del nuevo usuario con ayuda de la API
    const handleSubmit = ( event ) =>{
        event.preventDefault()
        var header = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3001/',
        })
        //Pasamos nuestro formulario a la ruta correspondiente de la API
        axios.post(process.env.API+'/api/register',form).then(
            response => { 
                //Si los datos son correcto y se guardo la API se 'inicia sesion' con este nuevo usuario y se guardan los valores de la session de este usuario
                localStorage.name = response.data.data.name
                localStorage.email = response.data.data.email
                localStorage.token = response.data.data.api_token
                props.setUser(response.data.data)
                props.history.push('/ideasLista')
            }
        ).catch(
            error => { 
                //Si hubo algun error se muestra un error
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
            <div className="row justify-content-end instruccion">
                <div className="col-12">
                    <span>Registra tu usuario completando la siguiente información</span>
                </div>
            </div>
            <div className="row justify-content-end" id="alerta_registro">
                <div className="col-12">
                    <div className="alert alert-danger" role="alert" id="alerta_txt">No se ha podido completar su registro, favor de verificar los datos y volver a intentarlo</div>
                </div>
            </div>
            <form onSubmit={ handleSubmit }>
                <div className="row">
                    <div className="elmentos_end">
                        <label htmlFor="exampleInputEmail1" className="form-label name_label">Nombre</label>
                        <input type="text" name="name" className="form-control form-control-lg" required onChange={handleChange}/>
                    </div>
                    <div className="elmentos_end">
                        <label htmlFor="exampleInputEmail1" className="form-label name_label">Email</label>
                        <input type="email" name="email" className="form-control form-control-lg" required onChange={handleChange}/>
                    </div>
                    <div className="elmentos_end">
                        <label htmlFor="exampleInputPassword1" className="form-label name_label">Password</label>
                        <input type="password" name="password" className="form-control form-control-lg" required onChange={handleChange}/>
                    </div>
                    <div className="elmentos_end">
                        <label htmlFor="exampleInputPassword1" className="form-label name_label">Confirmar password</label>
                        <input type="password" name="password_confirmation" className="form-control form-control-lg" required onChange={handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 elmentos_end btn_enviar">
                        <button type="submit" className="btn btn-emprend btn-lg">Registrar <FontAwesomeIcon icon={faArrowRight} /></button>
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
export default  connect(mapStateToProps,mapDispatchToProps)(Register);