function validarRequisitosContrasena(contrasena) {
    return {
        longitud: contrasena.length >= 8,
        mayuscula: /[A-Z]/.test(contrasena),
        minuscula: /[a-z]/.test(contrasena),
        numero: /[0-9]/.test(contrasena)
    };
}

function contrasenaValida(contrasena) {
    const requisitos = validarRequisitosContrasena(contrasena);

    return Object.values(requisitos).every(Boolean);
}