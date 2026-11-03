// TP2: Vista 4: Lección
// 1. Leemos qué botón apretó el usuario en el mapa
const leccionElegida = leerLeccionElegida();

// Ruta para el botón de "Volver atrás" 
// Detectamos en qué archivo estamos para saber a qué mapa volver
const rutaActual = window.location.pathname;
let urlMapa = "../Mapas/mapa-ingles.html"; 
if (rutaActual.includes("aleman")) urlMapa = "../Mapas/mapa-aleman.html";
if (rutaActual.includes("chino")) urlMapa = "../Mapas/mapa-chino.html";

if (leccionElegida === null) {
    alert("Error: No se seleccionó ninguna lección. Volviendo al mapa.");
    window.location.href = urlMapa;
} else {
    // 2. Iniciamos la lógica
    const datosValidos = iniciarLogicaLeccion(leccionElegida);
    
    if (!datosValidos) {
        alert("Los ejercicios para esta lección aún no están cargados.");
        window.location.href = urlMapa;
    } else {
        // 3. Pintamos el primer ejercicio
        dibujarEjercicio(obtenerEjercicioActual());
        actualizarBarraProgreso(0);

        // 4. Delegación de eventos (Mover palabras de arriba a abajo)
        document.addEventListener("click", function(e) {
            if (e.target.classList.contains("btn-palabra")) {
                const palabra = e.target.textContent;
                
                // Si la palabra está en el banco, la mueve a la zona de respuesta
                if (e.target.parentElement.classList.contains("banco-palabras")) {
                    zonaRespuesta.appendChild(e.target);
                    agregarPalabra(palabra);
                } 
                // Si la palabra está en la zona de respuesta, la devuelve al banco
                else if (e.target.parentElement.classList.contains("zona-respuesta")) {
                    bancoPalabras.appendChild(e.target);
                    quitarPalabra(palabra);
                }
            }
        });

        // 5. Botón de comprobar
        botonComprobar.addEventListener("click", function(e) {
            e.preventDefault(); // Evita que el enlace recargue la página
            
            const esCorrecta = comprobarRespuesta();
            mostrarFeedback(esCorrecta);
            
            if (vidasActuales === 0) {
                mostrarDerrota(urlMapa);
            } else if (esCorrecta) {
                const quedanEjercicios = avanzarEjercicio();
                
                if (quedanEjercicios) {
                    // Actualiza barra y dibuja el siguiente
                    const progreso = (indiceEjercicioActual / leccionActualData.ejercicios.length) * 100;
                    actualizarBarraProgreso(progreso);
                    dibujarEjercicio(obtenerEjercicioActual());
                } else {
                    // Terminó la lección entera
                    actualizarBarraProgreso(100);
                    const res = calcularResultadosLeccion();
                    
                    // Función de Lautaro (product.service.vista3.js) para desbloquear el mapa
                    finalizarLeccion(leccionElegida.curso, leccionElegida.unidad, leccionElegida.leccion, res.aciertos, res.total, res.xp);
                    
                    mostrarVictoria(res, urlMapa);
                }
            }
        });
    }
}