function mostrarMensaje(formulario, texto, tipo) {
    let mensaje = formulario.nextElementSibling;

    if (!mensaje || !mensaje.classList.contains("mensaje-formulario")) {
        mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-formulario");
        formulario.insertAdjacentElement("afterend", mensaje);
    }

    mensaje.textContent = texto;
    mensaje.className = "mensaje-formulario " + tipo;
}

function mostrarConfirmacionRegistro() {

    const fondo = document.createElement("div");
    fondo.classList.add("fondo-modal");

    const modal = document.createElement("div");
    modal.classList.add("modal-confirmacion");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "titulo-confirmacion");

    const titulo = document.createElement("h2");
    titulo.id = "titulo-confirmacion";
    titulo.textContent = "¡Cuenta creada!";

    const texto = document.createElement("p");
    texto.textContent = "Tu registro se realizó correctamente. Ya podés comenzar a aprender.";

    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = "Ir al inicio de sesión";

    boton.addEventListener("click", function () {
        window.location.href = "login.html";
    });

    modal.appendChild(titulo);
    modal.appendChild(texto);
    modal.appendChild(boton);
    fondo.appendChild(modal);

    document.body.appendChild(fondo);

    boton.focus();
}

function mostrarConfirmacionRecuperacion() {
    const fondo = document.createElement("div");
    fondo.classList.add("fondo-modal");

    const modal = document.createElement("div");
    modal.classList.add("modal-confirmacion");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "titulo-confirmacion-recuperacion");

    const titulo = document.createElement("h2");
    titulo.id = "titulo-confirmacion-recuperacion";
    titulo.textContent = "¡Contraseña actualizada!";

    const texto = document.createElement("p");
    texto.textContent = "Tu contraseña se modificó correctamente. Ya podés iniciar sesión con tu nueva contraseña.";

    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = "Ir al inicio de sesión";

    boton.addEventListener("click", function () {
        window.location.href = "login.html";
    });

    modal.appendChild(titulo);
    modal.appendChild(texto);
    modal.appendChild(boton);
    fondo.appendChild(modal);

    document.body.appendChild(fondo);

    boton.focus();
}

function mostrarError(campo, texto) {
    const mensaje = document.getElementById("error-" + campo);

    if (mensaje) {
        mensaje.textContent = texto;
    }
}

function limpiarErrores(formulario) {
    const mensajes = formulario.querySelectorAll(".mensaje-error-campo");

    mensajes.forEach(function (mensaje) {
        mensaje.textContent = "";
    });
}

function actualizarRequisitosContrasena(contrasena, prefijo) {
    const requisitos = validarRequisitosContrasena(contrasena);

    const elementos = {
        longitud: document.getElementById(prefijo + "longitud"),
        mayuscula: document.getElementById(prefijo + "mayuscula"),
        minuscula: document.getElementById(prefijo + "minuscula"),
        numero: document.getElementById(prefijo + "numero")
    };

    Object.keys(requisitos).forEach(function (requisito) {
        if (elementos[requisito]) {
            elementos[requisito].classList.toggle(
                "cumplido",
                requisitos[requisito]
            );
        }
    });

    return Object.values(requisitos).every(Boolean);
}

const formularioLogin = document.getElementById("formulario-login");

if (formularioLogin) {
    formularioLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const credencial = document.getElementById("usuario").value.trim();
        const contrasena = document.getElementById("contrasena").value;

        if (!credencial || !contrasena) {
            mostrarMensaje(
                formularioLogin,
                "Completá todos los campos.",
                "error"
            );
            return;
        }

        const usuarioEncontrado = buscarUsuarioPorCredencial(credencial);

        if (!usuarioEncontrado || usuarioEncontrado.contrasena !== contrasena) {
            mostrarMensaje(
                formularioLogin,
                "El usuario o la contraseña son incorrectos.",
                "error"
            );
            return;
        }

        establecerUsuarioActivo(usuarioEncontrado.usuario);

        window.location.href = "../Dashboard/dashboard.html";
    });
}

const formularioRegistro = document.getElementById("formulario-registro");

if (formularioRegistro) {
    const campoContrasena = document.getElementById("contrasena");

    if (campoContrasena) {
        campoContrasena.addEventListener("input", function () {
            actualizarRequisitosContrasena(campoContrasena.value, "requisito-");
        });
    }

    formularioRegistro.addEventListener("submit", function (evento) {
        evento.preventDefault();

        limpiarErrores(formularioRegistro);

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const usuario = document.getElementById("usuario").value.trim();
        const contrasena = document.getElementById("contrasena").value;
        const confirmarContrasena = document.getElementById("confirmar-contrasena").value;

        let formularioValido = true;

        if (!nombre) {
            mostrarError("nombre", "Ingresá tu nombre.");
            formularioValido = false;
        }

        if (!email) {
            mostrarError("email", "Ingresá tu correo.");
            formularioValido = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            mostrarError("email", "Ingresá un correo válido.");
            formularioValido = false;
        }

        if (!usuario) {
            mostrarError("usuario", "Elegí un nombre de usuario.");
            formularioValido = false;
        }

        if (!contrasena) {
            mostrarError("contrasena", "Ingresá una contraseña.");
            formularioValido = false;
        } else if (!actualizarRequisitosContrasena(contrasena, "requisito-")) {
            mostrarError(
                "contrasena",
                "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número."
            );
            formularioValido = false;
        }

        if (!confirmarContrasena) {
            mostrarError(
                "confirmar-contrasena",
                "Confirmá tu contraseña."
            );
            formularioValido = false;
        } else if (contrasena !== confirmarContrasena) {
            mostrarError(
                "confirmar-contrasena",
                "Las contraseñas no coinciden."
            );
            formularioValido = false;
        }

        if (!formularioValido) {
            return;
        }

        const resultado = crearUsuario({
            nombre: nombre,
            email: email,
            usuario: usuario,
            contrasena: contrasena
        });

        if (!resultado.ok) {
            if (resultado.mensaje.includes("usuario")) {
                mostrarError("usuario", resultado.mensaje);
            } else {
                mostrarError("email", resultado.mensaje);
            }
            return;
        }

        mostrarConfirmacionRegistro();
    });
}

const formularioRecuperacion = document.getElementById("formulario-recuperacion");

if (formularioRecuperacion) {
    formularioRecuperacion.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const email = document.getElementById("email-recuperacion").value.trim();

        mostrarError("email-recuperacion", "");

        if (!email) {
            mostrarError("email-recuperacion", "Ingresá tu correo.");
            return;
        }

        const usuarioEncontrado = buscarUsuarioPorEmail(email);

        if (!usuarioEncontrado) {
            mostrarError(
                "email-recuperacion",
                "No encontramos una cuenta asociada a ese correo."
            );
            return;
        }

        localStorage.setItem("emailRecuperacion", usuarioEncontrado.email);

        window.location.href = "codigo-recuperacion.html";
    });
}

const formularioCodigo = document.getElementById("formulario-codigo");

if (formularioCodigo) {
    formularioCodigo.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const codigoIngresado = [
            "codigo1",
            "codigo2",
            "codigo3",
            "codigo4",
            "codigo5",
            "codigo6"
        ].map(function (id) {
            return document.getElementById(id).value;
        }).join("");

        if (codigoIngresado !== "123456") {
            mostrarMensaje(
                formularioCodigo,
                "El código ingresado es incorrecto.",
                "error"
            );
            return;
        }

        if (!localStorage.getItem("emailRecuperacion")) {
            mostrarMensaje(
                formularioCodigo,
                "Primero tenés que ingresar tu correo.",
                "error"
            );
            return;
        }

        window.location.href = "recuperacion.html";
    });
}

const formularioNuevaContrasena = document.getElementById("formulario-nueva-contrasena");

if (formularioNuevaContrasena) {
    const campoNuevaContrasena = document.getElementById("nueva-contrasena");

    if (campoNuevaContrasena) {
        campoNuevaContrasena.addEventListener("input", function () {
            actualizarRequisitosContrasena(
                campoNuevaContrasena.value,
                "recuperacion-"
            );
        });
    }

    formularioNuevaContrasena.addEventListener("submit", function (evento) {
        evento.preventDefault();

        limpiarErrores(formularioNuevaContrasena);

        const nuevaContrasena = document.getElementById("nueva-contrasena").value;
        const confirmarContrasena = document.getElementById("confirmar-nueva-contrasena").value;

        const email = localStorage.getItem("emailRecuperacion");

        if (!email) {
            mostrarMensaje(
                formularioNuevaContrasena,
                "El proceso de recuperación no es válido. Volvé a empezar.",
                "error"
            );
            return;
        }

        if (!actualizarRequisitosContrasena(
            nuevaContrasena,
            "recuperacion-"
        )) {
            mostrarError(
                "nueva-contrasena",
                "La contraseña no cumple con todos los requisitos."
            );
            return;
        }

        if (nuevaContrasena !== confirmarContrasena) {
            mostrarError(
                "confirmar-nueva-contrasena",
                "Las contraseñas no coinciden."
            );
            return;
        }

        const usuarioEncontrado = buscarUsuarioPorEmail(email);

        if (!usuarioEncontrado) {
            mostrarMensaje(
                formularioNuevaContrasena,
                "No encontramos la cuenta que querés recuperar.",
                "error"
            );
            return;
        }

        actualizarUsuario(usuarioEncontrado.usuario, {
            contrasena: nuevaContrasena
        });

        localStorage.removeItem("emailRecuperacion");

mostrarConfirmacionRecuperacion();
    });
}

const camposCodigo = document.querySelectorAll(".codigo input");

if (camposCodigo.length > 0) {
    camposCodigo.forEach(function (campo, indice) {
        campo.addEventListener("input", function () {
            campo.value = campo.value.replace(/[^0-9]/g, "").slice(0, 1);

            if (campo.value.length === 1 && indice < camposCodigo.length - 1) {
                camposCodigo[indice + 1].focus();
            }
        });

        campo.addEventListener("keydown", function (evento) {
            if (
                evento.key === "Backspace" &&
                campo.value === "" &&
                indice > 0
            ) {
                camposCodigo[indice - 1].focus();
            }
        });
    });
}
