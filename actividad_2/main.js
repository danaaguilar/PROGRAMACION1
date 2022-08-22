import Pitagoras from "./pitagoras.js"

function ejecutar(){
    //creamos la instancia de la clase 
    let pitagoras = new Pitagoras ()
    //a traves de la instancia accedemos a los atrbutos de la misma, para asignarle un valor a cada una de ellas
    pitagoras.ca = parseInt(document.getElementById("inp_ca").value)
    pitagoras.co = parseInt(document.getElementById("inp_co").value)
    //invocamos al metodo que posteriormente nos entrega o retorna una respuesta. dicha se asigna o guarda en la variable "respuesta"
    let respuesta = pitagoras.calcular_hipotenusas();
    //obtenemos el h1 para asignarle y mostrar el resultado de la hipotenusa
    document.getElementById("resultado").textContent = (`resultado: `+respuesta)
}
document.getElementById("btn_calcular").addEventListener("click", ejecutar);