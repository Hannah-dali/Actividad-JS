function calcularPotencia() {
    let numero = parseInt(prompt("Ingrese un número:"));
    let resultado = Math.pow(numero, 3);
    document.write("El número " + numero + " elevado a la tercera potencia es: " + resultado);
}