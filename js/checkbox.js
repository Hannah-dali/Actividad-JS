function mostrarDeportes() {
    let deportes = "";
    
    if (document.getElementById('futbol').checked) {
        deportes += "Fútbol ";
    }
    if (document.getElementById('basket').checked) {
        deportes += "Basket ";
    }
    if (document.getElementById('tenis').checked) {
        deportes += "Tenis";
    }
    
    document.getElementById('resultado').value = "Deportes elegidos: " + deportes;
}