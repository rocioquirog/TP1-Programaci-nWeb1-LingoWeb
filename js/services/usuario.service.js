
const CLAVE_USUARIOS = "usuarios";

const CLAVE_USUARIO_ACTIVO = "usuarioActivo";

function obtenerUsuarios() {
    const datosGuardados = localStorage.getItem(CLAVE_USUARIOS);

    // Si todavía no hay usuarios guardados, crea una cuenta de prueba.
    if (datosGuardados === null) {
        const usuarioPrueba = crearUsuarioModelo({
            nombre: "Usuario Prueba",
            usuario: "prueba",
            email: "prueba@gmail.com",
            contrasena: "1234"
        });

        guardarUsuarios([usuarioPrueba]);

        return [usuarioPrueba];
    }

    const usuariosGuardados = JSON.parse(datosGuardados);

    // Completa los datos que puedan faltar en usuarios anteriores.
    const usuarios = usuariosGuardados.map(function (usuario) {
        return crearUsuarioModelo(usuario);
    });

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

    if (buscarUsuarioPorNombre(datos.usuario)) {
        return {
            ok: false,
            mensaje: "Ese nombre de usuario ya está ocupado."
        };
    }

    if (buscarUsuarioPorEmail(datos.email)) {
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



function actualizarUsuario(nombreUsuario, cambios) {
    const usuarios = obtenerUsuarios();

    const indice = usuarios.findIndex(function (usuario) {
        return usuario.usuario.toLowerCase() === nombreUsuario.toLowerCase();
    });

    if (indice === -1) {
        return false;
    }

    usuarios[indice] = crearUsuarioModelo({
        ...usuarios[indice],
        ...cambios,
        usuario: usuarios[indice].usuario
    });

    guardarUsuarios(usuarios);

    return true;
}



function establecerUsuarioActivo(nombreUsuario) {
    localStorage.setItem(CLAVE_USUARIO_ACTIVO, nombreUsuario);
}



function obtenerIdentificadorUsuarioActivo() {
    return localStorage.getItem(CLAVE_USUARIO_ACTIVO);
}



function obtenerDatosUsuarioActivo() {
    const nombreUsuario = obtenerIdentificadorUsuarioActivo();

    if (!nombreUsuario) {
        return null;
    }

    return buscarUsuarioPorNombre(nombreUsuario) || null;
}



function actualizarUsuarioActivo(cambios) {
    const usuarioActivo = obtenerDatosUsuarioActivo();

    if (!usuarioActivo) {
        return false;
    }

    return actualizarUsuario(usuarioActivo.usuario, cambios);
}



function cerrarSesion() {
    localStorage.removeItem(CLAVE_USUARIO_ACTIVO);
}