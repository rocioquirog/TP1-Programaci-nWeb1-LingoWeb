// TP2: Vista 7: Rachas y Tienda
// guarda en el navegador la lista de elementos que canjeó un usuario (una lista de ids)
function guardarCanjes(usuario, canjes) {
    localStorage.setItem(prefijoClaveCanjes + usuario, JSON.stringify(canjes));
}

// TP2: Vista 7: Rachas y Tienda
// lee la lista de canjes de un usuario (si no hay nada guardado devuelve null)
function leerCanjes(usuario) {
    const guardado = localStorage.getItem(prefijoClaveCanjes + usuario);
    if (guardado === null) {
        return null;
    }
    return JSON.parse(guardado);
}