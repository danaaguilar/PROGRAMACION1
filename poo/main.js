import Vehiculo from "./vehiculo.js";

//forma 1: envio de parametros a partir del constructor
function ejecutar() {
  let kilometraje = document.getElementById("inp_km").value;
  //creamos la instancia de la clase y se ejecuta el constructor

  let vehiculo = new Vehiculo(kilometraje);
  vehiculo.mostrar_km();
  //con la instancia invocamos el metodo mostrar_km
}

document.getElementById("btn_mostrar").addEventListener("click", ejecutar);

//forma 2: envio de parametros
const mostrar_marca = () => {
  //asigno un valor
  let vehiculo = new Vehiculo();
  //asignamos un valor la atributo
  vehiculo.marca = document.getElementById("slt_marca").value;
  //luego invocamos al metodo mostrar_marca
  vehiculo.mostrar_marca();
};
document.getElementById("btn_aceptar").addEventListener("click", mostrar_marca);
