// PROBLEMA QUE TUVE: con type="module" e import/export las flechas no andaban y en la
// consola salía un error de CORS con main.js. Pasa porque los módulos no cargan si la
// página se abre como file:/// (doble clic o copiar ruta).
// Cómo lo solucioné: saqué el import/export y cargo cada archivo con su propio <script>
// en el HTML, en orden (data, model, storage, service, view y al final main.js).
// Para estudiar: type="module", qué es CORS, file:// vs http:// y por qué importa
// el orden de los <script>

// archivo principal, es el último que carga el HTML
// junta la lógica (services) con lo que se ve (view)

// uso el título del curso para que cada idioma guarde su propia unidad
const clave = "unidadActual-" + document.querySelector("header h2").textContent;

// TP2: Vista 3: Mapa de unidades y detalle del curso
// nombre del curso (por ejemplo "Curso: Inglés desde Español") para saber de qué idioma es la lección
const nombreCurso = document.querySelector("header h2").textContent.trim();

function actualizar() {
    mostrarUnidad(obtenerUnidadActual(), obtenerTotalUnidades());
    // TP2: Vista 3: Mapa de unidades y detalle del curso
    // al cambiar de unidad se borra el mensaje de lección bloqueada
    ocultarMensaje();
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// primero se dibuja el estado de cada lección según el avance guardado (tiene que ir antes de los botones de abajo)
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

// TP2: Vista 3: Mapa de unidades y detalle del curso
// al tocar una lección bloqueada se muestra por qué no se puede iniciar
conectarBloqueadas(function () {
    mostrarMensaje(mensajeLeccionBloqueada);
});

// TP2: Vista 3: Mapa de unidades y detalle del curso
// al hacer clic en "Iniciar" o "Repetir" se guarda qué lección eligió (curso, unidad y número)
conectarIniciar(obtenerTotalUnidades(), function (unidad, leccion) {
    elegirLeccion(nombreCurso, unidad, leccion);
});

// TP2: Vista 3: Mapa de unidades y detalle del curso
// al tocar "Ver resultado" se muestra el resultado de esa lección completada
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

// TP2: Vista 3: Mapa de unidades y detalle del curso
// panel de opiniones: se abre con el botón, se cierra con "Volver al mapa" y el formulario guarda la opinión
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

// TP2: Vista 3: Mapa de unidades y detalle del curso
// al cargar la página se dibujan las opiniones ya registradas de este curso
dibujarOpiniones(obtenerOpiniones(nombreCurso), mensajeSinOpiniones);

// TP2: Vista 2: Dashboard de cursos
// la experiencia de la barra sale de las lecciones completadas (la misma cuenta que el dashboard)
dibujarResumen(calcularExperiencia());

// TP2: Vista 2: Dashboard de cursos
// la racha de la barra sale de las lecciones completadas (la misma cuenta que el dashboard)
dibujarRacha(textoRacha(calcularRacha()));

cargarUnidadGuardada(clave);
actualizar();