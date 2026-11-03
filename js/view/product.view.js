// muestra u oculta las unidades y las flechas en la página
function mostrarUnidad(numero, total) {
    // primero oculto todas y después muestro solo la que toca
    for (let i = 1; i <= total; i++) {
        document.getElementById("unidad" + i).classList.add("oculta");
    }
    document.getElementById("unidad" + numero).classList.remove("oculta");

    const flechaIzq = document.getElementById("flecha-izq");
    const flechaDer = document.getElementById("flecha-der");

    // en la unidad 1 no hay flecha izquierda
    if (numero === 1) {
        flechaIzq.classList.add("oculta");
    } else {
        flechaIzq.classList.remove("oculta");
    }

    // en la última unidad no hay flecha derecha
    if (numero === total) {
        flechaDer.classList.add("oculta");
    } else {
        flechaDer.classList.remove("oculta");
    }
}

// cuando se hace clic en una flecha, ejecuta lo que le pasen
function conectarFlechas(alSiguiente, alAnterior) {
    document.getElementById("flecha-der").addEventListener("click", alSiguiente);
    document.getElementById("flecha-izq").addEventListener("click", alAnterior);
}