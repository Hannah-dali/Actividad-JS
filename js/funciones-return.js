function calcular_perimetro(lado_cuadrado) {
    return lado_cuadrado * 4;
}

function mostrarPerimetro() {
    let lado = parseInt(prompt("Ingrese el lado del cuadrado:"));
    let perimetro = calcular_perimetro(lado);
    document.write("El perímetro del cuadrado es: " + perimetro);
}