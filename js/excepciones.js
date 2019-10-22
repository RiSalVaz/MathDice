//En esta funcion se establecen las excepciones para que se pueda realizar el juego sin errores, tales como no introducir
//mas veces el valor de uno de los dados, deshabilitando el boton del dado que se ha clicado. Tambien cambia la 
//imagen del dado clicado por uno gris, filtra el numero correspondiente al nombre de la imagen asignada que concuerda 
//con el valor arrojado por su correspondiente dado. ej: dados/23.png =>valor arrojado=3, dados/56.png =>valor arrojado=6
//¡¡¡¡¡Falta implementar la excepcion de que no permita pulsar un boton de operando o de dado varias veces consecutivas. 
//se debe acotar la entrada de datos a: DADO-OPERANDO-DADO-OPERANDO... debiendose iniciar la operacion siempre con un 
//boton de dado
function excepciones(nombreImagen, idBoton, idImagen){
    let regex=/(\d+)/g;
    let toArray;
    let aString;
    let numerosImagen;
    if(nombreImagen === '+' || nombreImagen === '-' || nombreImagen === '*' || nombreImagen === '/'){
        miJugada.misOperaciones.push(nombreImagen);
    }else{
        numerosImagen=nombreImagen.match(regex);
        aString=numerosImagen.toString();
        toArray=aString.split("");
        miJugada.misOperaciones.push(toArray.pop());
        document.getElementById("inputOperaciones").value=miJugada.misOperaciones.join(" ");
        document.getElementById(idBoton).disabled=true;
        document.getElementById(idImagen).src="dados/dadoApagado.png";
    }
    
    
}