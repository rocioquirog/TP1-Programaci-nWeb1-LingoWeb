// TP2: Vista 7: Rachas y Tienda
// archivo principal de Rachas y Tienda, es el último que carga el HTML

// TP2: Vista 7: Rachas y Tienda
// redibuja todo con los datos de ahora: barra de arriba, panel de racha, saldo y lista de la tienda
// la lista respeta lo que haya elegido la persona en los dos selectores
function actualizarPantallaTienda() {
    dibujarResumen(calcularExperiencia());
    dibujarRacha(textoRacha(calcularRacha()));
    dibujarDatosRacha(obtenerDatosRacha());
    dibujarSaldo(obtenerTextoSaldo());

    const filtros = leerFiltrosTienda();
    dibujarTienda(
        filtrarElementos(filtros.categoria, filtros.mostrar),
        obtenerCanjes(),
        obtenerTextoVacio(filtros.mostrar),
        canjearDesdeTienda
    );
}

// TP2: Vista 7: Rachas y Tienda
// se ejecuta al tocar un botón de la tienda: hace el canje, redibuja y muestra el mensaje del resultado
// el mensaje se escribe después de redibujar para que no se pierda
function canjearDesdeTienda(id) {
    const mensaje = canjearElemento(id);
    actualizarPantallaTienda();
    mostrarMensajeTienda(mensaje, duracionMensajeTienda);
}

// TP2: Vista 7: Rachas y Tienda
// los dos selectores se arman con los datos de initial-data.vista7.js
dibujarOpcionesFiltro("filtro-categoria", opcionesCategoriaTienda);
dibujarOpcionesFiltro("filtro-mostrar", opcionesMostrarTienda);

// TP2: Vista 7: Rachas y Tienda
// cada vez que cambia un selector se vuelve a dibujar la lista
conectarFiltrosTienda(actualizarPantallaTienda);

// TP2: Vista 7: Rachas y Tienda
// dibujo inicial
actualizarPantallaTienda();