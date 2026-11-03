// acá está la lógica: en qué unidad estamos y cómo pasar a la siguiente o a la anterior
// usa lo de initial-data.js, product.model.js y storage.service.js (se cargan antes en el HTML)

// armo la lista de unidades con los datos de initial-data.js
const unidades = [];
unidadesIniciales.forEach((dato) => {
    unidades.push(crearUnidad(dato.numero, dato.nombre));
});

let unidadActual = 1;

function obtenerTotalUnidades() {
    return unidades.length;
}

function obtenerUnidadActual() {
    return unidadActual;
}

// si había una unidad guardada, arranca en esa
function cargarUnidadGuardada(clave) {
    const guardada = leerUnidadActual(clave);
    if (guardada !== null && guardada >= 1 && guardada <= unidades.length) {
        unidadActual = guardada;
    }
}

function irASiguiente(clave) {
    if (unidadActual < unidades.length) {
        unidadActual++;
        guardarUnidadActual(clave, unidadActual);
    }
}

function irAAnterior(clave) {
    if (unidadActual > 1) {
        unidadActual--;
        guardarUnidadActual(clave, unidadActual);
    }
}