
console.log("JavaScript de la vista 6 cargado correctamente");

if (obtenerDatosUsuarioActivo() === null) {
    window.location.href = "../acceso/login.html";
}

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