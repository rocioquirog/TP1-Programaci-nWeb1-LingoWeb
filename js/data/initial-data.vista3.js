
const unidadesIniciales = [
    { numero: 1, nombre: "Introducción y Saludos" },
    { numero: 2, nombre: "Números y Colores" },
    { numero: 3, nombre: "Comida y Bebidas" },
    { numero: 4, nombre: "Viajes y Lugares" },
    { numero: 5, nombre: "Rutina y Hobbies" }
];


const mensajeLeccionBloqueada = "Esta lección está bloqueada. Completá la lección anterior para poder iniciarla.";


const duracionMensaje = 1500;


const leccionesPorUnidad = 3;


const claveLeccionElegida = "leccionElegida";

const resultadosIniciales = [
    { curso: "Curso: Inglés desde Español", unidad: 1, leccion: 1, aciertos: 5, total: 5, xp: 20 },
    { curso: "Curso: Inglés desde Español", unidad: 1, leccion: 2, aciertos: 4, total: 5, xp: 16 },
    { curso: "Curso: Inglés desde Español", unidad: 1, leccion: 3, aciertos: 5, total: 5, xp: 20 },
    { curso: "Curso: Inglés desde Español", unidad: 2, leccion: 1, aciertos: 5, total: 5, xp: 20 },
    { curso: "Curso: Inglés desde Español", unidad: 2, leccion: 2, aciertos: 4, total: 5, xp: 16 },
    { curso: "Curso: Inglés desde Español", unidad: 2, leccion: 3, aciertos: 5, total: 5, xp: 20 },
    { curso: "Curso: Alemán desde Español", unidad: 1, leccion: 1, aciertos: 4, total: 5, xp: 16 },
    { curso: "Curso: Alemán desde Español", unidad: 1, leccion: 2, aciertos: 5, total: 5, xp: 20 },
    { curso: "Curso: Alemán desde Español", unidad: 1, leccion: 3, aciertos: 5, total: 5, xp: 20 }
];


const duracionResultado = 4000;

const progresoInicial = [
    { curso: "Curso: Inglés desde Español", completadas: 6 },
    { curso: "Curso: Alemán desde Español", completadas: 3 },
    { curso: "Curso: Chino Mandarín desde Español", completadas: 0 }
];

const paginasLeccion = [
    { curso: "Curso: Inglés desde Español", pagina: "../lecciones/leccion-ingles.html" },
    { curso: "Curso: Alemán desde Español", pagina: "../lecciones/leccion-aleman.html" },
    { curso: "Curso: Chino Mandarín desde Español", pagina: "../lecciones/leccion-chino.html" }
];


const usuarioDemostracion = "JuanPerez";

const opinionesIniciales = [
    { curso: "Curso: Inglés desde Español", usuario: "MariaG_22", calificacion: 5, comentario: "Las lecciones son cortas y fáciles de seguir." },
    { curso: "Curso: Inglés desde Español", usuario: "Carlos_Dev", calificacion: 4, comentario: "Me ayudó a perderle el miedo a hablar." },
    { curso: "Curso: Alemán desde Español", usuario: "MariaG_22", calificacion: 4, comentario: "Buen comienzo para el nivel principiante." }
];

const mensajeOpinionSinCalificacion = "Falta la calificación: elegí un número de 1 a 5.";
const mensajeOpinionSinComentario = "Falta el comentario: escribí tu opinión antes de enviar.";
const mensajeOpinionEnviada = "Listo: tu opinión se guardó.";
const mensajeSinOpiniones = "Todavía no hay opiniones para este curso. Sé la primera persona en opinar.";