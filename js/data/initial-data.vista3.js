// acá están los datos de las unidades (número y nombre)
// "product" es el nombre que pidió el profe, en mi app cada uno es una unidad
const unidadesIniciales = [
    { numero: 1, nombre: "Introducción y Saludos" },
    { numero: 2, nombre: "Números y Colores" },
    { numero: 3, nombre: "Comida y Bebidas" },
    { numero: 4, nombre: "Viajes y Lugares" },
    { numero: 5, nombre: "Rutina y Hobbies" }
];

// TP2: Vista 3: Mapa de unidades y detalle del curso
// mensaje que se muestra cuando tocan una lección bloqueada
const mensajeLeccionBloqueada = "Esta lección está bloqueada. Completá la lección anterior para poder iniciarla.";

// TP2: Vista 3: Mapa de unidades y detalle del curso
// cuánto dura el mensaje en pantalla, en milisegundos (2000 = 2 segundos)
const duracionMensaje = 1500;

// TP2: Vista 3: Mapa de unidades y detalle del curso
// cuántas lecciones tiene cada unidad
const leccionesPorUnidad = 3;

// TP2: Vista 3: Mapa de unidades y detalle del curso
// nombre con el que se guarda en el navegador la lección que eligió el usuario
const claveLeccionElegida = "leccionElegida";

// TP2: Vista 3: Mapa de unidades y detalle del curso
// TP2: Vista 2: Dashboard de cursos (resultados de ejemplo para todas las lecciones que ya están completadas)
// resultados de las lecciones que ya están completadas (datos de demostración)
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

// TP2: Vista 3: Mapa de unidades y detalle del curso
// cuánto dura en pantalla el mensaje con el resultado, en milisegundos (4000 = 4 segundos)
const duracionResultado = 4000;

// TP2: Vista 3: Mapa de unidades y detalle del curso
// TP2: Vista 2: Dashboard de cursos (el chino pasa a llamarse "Chino Mandarín" y el avance de demostración es de 6 y 3 lecciones)
// cuántas lecciones tiene completadas cada curso al empezar (datos de demostración)
const progresoInicial = [
    { curso: "Curso: Inglés desde Español", completadas: 6 },
    { curso: "Curso: Alemán desde Español", completadas: 3 },
    { curso: "Curso: Chino Mandarín desde Español", completadas: 0 }
];

// TP2: Vista 3: Mapa de unidades y detalle del curso
// TP2: Vista 2: Dashboard de cursos (el chino pasa a llamarse "Chino Mandarín")
// página de lección de cada curso (todas las lecciones usan la misma página, que lee cuál eligió el usuario)
const paginasLeccion = [
    { curso: "Curso: Inglés desde Español", pagina: "../lecciones/leccion-ingles.html" },
    { curso: "Curso: Alemán desde Español", pagina: "../lecciones/leccion-aleman.html" },
    { curso: "Curso: Chino Mandarín desde Español", pagina: "../lecciones/leccion-chino.html" }
];

// TP2: Vista 3: Mapa de unidades y detalle del curso
// usuario de demostración (cuando haya inicio de sesión se reemplaza)
const usuarioDemostracion = "JuanPerez";

// TP2: Vista 3: Mapa de unidades y detalle del curso
// opiniones de ejemplo de otras cuentas (el chino no tiene ninguna, así se ve el mensaje de lista vacía)
const opinionesIniciales = [
    { curso: "Curso: Inglés desde Español", usuario: "MariaG_22", calificacion: 5, comentario: "Las lecciones son cortas y fáciles de seguir." },
    { curso: "Curso: Inglés desde Español", usuario: "Carlos_Dev", calificacion: 4, comentario: "Me ayudó a perderle el miedo a hablar." },
    { curso: "Curso: Alemán desde Español", usuario: "MariaG_22", calificacion: 4, comentario: "Buen comienzo para el nivel principiante." }
];

// TP2: Vista 3: Mapa de unidades y detalle del curso
// mensajes del panel de opiniones
const mensajeOpinionSinCalificacion = "Falta la calificación: elegí un número de 1 a 5.";
const mensajeOpinionSinComentario = "Falta el comentario: escribí tu opinión antes de enviar.";
const mensajeOpinionEnviada = "Listo: tu opinión se guardó.";
const mensajeSinOpiniones = "Todavía no hay opiniones para este curso. Sé la primera persona en opinar.";