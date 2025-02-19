// 3. Condicionales (if-else):
// scribe un programa que pregunte al usuario su edad y le 
// diga si es mayor de edad (18 años o más) o no.

// Importamos el módulo 'readline' para manejar la entrada y salida en la consola
const readline = require('readline');

// Creamos una interfaz de lectura/escritura en la consola
const rl = readline.createInterface({
    input: process.stdin,  // Definimos que la entrada de datos será desde la terminal (teclado)
    output: process.stdout // Definimos que la salida de datos será en la terminal (pantalla)
});

// Usamos rl.question para solicitar al usuario que ingrese su edad
rl.question('Por favor, ingresa tu edad: ', (edad) => {
   
    // Convertimos el valor ingresado (que es un string) a un número entero
    edad = parseInt(edad);

    // Verificamos si la edad ingresada es 18 o más
    if (edad >= 18) {
        console.log("Eres mayor de edad."); // imprimir mensaje segun el resultado
    } else {
        console.log("No eres mayor de edad."); 
    }

    // Cerramos la interfaz 
    rl.close();
});
