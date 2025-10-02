function obtenerFechaFormateada() {
    let fecha = new Date();
    let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    let diaSemana = diasSemana[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();
    
    return "Hoy es " + diaSemana + " " + dia + " de " + mes + " de " + año;
}

// Función para mostrar la fecha al cargar la página
window.onload = function() {
    document.write(obtenerFechaFormateada());
}