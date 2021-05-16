import React from 'react'
import '../../assets/styles/components/login/Login.scss'
import LogoBlanco from '../../assets/static/logo_blanco.png'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => (
    <div className="container-fluid contenedor_login">
        <div className="row justify-content-end">
            <div className="col-12">
                <img src={LogoBlanco} className="logo_login"/>
            </div>
        </div>
        <form>
            <div className="row">
                <div className="elmentos_end">
                    <label htmlFor="exampleInputEmail1" className="form-label name_label">Usuario</label>
                    <input type="text" className="form-control form-control-lg"/>
                </div>
                <div className="elmentos_end">
                    <label htmlFor="exampleInputPassword1" className="form-label name_label">Password</label>
                    <input type="password" className="form-control form-control-lg"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 elmentos_end btn_enviar">
                    <button type="submit" className="btn btn-emprend btn-lg">Enviar <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </form>
    </div>
);

export default Login;