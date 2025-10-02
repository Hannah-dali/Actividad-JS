function calcularPresupuesto() {
    let procesador = document.getElementById('procesador').value;
    let monitor = document.getElementById('monitor').value;
    let disco = document.getElementById('disco').value;
    
    // Convertir los valores string a números
    let total = Number(procesador) + Number(monitor) + Number(disco);
    
    document.getElementById('presupuesto').value = "Total: $" + total;
}