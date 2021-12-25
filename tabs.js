const btnNorte = document.getElementById("btn-norte")
const btnSur = document.getElementById("btn-sur")
const btnCentro = document.getElementById("btn-centro")
const sedeNorte = document.getElementById("sede-norte")
const sedeSur = document.getElementById("sede-sur")
const sedeCentro = document.getElementById("sede-centro")


btnNorte.addEventListener('click', () => {
    sedeNorte.style.display = "block"
    sedeSur.style.display = "none"
    sedeCentro.style.display = "none"

    btnNorte.classList.add("sede-active")
    btnSur.classList.remove("sede-active")
    btnCentro.classList.remove("sede-active")

    setTimeout(() => {
        mapNorte.invalidateSize()
    }, 100)

})

btnCentro.addEventListener('click', () => {
    sedeCentro.style.display = "block"
    sedeSur.style.display = "none"
    sedeNorte.style.display = "none"

    btnCentro.classList.add("sede-active")
    btnSur.classList.remove("sede-active")
    btnNorte.classList.remove("sede-active")

    setTimeout(() => {
        mapCentro.invalidateSize()
    }, 100)

})


btnSur.addEventListener('click', () => {
    sedeNorte.style.display = "none"
    sedeCentro.style.display = "none"
    sedeSur.style.display = "block"

    btnSur.classList.add("sede-active")
    btnNorte.classList.remove("sede-active")
    btnCentro.classList.remove("sede-active")

    
    setTimeout(() => {
        mapSur.invalidateSize()
    }, 100)

})


let mapNorte = L.map('map-norte').setView([-2.170013, -79.899671], 18)
let markerNorte = L.marker([-2.170013, -79.899671]).addTo(mapNorte);

let mapSur = L.map('map-sur').setView([-2.222803, -79.894746], 18)
let markerSur = L.marker([-2.222803, -79.894746]).addTo(mapSur);

let mapCentro = L.map('map-centro').setView([-2.191279, -79.893536], 18)
let markerCentro = L.marker([-2.191279, -79.893536]).addTo(mapCentro);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2pjYjc3NyIsImEiOiJja3htZG91M28zbmZnMnVxOW42cWdmZjFzIn0.5eWGpvp79hGFa3QK6WdpXA', {
    maxZoom: 25,
    attribution: 'Datos del mapa de &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imágenes © <a href="https://www.mapbox.com/">Mapbox</a>', 
    id: 'mapbox/streets-v11'
}).addTo(mapNorte);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2pjYjc3NyIsImEiOiJja3htZG91M28zbmZnMnVxOW42cWdmZjFzIn0.5eWGpvp79hGFa3QK6WdpXA', {
    maxZoom: 25,
    attribution: 'Datos del mapa de &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imágenes © <a href="https://www.mapbox.com/">Mapbox</a>', 
    id: 'mapbox/streets-v11'
}).addTo(mapSur);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2pjYjc3NyIsImEiOiJja3htZG91M28zbmZnMnVxOW42cWdmZjFzIn0.5eWGpvp79hGFa3QK6WdpXA', {
    maxZoom: 25,
    attribution: 'Datos del mapa de &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imágenes © <a href="https://www.mapbox.com/">Mapbox</a>', 
    id: 'mapbox/streets-v11'
}).addTo(mapCentro);