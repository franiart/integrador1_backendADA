///////////////////////////////////////////
// 1. Estructura de Datos
//////////////////////////////////////////
/*
Crear un array de objetos llamado libros que contenga al menos 10
libros. Cada libro debe tener las siguientes propiedades:
✓ id (número)
✓ título (string),
✓ autor (string),
✓ año (número),
✓ género (string),
✓ disponible (booleano).
*/

const libros = [
    {
        id: 1,
        titulo: " El Señor de los Anillos ",
        autor: "J.R.R. Tolkien",
        año: 1954,
        genero: "Fantasía",
        disponible: true
    },

    {
        id: 2,
        titulo: " El Código Da Vinci ",
        autor: "Dan Brown",
        año: 2003,
        genero: "Misterio",
        disponible: true
    },

    {
        id: 3,
        titulo: " El Padrino ",
        autor: "Mario Puzo",
        año: 1969,
        genero: "Drama",
        disponible: true
    },

    {
        id: 4,
        titulo: " El Nombre del Viento ",
        autor: "Patrick Rothfuss",
        año: 2007,
        genero: "Fantasía",
        disponible: true
    },
    {
        id: 7,
        titulo: "   1984  ",
        autor: "George Orwell",
        anio: 1949,
        genero: "Distopía",
        disponible: false
    },
    {
        id: 8,
        titulo: " El Hobbit ",
        autor: "J.R.R. Tolkien",
        anio: 1937,
        genero: "Fantasía",
        disponible: true
    },
    {
        id: 9,
        titulo: " Fahrenheit 451 ",
        autor: "Ray Bradbury",
        anio: 1953,
        genero: "Distopía",
        disponible: false
    },
    {
        id: 10,
        titulo: " Guerra y paz ",
        autor: "León Tolstói",
        anio: 1869,
        genero: "Novela histórica",
        disponible: true
    },

    {
        id: 11,
        titulo: " JavaScript: The Good Parts ",
        autor: "Douglas Crockford",
        anio: 2008,
        genero: "Programación",
        disponible: true
    },

    {
        id: 12,
        titulo: " Eloquent JavaScript, 3rd Edition ",
        autor: "Marijn Haverbeke",
        anio: 2018,
        genero: "Programación",
        disponible: true
    },

    {
        id: 13,
        titulo: " You Don't Know JS: ES6 & Beyond ",
        autor: "Kyle Simpson",
        anio: 2015,
        genero: "Programación",
        disponible: true
    },

    {
        id: 14,
        titulo: "Clean Code: A Handbook of Agile Software Craftsmanship",
        autor: "Robert C. Martin",
        anio: 2008,
        genero: "Programación",
        disponible: true
    },

    {
        id: 15,
        titulo: "The Pragmatic Programmer: Your Journey to Mastery",
        autor: "Andrew Hunt, David Thomas",
        anio: 1999,
        genero: "Programación",
        disponible: true
    }
];


/*
Crear un array de objetos llamado usuarios con al menos 5 usuarios.
Cada usuario debe tener:
✓ id (número)
✓ nombre (string)
✓ email (string)
✓ librosPrestados (array de ids de libros).
*/

let usuarios = [
    {
        id: 1,
        nombre: "Tony",
        email: "tony@gmail.com",
        librosPrestados: [1, 5]
    },

    {
        id: 2,
        nombre: "Magenta",
        email: "magenta@gmail.com",
        librosPrestados: [2, 6]
    },

    {
        id: 3,
        nombre: "Daniel",
        email: "daniel@gmail.com",
        librosPrestados: [4, 8]
    },

    {
        id: 4,
        nombre: "Luis",
        email: "luis@gmail.com",
        librosPrestados: [9, 10]
    },

    {
        id: 5,
        nombre: "Ana",
        email: "ana@gmail.com",
        librosPrestados: []
    },

    {
        id: 6,
        nombre: "Carlos",
        email: "carlos@gmail.com",
        librosPrestados: [3]
    },

    {
        id: 7,
        nombre: "Sofia",
        email: "sofia@gmail.com",
        librosPrestados: [7]
    },

    {
        id: 8,
        nombre: "Juan",
        email: "juan@gmail.com",
        librosPrestados: [11]
    },

    {
        id: 9,
        nombre: "Lucia",
        email: "lucia@gmail.com",
        librosPrestados: [12, 13]
    },

    {
        id: 10,
        nombre: "Pedro",
        email: "pedro@gmail.com",
        librosPrestados: [14]
    }
];

