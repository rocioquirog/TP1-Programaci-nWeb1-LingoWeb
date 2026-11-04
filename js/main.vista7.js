
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


function canjearDesdeTienda(id) {
    const mensaje = canjearElemento(id);
    actualizarPantallaTienda();
    mostrarMensajeTienda(mensaje, duracionMensajeTienda);
}


dibujarOpcionesFiltro("filtro-categoria", opcionesCategoriaTienda);
dibujarOpcionesFiltro("filtro-mostrar", opcionesMostrarTienda);


conectarFiltrosTienda(actualizarPantallaTienda);


actualizarPantallaTienda();