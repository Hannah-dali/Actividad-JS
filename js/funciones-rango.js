// Función que muestra los números entre dos valores
function mostrarRango() {
    // Obtenemos los valores
    let num1 = parseInt(prompt("Ingrese el primer número (menor):"));
    let num2 = parseInt(prompt("Ingrese el segundo número (mayor):"));
    
    // Verificamos que el primer número sea menor que el segundo
    if (num1 > num2) {
        // Si están al revés, los intercambiamos
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    
    // Creamos una variable para almacenar los números
    let resultado = "";
    
    // Recorremos desde el menor hasta el mayor
    for (let i = num1; i <= num2; i++) {
        resultado += i + " ";
    }
    
    // Mostramos el resultado
    document.write("<h3>Rango de números:</h3>");
    document.write(resultado);
}