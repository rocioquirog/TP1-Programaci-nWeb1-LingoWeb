
const elementosDeLaTienda = [];
elementosTienda.forEach((dato) => {
    elementosDeLaTienda.push(crearElementoTienda(dato.id, dato.emoji, dato.nombre, dato.descripcion, dato.precio, dato.categoria));
});


function buscarElementoTienda(id) {
    return elementosDeLaTienda.find((elemento) => elemento.id === id);
}


function obtenerCanjes() {
    const guardados = leerCanjes(obtenerUsuarioActivo());
    if (guardados === null) {
        return [];
    }
    return guardados;
}

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


function calcularSaldo() {
    const saldo = calcularExperiencia() - calcularGastado();
    if (saldo < 0) {
        return 0;
    }
    return saldo;
}

function obtenerTextoSaldo() {
    if (cuentaSinActividad()) {
        return textoSinXPTienda;
    }
    return "Saldo para canjear: " + calcularSaldo() + " XP (acumulaste " + calcularExperiencia() + " XP y ya usaste " + calcularGastado() + " XP)";
}

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

function obtenerTextoVacio(mostrar) {
    const opcion = opcionesMostrarTienda.find((item) => item.valor === mostrar);
    if (opcion === undefined) {
        return "";
    }
    return opcion.textoVacio;
}

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