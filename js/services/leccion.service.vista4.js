// TP2: Vista 4: Lección
let vidasActuales = 3;
let indiceEjercicioActual = 0;
let leccionActualData = null;
let respuestaUsuario = [];

function iniciarLogicaLeccion(datosElegidos) {
    // Unimos los 3 arrays de idiomas en uno solo para buscar la lección
    const todosLosEjercicios = [...ejerciciosIngles, ...ejerciciosAleman, ...ejerciciosChino];

    leccionActualData = todosLosEjercicios.find(l => 
        l.curso === datosElegidos.curso && 
        l.unidad === datosElegidos.unidad && 
        l.leccion === datosElegidos.leccion
    );
    vidasActuales = 3;
    indiceEjercicioActual = 0;
    respuestaUsuario = [];
    return leccionActualData;
}

function obtenerEjercicioActual() {
    return leccionActualData.ejercicios[indiceEjercicioActual];
}

function agregarPalabra(palabra) {
    respuestaUsuario.push(palabra);
}

function quitarPalabra(palabra) {
    const index = respuestaUsuario.indexOf(palabra);
    if (index > -1) {
        respuestaUsuario.splice(index, 1);
    }
}

function comprobarRespuesta() {
    const ejercicio = obtenerEjercicioActual();
    // Convierte ambos arrays a texto para saber si están en el mismo orden
    const esCorrecta = respuestaUsuario.join(" ") === ejercicio.respuesta.join(" ");
    
    if (!esCorrecta) {
        vidasActuales--;
    }
    return esCorrecta;
}

function avanzarEjercicio() {
    indiceEjercicioActual++;
    respuestaUsuario = []; // Vacía la respuesta para el siguiente nivel
    return indiceEjercicioActual < leccionActualData.ejercicios.length; // True si quedan más ejercicios
}

function calcularResultadosLeccion() {
    const total = leccionActualData.ejercicios.length;
    return {
        aciertos: total, // Si terminó la lección sin perder, acertó todos
        total: total,
        xp: total * 10 // Da 10 puntos de experiencia por cada ejercicio
    };
}