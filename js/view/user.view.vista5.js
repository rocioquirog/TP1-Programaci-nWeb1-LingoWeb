
function dibujarPerfil(usuario) {
    const nombre = document.querySelector(".datos-principales h2");
    const correo = document.querySelector(".correo-usuario");
    const descripcion = document.querySelector(".descripcion-usuario");
    const avatar = document.querySelector(".avatar");

    const nombreCompleto = document.getElementById("perfil-nombre");
    const nombreUsuario = document.getElementById("perfil-usuario");
    const email = document.getElementById("perfil-email");

    if (nombre !== null) {
        nombre.textContent = usuario.nombre;
    }

    if (correo !== null) {
        correo.textContent = "@" + usuario.usuario;
    }

    if (descripcion !== null) {
        descripcion.textContent = "Miembro de LingoWeb";
    }

    if (avatar !== null) {
        avatar.textContent = usuario.nombre
            .split(" ")
            .map(function (palabra) {
                return palabra.charAt(0);
            })
            .slice(0, 2)
            .join("")
            .toUpperCase();
    }

    if (nombreCompleto !== null) {
        nombreCompleto.textContent = usuario.nombre;
    }

    if (nombreUsuario !== null) {
        nombreUsuario.textContent = "@" + usuario.usuario;
    }

    if (email !== null) {
        email.textContent = usuario.email;
    }
}
 
function dibujarIdioma(idioma) {
    const selector = document.getElementById("idioma");
 
    if (selector !== null) {
        selector.value = idioma;
    }
}
 

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