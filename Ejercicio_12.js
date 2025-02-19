//12. Reducir un array:
//Dado let precios = [10, 20, 30, 40], usa .reduce() para obtener el total de la suma de los precios.

// Definimos un array llamado 'precios' con una lista de valores numéricos
let precios = [10, 20, 30, 40];

// Usamos el método 'reduce' para sumar todos los valores del array
let total = precios.reduce((acumulador, precio) => acumulador + precio, 0);

// Imprimimos en la consola el total de la suma de los precios
console.log(total);
