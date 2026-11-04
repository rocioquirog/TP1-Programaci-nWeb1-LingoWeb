
function crearUnidad(numero, nombre) {
    return {
        numero: numero,
        nombre: nombre
    };
}

function crearLeccionElegida(curso, unidad, leccion) {
    return {
        curso: curso,
        unidad: unidad,
        leccion: leccion
    };
}

function crearOpinion(curso, usuario, calificacion, comentario) {
    return {
        curso: curso,
        usuario: usuario,
        calificacion: calificacion,
        comentario: comentario
    };
}