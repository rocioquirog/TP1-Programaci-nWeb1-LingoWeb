// TP2: Vista 6: Ranking de estudiantes
console.log("JavaScript de la vista 6 cargado correctamente");
// actualiza el ranking con los datos ordenados
function actualizarRanking() {
    const estudiantes = obtenerEstudiantes();
    const estudiantesOrdenados = ordenarEstudiantes(estudiantes);
 
    dibujarRanking(estudiantesOrdenados);
    dibujarNombreLiga(obtenerLiga());
}
 
// TP2: Vista 6: Ranking de estudiantes
// archivo principal del ranking
conectarSelectorLiga();
actualizarRanking();