
function dibujarDatosRacha(lineas) {
    const panel = document.getElementById("panel-racha");
    panel.textContent = "";

    lineas.forEach((linea) => {
        const texto = document.createElement("p");
        texto.textContent = linea;
        panel.appendChild(texto);
    });
}

function dibujarSaldo(texto) {
    document.getElementById("texto-saldo").textContent = texto;
}

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


function leerFiltrosTienda() {
    return {
        categoria: document.getElementById("filtro-categoria").value,
        mostrar: document.getElementById("filtro-mostrar").value
    };
}


function conectarFiltrosTienda(alCambiar) {
    document.getElementById("filtro-categoria").addEventListener("change", alCambiar);
    document.getElementById("filtro-mostrar").addEventListener("change", alCambiar);
}

let temporizadorMensajeTienda;

function mostrarMensajeTienda(texto, duracion) {
    const mensaje = document.getElementById("mensaje-tienda");
    mensaje.textContent = texto;

    clearTimeout(temporizadorMensajeTienda);
    temporizadorMensajeTienda = setTimeout(() => {
        mensaje.textContent = "";
    }, duracion);
}


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