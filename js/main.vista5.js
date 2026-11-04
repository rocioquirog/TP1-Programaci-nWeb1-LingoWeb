
console.log("javaScript de la vista 5 cargado correctamente");

dibujarPerfil(usuarioInicial);
dibujarIdioma(obtenerIdioma());
 
conectarFormularioIdioma();
conectarFormularioContrasena();

dibujarResumen(calcularExperiencia());
dibujarRacha(textoRacha(calcularRacha()));