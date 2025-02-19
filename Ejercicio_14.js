//14 .Manejo de Promesas:
//Crea una función que devuelva una promesa que se resuelva 
// después de 2 segundos con el mensaje "Promesa resuelta".
// Definimos una función que devuelve una promesa
function promesaResuelta() {
    return new Promise((resolve, reject) => {
        // Usamos setTimeout para simular una operación asíncrona con un retraso de 2 segundos
        setTimeout(() => {
            // Resolvemos la promesa con el mensaje "Promesa resuelta"
            resolve("Promesa resuelta");
        }, 2000); // 2 segundos = 2000 milisegundos
    });
}

// Llamamos a la función y manejamos la promesa con 'then' y 'catch'
promesaResuelta()
    .then(mensaje => {
        // Si la promesa se resuelve correctamente, imprimimos el mensaje en la consola
        console.log(mensaje); // Imprime "Promesa resuelta" después de 2 segundos
    })
    .catch(error => {
        // aqui cacha el error cono un try catch
        console.error(error);
    });
