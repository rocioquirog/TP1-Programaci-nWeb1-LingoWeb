
const clave = "unidadActual-" + document.querySelector("header h2").textContent;


const nombreCurso = document.querySelector("header h2").textContent.trim();

function actualizar() {
    mostrarUnidad(obtenerUnidadActual(), obtenerTotalUnidades());
   
    ocultarMensaje();
}


dibujarMapa(
    obtenerTotalUnidades(),
    function (unidad, leccion) {
        return obtenerEstadoLeccion(nombreCurso, unidad, leccion);
    },
    obtenerPaginaLeccion(nombreCurso)
);

conectarFlechas(
    function () {
        irASiguiente(clave);
        actualizar();
    },
    function () {
        irAAnterior(clave);
        actualizar();
    }
);


conectarBloqueadas(function () {
    mostrarMensaje(mensajeLeccionBloqueada);
});


conectarIniciar(obtenerTotalUnidades(), function (unidad, leccion) {
    elegirLeccion(nombreCurso, unidad, leccion);
});


conectarResultados(obtenerTotalUnidades(), function (unidad, leccion) {
    const resultado = obtenerResultado(nombreCurso, unidad, leccion);
    if (resultado === undefined) {
        mostrarMensaje("Todavía no hay un resultado guardado para esta lección.", duracionResultado);
    } else {
        mostrarMensaje(
            "Resultado: " + resultado.aciertos + " de " + resultado.total +
            " respuestas correctas. Ganaste " + resultado.xp + " XP.",
            duracionResultado
        );
    }
});

conectarOpiniones(
    function () {
        ocultarMensaje();
        abrirPanelOpiniones();
    },
    function () {
        cerrarPanelOpiniones();
        actualizar();
    },
    function (calificacion, comentario) {
        const error = enviarOpinion(nombreCurso, calificacion, comentario);
        if (error !== "") {
            mostrarMensajeOpinion(error);
        } else {
            mostrarMensajeOpinion(mensajeOpinionEnviada);
            limpiarFormularioOpinion();
            dibujarOpiniones(obtenerOpiniones(nombreCurso), mensajeSinOpiniones);
        }
    }
);

dibujarOpiniones(obtenerOpiniones(nombreCurso), mensajeSinOpiniones);


dibujarResumen(calcularExperiencia());

dibujarRacha(textoRacha(calcularRacha()));

cargarUnidadGuardada(clave);
actualizar();