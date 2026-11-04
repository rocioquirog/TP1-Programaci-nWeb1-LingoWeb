// TP2: Vista 7: Rachas y Tienda
// arma un elemento de la tienda con sus datos (lo usa product.service.vista7.js)
function crearElementoTienda(id, emoji, nombre, descripcion, precio, categoria) {
    return {
        id: id,
        emoji: emoji,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        categoria: categoria
    };
}