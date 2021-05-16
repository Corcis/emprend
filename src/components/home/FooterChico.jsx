import React from 'react'
import '../../assets/styles/components/home/FooterChico.scss'
import iconbCorreo from '../../assets/static/iconb_correo.png'
import iconbFacebook from '../../assets/static/iconb_facebook.png'
import iconbGoogle from '../../assets/static/iconb_google.png'
import iconbLinkedin from '../../assets/static/iconb_linkedin.png'
import iconbPinterest from '../../assets/static/iconb_pinterest.png'
import iconbTumblr from '../../assets/static/iconb_tumblr.png'
import iconbTwitter from '../../assets/static/iconb_twitter.png'
import iconbYoutube from '../../assets/static/iconb_youtube.png'

const FooterChico = () => (
    <div className="container-fluid" id="FooterChico">
        <div className="row ">
            <div className="col-md-6 contenido_footer">
                NEUBOX 2019 ® - Derechos reservados
            </div>
            <div className="col-md-6  contenido_footer">
                <img src={ iconbCorreo } className="iconos_footer"/>
                <img src={ iconbFacebook } className="iconos_footer"/>
                <img src={ iconbGoogle } className="iconos_footer"/>
                <img src={ iconbLinkedin } className="iconos_footer"/>
                <img src={ iconbPinterest } className="iconos_footer"/>
                <img src={ iconbTumblr } className="iconos_footer"/>
                <img src={ iconbTwitter } className="iconos_footer"/>
                <img src={ iconbYoutube } className="iconos_footer"/>
            </div>
        </div>
    </div>
);

export default FooterChico;