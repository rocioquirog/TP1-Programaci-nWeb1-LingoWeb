
function guardarCanjes(usuario, canjes) {
    localStorage.setItem(prefijoClaveCanjes + usuario, JSON.stringify(canjes));
}


function leerCanjes(usuario) {
    const guardado = localStorage.getItem(prefijoClaveCanjes + usuario);
    if (guardado === null) {
        return null;
    }
    return JSON.parse(guardado);
}