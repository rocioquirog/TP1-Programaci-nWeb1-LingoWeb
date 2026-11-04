
console.log("JavaScript de la vista 6 cargado correctamente");

function actualizarRanking() {
    const estudiantes = obtenerEstudiantes();
    const estudiantesOrdenados = ordenarEstudiantes(estudiantes);
 
    dibujarRanking(estudiantesOrdenados);
    dibujarNombreLiga(obtenerLiga());
}
 
conectarSelectorLiga();
actualizarRanking();

dibujarResumen(calcularExperiencia());
dibujarRacha(textoRacha(calcularRacha()));