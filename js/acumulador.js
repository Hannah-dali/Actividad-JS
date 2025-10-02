// Inicializamos los contadores
let mayoresIgual7 = 0;
let menores7 = 0;
let i = 1;

// Utilizamos while para leer 10 notas
while (i <= 10) {
    // Leemos la nota y la convertimos a número
    let nota = parseFloat(prompt(`Ingrese la nota del alumno ${i}:`));
    
    // Validamos que la nota sea válida (entre 0 y 10)
    if (nota >= 0 && nota <= 10) {
        // Verificamos si la nota es mayor o igual a 7
        if (nota >= 7) {
            mayoresIgual7++;
        } else {
            menores7++;
        }
        i++; // Solo incrementamos si la nota es válida
    } else {
        alert("Por favor ingrese una nota válida entre 0 y 10");
    }
}

// Mostramos los resultados
document.write("Resultados: <br>");
document.write(`Cantidad de notas mayores o iguales a 7: ${mayoresIgual7}<br>`);
document.write(`Cantidad de notas menores a 7: ${menores7}<br>`);
