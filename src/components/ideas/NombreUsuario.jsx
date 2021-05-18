import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

//Componente para obtener el nombre del usuario que creo la idea
const NombreUsuario = (props) => {
    //Constante que guarda la informacion del usuario que se esta buscando
    const [ usuario, setUsuario] = useState({})
    
    //Se busca en la API el usuario correspondiente 
    useEffect( () => {
        let unmounted = false;
        let source = axios.CancelToken.source();
        //Se consume la API para el usuario (se envio el id del usuario desde ListaIdea) y se setea el valor del usuario con el obtenido
        return axios.get(process.env.API+'/api/user/'+ props.user_id +'?api_token=' + props.user.token, { 
            headers: {
                'Authorization': "Baerer " + props.user.token
            }
        }).then(
            response => {
                if (!unmounted) {
                    const usuario_name = response.data.data.name
                    setUsuario( {'name' : usuario_name})
                }
            }
        )
        return function () {
            unmounted = true;
            source.cancel("Cancelling in cleanup");
        };
    }, [] )
    //Retornamos el nombre del usuario obtenido
    return (<span>{usuario.name}</span>);
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,null)(NombreUsuario);