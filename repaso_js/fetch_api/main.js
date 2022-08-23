function mostrar_objetos(){
    let cliente = {
        nombre: 'Pepito',
        apellido: 'Pozzo',
        dni: 46070089,
        correo: {
            outlook: 'superpepito@outlook.com',
            gmail: 'pepis@gmail.com',
            yahoo: 'elpepo@yahoo.com.ar'
        }
    }


//forma tradicional
/*const outlook = cliente.correo.outlook
const gmail = cliente.correo.gmail
const yahoo = cliente.correo.yahoo*/

//forma nueva - destructuring object
const {outlook,gmail,yahoo} = cliente.correo

console.log(`
    correos de pepito: 
    outlook: ${outlook}
    gmail: ${gmail}
    yahoo: ${yahoo}
`)
}
mostrar_objetos()

//creamos funcion flecha 
const consumir_api = async () => {
    //estamos realizando mediante la funcion nativa de javascript denominada fetch, una solicitud HTTP a traves del metodo GET de manera de obtener las publicaciones en notacion JSON 
    const publicaciones = await fetch('https://jsonplaceholder.typicode.com/posts')
    //parseamos
    const publicaciones_definitivas = await publicaciones.json()

    let items_totales = []

    publicaciones_definitivas.forEach(element => {
        let item = `<li class="list-group-item">${element.title}</li>`
        items_totales.push(item)
    });
    document.getElementById("lista_publicaciones").innerHTML = items_totales.join('')
}
consumir_api()

