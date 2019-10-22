

   //inicializa el juego, llama a la funcion mostrarDatos() para mostrar los la jugada de dados y el objetivo por pantalla
   //al mismo tiempo, deshabilita el boton jugar para que no se puedan hacer mas tiradas mientras dure la partida.
  
    function mostrarDados(){
        let numerosJugada=miJugada.crearJugada();
        let numeroObjetivoValor=miJugada.crearObjetivoValor();   
        document.getElementById("botonJugar").disabled=true;
        document.getElementById("numIntentos").innerHTML=miJugada.numIntentos;
        for (let i=1;i<6;i++){

            document.getElementById("valor" + i).innerHTML="resultado: " + numerosJugada[i-1];
            document.getElementById("dado" + i).src = "dados/" + i + numerosJugada[i-1] + ".png";     
         }
        document.getElementById("valorDadoObjetivo").innerHTML = "objetivo: " + numeroObjetivoValor;
        document.getElementById("dadoObjetivo").src = "dados/dadoBlanco" + numeroObjetivoValor + ".png";
    }


