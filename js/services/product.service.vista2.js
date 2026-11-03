// TP2: Vista 2: Dashboard de cursos
// lógica del dashboard: cuántas unidades completó la persona y qué porcentaje de avance le toca
// usa lo del mapa (product.service.vista3.js), que se carga antes en el HTML

// una unidad está completa cuando están completas sus 3 lecciones
function contarUnidadesCompletadas(curso) {
    const completadas = obtenerLeccionesCompletadas(curso);
    let unidadesCompletas = 0;
    for (let unidad = 1; unidad <= obtenerTotalUnidades(); unidad++) {
        if (completadas >= unidad * leccionesPorUnidad) {
            unidadesCompletas++;
        }
    }
    return unidadesCompletas;
}

// porcentaje de avance: cada unidad completa suma lo mismo (con 5 unidades, 20% cada una) y con todas da 100%
function calcularProgreso(curso) {
    return contarUnidadesCompletadas(curso) * 100 / obtenerTotalUnidades();
}

// "Empezar" si no completó ninguna lección, "Repasar" si completó todas las unidades y "Continuar" en el resto
function obtenerTextoBoton(curso) {
    if (obtenerLeccionesCompletadas(curso) === 0) {
        return textoBotonEmpezar;
    }
    if (contarUnidadesCompletadas(curso) === obtenerTotalUnidades()) {
        return textoBotonRepasar;
    }
    return textoBotonContinuar;
}

// TP2: Vista 2: Dashboard de cursos
// experiencia total: suma los XP de todas las lecciones completadas de todos los cursos
function calcularExperiencia() {
    let total = 0;
    cursosDashboard.forEach((curso) => {
        for (let unidad = 1; unidad <= obtenerTotalUnidades(); unidad++) {
            for (let leccion = 1; leccion <= leccionesPorUnidad; leccion++) {
                // solo cuentan las lecciones que están completadas
                if (obtenerEstadoLeccion(curso.clave, unidad, leccion) === "completada") {
                    const resultado = obtenerResultado(curso.clave, unidad, leccion);
                    if (resultado !== undefined) {
                        total = total + resultado.xp;
                    }
                }
            }
        }
    });
    return total;
}
// TP2: Vista 2: Dashboard de cursos
// una cuenta no tiene actividad si todavía no completó ninguna lección en ningún curso
function cuentaSinActividad() {
    let sinActividad = true;
    cursosDashboard.forEach((curso) => {
        if (obtenerLeccionesCompletadas(curso.clave) > 0) {
            sinActividad = false;
        }
    });
    return sinActividad;
}

// TP2: Vista 2: Dashboard de cursos
// racha de días (sin fechas): arranca en rachaInicial y suma 1 por cada lección nueva que se completa
// si la cuenta no tiene actividad la racha es 0
function calcularRacha() {
    if (cuentaSinActividad()) {
        return 0;
    }
    let leccionesNuevas = 0;
    cursosDashboard.forEach((curso) => {
        const inicial = progresoInicial.find((dato) => dato.curso === curso.clave);
        let base = 0;
        if (inicial !== undefined) {
            base = inicial.completadas;
        }
        leccionesNuevas = leccionesNuevas + obtenerLeccionesCompletadas(curso.clave) - base;
    });
    if (leccionesNuevas < 0) {
        leccionesNuevas = 0;
    }
    return rachaInicial + leccionesNuevas;
}

// TP2: Vista 2: Dashboard de cursos
// escribe la racha con "día" o "días" según corresponda
function textoRacha(racha) {
    if (racha === 1) {
        return racha + " día";
    }
    return racha + " días";
}

// TP2: Vista 2: Dashboard de cursos
// XP ganados desde que empezó la demostración (sin fechas no se puede saber cuánto fue "hoy")
function calcularExperienciaGanada() {
    let inicial = 0;
    resultadosIniciales.forEach((resultado) => {
        inicial = inicial + resultado.xp;
    });
    const ganada = calcularExperiencia() - inicial;
    if (ganada < 0) {
        return 0;
    }
    return ganada;
}

// TP2: Vista 2: Dashboard de cursos
// arma las líneas de la tarjeta de estadísticas: liga, racha y meta diaria
function obtenerLineasEstadisticas() {
    const ganada = calcularExperienciaGanada();
    let lineaMeta = textoMetaCumplida;
    if (ganada < metaDiariaXP) {
        lineaMeta = "Te faltan " + (metaDiariaXP - ganada) + " XP";
    }
    return [
        "🏆",
        "Liga " + ligaDemostracion,
        "🔥",
        "Racha: " + textoRacha(calcularRacha()),
        "🎯",
        "Meta diaria: " + metaDiariaXP + " XP",
        "Ganaste: " + ganada + " XP",
        lineaMeta
    ];
}