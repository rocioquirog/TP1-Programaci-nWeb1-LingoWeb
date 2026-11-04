
dibujarCursos(cursosDashboard, calcularProgreso, obtenerTextoBoton);


dibujarResumen(calcularExperiencia());
dibujarRacha(textoRacha(calcularRacha()));


dibujarEstadisticas(tituloEstadisticas, obtenerLineasEstadisticas());

if (cuentaSinActividad()) {
    mostrarEstadoInicial(
        tituloEstadoInicial,
        textoEstadoInicial,
        textoEnlaceEstadoInicial + cursosDashboard[0].nombre,
        cursosDashboard[0].mapa
    );
}