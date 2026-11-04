// TP2: Vista 7: Rachas y Tienda
// lógica de la tienda: saldo, racha, filtros y canjes
// usa lo de vista3 (obtenerUsuarioActivo), lo de vista2 (calcularExperiencia, calcularRacha...) y lo de vista7 (datos, model y storage), que se cargan antes en el HTML

// armo la lista de elementos con los datos de initial-data.vista7.js
const elementosDeLaTienda = [];
elementosTienda.forEach((dato) => {
    elementosDeLaTienda.push(crearElementoTienda(dato.id, dato.emoji, dato.nombre, dato.descripcion, dato.precio, dato.categoria));
});

// TP2: Vista 7: Rachas y Tienda
// busca un elemento de la tienda por su id (si no existe devuelve undefined)
function buscarElementoTienda(id) {
    return elementosDeLaTienda.find((elemento) => elemento.id === id);
}

// TP2: Vista 7: Rachas y Tienda
// lista de ids que canjeó la persona activa (si no canjeó nada devuelve una lista vacía)
function obtenerCanjes() {
    const guardados = leerCanjes(obtenerUsuarioActivo());
    if (guardados === null) {
        return [];
    }
    return guardados;
}

// TP2: Vista 7: Rachas y Tienda
// XP gastados: suma los precios de todo lo que canjeó
function calcularGastado() {
    let total = 0;
    obtenerCanjes().forEach((id) => {
        const elemento = buscarElementoTienda(id);
        if (elemento !== undefined) {
            total = total + elemento.precio;
        }
    });
    return total;
}

// TP2: Vista 7: Rachas y Tienda
// saldo para canjear = XP acumulados menos XP gastados (nunca menor a 0)
function calcularSaldo() {
    const saldo = calcularExperiencia() - calcularGastado();
    if (saldo < 0) {
        return 0;
    }
    return saldo;
}

// TP2: Vista 7: Rachas y Tienda
// texto del saldo; si la cuenta no tiene actividad avisa que hay que completar una lección
function obtenerTextoSaldo() {
    if (cuentaSinActividad()) {
        return textoSinXPTienda;
    }
    return "Saldo para canjear: " + calcularSaldo() + " XP (acumulaste " + calcularExperiencia() + " XP y ya usaste " + calcularGastado() + " XP)";
}

// TP2: Vista 7: Rachas y Tienda
// arma las líneas del panel de racha: racha, escudo, meta diaria, XP ganados, lo que falta y la frase final
function obtenerDatosRacha() {
    const ganada = calcularExperienciaGanada();
    let lineaMeta = textoMetaCumplida;
    if (ganada < metaDiariaXP) {
        lineaMeta = "Te faltan " + (metaDiariaXP - ganada) + " XP para tu meta";
    }
    let textoEscudo = "sin canjear";
    if (obtenerCanjes().includes(idEscudoRacha)) {
        textoEscudo = "activo";
    }
    return [
        "🔥 Racha: " + textoRacha(calcularRacha()),
        "🛡️ Escudo de racha: " + textoEscudo,
        "🎯 Meta diaria: " + metaDiariaXP + " XP",
        "Ganaste: " + ganada + " XP",
        lineaMeta,
        textoFraseRacha
    ];
}

// TP2: Vista 7: Rachas y Tienda
// elementos que hay que mostrar según los dos selectores
// categoria: "todas" o el nombre de una categoría; mostrar: "todos", "canjeables" o "canjeados"
function filtrarElementos(categoria, mostrar) {
    const canjes = obtenerCanjes();
    const saldo = calcularSaldo();
    return elementosDeLaTienda.filter((elemento) => {
        if (categoria !== "todas" && elemento.categoria !== categoria) {
            return false;
        }
        const canjeado = canjes.includes(elemento.id);
        if (mostrar === "canjeables") {
            return !canjeado && elemento.precio <= saldo;
        }
        if (mostrar === "canjeados") {
            return canjeado;
        }
        return true;
    });
}

// TP2: Vista 7: Rachas y Tienda
// mensaje de lista vacía que le toca a la opción de "Mostrar" elegida
function obtenerTextoVacio(mostrar) {
    const opcion = opcionesMostrarTienda.find((item) => item.valor === mostrar);
    if (opcion === undefined) {
        return "";
    }
    return opcion.textoVacio;
}

// TP2: Vista 7: Rachas y Tienda
// intenta canjear un elemento y devuelve el mensaje con el resultado (ya canjeado, falta XP o listo)
function canjearElemento(id) {
    const elemento = buscarElementoTienda(id);
    if (elemento === undefined) {
        return "No encontramos ese elemento.";
    }
    const canjes = obtenerCanjes();
    if (canjes.includes(id)) {
        return "Ya canjeaste este elemento.";
    }
    const saldo = calcularSaldo();
    if (elemento.precio > saldo) {
        return "Te faltan " + (elemento.precio - saldo) + " XP para canjear " + elemento.nombre + ".";
    }
    canjes.push(id);
    guardarCanjes(obtenerUsuarioActivo(), canjes);
    return "Listo: canjeaste " + elemento.nombre + " por " + elemento.precio + " XP. Tu saldo ahora es " + calcularSaldo() + " XP.";
}