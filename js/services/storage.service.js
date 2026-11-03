// guarda y lee en el navegador en qué unidad quedó el usuario
function guardarUnidadActual(clave, numero) {
    localStorage.setItem(clave, JSON.stringify(numero));
}

function leerUnidadActual(clave) {
    const guardado = localStorage.getItem(clave);
    if (guardado === null) {
        return null;
    }
    return JSON.parse(guardado);
}