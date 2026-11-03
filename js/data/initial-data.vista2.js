// TP2: Vista 2: Dashboard de cursos
// los cursos que muestra el dashboard (datos de demostración)
// "clave" tiene que ser igual al título que aparece en la barra de cada mapa, porque con eso se busca el avance
const cursosDashboard = [
    { clave: "Curso: Inglés desde Español", nombre: "Inglés desde Español", bandera: "gb", nivel: "Intermedio (B1)", mapa: "../Mapas/mapa-ingles.html" },
    { clave: "Curso: Alemán desde Español", nombre: "Alemán desde Español", bandera: "de", nivel: "Principiante (A1)", mapa: "../Mapas/mapa-aleman.html" },
    { clave: "Curso: Chino Mandarín desde Español", nombre: "Chino Mandarín desde Español", bandera: "cn", nivel: "Inicial (HSK 1)", mapa: "../Mapas/mapa-chino.html" }
];

// TP2: Vista 2: Dashboard de cursos
// textos del botón de cada tarjeta
const textoBotonEmpezar = "Empezar";
const textoBotonContinuar = "Continuar";
const textoBotonRepasar = "Repasar";

// TP2: Vista 2: Dashboard de cursos
// textos del mensaje para cuentas que todavía no hicieron ninguna lección
const tituloEstadoInicial = "¡Te damos la bienvenida a LingoWeb!";
const textoEstadoInicial = "Todavía no registrás actividad. Elegí un curso y tocá Empezar para hacer tu primera lección: acá vas a ver tu avance y tu experiencia.";
const textoEnlaceEstadoInicial = "Empezar con ";

// TP2: Vista 2: Dashboard de cursos
// datos de demostración de la cuenta: racha con la que empieza, liga y meta diaria de XP
const rachaInicial = 5;
const ligaDemostracion = "Bronce";
const metaDiariaXP = 50;

// TP2: Vista 2: Dashboard de cursos
// textos de la tarjeta de estadísticas
const tituloEstadisticas = "Estadísticas";
const textoMetaCumplida = "¡Meta cumplida!";