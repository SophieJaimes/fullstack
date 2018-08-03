var notas = new Array("1", "2", "3", "4", "5", "6", "7");
var text = "";
var json="{";
for (var i in notas) {
    text += notas[i];
    var tmp = parseInt(i)+1;
    if(i==notas.length-1){
    	json = json+"\"obj"+tmp+"\":\""+parseInt(notas[i])+"\"";
    	break;
    }
    json = json+"\"obj"+tmp+"\":\""+parseInt(notas[i])+"\",";
}
json = json+"}";
var jsonFormat = JSON.parse(json);
alert("El elemento obtenido del Json es: "+jsonFormat.obj1);
