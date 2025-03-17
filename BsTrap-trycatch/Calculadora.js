// Archivo: calculadora.js

document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obtenemos los valores de los inputs
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    // Elemento donde mostraremos el resultado
    const resultadoDiv = document.getElementById('resultado');

    try {
        // Intentamos convertir los valores a números
        const numero1 = parseFloat(num1);
        const numero2 = parseFloat(num2);

        // Verificamos si la conversión fue exitosa
        if (isNaN(numero1) || isNaN(numero2)) {
            throw new Error('Uno o ambos valores no son números válidos.');
        }

        // Calculamos la suma
        const suma = numero1 + numero2;

        // Mostramos el resultado
        resultadoDiv.innerHTML = `<div class="alert alert-success">La suma es: ${suma}</div>`;
    } catch (error) {
        // Capturamos errores y mostramos un mensaje al usuario
        resultadoDiv.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
    }
});