const ejerciciosAleman = [
        { curso: "Curso: Alemán desde Español", unidad: 1, leccion: 1, tema: "Frases Básicas", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "La mujer bebe agua.", banco: ["Die", "Frau", "trinkt", "Wasser", "Der", "Mann"], respuesta: ["Die", "Frau", "trinkt", "Wasser"] },
        { consigna: "Traduce esta frase", oracion: "Yo como pan.", banco: ["Ich", "esse", "Brot", "trinke", "Milch"], respuesta: ["Ich", "esse", "Brot"] }
    ]},
    { curso: "Curso: Alemán desde Español", unidad: 1, leccion: 2, tema: "Presentaciones", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Hola, mi nombre es Juan.", banco: ["Hallo", "mein", "Name", "ist", "Juan", "Tschüss"], respuesta: ["Hallo", "mein", "Name", "ist", "Juan"] },
        { consigna: "Traduce esta frase", oracion: "Yo soy de Argentina.", banco: ["Ich", "komme", "aus", "Argentinien", "Er", "kommt"], respuesta: ["Ich", "komme", "aus", "Argentinien"] }
    ]},
    { curso: "Curso: Alemán desde Español", unidad: 1, leccion: 3, tema: "Vocabulario de Familia", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Mi padre es alto.", banco: ["Mein", "Vater", "ist", "groß", "Mutter", "klein"], respuesta: ["Mein", "Vater", "ist", "groß"] },
        { consigna: "Traduce esta frase", oracion: "Mi madre es inteligente.", banco: ["Meine", "Mutter", "ist", "klug", "Bruder", "dumm"], respuesta: ["Meine", "Mutter", "ist", "klug"] }
    ]},
    { curso: "Curso: Alemán desde Español", unidad: 2, leccion: 1, tema: "Los Números", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Yo tengo dos perros.", banco: ["Ich", "habe", "zwei", "Hunde", "drei", "Katzen"], respuesta: ["Ich", "habe", "zwei", "Hunde"] },
        { consigna: "Traduce esta frase", oracion: "Ella tiene tres gatos.", banco: ["Sie", "hat", "drei", "Katzen", "Er", "vier"], respuesta: ["Sie", "hat", "drei", "Katzen"] }
    ]},
    { curso: "Curso: Alemán desde Español", unidad: 2, leccion: 2, tema: "Los Colores", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "El auto es rojo.", banco: ["Das", "Auto", "ist", "rot", "blau"], respuesta: ["Das", "Auto", "ist", "rot"] },
        { consigna: "Traduce esta frase", oracion: "El cielo es azul.", banco: ["Der", "Himmel", "ist", "blau", "grün", "Wolke"], respuesta: ["Der", "Himmel", "ist", "blau"] }
    ]},
    { curso: "Curso: Alemán desde Español", unidad: 2, leccion: 3, tema: "Días de la Semana", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Hoy es lunes.", banco: ["Heute", "ist", "Montag", "Freitag"], respuesta: ["Heute", "ist", "Montag"] },
        { consigna: "Traduce esta frase", oracion: "Mañana es martes.", banco: ["Morgen", "ist", "Dienstag", "gestern", "Sonntag"], respuesta: ["Morgen", "ist", "Dienstag"] }
    ]},
    { curso: "Curso: Alemán desde Español", unidad: 3, leccion: 1, tema: "Frutas y Verduras", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Yo como una manzana.", banco: ["Ich", "esse", "einen", "Apfel", "Banane"], respuesta: ["Ich", "esse", "einen", "Apfel"] },
        { consigna: "Traduce esta frase", oracion: "Me gustan las naranjas.", banco: ["Ich", "mag", "Orangen", "Äpfel", "hasse"], respuesta: ["Ich", "mag", "Orangen"] }
    ]},
    { curso: "Curso: Alemán desde Español", unidad: 3, leccion: 2, tema: "Bebidas", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Él bebe leche.", banco: ["Er", "trinkt", "Milch", "Wasser"], respuesta: ["Er", "trinkt", "Milch"] },
        { consigna: "Traduce esta frase", oracion: "Yo bebo agua fría.", banco: ["Ich", "trinke", "kaltes", "Wasser", "heißes", "Tee"], respuesta: ["Ich", "trinke", "kaltes", "Wasser"] }
    ]},
    { curso: "Curso: Alemán desde Español", unidad: 3, leccion: 3, tema: "En el Restaurante", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "La cuenta, por favor.", banco: ["Die", "Rechnung", "bitte", "Speisekarte"], respuesta: ["Die", "Rechnung", "bitte"] },
        { consigna: "Traduce esta frase", oracion: "Una mesa para dos.", banco: ["Ein", "Tisch", "für", "zwei", "Stuhl", "drei"], respuesta: ["Ein", "Tisch", "für", "zwei"] }
    ]},
    { curso: "Curso: Alemán desde Español", unidad: 4, leccion: 1, tema: "En el Aeropuerto", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Mi pasaporte está aquí.", banco: ["Mein", "Pass", "ist", "hier", "Ticket"], respuesta: ["Mein", "Pass", "ist", "hier"] },
        { consigna: "Traduce esta frase", oracion: "Mi vuelo está retrasado.", banco: ["Mein", "Flug", "hat", "Verspätung", "Zug", "früh"], respuesta: ["Mein", "Flug", "hat", "Verspätung"] }
    ]},
    { curso: "Curso: Alemán desde Español", unidad: 4, leccion: 2, tema: "En el Hotel", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Tengo una reserva.", banco: ["Ich", "habe", "eine", "Reservierung", "Zimmer"], respuesta: ["Ich", "habe", "eine", "Reservierung"] },
        { consigna: "Traduce esta frase", oracion: "Necesito una toalla.", banco: ["Ich", "brauche", "ein", "Handtuch", "Bett", "will"], respuesta: ["Ich", "brauche", "ein", "Handtuch"] }
    ]},
    { curso: "Curso: Alemán desde Español", unidad: 4, leccion: 3, tema: "Pedir Direcciones", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "¿Dónde está el baño?", banco: ["Wo", "ist", "die", "Toilette", "Straße"], respuesta: ["Wo", "ist", "die", "Toilette"] },
        { consigna: "Traduce esta frase", oracion: "Gira a la derecha.", banco: ["Biegen", "Sie", "rechts", "ab", "links"], respuesta: ["Biegen", "Sie", "rechts", "ab"] }
    ]},
    { curso: "Curso: Alemán desde Español", unidad: 5, leccion: 1, tema: "Mi Rutina", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Yo me levanto temprano.", banco: ["Ich", "wache", "früh", "auf", "schlafe"], respuesta: ["Ich", "wache", "früh", "auf"] },
        { consigna: "Traduce esta frase", oracion: "Yo trabajo todos los días.", banco: ["Ich", "arbeite", "jeden", "Tag", "spiele", "Woche"], respuesta: ["Ich", "arbeite", "jeden", "Tag"] }
    ]},
    { curso: "Curso: Alemán desde Español", unidad: 5, leccion: 2, tema: "Pasatiempos", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Me gusta leer.", banco: ["Ich", "lese", "gerne", "spiele"], respuesta: ["Ich", "lese", "gerne"] },
        { consigna: "Traduce esta frase", oracion: "Yo juego al fútbol.", banco: ["Ich", "spiele", "Fußball", "sehe", "Tennis"], respuesta: ["Ich", "spiele", "Fußball"] }
    ]},
    { curso: "Curso: Alemán desde Español", unidad: 5, leccion: 3, tema: "El Clima", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Hace mucho frío.", banco: ["Es", "ist", "sehr", "kalt", "warm"], respuesta: ["Es", "ist", "sehr", "kalt"] },
        { consigna: "Traduce esta frase", oracion: "Hoy está soleado.", banco: ["Heute", "ist", "es", "sonnig", "regnet"], respuesta: ["Heute", "ist", "es", "sonnig"] }
    ]}
];