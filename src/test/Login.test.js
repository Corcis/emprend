import {expect} from 'chai'
var generar = require("./entrada.js");
describe('Validando valores de inputs para login', () => {
    it('Validar que el correo sea válido', () => {
        const result = generar.addTested("corcisdr@mail.com");
        const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const correo = re.test(result);
        expect(correo).to.be.true;
    })
    it('Validar que el correo sea no válido', () => {
        const result = generar.addTested("corcisdrmail.com");
        const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const correo = re.test(result);
        expect(correo).to.be.false;
    })
    it('Mostrar que el password es válido', () => {
        const result = generar.addTested("password123");
        expect(result.length > 7).to.be.true;
    })
    it('Mostrar que el password no es válido', () => {
        const result = generar.addTested("pass");
        expect(result.length > 7).to.be.false;
    })
});