// Crea un usuario con todos los datos que necesita LingoWeb.
function crearUsuarioModelo(datos) {
    return {
        // Datos de la cuenta
        nombre: datos.nombre || "",
        usuario: datos.usuario || "",
        email: datos.email || "",
        contrasena: datos.contrasena || "",

        // Datos de aprendizaje
        xp: datos.xp ?? datos.experiencia ?? 0,
        racha: datos.racha ?? 0,
        metaDiaria: datos.metaDiaria ?? 0,
        liga: datos.liga || "bronce",

        // Información complementaria
        logros: datos.logros || [],
        preferencias: {
            idioma: "es",
            ...(datos.preferencias || {})
        },

        // Datos de actividad del usuario
        progreso: datos.progreso || {},
        resultados: datos.resultados || {},

        // Información de opiniones
        comentarios: datos.comentarios || [],
        calificaciones: datos.calificaciones || []
    };
}