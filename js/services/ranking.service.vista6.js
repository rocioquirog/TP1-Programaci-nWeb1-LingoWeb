// TP2: Vista 6: Ranking de estudiantes
// obtiene el identificador de la cuenta activa
function obtenerUsuarioRanking() {
    const usuarioActivo = localStorage.getItem("usuarioActivo");
 
    if (usuarioActivo !== null) {
        return usuarioActivo.toLowerCase();
    }
 
    return "facundoferreira_web";
}
 
// TP2: Vista 6: Ranking de estudiantes
// arma la clave para guardar la liga elegida por cada cuenta
function obtenerClaveLiga() {
    return "liga-" + obtenerUsuarioRanking();
}
 
// TP2: Vista 6: Ranking de estudiantes
// guarda la liga seleccionada
function guardarLiga(liga) {
    localStorage.setItem(obtenerClaveLiga(), liga);
}
 
// TP2: Vista 6: Ranking de estudiantes
// recupera la liga guardada o usa la liga inicial
function obtenerLiga() {
    const ligaGuardada = localStorage.getItem(obtenerClaveLiga());
 
    if (ligaGuardada !== null) {
        return ligaGuardada;
    }
 
    return ligaInicial;
}
 
// TP2: Vista 6: Ranking de estudiantes
// obtiene los estudiantes y actualiza los XP del usuario activo
function obtenerEstudiantes() {
    const estudiantes = estudiantesIniciales.map((estudiante) => {
        return {
            usuario: estudiante.usuario,
            nombre: estudiante.nombre,
            xp: estudiante.xp
        };
    });
 
    const usuarioActivo = obtenerUsuarioRanking();
 
    const estudianteActual = estudiantes.find((estudiante) => {
        return estudiante.usuario.toLowerCase() === usuarioActivo;
    });
 
    if (estudianteActual !== undefined) {
        estudianteActual.xp = calcularExperiencia();
    } else {
        estudiantes.push({
            usuario: usuarioActivo,
            nombre: usuarioActivo,
            xp: calcularExperiencia()
        });
    }
 
    return estudiantes;
}
 
// TP2: Vista 6: Ranking de estudiantes
// ordena los estudiantes desde el que tiene más XP hasta el que tiene menos
function ordenarEstudiantes(estudiantes) {
    return estudiantes.sort((a, b) => b.xp - a.xp);
}
 
// TP2: Vista 6: Ranking de estudiantes
// devuelve el nombre que se muestra en el título de la liga
function obtenerNombreLiga(liga) {
    if (liga === "plata") {
        return "Plata";
    }
 
    if (liga === "oro") {
        return "Oro";
    }
 
    return "Bronce";
}
