//16. Expresiones Regulares:
//Crea una función que valide si una cadena de texto es un correo electrónico válido.

// Función para validar un correo electrónico utilizando una expresión regular
function validarEmail(email) {
    // Expresión regular que verifica el formato correcto de un email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Retorna true si el email coincide con la expresión regular, de lo contrario retorna false
    return regex.test(email);
}

// Pruebas
console.log(validarEmail("Carlos@gmail.com")); // true 
console.log(validarEmail("Carlos@gmail"));     // false 
console.log(validarEmail("carlosdaniel.aaaa.com")); // false 
