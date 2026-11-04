
function obtenerIdentificadorUsuario() {
    const usuarioActivo = localStorage.getItem("usuarioActivo");

    if (usuarioActivo !== null) {
        return usuarioActivo;
    }

    return usuarioInicial.usuario;
}

function obtenerClaveIdioma() {
    return "idioma-" + obtenerIdentificadorUsuario();
}

function guardarIdioma(idioma) {
    localStorage.setItem(obtenerClaveIdioma(), idioma);
}

function obtenerIdioma() {
    const idiomaGuardado = localStorage.getItem(obtenerClaveIdioma());

    if (idiomaGuardado !== null) {
        return idiomaGuardado;
    }

    return idiomaInicial;
}

function validarCambioContrasena(actual, nueva, confirmar) {
    if (actual === "" || nueva === "" || confirmar === "") {
        return "Completá todos los campos.";
    }

    const usuarioActivo = obtenerDatosUsuarioActivo();

    if (!usuarioActivo || usuarioActivo.contrasena !== actual) {
        return "La contraseña actual es incorrecta.";
    }

    if (!contrasenaValida(nueva)) {
        return "La nueva contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.";
    }

    if (nueva !== confirmar) {
        return "La nueva contraseña y su confirmación no coinciden.";
    }

    return "";
}
