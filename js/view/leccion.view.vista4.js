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

function mostrarFeedback(esCorrecta) {
    if (esCorrecta) {
        alert("¡Correcto! Muy bien hecho."); 
    } else {
        alert("Incorrecto. Pierdes una vida. Te quedan " + vidasActuales + " vidas.");
    }
}

function mostrarDerrota(urlMapa) {
    alert("¡Perdiste todas tus vidas! Debes volver a intentarlo.");
    window.location.href = urlMapa;
}

function mostrarVictoria(resultados, urlMapa) {
    alert("¡Lección completada! Ganaste " + resultados.xp + " XP.");
    window.location.href = urlMapa;
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