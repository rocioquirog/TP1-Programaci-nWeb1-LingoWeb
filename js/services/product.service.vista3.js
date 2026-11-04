
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

function elegirLeccion(curso, unidad, leccion) {
    guardarLeccionElegida(crearLeccionElegida(curso, unidad, leccion));
}


function obtenerResultado(curso, unidad, leccion) {
    const guardado = leerResultado(curso, unidad, leccion);
    if (guardado !== null) {
        return guardado;
    }
    if (obtenerUsuarioActivo() !== usuarioDemostracion) {
        return undefined;
    }
    return resultadosIniciales.find((resultado) => {
        return resultado.curso === curso && resultado.unidad === unidad && resultado.leccion === leccion;
    });
}

function obtenerLeccionesCompletadas(curso) {
    const guardado = leerProgreso(curso);
    if (guardado !== null) {
        return guardado;
    }
    if (obtenerUsuarioActivo() !== usuarioDemostracion) {
        return 0;
    }
    const inicial = progresoInicial.find((dato) => dato.curso === curso);
    if (inicial === undefined) {
        return 0;
    }
    return inicial.completadas;
}

function numeroDeLeccion(unidad, leccion) {
    return (unidad - 1) * leccionesPorUnidad + leccion;
}

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

function completarLeccion(curso, unidad, leccion) {
    const completadas = obtenerLeccionesCompletadas(curso);
    if (numeroDeLeccion(unidad, leccion) === completadas + 1) {
        guardarProgreso(curso, completadas + 1);
    }
}

function obtenerPaginaLeccion(curso) {
    const dato = paginasLeccion.find((item) => item.curso === curso);
    if (dato === undefined) {
        return "";
    }
    return dato.pagina;
}

function obtenerUsuarioActivo() {
    return usuarioDemostracion;
}

function obtenerOpiniones(curso) {
    const guardadas = leerOpiniones(curso);
    if (guardadas !== null) {
        return guardadas;
    }
    return opinionesIniciales.filter((opinion) => opinion.curso === curso);
}

function validarOpinion(calificacion, comentario) {
    if (calificacion === "") {
        return mensajeOpinionSinCalificacion;
    }
    if (comentario.trim() === "") {
        return mensajeOpinionSinComentario;
    }
    return "";
}

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

function finalizarLeccion(curso, unidad, leccion, aciertos, total, xp) {
    guardarResultado(curso, unidad, leccion, { aciertos: aciertos, total: total, xp: xp });
    completarLeccion(curso, unidad, leccion);
}

function obtenerUsuarioActivo() {
    const activo = leerUsuarioActivo();
    if (activo === null) {
        return usuarioDemostracion;
    }
    return activo;
}