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

const xpReal = calcularExperiencia(); 
const rachaReal = textoRacha(calcularRacha()); 

const navRacha = document.getElementById("perfil-nav-racha");
if (navRacha) {
    navRacha.textContent = rachaReal;
}

const navXp = document.getElementById("perfil-nav-xp");
if (navXp) {
    navXp.textContent = xpReal;
}

const logroRacha = document.getElementById("perfil-logro-racha");
if (logroRacha) {
    logroRacha.textContent = rachaReal;
}

const logroXp = document.getElementById("perfil-logro-xp");
if (logroXp) {
    logroXp.textContent = xpReal;
}