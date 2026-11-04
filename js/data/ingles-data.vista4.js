const ejerciciosIngles = [
    { curso: "Curso: Inglés desde Español", unidad: 1, leccion: 1, tema: "Frases Básicas", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Yo como pan.", banco: ["I", "eat", "bread", "water", "drinks"], respuesta: ["I", "eat", "bread"] },
        { consigna: "Traduce esta frase", oracion: "La mujer bebe agua.", banco: ["The", "woman", "drinks", "water", "man"], respuesta: ["The", "woman", "drinks", "water"] }
    ]},
    { curso: "Curso: Inglés desde Español", unidad: 1, leccion: 2, tema: "Presentaciones", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Hola, mi nombre es Juan.", banco: ["Hello", "my", "name", "is", "Juan", "Goodbye"], respuesta: ["Hello", "my", "name", "is", "Juan"] },
        { consigna: "Traduce esta frase", oracion: "Yo soy de Argentina.", banco: ["I", "am", "from", "Argentina", "He", "is"], respuesta: ["I", "am", "from", "Argentina"] }
    ]},
    { curso: "Curso: Inglés desde Español", unidad: 1, leccion: 3, tema: "Vocabulario de Familia", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Mi padre es alto.", banco: ["My", "father", "is", "tall", "mother", "short"], respuesta: ["My", "father", "is", "tall"] },
        { consigna: "Traduce esta frase", oracion: "Mi madre es inteligente.", banco: ["My", "mother", "is", "smart", "brother", "dumb"], respuesta: ["My", "mother", "is", "smart"] }
    ]},
    { curso: "Curso: Inglés desde Español", unidad: 2, leccion: 1, tema: "Los Números", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Yo tengo dos perros.", banco: ["I", "have", "two", "dogs", "three", "cats"], respuesta: ["I", "have", "two", "dogs"] },
        { consigna: "Traduce esta frase", oracion: "Ella tiene tres gatos.", banco: ["She", "has", "three", "cats", "He", "four"], respuesta: ["She", "has", "three", "cats"] }
    ]},
    { curso: "Curso: Inglés desde Español", unidad: 2, leccion: 2, tema: "Los Colores", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "El auto es rojo.", banco: ["The", "car", "is", "red", "blue", "bus"], respuesta: ["The", "car", "is", "red"] },
        { consigna: "Traduce esta frase", oracion: "El cielo es azul.", banco: ["The", "sky", "is", "blue", "green", "cloud"], respuesta: ["The", "sky", "is", "blue"] }
    ]},
    { curso: "Curso: Inglés desde Español", unidad: 2, leccion: 3, tema: "Días de la Semana", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Hoy es lunes.", banco: ["Today", "is", "Monday", "Friday", "tomorrow"], respuesta: ["Today", "is", "Monday"] },
        { consigna: "Traduce esta frase", oracion: "Mañana es martes.", banco: ["Tomorrow", "is", "Tuesday", "yesterday", "Sunday"], respuesta: ["Tomorrow", "is", "Tuesday"] }
    ]},
    { curso: "Curso: Inglés desde Español", unidad: 3, leccion: 1, tema: "Frutas y Verduras", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Yo como una manzana.", banco: ["I", "eat", "an", "apple", "banana", "drink"], respuesta: ["I", "eat", "an", "apple"] },
        { consigna: "Traduce esta frase", oracion: "Me gustan las naranjas.", banco: ["I", "like", "oranges", "apples", "hate"], respuesta: ["I", "like", "oranges"] }
    ]},
    { curso: "Curso: Inglés desde Español", unidad: 3, leccion: 2, tema: "Bebidas", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Él bebe leche.", banco: ["He", "drinks", "milk", "water", "she"], respuesta: ["He", "drinks", "milk"] },
        { consigna: "Traduce esta frase", oracion: "Yo bebo agua fría.", banco: ["I", "drink", "cold", "water", "hot", "tea"], respuesta: ["I", "drink", "cold", "water"] }
    ]},
    { curso: "Curso: Inglés desde Español", unidad: 3, leccion: 3, tema: "En el Restaurante", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "La cuenta, por favor.", banco: ["The", "bill", "please", "menu", "table"], respuesta: ["The", "bill", "please"] },
        { consigna: "Traduce esta frase", oracion: "Una mesa para dos.", banco: ["A", "table", "for", "two", "chair", "three"], respuesta: ["A", "table", "for", "two"] }
    ]},
    { curso: "Curso: Inglés desde Español", unidad: 4, leccion: 1, tema: "En el Aeropuerto", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Mi pasaporte está aquí.", banco: ["My", "passport", "is", "here", "ticket"], respuesta: ["My", "passport", "is", "here"] },
        { consigna: "Traduce esta frase", oracion: "Mi vuelo está retrasado.", banco: ["My", "flight", "is", "delayed", "train", "early"], respuesta: ["My", "flight", "is", "delayed"] }
    ]},
    { curso: "Curso: Inglés desde Español", unidad: 4, leccion: 2, tema: "En el Hotel", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Tengo una reserva.", banco: ["I", "have", "a", "reservation", "room"], respuesta: ["I", "have", "a", "reservation"] },
        { consigna: "Traduce esta frase", oracion: "Necesito una toalla.", banco: ["I", "need", "a", "towel", "want", "bed"], respuesta: ["I", "need", "a", "towel"] }
    ]},
    { curso: "Curso: Inglés desde Español", unidad: 4, leccion: 3, tema: "Pedir Direcciones", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "¿Dónde está el baño?", banco: ["Where", "is", "the", "bathroom", "street"], respuesta: ["Where", "is", "the", "bathroom"] },
        { consigna: "Traduce esta frase", oracion: "Gira a la derecha.", banco: ["Turn", "right", "left", "go", "straight"], respuesta: ["Turn", "right"] }
    ]},
    { curso: "Curso: Inglés desde Español", unidad: 5, leccion: 1, tema: "Mi Rutina", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Yo me levanto temprano.", banco: ["I", "wake", "up", "early", "sleep"], respuesta: ["I", "wake", "up", "early"] },
        { consigna: "Traduce esta frase", oracion: "Yo trabajo todos los días.", banco: ["I", "work", "every", "day", "play", "week"], respuesta: ["I", "work", "every", "day"] }
    ]},
    { curso: "Curso: Inglés desde Español", unidad: 5, leccion: 2, tema: "Pasatiempos", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Me gusta leer.", banco: ["I", "like", "to", "read", "play"], respuesta: ["I", "like", "to", "read"] },
        { consigna: "Traduce esta frase", oracion: "Yo juego al fútbol.", banco: ["I", "play", "soccer", "watch", "tennis"], respuesta: ["I", "play", "soccer"] }
    ]},
    { curso: "Curso: Inglés desde Español", unidad: 5, leccion: 3, tema: "El Clima", ejercicios: [
        { consigna: "Traduce esta frase", oracion: "Hace mucho frío.", banco: ["It", "is", "very", "cold", "hot"], respuesta: ["It", "is", "very", "cold"] },
        { consigna: "Traduce esta frase", oracion: "Hoy está soleado.", banco: ["Today", "is", "sunny", "raining", "tomorrow"], respuesta: ["Today", "is", "sunny"] }
    ]}
];