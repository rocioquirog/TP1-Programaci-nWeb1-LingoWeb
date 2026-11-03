// PROBLEMA QUE TUVE: con type="module" e import/export las flechas no andaban y en la
// consola salía un error de CORS con main.js. Pasa porque los módulos no cargan si la
// página se abre como file:/// (doble clic o copiar ruta).
// Cómo lo solucioné: saqué el import/export y cargo cada archivo con su propio <script>
// en el HTML, en orden (data, model, storage, service, view y al final main.js).
// Para estudiar: type="module", qué es CORS, file:// vs http:// y por qué importa
// el orden de los <script>

// archivo principal, es el último que carga el HTML
// junta la lógica (services) con lo que se ve (view)

// uso el título del curso para que cada idioma guarde su propia unidad
const clave = "unidadActual-" + document.querySelector("header h2").textContent;

function actualizar() {
    mostrarUnidad(obtenerUnidadActual(), obtenerTotalUnidades());
}

conectarFlechas(
    function () {
        irASiguiente(clave);
        actualizar();
    },
    function () {
        irAAnterior(clave);
        actualizar();
    }
);

cargarUnidadGuardada(clave);
actualizar();