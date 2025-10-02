// Inicializamos el acumulador
let suma = 0;
let valor;

// Bucle do-while para pedir valores hasta que se ingrese 9999
do {
    // Pedimos un valor y lo convertimos a número
    valor = parseInt(prompt("Ingrese un valor (9999 para terminar):"));
    
    // Verificamos si el valor es distinto de 9999 para sumarlo
    if (valor !== 9999) {
        suma += valor;
    }
} while (valor !== 9999);

// Mostramos el resultado y determinamos si es cero, mayor o menor que cero
document.write("El valor acumulado es: " + suma + "<br>");
if (suma === 0) {
    document.write("El valor es cero");
} else if (suma > 0) {
    document.write("El valor es mayor que cero");
} else {
    document.write("El valor es menor que cero");
}
