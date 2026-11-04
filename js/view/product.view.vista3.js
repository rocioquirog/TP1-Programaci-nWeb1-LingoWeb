
function mostrarUnidad(numero, total) {
    
    for (let i = 1; i <= total; i++) {
        document.getElementById("unidad" + i).classList.add("oculta");
    }
    document.getElementById("unidad" + numero).classList.remove("oculta");

    const flechaIzq = document.getElementById("flecha-izq");
    const flechaDer = document.getElementById("flecha-der");

   
    if (numero === 1) {
        flechaIzq.classList.add("oculta");
    } else {
        flechaIzq.classList.remove("oculta");
    }

    
    if (numero === total) {
        flechaDer.classList.add("oculta");
    } else {
        flechaDer.classList.remove("oculta");
    }
}


function conectarFlechas(alSiguiente, alAnterior) {
    document.getElementById("flecha-der").addEventListener("click", alSiguiente);
    document.getElementById("flecha-izq").addEventListener("click", alAnterior);
}




function conectarBloqueadas(alClic) {
    const botones = document.querySelectorAll(".inactive");
    botones.forEach((boton) => {
        boton.addEventListener("click", alClic);
    });
}


let temporizadorMensaje;

function mostrarMensaje(texto, duracion) {
    const mensaje = document.getElementById("mensaje-bloqueada");
    mensaje.textContent = texto;
    mensaje.classList.remove("oculta");

    let tiempo = duracionMensaje;
    if (duracion !== undefined) {
        tiempo = duracion;
    }

    clearTimeout(temporizadorMensaje);
    temporizadorMensaje = setTimeout(() => {
        ocultarMensaje();
    }, tiempo);
}

function ocultarMensaje() {
    document.getElementById("mensaje-bloqueada").classList.add("oculta");
}

function conectarIniciar(total, alClic) {
    for (let unidad = 1; unidad <= total; unidad++) {
        for (let leccion = 1; leccion <= leccionesPorUnidad; leccion++) {
            const enlace = document.querySelector("#unidad" + unidad + " .l" + leccion + " a.active");
            if (enlace !== null) {
                enlace.addEventListener("click", function () {
                    alClic(unidad, leccion);
                });
            }
        }
    }
}


function conectarResultados(total, alClic) {
    for (let unidad = 1; unidad <= total; unidad++) {
        for (let leccion = 1; leccion <= leccionesPorUnidad; leccion++) {
            const boton = document.querySelector("#unidad" + unidad + " .l" + leccion + " .resultado");
            if (boton !== null) {
                boton.addEventListener("click", function () {
                    alClic(unidad, leccion);
                });
            }
        }
    }
}

function dibujarMapa(total, obtenerEstado, pagina) {
    for (let unidad = 1; unidad <= total; unidad++) {
        for (let leccion = 1; leccion <= leccionesPorUnidad; leccion++) {
            const seccion = document.querySelector("#unidad" + unidad + " .l" + leccion);
            const titulos = seccion.querySelectorAll("h2");
            const estado = obtenerEstado(unidad, leccion);

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


function abrirPanelOpiniones() {
    document.querySelectorAll(".unidad").forEach((unidad) => {
        unidad.classList.add("oculta");
    });
    document.getElementById("flecha-izq").classList.add("oculta");
    document.getElementById("flecha-der").classList.add("oculta");
    document.getElementById("panel-opiniones").classList.remove("oculta");
}


function cerrarPanelOpiniones() {
    document.getElementById("panel-opiniones").classList.add("oculta");
}


function conectarOpiniones(alAbrir, alCerrar, alEnviar) {
    document.getElementById("abrir-opiniones").addEventListener("click", alAbrir);
    document.getElementById("cerrar-opiniones").addEventListener("click", alCerrar);
    document.getElementById("formulario-opinion").addEventListener("submit", (evento) => {
        evento.preventDefault();
        const calificacion = document.getElementById("calificacion").value;
        const comentario = document.getElementById("comentario").value;
        alEnviar(calificacion, comentario);
    });
}


function mostrarMensajeOpinion(texto) {
    document.getElementById("mensaje-opinion").textContent = texto;
}


function limpiarFormularioOpinion() {
    document.getElementById("calificacion").value = "";
    document.getElementById("comentario").value = "";
}


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