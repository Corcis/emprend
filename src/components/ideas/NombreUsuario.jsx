import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

const NombreUsuario = (props) => {
    const [ usuario, setUsuario] = useState({})
    
    useEffect( () => {
        let unmounted = false;
        let source = axios.CancelToken.source();
        return axios.get('http://localhost:8000/api/user/'+ props.user_id +'?api_token=' + props.user.token, { 
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
    
    return (<span>{usuario.name}</span>);
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,null)(NombreUsuario);