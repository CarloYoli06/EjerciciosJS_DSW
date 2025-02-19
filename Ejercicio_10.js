// 10. Filtrar elementos de un array:
//Dado el arreglo let edades = [12, 18, 25, 10, 30, 16], usa filter() para 
// crear un nuevo arreglo solo con los mayores de edad.

// Definimos un array
let edades = [12, 18, 25, 10, 30, 16];

// Usamos el método 'filter' para crear un nuevo array con las edades que sean mayores o iguales a 18
let mayorEdad = edades.filter(edad => edad >= 18);

// Mostramos en consola el nuevo array 
console.log(mayorEdad);
