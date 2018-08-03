var fechaHv = document.getElementById("fechaN");
var tdFecha = fechaHv.innerHTML;
var ms = Date.parse(tdFecha);
var fechaActual = new Date();
var fechaNacimiento = new Date(ms);

alert("Su edad es: "+calcularEdad(fechaNacimiento,fechaActual)+" años");
function calcularEdad(fechaNacimiento,fechaActual) {
    var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    var difMes = fechaActual.getMonth() - fechaNacimiento.getMonth();
    var difDia = fechaActual.getDate()-fechaNacimiento.getDate();

    if (difMes < 0) {
        edad--;
    }
    if(difMes == 0 && difDia <0){
        edad--;
    }
    return edad;
}