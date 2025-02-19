// 2️0️. Creación de un pequeño CRUD en memoria:
// Crea un array llamado tareas que almacene objetos { id, descripcion, completado }. Agrega funciones para:

// Se crea el arreglo de objetos llamado tareas
let tareas = [{
    id: 1,
    descripcion: 'este es el numero 1',
    completado: true
},
{
    id: 2,
    descripcion: 'este es el numero 2',
    completado: false
},
{
    id: 3,
    descripcion: 'este es el numero 3',
    completado: true
},
{
    id: 4,
    descripcion: 'este es el numero 4',
    completado: false
}
];

// Agregar una tarea.

//Se crea una nueva tarea
let nuevaTarea= {
    id: 5,
    descripcion: 'esta es la nueva tarea (5)',
    completado: true
}
//Se agrega al final del arreglo
tareas.push(nuevaTarea);
//Se muestra el arreglo con la nueva insercion
console.log(tareas);

// Eliminar una tarea por id.
//Se declara un id (cuyo objeto sera eliminado)
let id = 1;
//Se usa filter para sobreescribir el arreglo actual con todo su contenido actual, 
//exceptuando aquellos objetos que contengan el id declarado previamente
tareas = tareas.filter(tarea => tarea.id !== id);

//Se imprime para comprobar
console.log('Después de eliminar la tarea con id 1:', tareas);

// Marcar una tarea como completada.

//Se establece cual tarea sera completada en base a su id
id = 2;

//Se busca el objeto tarea con el id buscado
const tarea = tareas.find(t => t.id === id);

//Se asigna el completado true
tarea.completado = true;

// Se imprime la tarea modificada
console.log('Después de marcar como completada la tarea con id '+id+':\n', tarea);