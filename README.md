# EjerciciosJS_DSW
20 Ejercicios basicos de JS Unidad 1

Ejercicio 1: Variables y tipos de datos
Problema: Crear una variable llamada Nombre y asignarle tu nombre. Luego, imprimir el valor en la consola.
Solución: Declaré una variable Nombre y le asigné el valor de un nombre (en este caso, "Carlos"). Después, usé console.log para mostrar el valor de la variable.

Ejercicio 2: Operaciones matemáticas
Problema: Crear dos variables con números y realizar operaciones básicas (suma, resta, multiplicación, y división).
Solución: Declaré dos variables con los números 3 y 5. Realicé las operaciones directamente dentro de console.log para imprimir los resultados de suma, resta, multiplicación y división.

Ejercicio 3: Condicionales
Problema: Verificar si una persona es mayor de edad (mayor o igual a 18 años).
Solución: Usé un if para comparar la edad con 18. Si es mayor o igual a 18, se imprime "Mayor de edad", de lo contrario, "Menor de edad".

Ejercicio 4: Operaciones con cadenas de texto
Problema: Crear un string con tu nombre y apellido y concatenarlos.
Solución: Usé el operador + para concatenar dos cadenas: nombre y apellido, y luego lo imprimí con console.log.

Ejercicio 5: Funciones
Problema: Crear una función que reciba dos parámetros, los sume y devuelva el resultado.
Solución: Declaré una función llamada sumar que recibe dos parámetros, realiza la suma y devuelve el resultado.

Ejercicio 6: Manejo de arrays
Problema: Crear un arreglo de números y encontrar el número mayor.
Solución: Usé el método Math.max() junto con el operador de expansión ... para pasar el arreglo como argumento y encontrar el número más grande.

Ejercicio 7: Manipulación de objetos
Problema: Crear un objeto que represente a una persona con nombre, edad y ciudad. Luego, acceder a sus propiedades.
Solución: Definí un objeto con propiedades nombre, edad y ciudad. Accedí a estas propiedades utilizando el operador de punto (.) y las imprimí en consola.

Ejercicio 8: Bucle for
Problema: Crear un bucle que imprima los números del 1 al 5.
Solución: Utilicé un bucle for que itera desde 1 hasta 5, y dentro del bucle, usé console.log para imprimir cada número.

Ejercicio 9: Bucle while
Problema: Usar un bucle while para contar del 10 al 1.
Solución: Definí una variable que comienza en 10 y utilicé un bucle while para contar hacia atrás, imprimiendo cada número en consola.

Ejercicio 10: Filtrar elementos de un array
Problema: Dado un arreglo con edades, filtrar los mayores de edad usando filter().
Solución: Usé el método filter() para crear un nuevo arreglo con las edades mayores o iguales a 18, y luego lo imprimí con console.log.

Ejercicio 11: Mapear un array
Problema: Dado un arreglo de números, usar map() para elevar cada número al cuadrado.
Solución: Utilicé el método map() para crear un nuevo arreglo donde cada número era elevado al cuadrado, y lo imprimí en consola.

Ejercicio 12: Reducir un array
Problema: Dado un arreglo de precios, usar reduce() para obtener la suma total de los precios.
Solución: Usé reduce() para sumar todos los elementos del arreglo y almacené el resultado en una variable total, que luego imprimí.

Ejercicio 13: Funciones asíncronas (setTimeout)
Problema: Crear una función que imprima un mensaje después de 3 segundos usando setTimeout().
Solución: Implementé setTimeout() para retrasar la impresión del mensaje "Hola mundo" por 3 segundos.

Ejercicio 14: Manejo de Promesas
Problema: Crear una función que devuelva una promesa resuelta después de 2 segundos.
Solución: Creé una promesa que se resuelve después de 2 segundos, utilizando setTimeout() dentro de la promesa y manejé su resolución con then().

Ejercicio 15: Uso de async/await
Problema: Modificar la función anterior para usar async y await.
Solución: Modifiqué la función para usar async/await, haciendo la llamada a la promesa de manera más clara y concisa dentro de una función asíncrona.

Ejercicio 16: Expresiones Regulares
Problema: Crear una función que valide si un correo electrónico es válido utilizando expresiones regulares.
Solución: Definí una expresión regular que valida el formato de un correo electrónico y la usé con test() para verificar si la cadena es válida.

Ejercicio 17: Transformación de texto
Problema: Convertir un string a mayúsculas y eliminar las comas.
Solución: Usé toUpperCase() para convertir el texto a mayúsculas y replace() para eliminar las comas del texto, luego imprimí el resultado.

Ejercicio 18: Ordenamiento de un array
Problema: Ordenar un arreglo de palabras alfabéticamente.
Solución: Utilicé sort() para ordenar el arreglo de palabras y luego lo imprimí.

Ejercicio 19: Simulación de un endpoint con fetch
Problema: Usar fetch() para obtener datos de un API y mostrar el resultado.
Solución: Realicé una solicitud HTTP GET usando fetch(), convertí la respuesta a JSON con .json() y manejé los datos con then().

Ejercicio 20: Creación de un pequeño CRUD en memoria
Problema: Crear un CRUD para manejar tareas en memoria (agregar, eliminar, marcar como completada).
Solución: Utilicé un arreglo de objetos para simular un CRUD, implementando funciones para agregar, eliminar y modificar tareas basadas en su ID.