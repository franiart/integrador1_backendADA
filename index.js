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
        anio: 1954,
        genero: "Fantasía",
        disponible: true
    },

    {
        id: 2,
        titulo: " El Código Da Vinci ",
        autor: "Dan Brown",
        anio: 2003,
        genero: "Misterio",
        disponible: true
    },

    {
        id: 3,
        titulo: " El Padrino ",
        autor: "Mario Puzo",
        anio: 1969,
        genero: "Drama",
        disponible: true
    },

    {
        id: 4,
        titulo: " El Nombre del Viento ",
        autor: "Patrick Rothfuss",
        anio: 2007,
        genero: "Fantasía",
        disponible: false
    },
    {
        id: 5,
        titulo: " 1984 ",
        autor: "George Orwell",
        anio: 1949,
        genero: "Distopía",
        disponible: false
    },
    {
        id: 6,
        titulo: " El Hobbit ",
        autor: "J.R.R. Tolkien",
        anio: 1937,
        genero: "Fantasía",
        disponible: true
    },
    {
        id: 7,
        titulo: " Fahrenheit 451 ",
        autor: "Ray Bradbury",
        anio: 1953,
        genero: "Distopía",
        disponible: false
    },
    {
        id: 8,
        titulo: " Guerra y paz ",
        autor: "León Tolstói",
        anio: 1869,
        genero: "Novela histórica",
        disponible: true
    },

    {
        id: 9,
        titulo: " JavaScript: The Good Parts ",
        autor: "Douglas Crockford",
        anio: 2008,
        genero: "Programación",
        disponible: true
    },

    {
        id: 10,
        titulo: " Eloquent JavaScript, 3rd Edition ",
        autor: "Marijn Haverbeke",
        anio: 2018,
        genero: "Programación",
        disponible: true
    },

    {
        id: 11,
        titulo: " You Don't Know JS: ES6 & Beyond ",
        autor: "Kyle Simpson",
        anio: 2015,
        genero: "Programación",
        disponible: true
    },

    {
        id: 12,
        titulo: " Clean Code: A Handbook of Agile Software Craftsmanship ",
        autor: "Robert C. Martin",
        anio: 2008,
        genero: "Programación",
        disponible: true
    },

    {
        id: 13,
        titulo: " The Pragmatic Programmer: Your Journey to Mastery ",
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


///////////////////////////////////////////
// 2. Funciones de Gestión de Libros
//////////////////////////////////////////

/*
Implementar una función agregarLibro(id, titulo, autor, anio, genero)
que agregue un nuevo libro al array libros.
*/
const agregarLibro = (id, titulo, autor, anio, genero) => libros.push({id, titulo, autor, anio, genero});
console.log(agregarLibro(16, "hora loca", "juan carlos", 1678, "ficcion"));

/*
Crear una función buscarLibro(criterio, valor) que permita buscar
libros por título, autor o género utilizando el algoritmo de búsqueda
lineal.
*/
const buscarLibro = (criterio, valor) => libros.find(libro => libro[criterio] === valor);
console.log(buscarLibro("titulo", "hora loca"));

/*
Desarrollar una función ordenarLibros(criterio) que ordene los libros
por título o año utilizando el algoritmo de ordenamiento burbuja
(bubble sort) y luego muestre los libros ordenados en la consola.
*/
const ordenarLibros = (criterio) => {
    for (let i = 0; i < libros.length - 1; i++) {
        for (let j = 0; j < libros.length - i - 1; j++) {
            if (criterio === 'titulo') {
                if (libros[j].titulo.toLowerCase() > libros[j + 1].titulo.toLowerCase()) {
                    let temp = libros[j];
                    libros[j] = libros[j + 1];
                    libros[j + 1] = temp;
                }
            } else if (criterio === 'anio') {
                if (libros[j].anio > libros[j + 1].anio) {
                    let temp = libros[j];
                    libros[j] = libros[j + 1];
                    libros[j + 1] = temp;
                }
            }
        }
    }
    
    return libros
}

console.log(ordenarLibros("titulo"));

/*
Desarrollar una función borrarLibro(id) que elimine el libro que se le
pase por parámetro.
*/
const borrarLibro = (id) => {
    const index = libros.map(libro => libro.id).indexOf(id);
    if (index !== -1) {
        libros.splice(index, 1);
        console.log(`El libro con id ${id} ha sido eliminado`);
    } else {
        console.log(`El libro con id ${id} no se ha encontrado`);
    }

    return libros
}

console.log(borrarLibro(5));

///////////////////////////////////////////
// 3. Gestión de Usuarios
//////////////////////////////////////////

/*
Implementar una función registrarUsuario(nombre, email) que
agregue un nuevo usuario al array usuarios.
*/
const registrarUsuario = (nombre, email) => usuarios.push({nombre, email});

/*
Implementar una función mostrarTodosLosUsuarios() que me
devuelva el array completo de usuarios
*/
const mostrarTodosLosUsuarios = (usuarios) => usuarios

/*
Crear una función buscarUsuario(email) que devuelva la información
de un usuario dado su email.
*/
const buscarUsuario = (email) => usuarios.find(usuario => usuario.email === email);

/*
Implementar una función borrarUsuario(nombre, email) que elimine el
usuario seleccionado.
*/
const borrarUsuario = (nombre, email) => {
    const index = usuarios.findIndex(usuario => usuario.nombre === nombre && usuario.email === email);
    if (index !== -1) {
        usuarios.splice(index, 1);
        console.log(`El usuario ${nombre} con email ${email} ha sido eliminado`);
    } else {
        console.log(`El usuario ${nombre} con email ${email} no se ha encontrado`);
    }
}

///////////////////////////////////////////
// 4. Sistema de Préstamos
//////////////////////////////////////////

/*
Desarrollar una función prestarLibro(idLibro, idUsuario) que marque
un libro como no disponible y lo agregue a la lista de libros prestados
del usuario.
*/
const prestarLibro = (idLibro, idUsuario) => {
    const book = libros.find(libro => libro.id === idLibro);
    const user = usuarios.find(usuario => usuario.id === idUsuario);
    
    if (book.disponible){
        book.disponible = false;
        user.librosPrestados.push(idLibro);
        console.log(`El libro ${book.titulo} ha sido prestado al usuario ${user.nombre}`);
    } else {
        console.log(`El libro ${book.titulo} ya está prestado`);
    }
}

/*
Implementar una función devolverLibro(idLibro, idUsuario) que
marque un libro como disponible y lo elimine de la lista de libros
prestados del usuario.
*/

const devolverLibro = (idLibro, idUsuario) => {
    const book = libros.find(libro => libro.id === idLibro);
    const user = usuarios.find(usuario => usuario.id === idUsuario);

    if(!book.disponible){
        book.disponible = true;
        user.librosPrestados = user.librosPrestados.splice(idLibro, 1);
        return `El libro ${book.titulo} ha sido devuelto por el usuario ${user.nombre}`;
    } else {
        return `El libro ${book.titulo} ya está disponible`;
    }
}

///////////////////////////////////////////
// 5. Reportes
//////////////////////////////////////////
/*
Crear una función generarReporteLibros() que utilice métodos
avanzados de arrays (.map(), .filter(), .reduce()) para generar un
reporte con la siguiente información:
✓ Cantidad total de libros.
✓ Cantidad de libros prestados.
✓ Cantidad de libros por género.
✓ Libro más antiguo y más nuevo.
*/

const generarReporteLibros = () => {
    const librosPrestados = libros.filter(libro => !libro.disponible);

    const totalLibrosPrestados = librosPrestados.length;

    const totalLibros = libros.length;

    const librosPorGenero = libros.reduce((acc, libro) => {
            acc[libro.genero] = (acc[libro.genero] || 0);
            acc[libro.genero]++;
            return acc;
    }, {});

    const libroMasAntiguo = libros.reduce((libroAntiguo, libroActual) => libroAntiguo.anio < libroActual.anio ? libroAntiguo: libroActual);
    
    const libroMasNuevo = libros.reduce((libroNuevo, libroActual) => libroNuevo.anio > libroActual.anio ? libroNuevo: libroActual);

    return {
        librosPrestados,
        totalLibrosPrestados,
        totalLibros,
        librosPorGenero,
        libroMasAntiguo,
        libroMasNuevo
    }
}

console.log(generarReporteLibros());

///////////////////////////////////////////
// 6. Identificación Avanzada de libros
//////////////////////////////////////////

/*
Implementar una función librosConPalabrasEnTitulo() que identifique
y muestre todos los libros cuyo título contiene más de una palabra
(no títulos que contengan números ni otros caracteres).
*/

const librosConPalabrasEnTitulo = () => {

    const titulosLibros =  libros.filter(libro => {
        const titulo = libro.titulo;

        const sinCaracteresEspeciales =  titulo.trim().match(/^[a-zA-Z\s]+$/g);

        const palabras = titulo.trim().split(' ');

        return sinCaracteresEspeciales && palabras.length > 1;
    });

/*
La función debe devolver un array con los títulos de esos libros y
mostrarlo en la consola.
*/
    return titulosLibros.map(libro => libro.titulo);
}

console.log(librosConPalabrasEnTitulo());


///////////////////////////////////////////
// 7. Cálculos Estadísticos
//////////////////////////////////////////

/*
a) Desarrollar una función calcularEstadisticas() que utilice el objeto
Math para calcular y mostrar:
✓ Promedio de años de publicación de los libros.
✓ Año de publicación más frecuente.
✓ Diferencia en años entre el libro más antiguo y el más nuevo.
*/

const calcularEstadisticas = () => {

    const aniosPublicacion = libros.map(libro => libro.anio);

    // Calculando el promedio de años de publicación
    const sumaAñosPublicacion = aniosPublicacion.reduce((acum, anio) => acum = acum + anio);
    const promedioAñosPublicacion = Math.round(sumaAñosPublicacion / aniosPublicacion.length);
    
    // Calculando el año de publicación más frecuente
    const anioMasFrecuente = aniosPublicacion.reduce((acum, anio) => {
        acum[anio] = (acum[anio] || 0) + 1;
        return acum;
    });

    // Diferencia en años entre el libro más antiguo y el más nuevo
    const anioMasAntiguo = Math.min(...aniosPublicacion);
    const anioMasNuevo = Math.max(...aniosPublicacion);
    const diferenciaAnios = anioMasNuevo - anioMasAntiguo;
    
    return {
        promedioAñosPublicacion,
        anioMasFrecuente,
        diferenciaAnios
    }
}

///////////////////////////////////////////
// 8. Manejo de Cadenas
//////////////////////////////////////////

/*
Crear una función normalizarDatos() que utilice métodos de strings
para:
✓ Convertir todos los títulos a mayúsculas.
✓ Eliminar espacios en blanco al inicio y final de los nombres de
autores.
✓ Formatear los emails de los usuarios a minúsculas.
*/

const normalizarDatos = () => {
    const titulosAMayuscula = libros.map(libro => libro.titulo.toUpperCase());
    console.log(titulosAMayuscula);
    
}
normalizarDatos()