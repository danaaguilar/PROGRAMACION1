//punto 2
let criptos = ['Bitcoin','Ethereum','Tether','BNB','Cardano','Dai','Helium','Shiba Inu','Tron', 'Cronos','Solana']

criptos.unshift('Stellar')
console.log(criptos)

let indice = criptos.indexOf('Shiba Inu')
criptos.splice(indice,2)
console.log(criptos)

criptos.push('Gate')
console.log(criptos)

function ejecutar(){
let longitud = criptos.length
let ultimo = criptos[longitud-1]
let indice2 = criptos.indexOf('Helium')
document.getElementById("parrafo").innerHTML = (`
la longitud es ${longitud} <br>
el ultimo es ${ultimo} <br>
${criptos[indice2]}
`)
}
document.getElementById("btn_parrafo").addEventListener("click", ejecutar);

function lista(){
    let filas = []
    criptos.forEach( (element) => {
        let fila = `
        <li class="list-group-item"> ${element} </li>
        `
        filas.push(fila)
    })
    document.getElementById("lista_body").innerHTML = filas.join("")
}
document.getElementById("btn_lista").addEventListener("click",lista)

//punto 3
const framework = () => { 
    let framework= {
        titulo: 'Framework utilizado en la actualidad',
        nombre: 'Angular',
        características: {
            lenguaje: 'TypeScript',
            patron: 'MVVM',
            spa: 'si'
        }
    }
    
    const {titulo,nombre} = framework
    const {lenguaje,patron,spa} = framework.características

    console.log(`
        titulo: ${titulo}
        nombre: ${nombre}
        las caracteristicas son:
            lenguaje: ${lenguaje}
            patron: ${patron}
            spa: ${spa}
    `)
}

document.getElementById("btn_objetos").addEventListener("click",framework)

//punto 1
const obtener_dolar = async () => {
    const dolar = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    const lista_dolar = await dolar.json()
    let filas = []
    lista_dolar.forEach( (element,index) => {
        let fila = `
        <tr>
            <td>${index+1}</td>
            <td>${element.casa.nombre}</td>
            <td>${element.casa.compra}</td>
            <td>${element.casa.venta}</td>
        </tr>`
        filas.push(fila)
    })   
    document.getElementById("tbl_body").innerHTML = filas.join("")
}
obtener_dolar()


