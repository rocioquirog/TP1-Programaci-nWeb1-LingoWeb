let vidasActuales = 3;
let indiceEjercicioActual = 0;
let leccionActualData = null;
let respuestaUsuario = [];

function iniciarLogicaLeccion(datosElegidos) {
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
    const esCorrecta = respuestaUsuario.join(" ") === ejercicio.respuesta.join(" ");
    
    if (!esCorrecta) {
        vidasActuales--;
    }
    return esCorrecta;
}

function avanzarEjercicio() {
    indiceEjercicioActual++;
    respuestaUsuario = [];
    return indiceEjercicioActual < leccionActualData.ejercicios.length; 
}

function calcularResultadosLeccion() {
    const total = leccionActualData.ejercicios.length;
    
    const vidasPerdidas = 3 - vidasActuales;
    
    const xpGanada = 20 - (vidasPerdidas * 4);
    
    return {
        aciertos: total, 
        total: total,
        xp: xpGanada
    };
}