// arma una unidad con su número y su nombre
function crearUnidad(numero, nombre) {
    return {
        numero: numero,
        nombre: nombre
    };
}
// TP2: Vista 3: Mapa de unidades y detalle del curso
// arma la lección elegida: de qué curso, de qué unidad y cuál número
function crearLeccionElegida(curso, unidad, leccion) {
    return {
        curso: curso,
        unidad: unidad,
        leccion: leccion
    };
}
// TP2: Vista 3: Mapa de unidades y detalle del curso
// arma una opinión: de qué curso es, quién la publicó, la calificación y el comentario
function crearOpinion(curso, usuario, calificacion, comentario) {
    return {
        curso: curso,
        usuario: usuario,
        calificacion: calificacion,
        comentario: comentario
    };
}