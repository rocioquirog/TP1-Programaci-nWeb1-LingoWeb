const CLAVE_USUARIOS = "usuarios";
const CLAVE_USUARIO_ACTIVO = "usuarioActivo";

function registrarUsuario(datos) {
    const usuarios = obtenerUsuarios();

    const usuarioExistente = buscarUsuarioPorNombre(datos.usuario);
    const emailExistente = buscarUsuarioPorEmail(datos.email);

    if (usuarioExistente) {
        return {
            ok: false,
            mensaje: "Ese nombre de usuario ya está ocupado."
        };
    }

    if (emailExistente) {
        return {
            ok: false,
            mensaje: "Ese correo ya está registrado."
        };
    }

    const nuevoUsuario = crearUsuarioModelo(datos);

    usuarios.push(nuevoUsuario);
    guardarUsuarios(usuarios);

    return {
        ok: true,
        usuario: nuevoUsuario
    };
}

function establecerUsuarioActivo(nombreUsuario) {
    localStorage.setItem("usuarioActivo", nombreUsuario);
}

function obtenerIdentificadorUsuarioActivo() {
    return localStorage.getItem("usuarioActivo");
}

function obtenerDatosUsuarioActivo() {
    const nombreUsuario = obtenerIdentificadorUsuarioActivo();

    if (!nombreUsuario) {
        return null;
    }

    return buscarUsuarioPorNombre(nombreUsuario);
}

function cerrarSesion() {
    localStorage.removeItem("usuarioActivo");
}

function obtenerUsuarios() {
    const datosGuardados = localStorage.getItem(CLAVE_USUARIOS);

    if (datosGuardados === null) {
        const usuarioPrueba = crearDatosInicialesUsuario({
            nombre: "Usuario Prueba",
            usuario: "prueba",
            email: "prueba@gmail.com",
            contrasena: "1234"
        });

        guardarUsuarios([usuarioPrueba]);
        return [usuarioPrueba];
    }

    let usuarios = JSON.parse(datosGuardados);

    usuarios = usuarios.map(function (usuario) {
        return {
            ...crearDatosInicialesUsuario(usuario),
            ...usuario
        };
    });

    guardarUsuarios(usuarios);

    return usuarios;
}

function guardarUsuarios(usuarios) {
    localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios));
}

function buscarUsuarioPorNombre(nombreUsuario) {
    const usuarios = obtenerUsuarios();

    return usuarios.find(function (usuario) {
        return usuario.usuario.toLowerCase() === nombreUsuario.toLowerCase();
    });
}

function buscarUsuarioPorEmail(email) {
    const usuarios = obtenerUsuarios();

    return usuarios.find(function (usuario) {
        return usuario.email.toLowerCase() === email.toLowerCase();
    });
}

function buscarUsuarioPorCredencial(credencial) {
    const usuarios = obtenerUsuarios();

    return usuarios.find(function (usuario) {
        return usuario.usuario.toLowerCase() === credencial.toLowerCase()
            || usuario.email.toLowerCase() === credencial.toLowerCase();
    });
}

function crearUsuario(datos) {
    const usuarios = obtenerUsuarios();

    const usuarioExistente = buscarUsuarioPorNombre(datos.usuario);
    const emailExistente = buscarUsuarioPorEmail(datos.email);

    if (usuarioExistente) {
        return {
            ok: false,
            mensaje: "Ese nombre de usuario ya está ocupado."
        };
    }

    if (emailExistente) {
        return {
            ok: false,
            mensaje: "Ese correo ya está registrado."
        };
    }

    const nuevoUsuario = crearDatosInicialesUsuario(datos);

    usuarios.push(nuevoUsuario);
    guardarUsuarios(usuarios);

    return {
        ok: true,
        usuario: nuevoUsuario
    };
}

function obtenerUsuarioActivo() {
    const nombreUsuario = localStorage.getItem(CLAVE_USUARIO_ACTIVO);

    if (!nombreUsuario) {
        return null;
    }

    return buscarUsuarioPorNombre(nombreUsuario) || null;
}

function establecerUsuarioActivo(nombreUsuario) {
    localStorage.setItem(CLAVE_USUARIO_ACTIVO, nombreUsuario);
}

function actualizarUsuarioActivo(cambios) {
    const usuarioActivo = obtenerUsuarioActivo();

    if (!usuarioActivo) {
        return false;
    }

    return actualizarUsuario(usuarioActivo.usuario, cambios);
}
