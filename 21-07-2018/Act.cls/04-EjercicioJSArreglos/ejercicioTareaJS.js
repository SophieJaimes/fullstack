var numero = prompt ("Digite un número: ");
var arreglo = [];
for(let i=0; i<numero; i++){
	arreglo.push(
	{
		nombre: "Nombre"+i,
		apellido: "Apellido"+(i+1),
		turno: 1+i
	}
	);
}	
var suma =0;
var promedio =0;
for(let i=0; i<numero; i++){
	suma += arreglo[i]["turno"];
}
promedio = suma/numero;
alert("La suma de los elementos es: "+suma);
alert("El promedio de los elementos es: "+promedio);