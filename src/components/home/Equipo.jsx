import React from 'react'
import '../../assets/styles/components/home/Equipo.scss'
import perfil1 from '../../assets/static/profile1.jpg'
import perfil2 from '../../assets/static/profile2.png'
import perfil3 from '../../assets/static/profile3.jpg'
import iconCorreo from '../../assets/static/icon_correo.png'
import iconFacebook from '../../assets/static/icon_facebook.png'
import iconGoogle from '../../assets/static/icon_google.png'
import iconLinkedin from '../../assets/static/icon_linkedin.png'
import iconPinterest from '../../assets/static/icon_pinterest.png'
import iconTumblr from '../../assets/static/icon_tumblr.png'
import iconTwitter from '../../assets/static/icon_twitter.png'
import iconYoutube from '../../assets/static/icon_youtube.png'
import iconrCorreo from '../../assets/static/iconr_correo.png'
import iconrFacebook from '../../assets/static/iconr_facebook.png'
import iconrGoogle from '../../assets/static/iconr_google.png'
import iconrLinkedin from '../../assets/static/iconr_linkedin.png'
import iconrPinterest from '../../assets/static/iconr_pinterest.png'
import iconrTumblr from '../../assets/static/iconr_tumblr.png'
import iconrTwitter from '../../assets/static/iconr_twitter.png'
import iconrYoutube from '../../assets/static/iconr_youtube.png'



const Equipo = () => (
    <div className="container-fluid" id="equipo">
        <div className="row">
            <div className="col-md-6">
                <div className="container">
                    <div className="row">
                        <h4 className="subtitulo"><b>Nuestro equipo de trabajo</b></h4>
                        <hr className="linea2"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 contenido_equipos">
                <div className="container-fluid">
                    <div className="row">
                        <span className="texto_equipo">Nuestro equipo está compuesto por individuos guapos, ingeniosos, y superpoderosos que están comprometidos con la madre naturaleza y utilizar sus poderes sobrenaturales para el bien y no para el mal. Compartimos la    pasión por innovar y mantenernos al día sobre los últimos acontecimientos del universo.</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 contenido_equipo">
                <div className="container">
                    <div className="card cuerpo_card" >
                        <img src={ perfil1 } className="card-img-top rounded-circle foto_perfil" alt="Perfil 1" />
                        <span className="nombre_perfil texto_bold"><b>Homero Archundia</b></span>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="container no_padding">
                                <div className="row contenido_equipo">
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconTwitter } className="iconos_tamanio"/>
                                        <img src={ iconrTwitter } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconFacebook } className="iconos_tamanio"/>
                                        <img src={ iconrFacebook } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconLinkedin } className="iconos_tamanio"/>
                                        <img src={ iconrLinkedin } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconCorreo } className="iconos_tamanio"/>
                                        <img src={ iconrCorreo } className="iconos_tamanio2"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconGoogle } className="iconos_tamanio"/>
                                        <img src={ iconrGoogle } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconYoutube } className="iconos_tamanio"/>
                                        <img src={ iconrYoutube } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconPinterest } className="iconos_tamanio"/>
                                        <img src={ iconrPinterest } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconTumblr } className="iconos_tamanio"/>
                                        <img src={ iconrTumblr } className="iconos_tamanio2"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 contenido_equipo">
                <div className="container">
                    <div className="card cuerpo_card" >
                        <img src={ perfil2 } className="card-img-top rounded-circle foto_perfil" alt="Perfil 1" />
                        <span className="nombre_perfil texto_bold"><b>Leia Organa</b></span>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="container no_padding">
                                <div className="row contenido_equipo">
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconTwitter } className="iconos_tamanio"/>
                                        <img src={ iconrTwitter } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconFacebook } className="iconos_tamanio"/>
                                        <img src={ iconrFacebook } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconLinkedin } className="iconos_tamanio"/>
                                        <img src={ iconrLinkedin } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconCorreo } className="iconos_tamanio"/>
                                        <img src={ iconrCorreo } className="iconos_tamanio2"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconGoogle } className="iconos_tamanio"/>
                                        <img src={ iconrGoogle } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconYoutube } className="iconos_tamanio"/>
                                        <img src={ iconrYoutube } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconPinterest } className="iconos_tamanio"/>
                                        <img src={ iconrPinterest } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconTumblr } className="iconos_tamanio"/>
                                        <img src={ iconrTumblr } className="iconos_tamanio2"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 contenido_equipo">
                <div className="container">
                    <div className="card cuerpo_card" >
                        <img src={ perfil3 } className="card-img-top rounded-circle foto_perfil" alt="Perfil 1" />
                        <span className="nombre_perfil texto_bold"><b>Guillo del Toro</b></span>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="container no_padding">
                                <div className="row contenido_equipo">
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconTwitter } className="iconos_tamanio"/>
                                        <img src={ iconrTwitter } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconFacebook } className="iconos_tamanio"/>
                                        <img src={ iconrFacebook } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconLinkedin } className="iconos_tamanio"/>
                                        <img src={ iconrLinkedin } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconCorreo } className="iconos_tamanio"/>
                                        <img src={ iconrCorreo } className="iconos_tamanio2"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconGoogle } className="iconos_tamanio"/>
                                        <img src={ iconrGoogle } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconYoutube } className="iconos_tamanio"/>
                                        <img src={ iconrYoutube } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconPinterest } className="iconos_tamanio"/>
                                        <img src={ iconrPinterest } className="iconos_tamanio2"/>
                                    </div>
                                    <div className="col-3 d-flex justify-content-around">
                                        <img src={ iconTumblr } className="iconos_tamanio"/>
                                        <img src={ iconrTumblr } className="iconos_tamanio2"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
);

export default Equipo;