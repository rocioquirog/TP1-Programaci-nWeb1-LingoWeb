// TP2: Vista 4: Lección
const burbujaTexto = document.querySelector(".burbuja-texto");
const zonaRespuesta = document.querySelector(".zona-respuesta");
const bancoPalabras = document.querySelector(".banco-palabras");
const botonComprobar = document.querySelector(".btn-primario");
const headerLeccion = document.querySelector(".header-leccion");

function dibujarEjercicio(ejercicio) {
    burbujaTexto.textContent = ejercicio.oracion;
    zonaRespuesta.innerHTML = ""; 
    bancoPalabras.innerHTML = ""; 
    
    // Dibuja los botones mezclados
    const palabrasMezcladas = [...ejercicio.banco].sort(() => Math.random() - 0.5);
    
    palabrasMezcladas.forEach(palabra => {
        const btn = document.createElement("button");
        btn.className = "btn-palabra";
        btn.textContent = palabra;
        bancoPalabras.appendChild(btn);
    });
}

// Crea una ventana personalizada para mostrar mensajes.
// Crea una ventana personalizada para mostrar mensajes.
function mostrarModalLeccion(tituloTexto, mensajeTexto, textoBoton, accion, esExito = false) {
    const fondo = document.createElement("div");
    fondo.classList.add("fondo-modal");

    fondo.style.cssText = `
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.55);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        padding: 1rem;
    `;

    const modal = document.createElement("div");
    modal.classList.add("modal-leccion");

    modal.style.cssText = `
        background-color: #FFF8E7;
        color: #333333;
        width: 100%;
        max-width: 28rem;
        padding: 2rem;
        border-radius: 1.2rem;
        text-align: center;
        box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
        font-family: "Trebuchet MS", sans-serif;
    `;

    const titulo = document.createElement("h2");
    titulo.textContent = tituloTexto;
    titulo.style.cssText = "color: " + (esExito ? "#4CAF50" : "#E94B4B") + "; margin-bottom: 1rem;";

    const texto = document.createElement("p");
    texto.textContent = mensajeTexto;
    texto.style.cssText = `
        margin-bottom: 1.5rem;
        line-height: 1.5;
    `;

    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = textoBoton;
    boton.style.cssText = `
        background-color: #E94B4B;
        color: #FFF8E7;
        border: none;
        border-radius: 0.6rem;
        padding: 0.8rem 1.4rem;
        font-family: "Trebuchet MS", sans-serif;
        font-size: 1rem;
        cursor: pointer;
        width: auto;
    `;

    boton.addEventListener("mouseenter", function () {
        boton.style.backgroundColor = "#F47B3A";
    });

    boton.addEventListener("mouseleave", function () {
        boton.style.backgroundColor = "#E94B4B";
    });

    boton.addEventListener("click", function () {
        fondo.remove();

        if (accion) {
            accion();
        }
    });

    modal.appendChild(titulo);
    modal.appendChild(texto);
    modal.appendChild(boton);
    fondo.appendChild(modal);

    document.body.appendChild(fondo);

    boton.focus();
}

// Muestra si la respuesta fue correcta o incorrecta.
function mostrarFeedback(esCorrecta, accionContinuar) {
    if (esCorrecta) {
        mostrarModalLeccion(
            "¡Muy bien!",
            "¡Respuesta correcta! Seguí así.",
            "Continuar",
            accionContinuar,
            true
        );
    } else {
        mostrarModalLeccion(
            "¡Ups!",
            "Respuesta incorrecta. Te quedan " + vidasActuales + " vidas.",
            "Intentar de nuevo"
        );
    }
}


// Muestra el mensaje cuando se pierden todas las vidas.
function mostrarDerrota(urlMapa) {
    mostrarModalLeccion(
        "¡No te rindas!",
        "Perdiste todas tus vidas. ¡Podés volver a intentarlo!",
        "Volver al mapa",
        function () {
            window.location.href = urlMapa;
        }
    );
}


// Muestra el mensaje al completar la lección.
function mostrarVictoria(resultados, urlMapa) {
    mostrarModalLeccion(
        "¡Lección completada!",
        "¡Excelente trabajo! Ganaste " + resultados.xp + " XP.",
        "Volver al mapa",
        function () {
            window.location.href = urlMapa;
        },
        true
    );
}

function actualizarBarraProgreso(porcentaje) {
    const barra = document.querySelector(".barra-progreso");
    if(barra) barra.value = porcentaje;
}

function actualizarVidasVisuales(vidasRestantes) {
    const corazones = document.querySelectorAll(".corazon");
    corazones.forEach((corazon, index) => {
        // Si el índice del corazón es mayor o igual a las vidas que quedan, se apaga
        if (index >= vidasRestantes) {
            corazon.classList.add("perdido");
        } else {
            corazon.classList.remove("perdido");
        }
    });
}