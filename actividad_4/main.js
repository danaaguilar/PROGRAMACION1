import Tienda from "./tienda.js";

function ejecutar(){
    let tienda = new Tienda ()
    tienda.obtener_productos()
}
document.getElementById("slt_categoria").addEventListener("change",ejecutar)