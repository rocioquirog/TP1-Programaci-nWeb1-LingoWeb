// TP2: Vista 6: Ranking de estudiantes
// dibuja las filas de la tabla según los XP de cada estudiante
function dibujarRanking(estudiantes) {
    const cuerpoTabla = document.querySelector("table tbody");
 
    if (cuerpoTabla === null) {
        return;
    }
 
    cuerpoTabla.textContent = "";
 
    estudiantes.forEach((estudiante, indice) => {
        const fila = document.createElement("tr");
        const celdaPuesto = document.createElement("td");
        const celdaEstudiante = document.createElement("td");
        const celdaXP = document.createElement("td");
 
        celdaPuesto.textContent = indice + 1;
 
        const avatar = document.createElement("span");
        avatar.classList.add("avatar-pequeño");
        avatar.textContent = estudiante.nombre.substring(0, 2).toUpperCase();
 
        const nombre = document.createElement("span");
        nombre.classList.add("usuario");
        nombre.textContent = estudiante.nombre;
 
        celdaEstudiante.classList.add("columna-estudiante");
        celdaEstudiante.appendChild(avatar);
        celdaEstudiante.appendChild(nombre);
 
        celdaXP.classList.add("columna-XP");
        celdaXP.textContent = estudiante.xp + " XP";
 
        fila.appendChild(celdaPuesto);
        fila.appendChild(celdaEstudiante);
        fila.appendChild(celdaXP);
 
        // destaca la fila de la cuenta activa
        if (estudiante.usuario.toLowerCase() === obtenerUsuarioRanking()) {
            fila.classList.add("usuario-actual");
        }
 
        // marca los puestos que ascienden
        if (indice < cantidadAscenso) {
            fila.classList.add("fila-ascenso");
        }
 
        // marca los puestos que descienden
        if (indice >= estudiantes.length - cantidadDescenso) {
            fila.classList.add("fila-descenso");
        }
 
        cuerpoTabla.appendChild(fila);
    });
}
 
// TP2: Vista 6: Ranking de estudiantes
// muestra la liga seleccionada en el encabezado
function dibujarNombreLiga(liga) {
    const encabezado = document.querySelector("main h1, main h2");
 
    if (encabezado !== null) {
        encabezado.textContent = "Liga de " + obtenerNombreLiga(liga);
    }
}
 
// TP2: Vista 6: Ranking de estudiantes
// conecta el selector para cambiar y guardar la liga
function conectarSelectorLiga() {
    const selector = document.getElementById("liga");
 
    if (selector === null) {
        return;
    }
 
    selector.value = obtenerLiga();
 
    selector.addEventListener("change", function() {
        guardarLiga(selector.value);
        actualizarRanking();
    });
}
 