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
const serviciosSeccion = document.getElementById("seleccion-servicio")
const serviciosDiv = document.getElementById("servicios-control")
const serviciosSelect = document.getElementById("servicio")
const costoServicio = document.getElementById("costo")
const siguienteBtn = document.getElementById("siguienteBtn")
//Sucursal
const datosReserva = document.getElementById("seleccion-datos")
const sucursalesSelect = document.getElementById("sucursal-lista")
//Fecha
const fecha = document.getElementById("fecha")
const calendario = document.getElementById("calendario")
//Horarios
const horariosDiv = document.getElementById("horario-control")
const horariosSelect = document.getElementById("horarios")
const horasDisponibles = document.getElementById("hora")
//Boton de reserva
const btnReserva = document.getElementById("reservarBtn")

class Reserva {
    constructor(usuario, sucursal, servicio, fecha, hora){
        this.usuario = usuario
        this.sucursal = sucursal
        this.servicio = servicio
        this.fecha = fecha
        this.hora = hora
        
    }
}

let listaReservas = []
const listaLocalReservas = JSON.parse(localStorage.getItem('reservas'))

if (listaLocalReservas) {
    listaReservas = listaLocalReservas
}

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
    {mañana: ["9h00", "10h00", "11h00", "12h00", "13h00"]},
    {tarde: ["14h00", "15h00", "16h00", "17h00", "18h00"]},
    {noche: ["18h00", "19h00", "20h00", "21h00"]},
]


const sucursales = [
    {nombre: "sede-sur", direccion: "barrio centenario", puntoGeografico: "-2.170013, -79.899671",horario:JSON.parse(JSON.stringify(horarios)) },
    {nombre: "sede-centro", direccion: "boyaca y junin", puntoGeografico: "-2.170013, -79.899671",horario:JSON.parse(JSON.stringify(horarios)) },
    {nombre: "sede-norte", direccion: "Avenida 46 NO 203", puntoGeografico: "-2.170013, -79.899671",horario:JSON.parse(JSON.stringify(horarios)) },

]

//Cargar sucursales
sucursales.forEach(e => {
    sucursalesSelect.innerHTML += ` <option value='${e.nombre}'>${e.nombre.toUpperCase()}</option>`
})

//Cargar los Servicios disponibles
servicios.forEach(e => {
    serviciosSelect.innerHTML += ` <option value='${e.nombre}'>${e.nombre.toUpperCase()}</option>`
})

//Validar si el usuario esta registrado
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

confirmarBtn.addEventListener('click', () => {
    datosUsuario.style.display = "none"
    serviciosSeccion.style.display = "block"
})

siguienteBtn.addEventListener('click', () => {
    serviciosSeccion.style.display = "none"
    datosReserva.style.display = "block"
    
})

//Seccion de reserva de servicios
let costo
let servicioReservado
let sucursal
let date
let turno

function cargarCosto(servicio){
    servicios.forEach( (e) => {
        if(e.nombre === servicio.value){
            servicioReservado = e
            costo = e['costo']
        }
    })
    
    costoServicio.innerText = `$${costo}`
}


function cargarCampos() {
    calendario.style.display = "block"
}


function cargarHorarios() {
    date = new Date(fecha.value)
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
        sucursal = buscarSede()
    
        //Limpiar horarios
        horariosSelect.innerHTML = '<option selected>Seleccione el turno</option>'
        sucursal['horario'].forEach(e => {
            if(Object.keys(e)[0] != 'noche'){
                horariosSelect.innerHTML += ` <option value='${Object.keys(e)[0]}'>${Object.keys(e)[0].toUpperCase()}</option>`
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
        sucursal = buscarSede()
    
        //Limpiar horarios
        horariosSelect.innerHTML = '<option selected>Seleccione el turno</option>'
        sucursal['horario'].forEach(e => {
            horariosSelect.innerHTML += ` <option value=${Object.keys(e)[0]}>${Object.keys(e)[0].toUpperCase()}</option>`
        })
    
        horariosDiv.style.display = "block"
    }

}

function cargarDisponibles(horario) {
    let horasOcupadas = []
    sucursal['horario'].forEach( (e) => {
        if(Object.keys(e)[0] == horario.value){
            turno = e[horario.value]
        }
    })
    horasDisponibles.innerHTML = ""
    listaReservas.forEach( reserva => {
        if(reserva.fecha == fecha.value){
            horasOcupadas.push(reserva.hora)
        }
    })
    console.log(horasOcupadas)
    turno.forEach((hora) => {
        if(!(horasOcupadas.includes(hora))){
            horasDisponibles.innerHTML += `<option value='${hora}'>${hora}</option>`
        }
    })

   
}

btnReserva.addEventListener('click', () => {
    reserva = new Reserva(usuario, sucursal, servicioReservado ,fecha.value, horasDisponibles.value)
    listaReservas.push(reserva)
    localStorage.setItem("reservas", JSON.stringify(listaReservas))
   
})
