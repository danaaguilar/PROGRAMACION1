export default class Pitagoras{

    ca;
    co;

    constructor(){
    }

    calcular_hipotenusas(){
        let resultado = Math.sqrt(Math.pow(this.co,2) + Math.pow(this.ca,2))
        return resultado
    }
}