
function crearUsuarioModelo(datos) {
    return {
        
        nombre: datos.nombre || "",
        usuario: datos.usuario || "",
        email: datos.email || "",
        contrasena: datos.contrasena || "",

        
        xp: datos.xp ?? datos.experiencia ?? 0,
        racha: datos.racha ?? 0,
        metaDiaria: datos.metaDiaria ?? 0,
        liga: datos.liga || "bronce",

        
        logros: datos.logros || [],
        preferencias: {
            idioma: "es",
            ...(datos.preferencias || {})
        },

        
        progreso: datos.progreso || {},
        resultados: datos.resultados || {},

        
        comentarios: datos.comentarios || [],
        calificaciones: datos.calificaciones || []
    };
}