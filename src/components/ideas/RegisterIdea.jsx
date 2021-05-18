import React, { useState} from 'react'
import '../../assets/styles/components/ideas/RegisterIdea.scss'
import Header from './Header'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setUser } from '../../actions/index'
import axios from 'axios'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

//Componente para el registro de una idea por usuario logueado
const RegisterIdea = (props) => {
    //Constante para el guardado de la idea solo con el contenido de la idea
    const [ form, setIdea] = useState({
        body: "",
    })

    //Seteamos el valor del body de la idea cuando el textarea se cambia
    const handleChange = ( event ) =>{
        setIdea({
            ...form,
            [ event.target.name ] : event.target.value
        })
    }

    //Funcion para el envio a l API de la nueva idea
    const handleSubmit = ( event ) =>{
        event.preventDefault()
        var header = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3001/',
        })
        //Pasamos el formulario con la idea y el token del usuario
        axios.post(process.env.API+'/api/comments?api_token='+props.user.token,form).then(
            response => { 
                //Retornamos a la vista de Lista de ideas
                props.history.push('/ideasLista')
            }
        ).catch(
            error => { 
               
            }
        )
    }

    return (
        props.user.token != null ?
            <React.Fragment>
                <Header />
                <div className="container-fluid contenedor_lista">
                    <div className="row">
                        <div className="container">
                            <div className="row bajar_padding">
                                <div className="col-6">
                                    <span className="titulo_idea texto_bold">Comparte tu idea</span>
                                    <hr className="linea2"/>
                                </div>
                            </div>
                            <div className="row justify-content-end" id="alerta_registro">
                                <div className="col-12">
                                    <div className="alert alert-danger" role="alert" id="alerta_txt">Error al registrar idea, intente de nuevo</div>
                                </div>
                            </div>
                            <form onSubmit={ handleSubmit }>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="">
                                            <textarea name="body" className="form-control input_idea" id="exampleFormControlTextarea1" rows="5" onChange={handleChange}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row  bajar_padding">
                                    <div className="col-12 d-flex flex-row-reverse bd-highlight">
                                        <button type="submit" className="btn btn-emprend btn-lg">Enviar <FontAwesomeIcon icon={faArrowRight} /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        : 
        <Redirect to="/login"/>
    )
};
const mapDispatchToProps = {
    setUser
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(RegisterIdea);