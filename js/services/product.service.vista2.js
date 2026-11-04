
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

function calcularProgreso(curso) {
    return contarUnidadesCompletadas(curso) * 100 / obtenerTotalUnidades();
}

function obtenerTextoBoton(curso) {
    if (obtenerLeccionesCompletadas(curso) === 0) {
        return textoBotonEmpezar;
    }
    if (contarUnidadesCompletadas(curso) === obtenerTotalUnidades()) {
        return textoBotonRepasar;
    }
    return textoBotonContinuar;
}

function calcularExperiencia() {
    let total = 0;
    cursosDashboard.forEach((curso) => {
        for (let unidad = 1; unidad <= obtenerTotalUnidades(); unidad++) {
            for (let leccion = 1; leccion <= leccionesPorUnidad; leccion++) {
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

function cuentaSinActividad() {
    let sinActividad = true;
    cursosDashboard.forEach((curso) => {
        if (obtenerLeccionesCompletadas(curso.clave) > 0) {
            sinActividad = false;
        }
    });
    return sinActividad;
}

function calcularRacha() {
    if (cuentaSinActividad()) {
        return 0;
    }
    const esDemostracion = obtenerUsuarioActivo() === usuarioDemostracion;
    let leccionesNuevas = 0;
    cursosDashboard.forEach((curso) => {
        let base = 0;
        if (esDemostracion) {
            const inicial = progresoInicial.find((dato) => dato.curso === curso.clave);
            if (inicial !== undefined) {
                base = inicial.completadas;
            }
        }
        leccionesNuevas = leccionesNuevas + obtenerLeccionesCompletadas(curso.clave) - base;
    });
    if (leccionesNuevas < 0) {
        leccionesNuevas = 0;
    }
    let rachaBase = 0;
    if (esDemostracion) {
        rachaBase = rachaInicial;
    }
    return rachaBase + leccionesNuevas;
}

function textoRacha(racha) {
    if (racha === 1) {
        return racha + " día";
    }
    return racha + " días";
}

function calcularExperienciaGanada() {
    let inicial = 0;
    if (obtenerUsuarioActivo() === usuarioDemostracion) {
        resultadosIniciales.forEach((resultado) => {
            inicial = inicial + resultado.xp;
        });
    }
    const ganada = calcularExperiencia() - inicial;
    if (ganada < 0) {
        return 0;
    }
    return ganada;
}

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