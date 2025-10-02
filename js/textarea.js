function mostrarDatos() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let comentarios = document.getElementById('comentarios').value;
    
    alert("Datos ingresados:\n\n" + 
          "Nombre: " + nombre + "\n" +
          "Email: " + email + "\n" +
          "Comentarios: " + comentarios);
}