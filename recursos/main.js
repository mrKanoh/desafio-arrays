var numRandom = ['12','23','63','41','15','40'];
var a,b,c;
    for (a = numRandom.length; a; a--) {
        b = Math.floor(Math.random() * a);
        c = numRandom[a - 1];
        numRandom[a - 1] = numRandom[b];
        numRandom[b] = c;
    }

function numeroRandom() {
    document.getElementById("numeroIngresado").value = numRandom;
}

function calcular(){
    var array = document.getElementById("numeroIngresado").value.split(/,/);
    var mayor = -Infinity,menor=+Infinity, suma = 0, promedio = 0;
    
    //Suma
    for (i=0;i<array.length;i++) {
        suma = parseInt(array[i])+suma;
        
    }

    //Promedio
    promedio = suma/array.length;

    //Mayor
    for (i=0;i<array.length;i++) {
        if(parseInt(array[i])>mayor) mayor=array[i];
    }

    //Menor
    for (i=0;i<array.length;i++) {
        if(parseInt(array[i])<menor) menor=array[i];
    }

    //RESULTADO
    document.getElementById("resultado").innerHTML= 
        "La suma es:"+suma+"<br>"+
        "El promedio es:"+promedio+"<br>"+
        "El mayor es:"+mayor+"<br>"+
        "El menor es:"+menor+"<br>"
}
