var nota1 =0;
var nota2 =0;
var nota3 =0;
var nota4 =0;
var nota5 =0;
var nota6 =0;
var nota7 =0;
var notas = new Array(nota1, nota2, nota3, nota4, nota5, nota6, nota7);
var total = 0;
var promedio =0;
for(let i=0; i<7;i++){
	notas[i] = prompt("Ingrese nota");
	total = total+parseFloat(notas[i]);
	if(notas[i]==0){
		promedio = total/i;
		break;
	}
	console.log("El total es: " +total);
	promedio = total/notas.length;
}
alert("El promedio es: "+promedio);


