
function dibujarRanking(estudiantes) {
    const cuerpoTabla = document.querySelector("table tbody");
 
    if (cuerpoTabla === null) {
        return;
    }
 
    cuerpoTabla.textContent = "";
 
    estudiantes.forEach((estudiante, indice) => {
 
        if (indice === cantidadAscenso) {
 
            const zonaAscenso = document.createElement("tr");
            zonaAscenso.classList.add("fila-ascenso");
 
            const textoAscenso = document.createElement("td");
            textoAscenso.setAttribute("colspan", "3");
            textoAscenso.textContent = "⬆ ZONA DE ASCENSO ⬆";
 
            zonaAscenso.appendChild(textoAscenso);
            cuerpoTabla.appendChild(zonaAscenso);
 
            const zonaDescenso = document.createElement("tr");
            zonaDescenso.classList.add("fila-descenso");
 
            const textoDescenso = document.createElement("td");
            textoDescenso.setAttribute("colspan", "3");
            textoDescenso.textContent = "⬇ ZONA DE DESCENSO ⬇";
 
            zonaDescenso.appendChild(textoDescenso);
            cuerpoTabla.appendChild(zonaDescenso);
        }
 
        const fila = document.createElement("tr");
        const celdaPuesto = document.createElement("td");
        const celdaEstudiante = document.createElement("td");
        const celdaXP = document.createElement("td");
 
        if (indice === 0) {
            celdaPuesto.textContent = "🥇";
        } else if (indice === 1) {
            celdaPuesto.textContent = "🥈";
        } else if (indice === 2) {
            celdaPuesto.textContent = "🥉";
        } else {
            celdaPuesto.textContent = indice + 1;
        }
 
      
        const avatar = document.createElement("span");
        avatar.classList.add("avatar-pequeño");
        avatar.textContent = estudiante.nombre.substring(0, 2).toUpperCase();
 
        
        const nombre = document.createElement("span");
        nombre.textContent = estudiante.nombre;
 
        celdaEstudiante.classList.add("columna-estudiante");
        celdaEstudiante.appendChild(avatar);
        celdaEstudiante.appendChild(nombre);
 
        
        celdaXP.classList.add("columna-XP");
        celdaXP.textContent = estudiante.xp + " XP";
 
        fila.appendChild(celdaPuesto);
        fila.appendChild(celdaEstudiante);
        fila.appendChild(celdaXP);
 
        if (estudiante.usuario.toLowerCase() === obtenerUsuarioRanking()) {
            fila.classList.add("usuario-actual");
        }
 
        if (indice < cantidadAscenso) {
            fila.classList.add("fila-ascenso");
        }
 
        if (indice >= estudiantes.length - cantidadDescenso) {
            fila.classList.add("fila-descenso");
        }
 
        cuerpoTabla.appendChild(fila);
    });
}
 
function dibujarNombreLiga(liga) {
    const nombre = document.getElementById("nombre-liga");
 
    if (nombre !== null) {
        nombre.textContent = "Liga de " + obtenerNombreLiga(liga);
    }
}
 
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
 