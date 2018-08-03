var notas = new Array(1, 2, 3, 4, 5);
var temp =0;
var suma = notas.map(function(n){
	temp = temp+n;
});
console.log(temp);