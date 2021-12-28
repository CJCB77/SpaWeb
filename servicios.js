const serviciosDiv = document.getElementById("servicios-fila")



let servicios = [
    {
        nombre: 'depilacion', 
        descripcion: 'En WebSpa le ofrecemos un excelente servicio de depilacion, contamos con depilacion tradicional con cera.',
        duracion: '25 mins',
        fotografia: 'imgs/servicios/waxing.jpg',
        costo: 30,
        tipo: "normal"
        
    }
    ,
    {
        nombre: 'tratamiento facial', 
        descripcion: 'En WebSpa le ofrecemos un los mejores tratamientos faciales rejuvenecedores,exofoliantes y buenos para liberar las toxinas.',
        duracion: '30 mins',
        fotografia: 'imgs/servicios/facial.jpg',
        costo: 20,
        tipo: "normal"
        
    }
    ,
    {
        nombre: 'terapia de masajes', 
        descripcion: 'En WebSpa tenemos masajistas que se encargaran de brindar la mejor terapia de relajacion para el estres y el cansancio.',
        duracion: '40 mins',
        fotografia: 'imgs/servicios/masaje.jpg',
        costo: 40,
        tipo: "VIP"
        
    }
]

const listaLocalServicios = JSON.parse(localStorage.getItem('servicios'))

if (listaLocalServicios) {
    servicios = listaLocalServicios
} else {
    localStorage.setItem("servicios", JSON.stringify(servicios))
}

//Cargar Servicios
servicios.forEach((servicio => {
    const carta = document.createElement('div')
    carta.setAttribute('class','col-4 mt-4')
    carta.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${servicio.fotografia}" class="card-img-top" alt="...">
            <div class="card-body px-4">
                <h5 class="card-title">${servicio.nombre}</h5>
                <p class="card-text fw-light">
                  ${servicio.descripcion}
                </p>
                <img src="imgs/time.png" class="mb-1 me-1"  style="height: 25px;display: inline-block;" alt="">
                <p style="display: inline-block;"><span class="fw-bold">Tiempo:</span> ${servicio.duracion}</p>
                <div class="text-center mt-2">
                    <a href="reserva.html" class="btn btn-dark px-5">Reservar</a>
                </div>
            </div>
        </div>

    `
serviciosDiv.appendChild(carta)

}))

