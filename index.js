const prompt = require("prompt-sync")({ sigint: true });
const picocolors = require("picocolors");
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
        titulo: "El Senior de los Anillos",
        autor: " J.R.R. Tolkien ",
        anio: 1954,
        genero: "Fantasia",
        disponible: false
    },

    {
        id: 2,
        titulo: "El Codigo Da Vinci",
        autor: " Dan Brown ",
        anio: 2003,
        genero: "Misterio",
        disponible: false
    },

    {
        id: 3,
        titulo: "El Padrino",
        autor: " Mario Puzo ",
        anio: 1969,
        genero: "Drama",
        disponible: false
    },

    {
        id: 4,
        titulo: "El Nombre del Viento",
        autor: " Patrick Rothfuss ",
        anio: 2007,
        genero: "Fantasia",
        disponible: false
    },

    {
        id: 5,
        titulo: "1984",
        autor: " George Orwell ",
        anio: 1949,
        genero: "Distopia",
        disponible: false
    },

    {
        id: 6,
        titulo: "El Hobbit",
        autor: " J.R.R. Tolkien ",
        anio: 1937,
        genero: "Fantasia",
        disponible: true
    },

    {
        id: 7,
        titulo: "Fahrenheit 451",
        autor: " Ray Bradbury ",
        anio: 1953,
        genero: "Distopia",
        disponible: false
    },
    
    {
        id: 8,
        titulo: "Guerra y paz",
        autor: " Leon Tolstoi ",
        anio: 1869,
        genero: "Novela historica",
        disponible: true
    },

    {
        id: 9,
        titulo: "JavaScript: The Good Parts",
        autor: " Douglas Crockford ",
        anio: 2008,
        genero: "Programacion",
        disponible: false
    },

    {
        id: 10,
        titulo: "Eloquent JavaScript, 3rd Edition",
        autor: " Marijn Haverbeke ",
        anio: 2018,
        genero: "Programacion",
        disponible: true
    },

    {
        id: 11,
        titulo: "You Don't Know JS: ES6 & Beyond",
        autor: " Kyle Simpson ",
        anio: 2015,
        genero: "Programacion",
        disponible: true
    },

    {
        id: 12,
        titulo: "Clean Code: A Handbook of Agile Software Craftsmanship",
        autor: " Robert C. Martin ",
        anio: 2008,
        genero: "Programacion",
        disponible: false
    },

    {
        id: 13,
        titulo: "The Pragmatic Programmer: Your Journey to Mastery",
        autor: " Andrew Hunt, David Thomas ",
        anio: 1999,
        genero: "Programacion",
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
        email: "TONY@GMAIL.COM",
        librosPrestados: [1, 5]
    },

    {
        id: 2,
        nombre: "Magenta",
        email: "MAGENTA@GMAIL.COM",
        librosPrestados: [2]
    },

    {
        id: 3,
        nombre: "Daniel",
        email: "DANIEL@GMAIL.COM",
        librosPrestados: [4]
    },

    {
        id: 4,
        nombre: "Luis",
        email: "LUIS@GMAIL.COM",
        librosPrestados: [9]
    },

    {
        id: 5,
        nombre: "Ana",
        email: "ANA@GMAIL.COM",
        librosPrestados: []
    },

    {
        id: 6,
        nombre: "Carlos",
        email: "CARLOS@GMAIL.COM",
        librosPrestados: [3]
    },

    {
        id: 7,
        nombre: "Sofia",
        email: "SOFIA@GMAIL.COM",
        librosPrestados: []
    },

    {
        id: 8,
        nombre: "Juan",
        email: "JUAN@GMAIL.COM",
        librosPrestados: []
    },

    {
        id: 9,
        nombre: "Lucia",
        email: "LUCIA@GMAIL.COM",
        librosPrestados: [12]
    },

    {
        id: 10,
        nombre: "Pedro",
        email: "PEDRO@GMAIL.COM",
        librosPrestados: []
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

/*
Crear una función buscarLibro(criterio, valor) que permita buscar
libros por título, autor o género utilizando el algoritmo de búsqueda
lineal.
*/
const buscarLibro = (criterio, valor) => libros.filter(libro => libro[criterio].trim().toLowerCase() === valor.trim().toLowerCase());

/* 
const buscarLibro = (criterio, valor) => {
    return libros.filter(libro => {
        if (typeof libro[criterio] === 'string') {
            return libro[criterio].toLowerCase() === valor.toLowerCase();
        }
        return libro[criterio] === valor;
    });
};

console.log(buscarLibro("titulo", "el senior de los anillos"));
*/
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

/*
Desarrollar una función borrarLibro(id) que elimine el libro que se le
pase por parámetro.
*/
const borrarLibro = (id) => {
    const index = libros.map(libro => libro.id).indexOf(id);
    if (index !== -1) {
        libros.splice(index, 1);
        return picocolors.green(`El libro con id ${id} ha sido eliminado`);
    } else {
        return picocolors.blue(`El libro con id ${id} no se ha encontrado`);
    }
}

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
const buscarUsuario = (email) => usuarios.filter(usuario => usuario.email.toLowerCase() === email.toLowerCase());

/*
Implementar una función borrarUsuario(nombre, email) que elimine el
usuario seleccionado.
*/
const borrarUsuario = (nombre, email) => {
    //Buscamos el indice del usuario que coincida con el nombre y el email introducidos
    const index = usuarios.findIndex(usuario => usuario.nombre.toLowerCase() === nombre.toLowerCase() && usuario.email.toLowerCase() === email.toLowerCase());

    // Si se encuentra el indice elimina el usuario y sino muestra un mensaje de que el usuario no fue encontrado
    if (index !== -1) {
        usuarios.splice(index, 1);
        console.log(picocolors.green(`El usuario ${nombre} con email ${email} ha sido eliminado`));
    } else {
        console.log(picocolors.red(`El usuario ${nombre} con email ${email} no se ha encontrado`));
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
    
    // Si el libro está disponible, cambia su estado y se anexa a los libros prestados del usuario,
    //sino se muestra un mensaje de que el libro ya fue prestado
    if (book.disponible){
        book.disponible = false;
        user.librosPrestados.push(idLibro);
        return picocolors.green(`El libro ${book.titulo} ha sido prestado al usuario ${user.nombre}`);
    } else {
        return picocolors.blue(`El libro ${book.titulo} ya está prestado`);
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

    // Si el libro no está disponible, cambia su estado y se elimina de los libros prestados del usuario,
    //sino se muestra un mensaje de que el libro está disponible

    if(!book.disponible){
        book.disponible = true;
        user.librosPrestados = user.librosPrestados.splice(idLibro, 1);
        return picocolors.green(`El libro ${book.titulo} ha sido devuelto por el usuario ${user.nombre}`);
    } else {
        return picocolors.blue(`El libro ${book.titulo} ya está disponible`);
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

    // Filtramos los libros prestados
    const librosPrestados = libros.filter(libro => !libro.disponible);

    // Total de libros prestados
    const totalLibrosPrestados = librosPrestados.length;

    // Total de libros
    const totalLibros = libros.length;

    // Cantidad de libros por género
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

///////////////////////////////////////////
// 6. Identificación Avanzada de libros
//////////////////////////////////////////
/*
Implementar una función librosConPalabrasEnTitulo() que identifique
y muestre todos los libros cuyo título contiene más de una palabra
(no títulos que contengan números ni otros caracteres).
*/

const librosConPalabrasEnTitulo = () => {

    // Filtramos los libros
    const titulosLibros =  libros.filter(libro => {
        const titulo = libro.titulo;

        // Removemos los caracteres especiales
        const sinCaracteresEspeciales =  titulo.match(/^[a-zA-Z\s]+$/g);

        // Dividimos cada título en palabras
        const palabras = titulo.split(' ');

        // Retorna los títulos que no contengan caracteres especiales y que contengan más de una palabra
        return sinCaracteresEspeciales && palabras.length > 1;
    });

/*
La función debe devolver un array con los títulos de esos libros y
mostrarlo en la consola.
*/
    return titulosLibros.map(libro => libro.titulo);
}

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
    const promedioAniosPublicacion = Math.round(sumaAñosPublicacion / aniosPublicacion.length);
    
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
        promedioAniosPublicacion,
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
    const eliminarEspaciosEnBlanco = libros.map(libro => libro.autor.trim());
    const emailAMinusculas = usuarios.map(usuario => usuario.email.toLowerCase());

    return {
        titulosAMayuscula,
        eliminarEspaciosEnBlanco,
        emailAMinusculas
    }
}

///////////////////////////////////////////
// 9. Interfaz de Usuario por Consola
//////////////////////////////////////////ç
/*
Implementar una función menuPrincipal() que muestre un menú de
opciones al usuario y permita interactuar con el sistema utilizando
prompt().
*/
const menuPrincipal = () => {
    let option;

    do {
        option = prompt(picocolors.cyan(
            `Seleccione una opción:
            1. Agregar Libro
            2. Buscar Libro
            3. Ordenar Libros
            4. Borrar Libro
            5. Registrar Usuario
            6. Mostrar todos los Usuarios
            7. Buscar Usuario
            8. Borrar Usuario
            9. Prestar Libro
            10. Devolver Libro
            11. Generar Reporte de Libros
            12. Identificación Avanzada de Libros
            13. Cálculos Estadísticos
            14. Normalizar Datos
            15. Salir
            Opción a Elegir: `
        ));

        switch (option) {
            case '1':
                let id = parseInt(prompt("Ingrese id del libro: "));
                let titulo = prompt("Ingrese título del libro: ");
                let autor = prompt("Ingrese autor del libro: ");
                let anio = parseInt(prompt("Ingrese año de publicación del libro: "));
                agregarLibro(id, titulo, autor, anio);
                console.log(picocolors.green("Libro agregado exitosamente."));
                break;
            case '2':
                let criterioBusqueda = prompt("Ingrese criterio de búsqueda (titulo/autor/genero): ");
                let valorBusqueda = prompt("Ingrese valor de búsqueda: ");
                console.log(buscarLibro(criterioBusqueda, valorBusqueda));
                break;
            case '3':
                let criterioOrdenarLibro = prompt("Ingrese el criterio (titulo/anio) para odenar los libros: ");
                console.log(ordenarLibros(criterioOrdenarLibro));
                break;
            case '4':
                let idLibroABorrar = parseInt(prompt("Ingrese el id del libro que desea eliminar: "));
                console.log(borrarLibro(idLibroABorrar));
                break;
            case '5':
                let nombreUsuario = prompt("Ingrese el nombre del usuario a registrar: ");
                let emailUsuario = prompt("Ingrese el email del usuario a registrar: ");
                registrarUsuario(nombreUsuario, emailUsuario);
                console.log(picocolors.green("El usuario fue registrado exitosamente"));
                break;
            case '6':
                console.log(mostrarTodosLosUsuarios(usuarios));
                break;
            case '7':
                let emailABuscar = prompt("Ingrese el email del usuario a buscar: ");
                console.log(buscarUsuario(emailABuscar));
                break;
            case '8':
                let nombreUsuarioABorrar = prompt("Ingrese el nombre del usuario a borrar: ");
                let emailUsuarioABuscar = prompt("Ingrese el email del usuario a borrar: ");
                console.log(borrarUsuario(nombreUsuarioABorrar, emailUsuarioABuscar));
                break;
            case '9':
                let idLibroAPrestar = parseInt(prompt("Ingrese el id del libro a actualizar: "));
                let idUsuario = parseInt(prompt("Ingrese el id del usuario al que se le prestará el libro: "));
                console.log(prestarLibro(idLibroAPrestar, idUsuario));
                break;
            case '10':
                let idLibroAdevolver = parseInt(prompt("Ingrese el id del libro a devolver: "));
                let idUser = parseInt(prompt("Ingrese el id del usuario que devolverá el libro: "));
                console.log(devolverLibro(idLibroAdevolver, idUser));
                break;
            case '11':
                console.log(generarReporteLibros());
                break;
            case '12':
                console.log(librosConPalabrasEnTitulo());
                break;
            case '13':
                console.log(calcularEstadisticas());
                break;
            case '14':
                console.log(normalizarDatos());
                break;
            case '15':
                console.log(picocolors.italic("Saliendo del menú principal"));
                break;
            default:
                console.log(picocolors.red("Opción no válida. Intente de nuevo."));
        }
    } while (option !== '15');
};

// Ejecutar el menú principal
menuPrincipal();