
console.log("javaScript de la vista 5 cargado correctamente");

const usuarioActivo = obtenerDatosUsuarioActivo();

if (usuarioActivo) {
    dibujarPerfil(usuarioActivo);
} else {
    window.location.href = "../acceso/login.html";
}
dibujarIdioma(obtenerIdioma());
 
conectarFormularioIdioma();
conectarFormularioContrasena();

dibujarResumen(calcularExperiencia());
dibujarRacha(textoRacha(calcularRacha()));