// Inicializamos contador para triángulos con superficie > 12
let triangulos_mayores_12 = 0;

// Usamos for para procesar los 3 pares de datos
for (let i = 1; i <= 3; i++) {
    // Pedimos base y altura del triángulo
    let base = parseFloat(prompt(`Ingrese la base del triángulo ${i}:`));
    let altura = parseFloat(prompt(`Ingrese la altura del triángulo ${i}:`));
    
    // Calculamos la superficie
    let superficie = (base * altura) / 2;
    
    // Mostramos los datos del triángulo actual
    document.write(`<h3>Triángulo ${i}:</h3>`);
    document.write(`Base: ${base}<br>`);
    document.write(`Altura: ${altura}<br>`);
    document.write(`Superficie: ${superficie}<br><br>`);
    
    // Verificamos si la superficie es mayor a 12
    if (superficie > 12) {
        triangulos_mayores_12++;
    }
}

// Mostramos la cantidad de triángulos con superficie mayor a 12
document.write(`<h3>Resultados finales:</h3>`);
document.write(`Cantidad de triángulos con superficie mayor a 12: ${triangulos_mayores_12}`);