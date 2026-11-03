// muestra u oculta las unidades y las flechas en la página
function mostrarUnidad(numero, total) {
    // primero oculto todas y después muestro solo la que toca
    for (let i = 1; i <= total; i++) {
        document.getElementById("unidad" + i).classList.add("oculta");
    }
    document.getElementById("unidad" + numero).classList.remove("oculta");

    const flechaIzq = document.getElementById("flecha-izq");
    const flechaDer = document.getElementById("flecha-der");

    // en la unidad 1 no hay flecha izquierda
    if (numero === 1) {
        flechaIzq.classList.add("oculta");
    } else {
        flechaIzq.classList.remove("oculta");
    }

    // en la última unidad no hay flecha derecha
    if (numero === total) {
        flechaDer.classList.add("oculta");
    } else {
        flechaDer.classList.remove("oculta");
    }
}

// cuando se hace clic en una flecha, ejecuta lo que le pasen
function conectarFlechas(alSiguiente, alAnterior) {
    document.getElementById("flecha-der").addEventListener("click", alSiguiente);
    document.getElementById("flecha-izq").addEventListener("click", alAnterior);
}



// TP2: Vista 3: Mapa de unidades y detalle del curso
// cuando tocan una lección bloqueada, ejecuta lo que le pasen
function conectarBloqueadas(alClic) {
    const botones = document.querySelectorAll(".inactive");
    botones.forEach((boton) => {
        boton.addEventListener("click", alClic);
    });
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// acá guardo el temporizador del mensaje para poder cancelarlo si hace falta
let temporizadorMensaje;

// TP2: Vista 3: Mapa de unidades y detalle del curso
// muestra un mensaje abajo y lo esconde solo; si no le pasan duración usa la de siempre (2 segundos)
function mostrarMensaje(texto, duracion) {
    const mensaje = document.getElementById("mensaje-bloqueada");
    mensaje.textContent = texto;
    mensaje.classList.remove("oculta");

    let tiempo = duracionMensaje;
    if (duracion !== undefined) {
        tiempo = duracion;
    }

    // si ya había un temporizador andando lo cancelo, así cada clic cuenta de nuevo
    clearTimeout(temporizadorMensaje);
    temporizadorMensaje = setTimeout(() => {
        ocultarMensaje();
    }, tiempo);
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// esconde el mensaje
function ocultarMensaje() {
    document.getElementById("mensaje-bloqueada").classList.add("oculta");
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// busca el botón "Iniciar" de cada lección y avisa cuál tocaron (unidad y número)
function conectarIniciar(total, alClic) {
    for (let unidad = 1; unidad <= total; unidad++) {
        for (let leccion = 1; leccion <= leccionesPorUnidad; leccion++) {
            const enlace = document.querySelector("#unidad" + unidad + " .l" + leccion + " a.active");
            // si esa lección está bloqueada no tiene "Iniciar" y no pasa nada
            if (enlace !== null) {
                enlace.addEventListener("click", function () {
                    alClic(unidad, leccion);
                });
            }
        }
    }
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// busca el botón "Ver resultado" de cada lección y avisa cuál tocaron (unidad y número)
function conectarResultados(total, alClic) {
    for (let unidad = 1; unidad <= total; unidad++) {
        for (let leccion = 1; leccion <= leccionesPorUnidad; leccion++) {
            const boton = document.querySelector("#unidad" + unidad + " .l" + leccion + " .resultado");
            // si esa lección no está completada no tiene este botón y no pasa nada
            if (boton !== null) {
                boton.addEventListener("click", function () {
                    alClic(unidad, leccion);
                });
            }
        }
    }
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// dibuja el estado de cada lección (emoji, texto y botones) según el avance guardado
// ojo: innerHTML se usa solo con texto propio de la app, nunca con lo que escribe el usuario
function dibujarMapa(total, obtenerEstado, pagina) {
    for (let unidad = 1; unidad <= total; unidad++) {
        for (let leccion = 1; leccion <= leccionesPorUnidad; leccion++) {
            const seccion = document.querySelector("#unidad" + unidad + " .l" + leccion);
            const titulos = seccion.querySelectorAll("h2");
            const estado = obtenerEstado(unidad, leccion);

            // titulos[0] es "Lección n", titulos[2] es el cuadro del estado y titulos[3] son los botones
            if (estado === "completada") {
                titulos[0].textContent = "🟢Lección " + leccion;
                titulos[2].textContent = "Estado: Completada";
                titulos[3].innerHTML = '<button class="accion-completada resultado" type="button">Ver resultado</button> <a href="' + pagina + '" class="active accion-completada">Repetir</a>';
            } else if (estado === "en curso") {
                titulos[0].textContent = "🟡Lección " + leccion;
                titulos[2].textContent = "Estado: En curso";
                titulos[3].innerHTML = '<a href="' + pagina + '" class="active">Iniciar</a>';
            } else {
                titulos[0].textContent = "🔒Lección " + leccion;
                titulos[2].textContent = "Estado: Bloqueada";
                titulos[3].innerHTML = '<button class="inactive" type="button">No Disponible</button>';
            }
        }
    }
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// abre el panel de opiniones: esconde las unidades y las flechas y muestra el panel
function abrirPanelOpiniones() {
    document.querySelectorAll(".unidad").forEach((unidad) => {
        unidad.classList.add("oculta");
    });
    document.getElementById("flecha-izq").classList.add("oculta");
    document.getElementById("flecha-der").classList.add("oculta");
    document.getElementById("panel-opiniones").classList.remove("oculta");
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// cierra el panel (las unidades y las flechas las vuelve a mostrar main.js con actualizar)
function cerrarPanelOpiniones() {
    document.getElementById("panel-opiniones").classList.add("oculta");
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// conecta el botón de abrir, el de cerrar y el formulario de opinión
function conectarOpiniones(alAbrir, alCerrar, alEnviar) {
    document.getElementById("abrir-opiniones").addEventListener("click", alAbrir);
    document.getElementById("cerrar-opiniones").addEventListener("click", alCerrar);
    document.getElementById("formulario-opinion").addEventListener("submit", (evento) => {
        // evita que el formulario recargue la página
        evento.preventDefault();
        const calificacion = document.getElementById("calificacion").value;
        const comentario = document.getElementById("comentario").value;
        alEnviar(calificacion, comentario);
    });
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// muestra un texto debajo del formulario (error o confirmación)
function mostrarMensajeOpinion(texto) {
    document.getElementById("mensaje-opinion").textContent = texto;
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// deja el formulario vacío para una opinión nueva
function limpiarFormularioOpinion() {
    document.getElementById("calificacion").value = "";
    document.getElementById("comentario").value = "";
}

// TP2: Vista 3: Mapa de unidades y detalle del curso
// dibuja la lista de opiniones; si no hay ninguna muestra el mensaje de lista vacía
// se usa textContent (y no innerHTML) porque el comentario lo escribe la persona
function dibujarOpiniones(opiniones, textoVacio) {
    const lista = document.getElementById("lista-opiniones");
    lista.textContent = "";

    if (opiniones.length === 0) {
        const vacio = document.createElement("li");
        vacio.textContent = textoVacio;
        lista.appendChild(vacio);
        return;
    }

    opiniones.forEach((opinion) => {
        const item = document.createElement("li");
        item.textContent = opinion.usuario + " - Calificación: " + opinion.calificacion + " de 5 - " + opinion.comentario;
        lista.appendChild(item);
    });
}