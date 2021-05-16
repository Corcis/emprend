import React from 'react'
import '../../assets/styles/components/home/Caracteristicas.scss'
import NoPhoto from '../../assets/static/no_photo.png'
import { faMusic, faMoneyBillAlt, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Caracteristicas = () => (
    <div className="container-fluid" id="caracteristicas">
        <div className="row">
            <div className="col-md-6">
                <div className="container">
                    <div className="row">
                        <h4 className="subtitulo"><b>Características</b></h4>
                        <hr className="linea2"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-md-8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2  contenido_caracteristicas">
                            <FontAwesomeIcon size="2x" className="iconos_servicios" icon={faMusic} />
                        </div>
                        <div className="col-md-10 contenido_caracteristicas">
                            <span className="subtitulo_cara texto_bold"><b>Lorem ipsum</b></span>
                            <span>Maecenas nec eleifend metus. Morbi ac ultricies quam. Vivamus tempor in arcu id auctor. Maecenas consequat purus vel auctor ultrices. Nulla a velit vitae purus malesuada cursus. Sed auctor magna a mauris </span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2  contenido_caracteristicas">
                            <FontAwesomeIcon size="2x" className="iconos_servicios" icon={faMoneyBillAlt} />
                        </div>
                        <div className="col-md-10  contenido_caracteristicas">
                            <span className="subtitulo_cara texto_bold"><b>Lorem ipsum</b></span>
                            <span>Maecenas nec eleifend metus. Morbi ac ultricies quam. Vivamus tempor in arcu id auctor. Maecenas consequat purus vel auctor ultrices. Nulla a velit vitae purus malesuada cursus. Sed auctor magna a mauris </span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 contenido_caracteristicas">
                            <FontAwesomeIcon size="2x" className="iconos_servicios" icon={faFolderOpen} />
                        </div>
                        <div className="col-md-10 contenido_caracteristicas">
                            <span className="subtitulo_cara texto_bold"><b>Lorem ipsum</b></span>
                            <span>Maecenas nec eleifend metus. Morbi ac ultricies quam. Vivamus tempor in arcu id auctor. Maecenas consequat purus vel auctor ultrices. Nulla a velit vitae purus malesuada cursus. Sed auctor magna a mauris </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 contenido_caracteristicas">
                <img src={ NoPhoto } alt="No photo" className="d-flex justify-content-around no_photo"/> 
            </div>
        </div>
    </div>
);

export default Caracteristicas;