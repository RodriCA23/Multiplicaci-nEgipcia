function multi(){
    var c=1;
    var col=[];
    var col2=[];
    var n=document.getElementById("numero").value; /*Capturo el dato del input*/
    document.getElementById("numero").value="";
    if(n==""){                      /*no permitir algo vacio */
        document.getElementById("contenido").innerHTML= "";
        alert("INTRODUZCA UNA MULTIPLICACIÓN");
    }else{
    console.log(n);
    var arrayM=n.split("x",2);      /*Separo el string, x es el separados y 2 es el limite de particiones */
    console.log(arrayM);
    var num1=arrayM[0];
    num1=parseInt(num1);
    var num12=num1;
    var num2=arrayM[1];
    if(num1 == 0 || num2==0){       /*Excluir multiplicaciones de 0 */
        document.getElementById("contenido").innerHTML= "";
        document.getElementById("resultado").innerHTML= "Resultado = 0";
        document.getElementById("contenido").innerHTML += "<tr><td>" +
        0 + "</td><td>" + 0 +"</td>";
    }else{
    for(var x=1;c<=num2;x++){   /*Duplicar el 1 y el primer numero dado, se detiene antes de pasar el 2do numero  */
        col.push(c);
        col2.push(num1);
        console.log(c+"    "+num1);
        c=c*2;
        num1=num1*2;  
    }
    console.log(col);
    console.log(col2);
    var lon=col.length-1;
    console.log(lon);
    var resto=num2-col[lon];    /*1er columna,Siempre se utiliza el ultimo numero asi que se lo restamos al 2do numero */
    var resultado=+ col2[lon];  /*Se suman los numeros que dan juntos el 2do numero */
    var suma1=[];
    var suma2=[];
    suma1.push(col[lon]);       /*Recolecta de numeros utilizados en la 1er columna */
    suma2.push(col2[lon]);      /*Recolecta de numeros utilizados para la 2da columna */
    console.log("el segundo numero menos el ultimo "+resto);
    for(var z=lon-1;z>=0;z--){  /*Pasar por los numeros restantes*/
        if(resto<col[z]){
            console.log("saltado "+col[z]);
        }else{      /*Si no es mayor al resto que se necesita se resta, se suma al resultado */
            resto=resto-col[z];
            console.log("Restante "+resto);
            resultado=resultado+col2[z];
            suma1.push(col[z]);
            suma2.push(col2[z]);
        } 
    }
    console.log("Resultado "+resultado);
    document.getElementById("resultado").innerHTML= num12+" x "+num2+" = "+resultado;
    document.getElementById("contenido").innerHTML= ""      /*Muestra la tabla */
    col.forEach(function(elemento,index){
        document.getElementById("contenido").innerHTML += "<tr><td>" + 
        elemento + "</td><td>" + col2[index] +"</td>"
    });
    var me=suma1.length-1;
    var f1="";
    var f2="";
    for(var v=me;v>=0;v--){         /*Se construye la suma de las columnas con los numeros utilizados */
        if(v != 0){
            f1= f1+ suma1[v]+"+";
            f2= f2+ suma2[v]+"+";
        }else{
            f1=f1+ suma1[v]+"=";
            f2=f2+ suma2[v]+"=";
        }
    }
    console.log(f1+num2);
    console.log(f2+resultado);
    document.getElementById("contenido").innerHTML += "<tr><td>" +  /*Muestra la suma al final de la tabla */
    f1+num2 + "</td><td>" + f2+resultado +"</td>";
    }
    }
}