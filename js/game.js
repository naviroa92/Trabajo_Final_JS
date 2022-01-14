
//Variables
const PIEDRA = 'piedra';
const PAPEL = 'papel';
const TIJERA = 'tijera';

const TIE = 0;
const WIN = 1
const LOST = 2;

const piedraBtn = document.getElementById('piedra');
const papelBtn = document.getElementById('papel');
const tijeraBtn = document.getElementById('tijera');
const resultText = document.getElementById('result');
const machineImg = document.getElementById('machine__img');
let totalPuntos = document.getElementById('puntaje')
const totalPuntosFinales = document.getElementById('puntaje2')
const numeroIntentos = document.getElementById('intentos')
const btnJugarNuevamente = document.getElementById('btnReiniciarJuego')
let arrayPuntosAcumulados = [];

//Puntajes
let puntosTotales = []
let puntajeFinal = 0

//Acumulador
let acumulador = 10;
numeroIntentos.innerHTML = '<strong>'+acumulador+'</strong>'


//Boton Piedra
piedraBtn.addEventListener('click',()=>{
    play(PIEDRA);
});


//Boton papel
papelBtn.addEventListener('click',()=>{
    play(PAPEL);
});


//Boton tijera
tijeraBtn.addEventListener('click',()=>{
    play(TIJERA);
});


//Funcion calculo de Puntaje - Resulatdo
function play(userOption){

    resultText.innerHTML = 'La maquina esta Escogiendo !!!';
    resultText.style.color = 'grey';
    resultText.style.fontSize = '30px';
    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = 'img/'+machineOption+' back.svg';
    },200);

setTimeout(function(){
    puntajeFinal = simpleArraySum(puntosTotales);
    let sumaPuntosTotales = 0;
    let puntos = 0;
    acumulador --;
    if(acumulador >=1 ){
    clearInterval(interval);
    const machineOption = calcMachineOption();
    const result = calcResult(userOption, machineOption);
    machineImg.src = 'img/'+machineOption+' back.svg';

    switch(result){
        case TIE:
            puntos +=0
            resultText.innerHTML = 'Haz Empatado !!!'
            resultText.style.color = '#DDB819';
            resultText.style.fontSize = '40px';
            break;
        case WIN:
            puntos +=100
            resultText.innerHTML = 'Haz Ganado !!!'
            resultText.style.color = 'Green';
            resultText.style.fontSize = '40px';
            break;
        case LOST:
            puntos -= 30
            resultText.innerHTML = 'Haz Perdido !!!'
            resultText.style.color = 'Red';
            resultText.style.fontSize = '40px';
            break;
    }
    puntosTotales.push(puntos);
    sumaPuntosTotales = simpleArraySum(puntosTotales);
    totalPuntos.innerHTML = '<strong>'+sumaPuntosTotales+'</strong>';
    numeroIntentos.innerHTML = '<strong>'+acumulador+'</strong>'
    }else{
        puntosTotales.push(puntos);
        totalPuntosFinales.innerHTML = '<strong>'+puntajeFinal+'</strong>';
        document.getElementById('form__game').style.display = 'none'
        document.getElementById('endGame__container').style.display = 'block'
        }
},2000);


//Funcion calculo random AI
function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch(number){
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
    }
}


//Funcion calculo resultado (WIN - LOST - TIE)
function calcResult(userOption, machineOption){

    if(userOption === machineOption){
        return TIE;

    }else if(userOption === PIEDRA){
        if(machineOption === PAPEL) return LOST;
        if(machineOption === TIJERA) return WIN;

    }else if(userOption === PAPEL){
        if(machineOption === TIJERA) return LOST;
        if(machineOption === PIEDRA) return WIN;

    }else if(userOption === TIJERA){
        if(machineOption === PIEDRA) return LOST;
        if(machineOption === PAPEL) return WIN;
    }
}
}

//Funcion suma de array
function simpleArraySum(ar) {
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
    sum += ar[i];
    }
    return sum;
}

function addToLocalStorage(userOption, machineOption, result) {
    const savedResults = JSON.parse(localStorage.getItem("result"));
    savedResults.push({ puntajeFinal });
    localStorage.setItem("result", JSON.stringify(savedResults));
}

document.getElementById("replay-game").addEventListener("click", replay);

//function replay, clear result and score
function replay() {
  localStorage.setItem("result", "[]");
  window.location.reload();
}

