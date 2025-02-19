//19. Simulación de un endpoint con fetch (JSONPlaceholder):
//Usa fetch() para obtener información de https://jsonplaceholder.typicode.com/todos/1 y 
// muestra el resultado en consola.

// Realizamos una solicitud HTTP GET a la URL usando 'fetch'
fetch('https://jsonplaceholder.typicode.com/todos/1')
  // Cuando la solicitud se complete, convertimos la respuesta a formato JSON
  .then(response => response.json())
  // Una vez convertido a JSON, manejamos los datos obtenidos
  .then(data => console.log(data));
