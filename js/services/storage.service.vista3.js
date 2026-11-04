
function guardarUnidadActual(clave, numero) {
    localStorage.setItem(clave, JSON.stringify(numero));
}

function leerUnidadActual(clave) {
    const guardado = localStorage.getItem(clave);
    if (guardado === null) {
        return null;
    }
    return JSON.parse(guardado);
}
function guardarLeccionElegida(leccion) {
    localStorage.setItem(claveLeccionElegida, JSON.stringify(leccion));
}

function leerLeccionElegida() {
    const guardada = localStorage.getItem(claveLeccionElegida);
    if (guardada === null) {
        return null;
    }
    return JSON.parse(guardada);
}

function guardarProgreso(curso, completadas) {
    localStorage.setItem("progreso-" + obtenerUsuarioActivo() + "-" + curso, JSON.stringify(completadas));
}

function leerProgreso(curso) {
    const guardado = localStorage.getItem("progreso-" + obtenerUsuarioActivo() + "-" + curso);
    if (guardado === null) {
        return null;
    }
    return JSON.parse(guardado);
}

function guardarOpiniones(curso, opiniones) {
    localStorage.setItem("opiniones-" + curso, JSON.stringify(opiniones));
}

function leerOpiniones(curso) {
    const guardado = localStorage.getItem("opiniones-" + curso);
    if (guardado === null) {
        return null;
    }
    return JSON.parse(guardado);
}

function guardarResultado(curso, unidad, leccion, resultado) {
    localStorage.setItem("resultado-" + obtenerUsuarioActivo() + "-" + curso + "-" + unidad + "-" + leccion, JSON.stringify(resultado));
}

function leerResultado(curso, unidad, leccion) {
    const guardado = localStorage.getItem("resultado-" + obtenerUsuarioActivo() + "-" + curso + "-" + unidad + "-" + leccion);
    if (guardado === null) {
        return null;
    }
    return JSON.parse(guardado);
}

function leerUsuarioActivo() {
    return localStorage.getItem("usuarioActivo");
}