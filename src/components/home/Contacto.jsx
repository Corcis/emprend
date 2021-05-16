import React from 'react'
import { faUser, faEnvelope, faPhone, faCalendarAlt, faComments, faArrowRight, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../assets/styles/components/home/Contacto.scss'

const Contacto = () => (
    <div className="container-fluid" id="contacto">
        <div className="row">
            <div className="col-md-6">
                <div className="container">
                    <div className="row">
                        <h4 className="subtitulo"><b>Contacto</b></h4>
                        <hr className="linea2"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="row completo">
            <div className="col-md-6">
                <div className="container contenido_contacto">
                    <div className="row">
                        <h4 className="subtitulo2 texto_bold"><b>Escríbenos</b></h4>
                        <span className="text_escribenos texto_bold"><b>Lorem ipsum lorem lorem ipsum bacon ipsum</b></span>
                    </div>
                    <div className="mb-3 row contenido_input">
                        <label className="col-sm-1">
                            <FontAwesomeIcon size="2x" className="iconos_contacto" icon={faUser} /></label>
                        <div className="col-sm-11">
                            <input type="text" className="form-control align-self-center" placeholder="Nombre" />
                        </div>
                    </div>
                    <div className="mb-3 row  contenido_input">
                        <label className="col-sm-1">
                            <FontAwesomeIcon size="2x" className="iconos_contacto" icon={faEnvelope} /></label>
                        <div className="col-sm-11">
                            <input type="email" className="form-control align-self-center" placeholder="Correo Electrónico" />
                        </div>
                    </div>
                    <div className="mb-3 row  contenido_input">
                        <label className="col-sm-1">
                            <FontAwesomeIcon size="2x" className="iconos_contacto" icon={faPhone} /></label>
                        <div className="col-sm-11">
                            <input type="tel" className="form-control align-self-center" placeholder="Teléfono" />
                        </div>
                    </div>
                    <div className="mb-3 row  contenido_input">
                        <label className="col-sm-1">
                            <FontAwesomeIcon size="2x" className="iconos_contacto" icon={faCalendarAlt} /></label>
                        <div className="col-sm-11">
                            <input type="date" className="form-control align-self-center" placeholder="Elegir fecha" />
                        </div>
                    </div>
                    <div className="mb-3 row  contenido_input">
                        <label className="col-sm-1">
                            <FontAwesomeIcon size="2x" className="iconos_contacto" icon={faComments} /></label>
                        <div className="col-sm-11">
                            <textarea className="form-control align-self-center" placeholder="Mensaje"></textarea>
                        </div>
                    </div>
                    <div className="mb-3 row contenido_input">
                        <div className="col-sm-12 d-flex justify-content-end">
                            <button type="button" className="btn btn-lg btn-emprend nosotros_btn"><FontAwesomeIcon icon={faArrowRight} /> Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="container contenido_info">
                    <div className="row">
                        <iframe  className="mapa_contacto no_padding"scrolling="no"src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Av%20Adolfo%20L%C3%B3pez%20Mateos%20Nte%20391-Piso%2029,%20Ladron%20De%20Guevara,%2044680%20Guadalajara,%20Jal.+(Neubox)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.mapsdirections.info/marcar-radio-circulo-mapa/"></a>
                    </div>
                    <div className="row">
                        <span className="subtitulo_mapa texto_bold d-flex justify-content-start">Ubicación</span>
                        <hr className="linea2" />
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10 detalles_mapa texto_light">
                            <span>
                                <FontAwesomeIcon size="2x" className="iconos_contacto" icon={faPhone} />
                                <span className="detalles_texto"> 33 1234 5678</span>
                            </span>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10 detalles_mapa texto_light">
                            <span>
                                <FontAwesomeIcon size="2x" className="iconos_contacto" icon={faEnvelope} />
                                <span className="detalles_texto"> info@emprend.com</span>
                            </span>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10 detalles_mapa texto_light">
                            <span>
                                <FontAwesomeIcon size="2x" className="iconos_contacto" icon={faMapMarkerAlt} />
                                <span className="detalles_texto"> Nostrud exerci tation ullamcorper Nostrud exerci tation ullamcorper </span>
                            </span>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Contacto;