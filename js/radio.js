function verificarEdad() {
    let edad = document.querySelector('input[name="edad"]:checked').value;
    
    if (edad === "mayor") {
        alert("Puede ingresar al sitio");
    } else {
        alert("No puede ingresar al sitio");
    }
}