// TP2: Vista 7: Rachas y Tienda
// dibuja el panel de racha: una línea por cada dato (las arma obtenerDatosRacha en el service)
function dibujarDatosRacha(lineas) {
    const panel = document.getElementById("panel-racha");
    panel.textContent = "";

    lineas.forEach((linea) => {
        const texto = document.createElement("p");
        texto.textContent = linea;
        panel.appendChild(texto);
    });
}

// TP2: Vista 7: Rachas y Tienda
// escribe el texto del saldo arriba de la tienda
function dibujarSaldo(texto) {
    document.getElementById("texto-saldo").textContent = texto;
}

// TP2: Vista 7: Rachas y Tienda
// llena un selector con sus opciones (se llama una sola vez, al abrir la página)
function dibujarOpcionesFiltro(idSelector, opciones) {
    const selector = document.getElementById(idSelector);
    selector.textContent = "";

    opciones.forEach((opcion) => {
        const elemento = document.createElement("option");
        elemento.setAttribute("value", opcion.valor);
        elemento.textContent = opcion.texto;
        selector.appendChild(elemento);
    });
}

// TP2: Vista 7: Rachas y Tienda
// lee qué eligió la persona en los dos selectores
function leerFiltrosTienda() {
    return {
        categoria: document.getElementById("filtro-categoria").value,
        mostrar: document.getElementById("filtro-mostrar").value
    };
}

// TP2: Vista 7: Rachas y Tienda
// cuando cambia cualquiera de los dos selectores se ejecuta la función que recibe
function conectarFiltrosTienda(alCambiar) {
    document.getElementById("filtro-categoria").addEventListener("change", alCambiar);
    document.getElementById("filtro-mostrar").addEventListener("change", alCambiar);
}

// TP2: Vista 7: Rachas y Tienda
// escribe el mensaje de resultado (canje hecho, ya canjeado o falta XP) y lo borra solo pasado el tiempo que recibe
// guardo el temporizador para cancelarlo si llega otro mensaje antes de que se borre el anterior
let temporizadorMensajeTienda;

function mostrarMensajeTienda(texto, duracion) {
    const mensaje = document.getElementById("mensaje-tienda");
    mensaje.textContent = texto;

    clearTimeout(temporizadorMensajeTienda);
    temporizadorMensajeTienda = setTimeout(() => {
        mensaje.textContent = "";
    }, duracion);
}

// TP2: Vista 7: Rachas y Tienda
// dibuja una tarjeta por cada elemento; si la lista está vacía muestra el mensaje que le toca
// canjes es la lista de ids ya canjeados y alCanjear es la función que se ejecuta al tocar el botón
function dibujarTienda(elementos, canjes, textoVacio, alCanjear) {
    const contenedor = document.getElementById("lista-tienda");
    contenedor.textContent = "";

    if (elementos.length === 0) {
        const vacio = document.createElement("p");
        vacio.textContent = textoVacio;
        contenedor.appendChild(vacio);
        return;
    }

    elementos.forEach((elemento) => {
        const tarjeta = document.createElement("section");
        tarjeta.classList.add("elemento-tienda");

        const titulo = document.createElement("h3");
        titulo.textContent = elemento.emoji + " " + elemento.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = elemento.descripcion;

        const precio = document.createElement("p");
        precio.textContent = "Precio: " + elemento.precio + " XP";

        const categoria = document.createElement("p");
        categoria.textContent = "Categoría: " + elemento.categoria;

        // el botón dice "Canjeado" si ya lo canjeó, pero se puede tocar igual y avisa que ya lo tiene
        const boton = document.createElement("button");
        boton.setAttribute("type", "button");
        boton.classList.add("boton");
        if (canjes.includes(elemento.id)) {
            boton.textContent = "Canjeado";
            boton.classList.add("canjeado");
        } else {
            boton.textContent = "Canjear";
        }
        boton.addEventListener("click", () => {
            alCanjear(elemento.id);
        });

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(categoria);
        tarjeta.appendChild(boton);
        contenedor.appendChild(tarjeta);
    });
}