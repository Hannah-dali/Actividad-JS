function procesarVector() {
    let vector = [];
    let sumaTotal = 0;
    let sumaMayores36 = 0;
    let cantidadMayores36 = 0;

    // Ingresar los 8 elementos
    for (let i = 0; i < 8; i++) {
        let elemento = parseInt(prompt(`Ingrese el elemento ${i + 1}:`));
        vector[i] = elemento;
        
        // Suma total
        sumaTotal += elemento;
        
        // Verificar si es mayor a 36
        if (elemento > 36) {
            sumaMayores36 += elemento;
            cantidadMayores36++;
        }
    }

    // Mostrar resultados
    document.write("Resultados: <br>");
    document.write("Suma total: " + sumaTotal + "<br>");
    document.write("Suma de elementos mayores a 36: " + sumaMayores36 + "<br>");
    document.write("Cantidad de valores mayores a 36: " + cantidadMayores36);
}
