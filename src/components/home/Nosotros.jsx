import React from 'react'
import '../../assets/styles/components/home/Nosotros.scss'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Nosotros = () => (
    <div className="container-fluid" id="nosotros">
        <div className="row">
            <div className="col-md-6 contenido_nosotros align-self-center">
                <div className="container">
                    <div className="row">
                        <h4 className="subtitulo subtitulo_nosotros">Nosotros</h4>
                        <hr className="linea2"/>
                        <span className="nosotros_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia facilisis felis. Nunc malesuada venenatis tristique. Vestibulum nec dui finibus, vestibulum eros non, volutpat lorem. Nam ullamcorper tempus urna. In aliquet, magna a elementum ornare, felis felis auctor lacus, egestas scelerisque libero velit ac urna. Nullam gravida vel magna in efficitur. Maecenas ultrices quis nisl vel aliquet.</span>
                        <span className="nosotros_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia facilisis felis. Nunc malesuada venenatis tristique. Vestibulum nec dui finibus, vestibulum eros non</span>
                        <button type="button" className="btn btn-lg btn-emprend nosotros_btn"><FontAwesomeIcon icon={faArrowRight} /> Soy un botón</button>
                        <span className="nosotros_btn"></span>
                    </div>
                </div>
            </div>
            <div className="col-md-6 desk2 no_padding"></div>
        </div>
    </div>
)

export default Nosotros;