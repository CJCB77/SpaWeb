//Panel de ingreso
const ingreso = document.getElementById("ingreso")
const cedulaLogin = document.getElementById("cedula-login")
const message = document.getElementById("message-login")
const loginBtn = document.getElementById("loginBtn")

//Panel de validacion de usuario
const datosUsuario = document.getElementById("datos-usuario")
const cedula = document.getElementById("cedula")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const direccion = document.getElementById("direccion")
const celular = document.getElementById("celular")
const correo = document.getElementById("correo")
const regresarBtn = document.getElementById("regresarBtn")
const confirmarBtn = document.getElementById("confirmarBtn")
const messageReserva = document.getElementById("message-reserva")

//Servicios
const serviciosDiv = document.getElementById("servicios-control")
const serviciosSelect = document.getElementById("servicio")
//Sucursal
const sucursalesSelect = document.getElementById("sucursal-lista")
//Fecha
const fecha = document.getElementById("fecha")
const calendario = document.getElementById("calendario")
//Horarios
const horariosDiv = document.getElementById("horario-control")
const horariosSelect = document.getElementById("horarios")
const horasDisponibles = document.getElementById("hora")

const servicios = [
    {
        nombre: 'depilacion', 
        descripcion: 'En WebSpa le ofrecemos un excelente servicio de depilacion, contamos con depilacion tradicional con cera.',
        duracion: '25 mins',
        fotografia: 'imgs/servicios/waxing.jpg/',
        costo: 30,
        tipo: "normal"
        
    }
    ,
    {
        nombre: 'tratamiento facial', 
        descripcion: 'En WebSpa le ofrecemos un los mejores tratamientos rejuvenecedores y exofoliantes.',
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

//Sucursales
const dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']

const horarios = [
    {mañana: {"9h00":true, "10h00":true, "11h00":true, "12h00":true, "13h00":true}},
    {tarde: {"14h00":true, "15h00":true, "16h00":true, "17h00":true, "18h00":true}},
    {noche: {"14h00":true, "15h00":true, "16h00":true, "17h00":true, "18h00":true}},
]


const sucursales = [
    {nombre: "sede-sur", direccion: "barrio centenario", puntoGeografico: "-2.170013, -79.899671",horario:JSON.parse(JSON.stringify(horarios)) },
    {nombre: "sede-centro", direccion: "boyaca y junin", puntoGeografico: "-2.170013, -79.899671",horario:JSON.parse(JSON.stringify(horarios)) },
    {nombre: "sede-norte", direccion: "Avenida 46 NO 203", puntoGeografico: "-2.170013, -79.899671",horario:JSON.parse(JSON.stringify(horarios)) },

]

//Cargar sucursales
sucursales.forEach(e => {
    sucursalesSelect.innerHTML += ` <option value=${e.nombre}>${e.nombre.toUpperCase()}</option>`
})

//Cargar los Servicios disponibles
servicios.forEach(e => {
    serviciosSelect.innerHTML += ` <option value=${e.nombre}>${e.nombre.toUpperCase()}</option>`
})





const usuarios_registrados = JSON.parse(localStorage.getItem("usuarios"))
let usuario


loginBtn.addEventListener('click', () => {
    existe_usuario = false

    usuarios_registrados.forEach( (e) => {
        if (e.cedula == cedulaLogin.value ){
            existe_usuario = true
            usuario = e
        } 
    });

    if (existe_usuario) {
        message.innerText = "Datos Correctos"
        ingreso.style.display = "none"
        datosUsuario.style.display = "block"
        
        //Cargar los datos
        cedula.value = usuario.cedula 
        nombre.value = usuario.nombre 
        apellido.value = usuario.apellido 
        direccion.value = usuario.direccion 
        celular.value = usuario.celular 
        correo.value = usuario.correo 

    } else {
        message.innerText = "Datos incorrectos o no esta registrado"
    }
    
} )

regresarBtn.addEventListener('click', () => {
    datosUsuario.style.display = "none"
    ingreso.style.display = "block"
})

function cargarCampos() {
    serviciosDiv.style.display = "block"
    calendario.style.display = "block"
}

function cargarHorarios() {
    let date = new Date(fecha.value)
    let dia = dias[date.getDay()] 

    if(dia == "domingo"){
        messageReserva.innerText = "No hay atencion los domingos, seleccione otro dia"
        horariosDiv.style.display = "none"


        
    } else if(dia == "sabado") {
        messageReserva.innerText = ""
        const buscarSede = () => {
            let sede
            sucursales.forEach((e) => {
                if ( sucursalesSelect.value === e.nombre){
                    sede = e
                    } 
                })
                return sede
            }
        let seleccion = buscarSede()
    
        //Limpiar horarios
        horariosSelect.innerHTML = ''
        seleccion['horario'].forEach(e => {
            if(Object.keys(e)[0] != 'noche'){
                horariosSelect.innerHTML += ` <option value=${Object.keys(e)[0]}>${Object.keys(e)[0].toUpperCase()}</option>`
            }
        })
    
        horariosDiv.style.display = "block"

    } else{
        messageReserva.innerText = ""
        const buscarSede = () => {
            let sede
            sucursales.forEach((e) => {
                if ( sucursalesSelect.value === e.nombre){
                    sede = e
                    } 
                })
                return sede
            }
        let seleccion = buscarSede()
    
        //Limpiar horarios
        horariosSelect.innerHTML = ''
        seleccion['horario'].forEach(e => {
            horariosSelect.innerHTML += ` <option value=${Object.keys(e)[0]}>${Object.keys(e)[0].toUpperCase()}</option>`
        })
    
        horariosDiv.style.display = "block"
    }

}

function cargarDisponibles(horario) {
    
}

confirmarBtn.addEventListener('click', () => {

})