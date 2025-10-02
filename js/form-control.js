function concatenarNombres() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    document.getElementById('nombreCompleto').value = nombre + " " + apellido;
}