//15. Uso de async/await:
//Modifica la función del ejercicio anterior para que use async y await.
function promesaResuelta() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa resuelta");
        }, 2000); // 2 segundos = 2000 milisegundos
    });
}
// Definir una función asíncrona
async function ejecutarPromesa() {
    try {
        // Esperar a que la promesa se resuelva
        const mensaje = await promesaResuelta();
        console.log(mensaje); // Imprime la promesa resuelta después de 2 segundos
    } catch (error) {
        console.error(error);
    }
}

// Llamo a la funcion
ejecutarPromesa();