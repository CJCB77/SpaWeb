//Datos del usuario
const cedula = document.getElementById("cedula")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const direccion = document.getElementById("direccion")
const celular = document.getElementById("celular")
const correo = document.getElementById("correo")
const mensajeError = document.getElementById("error-message")
//Boton de registro
const registroBtn = document.getElementById("registroBtn")

//Clase Usuario
class Usuario {
    constructor(cedula,nombre,apellido,direccion,celular,correo){
        this.cedula = cedula
        this.nombre = nombre
        this.apellido = apellido
        this.direccion = direccion
        this.celular = celular
        this.correo = correo
    }
}
//Lista donde guardaremos los usuarios
let listaUsuarios = []
const listaUsuariosLocal = JSON.parse(localStorage.getItem('usuarios'))

if (listaUsuariosLocal) {
    listaUsuarios = listaUsuariosLocal
}



registroBtn.addEventListener('click', () => {
    if(
        (cedula.value === '' || cedula.value == null) ||
        (nombre.value === '' || nombre.value == null) ||
        (apellido.value === '' || apellido.value == null) ||
        (direccion.value === '' || direccion.value == null) ||
        (celular.value === '' || celular.value == null) ||
        (correo.value === '' |correo.value == null) 
       ) {
           mensajeError.innerText = "Por favor llene todos los campos"
    } 
    else{
        let usuario = new Usuario(cedula.value,nombre.value, apellido.value, direccion.value, 
                                    celular.value, correo.value)
        listaUsuarios.push(usuario)
        localStorage.setItem('usuarios', JSON.stringify(listaUsuarios))
        mensajeError.style.color = "#000"
        mensajeError.innerText = "Sus datos han sido registrados con exito!"
        
        

    }

})

for (let i = 0; i < listaUsuarios.length; i++) {
    console.log(listaUsuarios[i].apellido)
    
}