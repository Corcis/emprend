import React from 'react'
import '../../assets/styles/components/home/FooterGrande.scss'
import logoBlanco from '../../assets/static/logo_blanco.png'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCcVisa, faCcMastercard, faCcDiscover, faCcAmex, faCcPaypal, faCcStripe } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterGrande = () => (
    <div className="container-fluid" id="FooterGrande">
        <div className="row">
            <div className="col-md-12 primer_contenido contenido_footer">
                <img src={logoBlanco} className="imagen_footer"/>
                <hr className="linea_footer"/>
            </div>
        </div>
        <div className="row ">
            <div className="col-md-4 contenido_footer primer_contenido">
                <span className="description_contenido">Teléfono:</span>
                <span>
                    <FontAwesomeIcon size="4x" className="iconos_contacto" icon={faPhone} />
                    <span className="segundo_dentro">(33) 1234 5678</span>
                </span>
            </div>
            <div className="col-md-4 contenido_footer primer_contenido">
                <span className="description_contenido">Aceptamos:</span>
                <div className=" tarjetas">
                    <FontAwesomeIcon size="4x" className="iconos_contacto" icon={faCcVisa} />
                    <FontAwesomeIcon size="4x" className="iconos_contacto" icon={faCcMastercard} />
                    <FontAwesomeIcon size="4x" className="iconos_contacto" icon={faCcDiscover} />
                    <FontAwesomeIcon size="4x" className="iconos_contacto" icon={faCcAmex} />
                    <FontAwesomeIcon size="4x" className="iconos_contacto" icon={faCcPaypal} />
                    <FontAwesomeIcon size="4x" className="iconos_contacto" icon={faCcStripe} />
                </div>
                        
                
            </div>
            <div className="col-md-4 contenido_footer primer_contenido">
                <span className="description_contenido">Contacto:</span>
                <span>
                    <FontAwesomeIcon size="4x" className="iconos_contacto" icon={faEnvelope} />
                    <span className="segundo_dentro">info@empren</span>
                </span>
            </div>
        </div>
    </div>
);

export default FooterGrande;