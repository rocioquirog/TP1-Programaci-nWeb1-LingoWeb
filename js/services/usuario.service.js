// Nombres de las claves utilizadas en localStorage.
const CLAVE_USUARIOS = "usuarios";
const CLAVE_USUARIO_ACTIVO = "usuarioActivo";


// Obtiene todos los usuarios registrados.
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


// Guarda la lista completa de usuarios.
function guardarUsuarios(usuarios) {
    localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios));
}


// Busca un usuario por su nombre de usuario.
function buscarUsuarioPorNombre(nombreUsuario) {
    const usuarios = obtenerUsuarios();

    return usuarios.find(function (usuario) {
        return usuario.usuario.toLowerCase() === nombreUsuario.toLowerCase();
    });
}


// Busca un usuario por su correo electrónico.
function buscarUsuarioPorEmail(email) {
    const usuarios = obtenerUsuarios();

    return usuarios.find(function (usuario) {
        return usuario.email.toLowerCase() === email.toLowerCase();
    });
}


// Busca una cuenta usando el nombre de usuario o el correo.
function buscarUsuarioPorCredencial(credencial) {
    const usuarios = obtenerUsuarios();

    return usuarios.find(function (usuario) {
        return usuario.usuario.toLowerCase() === credencial.toLowerCase()
            || usuario.email.toLowerCase() === credencial.toLowerCase();
    });
}


// Registra una cuenta nueva.
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


// Actualiza los datos de un usuario existente.
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


// Guarda qué usuario inició sesión.
function establecerUsuarioActivo(nombreUsuario) {
    localStorage.setItem(CLAVE_USUARIO_ACTIVO, nombreUsuario);
}


// Obtiene el nombre de usuario de la sesión actual.
function obtenerIdentificadorUsuarioActivo() {
    return localStorage.getItem(CLAVE_USUARIO_ACTIVO);
}


// Obtiene todos los datos del usuario que inició sesión.
function obtenerDatosUsuarioActivo() {
    const nombreUsuario = obtenerIdentificadorUsuarioActivo();

    if (!nombreUsuario) {
        return null;
    }

    return buscarUsuarioPorNombre(nombreUsuario) || null;
}


// Actualiza los datos de la cuenta que inició sesión.
function actualizarUsuarioActivo(cambios) {
    const usuarioActivo = obtenerDatosUsuarioActivo();

    if (!usuarioActivo) {
        return false;
    }

    return actualizarUsuario(usuarioActivo.usuario, cambios);
}


// Cierra la sesión actual.
function cerrarSesion() {
    localStorage.removeItem(CLAVE_USUARIO_ACTIVO);
}