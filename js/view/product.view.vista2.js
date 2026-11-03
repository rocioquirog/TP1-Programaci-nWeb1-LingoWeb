// TP2: Vista 2: Dashboard de cursos
// dibuja una tarjeta por cada curso: bandera, nombre, progreso, nivel y botón
// recibe dos funciones para no depender de la lógica: una da el progreso y la otra el texto del botón
function dibujarCursos(cursos, obtenerProgreso, obtenerTexto) {
    const contenedor = document.getElementById("lista-cursos");
    contenedor.textContent = "";

    cursos.forEach((curso) => {
        const tarjeta = document.createElement("section");
        tarjeta.classList.add("tarjeta-curso");

        // título con la bandera y el nombre del curso
        const titulo = document.createElement("h2");
        const bandera = document.createElement("span");
        bandera.classList.add("fi");
        bandera.classList.add("fi-" + curso.bandera);
        const nombre = document.createElement("span");
        nombre.textContent = curso.nombre;
        titulo.appendChild(bandera);
        titulo.appendChild(nombre);

        const progreso = document.createElement("h3");
        progreso.textContent = "Progreso: " + obtenerProgreso(curso.clave) + "%";

        const nivel = document.createElement("h3");
        nivel.textContent = "Nivel: " + curso.nivel;

        // botón que abre el mapa del curso
        const botón = document.createElement("h2");
        botón.classList.add("boton");
        const enlace = document.createElement("a");
        enlace.setAttribute("href", curso.mapa);
        enlace.textContent = obtenerTexto(curso.clave);
        botón.appendChild(enlace);

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(progreso);
        tarjeta.appendChild(nivel);
        tarjeta.appendChild(botón);
        contenedor.appendChild(tarjeta);
    });
}

// TP2: Vista 2: Dashboard de cursos
// escribe la experiencia en la barra de arriba (el ⚡ del resumen)
function dibujarResumen(experiencia) {
    document.getElementById("resumen-xp").textContent = "⚡ " + experiencia + " XP";
}

// TP2: Vista 2: Dashboard de cursos
// muestra el mensaje de bienvenida con un enlace para empezar el primer curso
function mostrarEstadoInicial(titulo, texto, textoEnlace, mapa) {
    document.getElementById("titulo-estado-inicial").textContent = titulo;
    document.getElementById("texto-estado-inicial").textContent = texto;

    const enlace = document.getElementById("enlace-estado-inicial");
    enlace.textContent = textoEnlace;
    enlace.setAttribute("href", mapa);

    document.getElementById("estado-inicial").classList.remove("oculta");
}

// TP2: Vista 2: Dashboard de cursos
// escribe la racha en la barra de arriba (el 🔥 del resumen)
function dibujarRacha(texto) {
    document.getElementById("resumen-racha").textContent = "🔥 " + texto;
}

// TP2: Vista 2: Dashboard de cursos
// dibuja la tarjeta de estadísticas: un título y una línea por cada dato
function dibujarEstadisticas(titulo, lineas) {
    const tarjeta = document.getElementById("estadisticas");
    tarjeta.textContent = "";

    const encabezado = document.createElement("h2");
    encabezado.textContent = titulo;
    tarjeta.appendChild(encabezado);

    lineas.forEach((linea) => {
        const item = document.createElement("h3");
        item.textContent = linea;
        tarjeta.appendChild(item);
    });
}