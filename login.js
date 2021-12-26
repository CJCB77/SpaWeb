const ingreso = document.getElementById("ingreso")
const cedulaLogin = document.getElementById("cedula-login")
const message = document.getElementById("message-login")
const loginBtn = document.getElementById("loginBtn")


const datosUsuario = document.getElementById("datos-usuario")
const cedula = document.getElementById("cedula")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const direccion = document.getElementById("direccion")
const celular = document.getElementById("celular")
const correo = document.getElementById("correo")
const regresarBtn = document.getElementById("regresarBtn")
const confirmarBtn = document.getElementById("confirmarBtn")



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