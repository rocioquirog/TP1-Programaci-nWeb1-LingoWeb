const elementosTienda = [
    { id: "escudo-racha", emoji: "🛡️", nombre: "Escudo de racha", descripcion: "Protege tu racha si un día no completás ninguna lección.", precio: 50, categoria: "Racha" },
    { id: "recuperar-racha", emoji: "🔄", nombre: "Recuperar racha", descripcion: "Recuperá una racha que se cortó.", precio: 80, categoria: "Racha" },
    { id: "doble-xp", emoji: "✨", nombre: "Doble XP", descripcion: "Ganás el doble de XP en tu próxima lección.", precio: 60, categoria: "Potenciadores" },
    { id: "pista-extra", emoji: "💡", nombre: "Pista extra", descripcion: "Una pista para resolver un ejercicio difícil.", precio: 30, categoria: "Potenciadores" },
    { id: "vida-extra", emoji: "❤️", nombre: "Vida extra", descripcion: "Una oportunidad más para equivocarte en una lección.", precio: 40, categoria: "Potenciadores" },
    { id: "avatar-zorro", emoji: "🦊", nombre: "Avatar Zorro", descripcion: "Un avatar de zorro para tu perfil.", precio: 100, categoria: "Personalización" },
    { id: "avatar-buho", emoji: "🦉", nombre: "Avatar Búho", descripcion: "Un avatar de búho para tu perfil.", precio: 120, categoria: "Personalización" },
    { id: "marco-dorado", emoji: "🖼️", nombre: "Marco dorado", descripcion: "Un marco dorado para tu avatar.", precio: 150, categoria: "Personalización" }
];

const opcionesCategoriaTienda = [
    { valor: "todas", texto: "Todas" },
    { valor: "Racha", texto: "Racha" },
    { valor: "Potenciadores", texto: "Potenciadores" },
    { valor: "Personalización", texto: "Personalización" }
];


const opcionesMostrarTienda = [
    { valor: "todos", texto: "Todos", textoVacio: "No hay elementos para mostrar en esta categoría." },
    { valor: "canjeables", texto: "Los que puedo canjear", textoVacio: "No hay elementos que puedas canjear ahora en esta selección: ya los canjeaste o te falta XP." },
    { valor: "canjeados", texto: "Los que ya canjeé", textoVacio: "Todavía no canjeaste ningún elemento en esta selección." }
];


const prefijoClaveCanjes = "canjes-";


const idEscudoRacha = "escudo-racha";


const textoFraseRacha = "Tu racha suma un día por cada lección nueva que completás.";
const textoSinXPTienda = "Todavía no tenés XP para canjear. Completá tu primera lección para ganar experiencia.";

const duracionMensajeTienda = 1500;