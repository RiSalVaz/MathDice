//Crea un objeto de tipo miJugada donde se almacenan unos valores globales que las demas funciones podran compartir 
//y manipular.
var miJugada={

    objetivoValor: 0, //El numero objetivo al cual tiene que llegar el jugador

    miTirada: [], //Array con los valores que han arrojado los dados al inicio de la jugada

    misOperaciones:[], //Array que almacena las operaciones realizadas por el jugador para llegar al resultado objetivo

    numIntentos: 5, //Numero de intentos que le quedan al jugador
    //Esta funcion crea 5 valores aleatorios correspondientes a 3 dados de 3 caras y 2 de 6.
    crearJugada(){
        miJugada.miTirada=[];
        for(var i=0;i<3;i++){
            miJugada.miTirada.push(Math.floor(Math.random()*3+1));
        }
        for(var i=0;i<2;i++){
            miJugada.miTirada.push(Math.floor(Math.random()*6+1));
        }
        
        return miJugada.miTirada
    },
    //Esta funcion genera un numero aleatorio entre 1 y 12 correspondiente al dado objetivo.
    crearObjetivoValor(){
        miJugada.objetivoValor=0;
        miJugada.objetivoValor=Math.floor(Math.random()*12+1);
        return miJugada.objetivoValor
    }
    
}



