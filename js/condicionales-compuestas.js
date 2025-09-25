let num1 = parseFloat(prompt("Ingrese el primer numero:"));
let num2 = parseFloat(prompt("Ingrese el segundo numero:"));

if (num1 > num2) {
    alert("La suma es: " + (num1 + num2) + "\nLa diferencia es: " + (num1 - num2));
} else {
    if (num2 != 0) {
        alert("El producto es: " + (num1 * num2) + "\nLa division es: " + (num1 / num2));
    } else {
        alert("Error: No se puede dividir por cero. El producto es: " + (num1 * num2));
    }
}
