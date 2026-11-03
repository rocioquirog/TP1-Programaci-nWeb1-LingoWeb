// TP2: Vista 5: Perfil de usuario y ajustes
// muestra los datos principales de la persona
function dibujarPerfil(usuario) {
    const nombre = document.querySelector(".datos-principales h2");
    const correo = document.querySelector(".correo-usuario");
    const descripcion = document.querySelector(".descripcion-usuario");
 
    if (nombre !== null) {
        nombre.textContent = usuario.nombre;
    }
 
    if (correo !== null) {
        correo.textContent = usuario.usuario;
    }
 
    if (descripcion !== null) {
        descripcion.textContent = usuario.descripcion;
    }
}
 
// TP2: Vista 5: Perfil de usuario y ajustes
// muestra el idioma que tiene guardado la cuenta
function dibujarIdioma(idioma) {
    const selector = document.getElementById("idioma");
 
    if (selector !== null) {
        selector.value = idioma;
    }
}
 
// TP2: Vista 5: Perfil de usuario y ajustes
// conecta el formulario para guardar el idioma
function conectarFormularioIdioma() {
    const formulario = document.getElementById("form-idioma");
    const selector = document.getElementById("idioma");
 
    if (formulario === null || selector === null) {
        return;
    }
 
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
 
        guardarIdioma(selector.value);
 
        alert("El idioma se guardó correctamente.");
    });
}
 
// TP2: Vista 5: Perfil de usuario y ajustes
// conecta el formulario para validar el cambio de contraseña
function conectarFormularioContrasena() {
    const formulario = document.getElementById("form-contrasena");
 
    if (formulario === null) {
        return;
    }
 
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
 
        const actual = document.getElementById("contrasena-actual").value;
        const nueva = document.getElementById("nueva-contrasena").value;
        const confirmar = document.getElementById("confirmar-contrasena").value;
 
        const mensaje = validarCambioContrasena(actual, nueva, confirmar);
 
        if (mensaje !== "") {
            alert(mensaje);
            return;
        }
 
        alert("Los datos son correctos. En esta demostración no se modifica una contraseña real.");
 
        formulario.reset();
    });
}