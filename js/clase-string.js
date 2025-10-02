function contarNombres() {
    let contador = 0;
    let nombre;
    
    do {
        nombre = prompt("Ingrese un nombre (escriba 'Fin' para terminar):");
        if (nombre.toLowerCase() !== "fin") {
            contador++;
        }
    } while (nombre.toLowerCase() !== "fin");
    
    document.write("Se ingresaron " + contador + " nombres");
}