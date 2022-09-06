//primer paso: crear un arreglo de prueba 
let numeros = [1,5,10,15]

/*let nuevoArray = numeros.map((element) => {
    let r = element*2
    return r 
})*/

let nuevoArray = numeros.map(element => element*2)

console.log(nuevoArray)


let valores = [1,4,9]
let raices = valores.map(element => Math.sqrt(element))
console.log(raices)

//mapear un arreglo de objetos 
let datos_personales = [
    { nombre:'franco', apellido:'bravo' },
    { nombre:'bruno', apellido:'acuña'},
    { nombre:'ignacio', apellido:'cappellini'}
]
let nombre_apellido = datos_personales.map(element => `${element.nombre} ${element.apellido}`)
console.log(nombre_apellido)
    

