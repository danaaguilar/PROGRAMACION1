//vamos a crear un arreglo
let lenguajes = ['java','python','javascript','c++','visual basic','go']

//longitud de un arreglo
let longitud = lenguajes.length
console.log('longitud:'+longitud)

//acceder al ultimo elemento de un arreglo
let ultimo = lenguajes[longitud-1]

//recorrer un arreglo 
lenguajes.forEach((element,index) => {
    console.log((index+1)+' '+element)
});

//agregar un elemento al final del arreglo
lenguajes.push('php')
console.log(lenguajes)

//como elimino el ultimo elemento de un arreglo
lenguajes.pop()
console.log(lenguajes)

//como agregar un elemento al inicio del arreglo
lenguajes.unshift('c#')
console.log(lenguajes)

//como eliminar el primer elemento de un arreglo
lenguajes.shift()
console.log(lenguajes)

//como encontrar el indice de un elemento y mostrarlo posteriormente 
let indice = lenguajes.indexOf('javascript')
console.log(lenguajes[indice])

//como eliminar un elemento del arreglo segun su indice 
let indice2 = lenguajes.indexOf('c++')
let eliminados = lenguajes.splice(indice2,2)
console.log(lenguajes)
console.log('eliminados: '+eliminados)

//como agrego elementos dentro de un arreglo
lenguajes.splice(indice,0,'visual basic')
console.log(lenguajes)

//como copiar un arreglo 
copia = lenguajes.slice()
copia.push('ruby')
console.log(copia)