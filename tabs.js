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


let mapNorte = L.map('map-norte').setView([-2.1677826347720885,-79.94102479840805], 15)
let markerNorte = L.marker([-2.1677826347720885,-79.94102479840805]).addTo(mapNorte);

let mapSur = L.map('map-sur').setView([-2.2206893662065252, -79.89299219912829], 15)
let markerSur = L.marker([-2.2206893662065252, -79.89299219912829]).addTo(mapSur);

let mapCentro = L.map('map-centro').setView([-2.1890482576417787, -79.88361163214269], 15)
let markerCentro = L.marker([-2.1890482576417787, -79.88361163214269]).addTo(mapCentro);

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