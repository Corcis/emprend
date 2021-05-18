import React, { useState, useEffect} from 'react'
import '../../assets/styles/components/ideas/ListaIdea.scss'
import Header from './Header'
import axios from 'axios'
import { connect } from 'react-redux'
import NombreUsuario from './NombreUsuario'
import {Redirect} from 'react-router-dom'

//Listado de las ideas registradas por los uusarios
const ListaIdea = (props) => {
    //Constante para los links de first, last, next, prev de la paginacion del listado
    const [ links, setLinks] = useState({ 
        first : "",
        last : "",
        next : "",
        prev : ""
    })
    //Constante para el guardado de las ideas
    const [ ideas, setIdeas] = useState([])

    //Funcion para  cargado de las ideas (se obtienen las 10 últimas)
    useEffect( () => {
        let unmounted = false;
        let source = axios.CancelToken.source();
        //Funcion axios enviando el token de usuario para obtener la respuesta de la API
        axios.get(process.env.API+'/api/comments?api_token=' + props.user.token, { 
            headers: {
                'Authorization': "Baerer " + props.user.token
            }
        }).then(
            response => { 
                if (!unmounted) {
                    //Al obtener una respuest válida de la API seteamos la lista de ideas por las obtenidas
                    const todas_ideas = response.data.data
                    todas_ideas.map(item => ( 
                        setIdeas(ideas =>[
                            ...ideas,
                            item
                        ])
                    ))
                    //Se setean tambien los links de la paginacion para esta lista de ideas
                    const todas_links =  response.data.links
                    setLinks({
                        ...links,
                        ['first'] : todas_links.first,
                        ['last'] : todas_links.last,
                        ['next'] : todas_links.next,
                        ['prev'] : todas_links.prev,
                    })
                }
            }
        ).catch(
            error => { }
        )
        return function () {
            unmounted = true;
            source.cancel("Cancelling in cleanup");
        };
    }, [] )
    
    //Al hacer click en alguna opcion de la paginación obtenemos las ideas para esa página
    const handleClick = ( url ) =>{
        let unmounted = false;
        let source = axios.CancelToken.source();
        //Enviamos la url de la paginacion correspondiente a la API
        axios.get(url+'&api_token=' + props.user.token, { 
            headers: {
                'Authorization': "Baerer " + props.user.token
            }
        }).then(
            response => { 
                if (!unmounted) {
                    //Se veulven a setar los valores de las ideas obenias para esta vista
                    const todas_ideas = response.data.data
                    setIdeas(ideas =>[])
                    todas_ideas.map(item => ( 
                        setIdeas(ideas =>[
                            ...ideas,
                            item
                        ])
                    ))
                    //Se setean los nuevos links correspondientes para la paginaciond e la vista
                    const todas_links =  response.data.links
                    setLinks({
                        ...links,
                        ['first'] : todas_links.first,
                        ['last'] : todas_links.last,
                        ['next'] : todas_links.next,
                        ['prev'] : todas_links.prev,
                    })
                }
            }
        ).catch(
            error => { }
        )
        return function () {
            unmounted = true;
            source.cancel("Cancelling in cleanup");
        };
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
                                <span className="titulo_idea texto_bold">Listado de ideas</span>
                                <hr className="linea2"/>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-12">

                                {
                                    ideas.map((item) => (
                                        <div className="list-group lista" key={ item.id }>
                                            <div href="#" className="list-group-item list-group-item-action" aria-current="true">
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1"></h5>
                                                    <small>{ item.created_at.substr(0,10) }</small>
                                                </div>
                                                <p className="mb-1">{ item.body }</p>
                                                <small>Por: <NombreUsuario user_id = { item.user_id } />.</small>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className={ links.first == null ? 'page-item disabled': 'page-item'} >
                            <button type="button" className="page-link paginacion" onClick={() => handleClick(links.first)}>{'<< First'}</button>
                        </li>
                        <li className={ links.prev == null ? 'page-item disabled': 'page-item'}>
                            <button type="button" className="page-link paginacion" onClick={() => handleClick(links.prev)}>{' < Prev'}</button></li>
                        <li className={ links.next == null ? 'page-item disabled': 'page-item'}>
                            <button type="button" className="page-link paginacion" onClick={() => handleClick(links.next)}>{'Next >'}</button></li>
                        <li className={ links.last == null ? 'page-item disabled': 'page-item'}>
                            <button type="button" className="page-link paginacion" onClick={() => handleClick(links.last)}>{'Last >>'}</button></li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
        :
        <Redirect to="/login"/>
    )
};
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,null)(ListaIdea);