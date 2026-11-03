// acá está la lógica: en qué unidad estamos y cómo pasar a la siguiente o a la anterior
// usa lo de initial-data.js, product.model.js y storage.service.js (se cargan antes en el HTML)

// armo la lista de unidades con los datos de initial-data.js
const unidades = [];
unidadesIniciales.forEach((dato) => {
    unidades.push(crearUnidad(dato.numero, dato.nombre));
});

let unidadActual = 1;

function obtenerTotalUnidades() {
    return unidades.length;
}

function obtenerUnidadActual() {
    return unidadActual;
}

// si había una unidad guardada, arranca en esa
function cargarUnidadGuardada(clave) {
    const guardada = leerUnidadActual(clave);
    if (guardada !== null && guardada >= 1 && guardada <= unidades.length) {
        unidadActual = guardada;
    }
}

function irASiguiente(clave) {
    if (unidadActual < unidades.length) {
        unidadActual++;
        guardarUnidadActual(clave, unidadActual);
    }
}

function irAAnterior(clave) {
    if (unidadActual > 1) {
        unidadActual--;
        guardarUnidadActual(clave, unidadActual);
    }
}
// TP2: Vista 3: Mapa de unidades y detalle del curso
// arma la lección elegida y la guarda
function elegirLeccion(curso, unidad, leccion) {
    guardarLeccionElegida(crearLeccionElegida(curso, unidad, leccion));
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// busca el resultado de una lección (si no hay ninguno devuelve undefined)
function obtenerResultado(curso, unidad, leccion) {
    return resultadosIniciales.find((resultado) => {
        return resultado.curso === curso && resultado.unidad === unidad && resultado.leccion === leccion;
    });
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// cuántas lecciones completó el usuario en un curso (si no hay nada guardado usa el dato inicial)
function obtenerLeccionesCompletadas(curso) {
    const guardado = leerProgreso(curso);
    if (guardado !== null) {
        return guardado;
    }
    const inicial = progresoInicial.find((dato) => dato.curso === curso);
    if (inicial === undefined) {
        return 0;
    }
    return inicial.completadas;
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// número de una lección contando todas las del curso (unidad 1 lección 1 es la 1, unidad 2 lección 1 es la 4)
function numeroDeLeccion(unidad, leccion) {
    return (unidad - 1) * leccionesPorUnidad + leccion;
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// devuelve el estado de una lección: "completada", "en curso" o "bloqueada"
function obtenerEstadoLeccion(curso, unidad, leccion) {
    const completadas = obtenerLeccionesCompletadas(curso);
    const numero = numeroDeLeccion(unidad, leccion);
    if (numero <= completadas) {
        return "completada";
    }
    if (numero === completadas + 1) {
        return "en curso";
    }
    return "bloqueada";
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// marca una lección como completada; solo avanza si era la que estaba en curso
function completarLeccion(curso, unidad, leccion) {
    const completadas = obtenerLeccionesCompletadas(curso);
    if (numeroDeLeccion(unidad, leccion) === completadas + 1) {
        guardarProgreso(curso, completadas + 1);
    }
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// página de lección que corresponde a un curso
function obtenerPaginaLeccion(curso) {
    const dato = paginasLeccion.find((item) => item.curso === curso);
    if (dato === undefined) {
        return "";
    }
    return dato.pagina;
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// quién es la persona que está usando la app (por ahora es de demostración)
function obtenerUsuarioActivo() {
    return usuarioDemostracion;
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// opiniones de un curso: las guardadas y, si no hay, las de ejemplo
function obtenerOpiniones(curso) {
    const guardadas = leerOpiniones(curso);
    if (guardadas !== null) {
        return guardadas;
    }
    return opinionesIniciales.filter((opinion) => opinion.curso === curso);
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// revisa la opinión: devuelve el mensaje de qué falta, o "" si está todo bien
function validarOpinion(calificacion, comentario) {
    if (calificacion === "") {
        return mensajeOpinionSinCalificacion;
    }
    if (comentario.trim() === "") {
        return mensajeOpinionSinComentario;
    }
    return "";
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// valida y guarda una opinión nueva; devuelve el mensaje de error, o "" si se guardó
function enviarOpinion(curso, calificacion, comentario) {
    const error = validarOpinion(calificacion, comentario);
    if (error !== "") {
        return error;
    }
    const opiniones = obtenerOpiniones(curso);
    opiniones.push(crearOpinion(curso, obtenerUsuarioActivo(), parseInt(calificacion), comentario.trim()));
    guardarOpiniones(curso, opiniones);
    return "";
}