// TP2: Vista 5: Perfil de usuario y ajustes
// obtiene el identificador de la cuenta activa
function obtenerIdentificadorUsuario() {
    const usuarioActivo = localStorage.getItem("usuarioActivo");
 
    if (usuarioActivo !== null) {
        return usuarioActivo;
    }
 
    return usuarioInicial.usuario;
}
 
// TP2: Vista 5: Perfil de usuario y ajustes
// arma la clave para guardar las preferencias de cada cuenta por separado
function obtenerClaveIdioma() {
    return "idioma-" + obtenerIdentificadorUsuario();
}
 
// TP2: Vista 5: Perfil de usuario y ajustes
// guarda el idioma elegido por la persona
function guardarIdioma(idioma) {
    localStorage.setItem(obtenerClaveIdioma(), idioma);
}
 
// TP2: Vista 5: Perfil de usuario y ajustes
// recupera el idioma guardado o usa el idioma inicial
function obtenerIdioma() {
    const idiomaGuardado = localStorage.getItem(obtenerClaveIdioma());
 
    if (idiomaGuardado !== null) {
        return idiomaGuardado;
    }
 
    return idiomaInicial;
}
 
// TP2: Vista 5: Perfil de usuario y ajustes
// comprueba que los campos de contraseña estén completos y coincidan
function validarCambioContrasena(actual, nueva, confirmar) {
    if (actual === "" || nueva === "" || confirmar === "") {
        return "Completá todos los campos.";
    }
 
    if (nueva.length < 6) {
        return "La nueva contraseña debe tener al menos 6 caracteres.";
    }
 
    if (nueva !== confirmar) {
        return "La nueva contraseña y su confirmación no coinciden.";
    }
 
    return "";
}
