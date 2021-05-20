import React from 'react'
import {expect} from 'chai'
import NombreUsuario from '../components/ideas/NombreUsuario'
describe('Nombre de usuario que es buscado en API ', () => {
    it('Debemos obtener el nombre del usuario', () => {
        const wrapper = <NombreUsuario />;
        expect(wrapper).to.contain(Object);
    })
});