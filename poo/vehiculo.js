export default class Vehiculo{
    //declaro o inicio el atributo marca 
    marca = ''

    //parametro km
    //argumento
    constructor(km){
        //uso el atributo
        this.kilometraje = km
    }
    //metodo
    mostrar_km(){
        console.log(`kilometraje = ${this.kilometraje}km`)
    }

    mostrar_marca(){
        console.log(`marca del vehiculo: ${this.marca}`)
    }
}