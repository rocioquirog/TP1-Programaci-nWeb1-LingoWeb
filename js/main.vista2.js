// TP2: Vista 2: Dashboard de cursos
// archivo principal del dashboard, es el último que carga el HTML
// dibuja las tarjetas con el avance real que dejó cada curso en el mapa
dibujarCursos(cursosDashboard, calcularProgreso, obtenerTextoBoton);

// TP2: Vista 2: Dashboard de cursos
// la experiencia y la racha de la barra salen de las lecciones completadas
dibujarResumen(calcularExperiencia());
dibujarRacha(textoRacha(calcularRacha()));

// TP2: Vista 2: Dashboard de cursos
// la tarjeta de estadísticas muestra la liga, la racha y la meta diaria de la cuenta
dibujarEstadisticas(tituloEstadisticas, obtenerLineasEstadisticas());

// TP2: Vista 2: Dashboard de cursos
// si la cuenta no tiene actividad se muestra la invitación a empezar por el primer curso de la lista
if (cuentaSinActividad()) {
    mostrarEstadoInicial(
        tituloEstadoInicial,
        textoEstadoInicial,
        textoEnlaceEstadoInicial + cursosDashboard[0].nombre,
        cursosDashboard[0].mapa
    );
}