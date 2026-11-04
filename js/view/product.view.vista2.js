
function dibujarCursos(cursos, obtenerProgreso, obtenerTexto) {
    const contenedor = document.getElementById("lista-cursos");
    contenedor.textContent = "";

    cursos.forEach((curso) => {
        const tarjeta = document.createElement("section");
        tarjeta.classList.add("tarjeta-curso");

    
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


function dibujarResumen(experiencia) {
    document.getElementById("resumen-xp").textContent = "⚡ " + experiencia + " XP";
}


function mostrarEstadoInicial(titulo, texto, textoEnlace, mapa) {
    document.getElementById("titulo-estado-inicial").textContent = titulo;
    document.getElementById("texto-estado-inicial").textContent = texto;

    const enlace = document.getElementById("enlace-estado-inicial");
    enlace.textContent = textoEnlace;
    enlace.setAttribute("href", mapa);

    document.getElementById("estado-inicial").classList.remove("oculta");
}


function dibujarRacha(texto) {
    document.getElementById("resumen-racha").textContent = "🔥 " + texto;
}


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