
const leccionElegida = leerLeccionElegida();

const rutaActual = window.location.pathname;
let urlMapa = "../Mapas/mapa-ingles.html";
if (rutaActual.includes("aleman")) urlMapa = "../Mapas/mapa-aleman.html";
if (rutaActual.includes("chino")) urlMapa = "../Mapas/mapa-chino.html";

if (leccionElegida === null) {
    alert("Error: No se seleccionó ninguna lección. Volviendo al mapa.");
    window.location.href = urlMapa;
} else {

    const datosValidos = iniciarLogicaLeccion(leccionElegida);

    if (!datosValidos) {
        alert("Los ejercicios para esta lección aún no están cargados.");
        window.location.href = urlMapa;
    } else {
        
        dibujarEjercicio(obtenerEjercicioActual());
        actualizarBarraProgreso(0);
        actualizarVidasVisuales(vidasActuales);

        
        document.addEventListener("click", function (e) {
            if (e.target.classList.contains("btn-palabra")) {
                const palabra = e.target.textContent;

                
                if (e.target.parentElement.classList.contains("banco-palabras")) {
                    zonaRespuesta.appendChild(e.target);
                    agregarPalabra(palabra);
                }
                
                else if (e.target.parentElement.classList.contains("zona-respuesta")) {
                    bancoPalabras.appendChild(e.target);
                    quitarPalabra(palabra);
                }
            }
        });

       
        botonComprobar.addEventListener("click", function (e) {
            e.preventDefault();

            const esCorrecta = comprobarRespuesta();

            actualizarVidasVisuales(vidasActuales);

            if (vidasActuales === 0) {
                mostrarDerrota(urlMapa);

            } else if (esCorrecta) {

                mostrarFeedback(true, function () {
                    const quedanEjercicios = avanzarEjercicio();

                    if (quedanEjercicios) {
                        
                        const progreso = (indiceEjercicioActual / leccionActualData.ejercicios.length) * 100;

                        actualizarBarraProgreso(progreso);
                        dibujarEjercicio(obtenerEjercicioActual());

                    } else {
                        
                        actualizarBarraProgreso(100);

                        
                        const estadoPrevio = obtenerEstadoLeccion(leccionElegida.curso, leccionElegida.unidad, leccionElegida.leccion);
                        const esRepaso = (estadoPrevio === "completada");

                        
                        const res = calcularResultadosLeccion();

                        
                        if (esRepaso) {
                            const resultadoAnterior = obtenerResultado(leccionElegida.curso, leccionElegida.unidad, leccionElegida.leccion);
                            if (resultadoAnterior !== undefined && resultadoAnterior !== null) {
                                res.xp = resultadoAnterior.xp; // Restauramos su XP original más alta
                            }
                        }
                        finalizarLeccion(
                            leccionElegida.curso,
                            leccionElegida.unidad,
                            leccionElegida.leccion,
                            res.aciertos,
                            res.total,
                            res.xp
                        );

                        mostrarVictoria(res, urlMapa, esRepaso);
                    }
                });

            } else {
                mostrarFeedback(false);
            }
        });
    }
}