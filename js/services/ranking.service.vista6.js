
function obtenerUsuarioRanking() {
    const usuarioActivo = localStorage.getItem("usuarioActivo");
 
    if (usuarioActivo !== null) {
        return usuarioActivo.toLowerCase();
    }
 
    return "facundoferreira";
}
 

function obtenerClaveLiga() {
    return "liga-" + obtenerUsuarioRanking();
}
 

function guardarLiga(liga) {
    localStorage.setItem(obtenerClaveLiga(), liga);
}
 
function obtenerLiga() {
    const ligaGuardada = localStorage.getItem(obtenerClaveLiga());
 
    if (ligaGuardada !== null) {
        return ligaGuardada;
    }
 
    return ligaInicial;
}
 
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
 
function ordenarEstudiantes(estudiantes) {
    return estudiantes.sort((a, b) => b.xp - a.xp);
}
 
function obtenerNombreLiga(liga) {
    if (liga === "plata") {
        return "Plata";
    }
 
    if (liga === "oro") {
        return "Oro";
    }
 
    return "Bronce";
}
