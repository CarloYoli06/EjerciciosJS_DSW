// 11. Mapear un array:
//Dado let numeros = [1, 2, 3, 4, 5], usa .map() para obtener un 
//nuevo array donde cada número esté elevado al cuadrado.

// Definimos un array llamado 'numeros'
let numeros = [1, 2, 3, 4, 5];

// Usamos el método 'map' para crear un nuevo array con los cuadrados de cada número
let cuadrados = numeros.map(numero => numero ** 2);

// Imprimimos en la consola el array resultante
console.log(cuadrados);
