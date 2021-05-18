import React, { useState } from 'react'
import '../../assets/styles/components/login/Login.scss'
import LogoBlanco from '../../assets/static/logo_blanco.png'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect, useStore } from 'react-redux'
import { setUser } from '../../actions/index'
import axios from 'axios'

const Login = (props) => {
    const [ form, setForm] = useState({
        email: "",
    })

    const handleChange = ( event ) =>{
        setForm({
            ...form,
            [ event.target.name ] : event.target.value
        })
    }

    const handleSubmit = ( event ) =>{
        event.preventDefault()
        props.setUser(form)
        axios.post('http://localhost:8000/api/login',form).then(
            response => { 
                localStorage.name = response.data.data.name
                localStorage.email = response.data.data.email
                localStorage.token = response.data.data.api_token
                props.setUser(response.data.data)
                props.history.push('/ideasLista')
            }
        ).catch(
            error => {
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