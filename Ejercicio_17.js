// 1️7. Transformación de texto:
// Dado un string "Hola, cómo estás?", conviértelo a mayúsculas y elimina las comas.

// Se declara la variable, la cual es una cadena
let cadena = "Hola, cómo estás?";
// Se declara la siguiente variable, la cual esta modificada con lo solicitado,
// la funcion toUpperCase hace el texto mayusculas y la funcion replace reemplaza las comas
// por cadena vacia
let cadenaN = cadena.toUpperCase().replace(',','');

//Se imprime la nueva cadena
console.log(cadenaN);