// guarda y lee en el navegador en qué unidad quedó el usuario
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
// TP2: Vista 3: Mapa de unidades y detalle del curso
// guarda en el navegador cuál lección eligió el usuario
function guardarLeccionElegida(leccion) {
    localStorage.setItem(claveLeccionElegida, JSON.stringify(leccion));
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// lee la lección elegida (si no hay ninguna devuelve null)
function leerLeccionElegida() {
    const guardada = localStorage.getItem(claveLeccionElegida);
    if (guardada === null) {
        return null;
    }
    return JSON.parse(guardada);
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// guarda en el navegador cuántas lecciones completó el usuario en un curso
function guardarProgreso(curso, completadas) {
    localStorage.setItem("progreso-" + curso, JSON.stringify(completadas));
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// lee cuántas lecciones completó en un curso (si no hay nada guardado devuelve null)
function leerProgreso(curso) {
    const guardado = localStorage.getItem("progreso-" + curso);
    if (guardado === null) {
        return null;
    }
    return JSON.parse(guardado);
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// guarda en el navegador la lista de opiniones de un curso
function guardarOpiniones(curso, opiniones) {
    localStorage.setItem("opiniones-" + curso, JSON.stringify(opiniones));
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// lee la lista de opiniones de un curso (si no hay nada guardado devuelve null)
function leerOpiniones(curso) {
    const guardado = localStorage.getItem("opiniones-" + curso);
    if (guardado === null) {
        return null;
    }
    return JSON.parse(guardado);
}