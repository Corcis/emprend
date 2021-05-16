import React from 'react'
import Header from './Header'
import Inicio from './Inicio'
import Nosotros from './Nosotros'
import Servicios from './Servicios'
import Caracteristicas from './Caracteristicas'
import Equipo from './Equipo'
import Contacto from './Contacto'
import FooterGrande from './FooterGrande'
import FooterChico from './FooterChico'
const Home = () => (
    <React.Fragment>
        <Header />
        <Inicio />
        <Nosotros />
        <Servicios />
        <Caracteristicas />
        <Equipo />
        <Contacto />
        <FooterGrande />
        <FooterChico />
    </React.Fragment>
)

export default Home;