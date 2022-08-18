/* clase de datos */
class Datos{
    constructor(marca, modelo, año, kilometraje, precio,){
        this.marca = marca,
        this.modelo = modelo,
        this.año = año,
        this.kilometraje = kilometraje,
        this.precio = precio
    }
}
/* objetos */
const auto1 = new Datos ("Fiat", "Cronos", 2022, 17000, 2500000)
const auto2 = new Datos ("Toyota", "Corolla", 2017, 120000, 1300000)
const auto3 = new Datos ("Peugeot","408 Feline", 2020, 80000, 2000000)
const auto4 = new Datos ("ford", "Fiesta", 2019, 60000, 2300000)

const catalogo = [auto1, auto2,auto3,auto4]

/* subir tu auto */
function publicacion(){
    let marcaIngr = document.getElementById("marca")
    let modeloIngr = document.getElementById("modelo")
    let añoIngr = document.getElementById("año")
    let kilometrajeIngr = document.getElementById("kilometraje")
    let precioIngr = document.getElementById("precio")

    let autoCreado = new Datos(catalogo.length+1, marcaIngr.value, modeloIngr.value, añoIngr.value, kilometrajeIngr.value, precioIngr.value)
    catalogo.push(autoCreado)
}

const guardado = document.getElementById("guardado")
guardado.addEventListener("click", publicacion)

//Plantillas

let divProductos = document.getElementById("productos")
divProductos.setAttribute("class", "productosEstilos")

function mostrarCatalogo(){

    catalogo.forEach((auto)=>{
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML = `<article class="card">
                                        <h3 class="tituloCard">${auto.marca}</h3>
                                        <h4 class="tituloCard2">${auto.modelo}<h4>
                                        <div class="content">
                                            <p class="autorCard">El veiculo es del año ${auto.año} y tiene ${auto.kilometraje} km </p>
                                            <p class="precioCard">Precio: $${auto.precio}</p>
                                            <a href="" target="blank">Agregar al carrito</a>
                                        </div>
                                    </article>`
        divProductos.appendChild(nuevoProducto)
    
    })
}
//Capturamos btn mostrar catalogo y pasamos eventos con function correspondiente
let mostrarCatalogoBtn = document.getElementById("verCatalogo")
mostrarCatalogoBtn.addEventListener("click", mostrarCatalogo)


/* Storage y JSON */
localStorage.setItem("car", auto1)
localStorage.setItem("misAutos", catalogo)

let autosJSON = JSON.stringify(auto1)
//console.log(autosJSON)
localStorage.setItem("carJSON", autosJSON)
let arrayJSON = JSON.stringify(catalogo)
localStorage.setItem("arrayJSON", arrayJSON)

let capturaAuto1 =localStorage.getItem("carJSON")
console.log(auto1)
console.log(capturaAuto1)

/* json PARCE */
let auto1Parseado = JSON.parse(capturaAuto1)
console.log(auto1Parseado)
let arrayParseado = JSON.parse(localStorage.getItem("arrayJSON"))
console.log(arrayParseado)