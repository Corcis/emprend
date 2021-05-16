import React from 'react'
import '../../assets/styles/components/home/Servicios.scss'
import { faLaptop, faKeyboard, faFolderOpen, faCalendarAlt, faDesktop, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Servicios = () => (
    <div className="container-fluid" id="servicios">
        <div className="row">
            <div className="col-md-6">
                <div className="container">
                    <div className="row">
                        <h4 className="subtitulo"><b>Servicios</b></h4>
                        <hr className="linea2"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-md-2 contenido_servicios">
                <FontAwesomeIcon size="5x" className="iconos_servicios" icon={faLaptop} />
                <span className="texto_iconos text-center">Sans adipiscing elit, ed diam nonummy venit </span>
            </div>
            <div className="col-md-2 contenido_servicios">
                <FontAwesomeIcon size="5x" className="iconos_servicios" icon={faKeyboard} />
                <span className="texto_iconos text-center">Sans adipiscing elit, ed diam nonummy venit </span>
            </div>
            <div className="col-md-2 contenido_servicios">
                <FontAwesomeIcon size="5x" className="iconos_servicios" icon={faFolderOpen} />
                <span className="texto_iconos text-center">Sans adipiscing elit, ed diam nonummy venit </span>
            </div>
            <div className="col-md-2 contenido_servicios">
                <FontAwesomeIcon size="5x" className="iconos_servicios" icon={faCalendarAlt} />
                <span className="texto_iconos text-center">Sans adipiscing elit, ed diam nonummy venit </span>
            </div>
            <div className="col-md-2 contenido_servicios">
                <FontAwesomeIcon size="5x" className="iconos_servicios" icon={faDesktop} />
                <span className="texto_iconos text-center">Sans adipiscing elit, ed diam nonummy venit </span>
            </div>
            <div className="col-md-2 contenido_servicios">
                <FontAwesomeIcon size="5x" className="iconos_servicios" icon={faSave} />
                <span className="texto_iconos text-center">Sans adipiscing elit, ed diam nonummy venit </span>
            </div>
        </div>
    </div>
);

export default Servicios;