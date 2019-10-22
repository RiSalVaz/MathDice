//En esta funcion se comparan los resultados de las operaciones introducidas por el jugador  con el dado objetivo,
//arrojandose un alert dependiendo de si se ha acertado, si no se ha acertado y aun quedan intentos, o si no se ha 
//acertado y se han agotado todos los intentos. En cualquier caso se reestablece el estatus de los botones, volviendo 
//a ser operativos y reestableciendo su imagen a color, asi como los botones de jugar dados, en caso de que el juego haya 
//finalizado satisfactoriamiente o no. 
function mostrarResultados(){
    miJugada.numIntentos--;
    document.getElementById("numIntentos").innerHTML=miJugada.numIntentos;
    if(miJugada.numIntentos>0){
        let stringOperaciones;
        let resultado;
        stringOperaciones=miJugada.misOperaciones.join("");
        resultado=eval(stringOperaciones);
        if(Number(resultado)==miJugada.objetivoValor){
            alert("ENHORABUENA, HAS ACERTADO")
            for(i=1;i<6;i++){
                document.getElementById("botonDado" + i).disabled=false;
                document.getElementById("dado" + i).src="dados/"+ i + miJugada.miTirada[i-1] + ".png"    
            }
            document.getElementById("botonJugar").disabled=false;
            miJugada.misOperaciones=[];
            miJugada.numIntentos=5;
        }
        else{
            alert("LO SIENTO, HAS FALLADO, VUELVE A INTENTARLO")
            for(i=1;i<6;i++){
                document.getElementById("botonDado" + i).disabled=false;
                document.getElementById("dado" + i).src="dados/"+ i + miJugada.miTirada[i-1] + ".png" 
            }      
            miJugada.misOperaciones=[];
        }
    }else{
        alert("PERDISTE, NO TIENES MAS INTENTOS, VUELVE A TIRAR DADOS")
        document.getElementById("botonJugar").disabled=false;
        miJugada.misOperaciones=[];
    }
    
}