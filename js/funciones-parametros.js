// Función que obtiene los números del usuario
function numeroMenor() {
    let num1 = parseInt(prompt("Ingrese el primer número"));
    let num2 = parseInt(prompt("Ingrese el segundo número"));
    let num3 = parseInt(prompt("Ingrese el tercer número"));
    mostrarMenor(num1, num2, num3);
}

// Función que encuentra y muestra el menor de tres números
function mostrarMenor(num1, num2, num3) {
    let menor;
    
    // Encontrar el menor número
    if (num1 <= num2 && num1 <= num3) {
        menor = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        menor = num2;
    } else {
        menor = num3;
    }
    
    // Mostrar el resultado con algo de formato
    document.write("<div class='resultado'>");
    document.write("<h3>Números ingresados:</h3>");
    document.write(`<p>Número 1: ${num1}</p>`);
    document.write(`<p>Número 2: ${num2}</p>`);
    document.write(`<p>Número 3: ${num3}</p>`);
    document.write("<h3>Resultado:</h3>");
    document.write(`<p>El número menor es: <strong>${menor}</strong></p>`);
    document.write("</div>");
}