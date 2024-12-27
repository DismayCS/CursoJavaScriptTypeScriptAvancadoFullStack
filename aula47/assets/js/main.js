//exercicio fazer um timer com os requisitos mencionados na aula
function relogio(){
function timerBase(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
       hour12: false,
       timeZone: 'UTC'
   });
};

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer = 0;

function iniciarTimer(){
    timer = setInterval( function(){
        segundos++;
        relogio.innerHTML = timerBase(segundos);
    }, 1000);
};

function zerarTimer(){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = timerBase(segundos);
};

iniciar.addEventListener( 'click', function(event){
relogio.style.color = 'black';
clearInterval(timer);
iniciarTimer();
});

pausar.addEventListener( 'click', function(event){
relogio.style.color = 'red';
clearInterval(timer);
});

zerar.addEventListener( 'click', function(event){
relogio.style.color = 'black';
zerarTimer();
});
};

relogio();