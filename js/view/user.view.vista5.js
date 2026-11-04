function dibujarPerfil(usuario) {
    const nombre = document.querySelector(".datos-principales h2");
    const correo = document.querySelector(".correo-usuario");
    const descripcion = document.querySelector(".descripcion-usuario");
    const avatar = document.querySelector(".avatar");

    const nombreCompleto = document.getElementById("perfil-nombre");
    const nombreUsuario = document.getElementById("perfil-usuario");
    const email = document.getElementById("perfil-email");

    if (nombre !== null) {
        nombre.textContent = usuario.nombre;
    }

    if (correo !== null) {
        correo.textContent = "@" + usuario.usuario;
    }

    if (descripcion !== null) {
        descripcion.textContent = "Miembro de LingoWeb";
    }

    if (avatar !== null) {
        avatar.textContent = usuario.nombre
            .split(" ")
            .map(function (palabra) {
                return palabra.charAt(0);
            })
            .slice(0, 2)
            .join("")
            .toUpperCase();
    }

    if (nombreCompleto !== null) {
        nombreCompleto.textContent = usuario.nombre;
    }

    if (nombreUsuario !== null) {
        nombreUsuario.textContent = "@" + usuario.usuario;
    }

    if (email !== null) {
        email.textContent = usuario.email;
    }
}

function dibujarIdioma(idioma) {
    const selector = document.getElementById("idioma");

    if (selector !== null) {
        selector.value = idioma;
    }
}


function conectarFormularioIdioma() {
    const formulario = document.getElementById("form-idioma");
    const selector = document.getElementById("idioma");

    if (formulario === null || selector === null) {
        return;
    }

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        guardarIdioma(selector.value);

        alert("El idioma se guardó correctamente.");
    });
}

function conectarFormularioContrasena() {
    const formulario = document.getElementById("form-contrasena");
    const campoNueva = document.getElementById("nueva-contrasena");

    if (formulario === null) {
        return;
    }

    if (campoNueva !== null) {
        campoNueva.addEventListener("input", function () {
            const requisitos = validarRequisitosContrasena(campoNueva.value);

            const elementos = {
                longitud: document.getElementById("perfil-longitud"),
                mayuscula: document.getElementById("perfil-mayuscula"),
                minuscula: document.getElementById("perfil-minuscula"),
                numero: document.getElementById("perfil-numero")
            };

            Object.keys(requisitos).forEach(function (requisito) {
                if (elementos[requisito]) {
                    elementos[requisito].classList.toggle(
                        "cumplido",
                        requisitos[requisito]
                    );
                }
            });
        });
    }

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const actual = document.getElementById("contrasena-actual").value;
        const nueva = document.getElementById("nueva-contrasena").value;
        const confirmar = document.getElementById("confirmar-contrasena").value;

        const mensaje = validarCambioContrasena(actual, nueva, confirmar);

        if (mensaje !== "") {
            alert(mensaje);
            return;
        }

        const actualizado = actualizarUsuarioActivo({
            contrasena: nueva
        });

        if (!actualizado) {
            alert("No se pudo actualizar la contraseña. Intentá nuevamente.");
            return;
        }

        alert("¡Tu contraseña se modificó correctamente!");

        mostrarMensaje(
            formulario,
            "¡Tu contraseña se modificó correctamente!",
            "exito"
        );

        formulario.reset();

        const elementos = [
            "perfil-longitud",
            "perfil-mayuscula",
            "perfil-minuscula",
            "perfil-numero"
        ];

        elementos.forEach(function (id) {
            document.getElementById(id).classList.remove("cumplido");
        });
    });
}