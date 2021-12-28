const nombre = document.getElementById("nombre")
const descripcion = document.getElementById("descripcion")
const duracion = document.getElementById("duracion")
const fotografia = document.getElementById("fotografia")
const costo = document.getElementById("costo")
const tipo = document.getElementById("tipo")
const agregarBtn = document.getElementById("agregarBtn")

class Servicio {
    constructor(nombre, descripcion, duracion, fotografia, costo, tipo){
        this.nombre = nombre
        this.descripcion = descripcion
        this.duracion = duracion
        this.fotografia = fotografia
        this.costo = costo
        this.tipo = tipo
    }
}

agregarBtn.addEventListener('click', () => {
    const servicio = new Servicio(nombre.value, descripcion.value, duracion.value, fotografia.value, costo.value, tipo.value)
    listaServicios = JSON.parse(localStorage.getItem("servicios"))
    listaServicios.push(servicio)
    localStorage.setItem("servicios", JSON.stringify(listaServicios))
    window.location = "index.html"
})
