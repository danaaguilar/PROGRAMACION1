export default class Tienda{
    constructor(){
    }

     async obtener_productos(){
        const producto = await fetch('https://fakestoreapi.com/products')
        const trj_producto = await producto.json()
        let columnas =  []
        trj_producto.forEach( (element) => {
            let columna = `
            <div class="col m-1">
                    <div class="card" style="width:18rem;">
                        <img src="${element.image}" class="card-img-top" alt="..." style="width: 100px height:150px ";">
                        <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.price}</p>
                        </div>
                    </div>
            </div>
            `
            columnas.push(columna)
        });
        document.getElementById("trj_body").innerHTML = columnas.join("")
    }

}
