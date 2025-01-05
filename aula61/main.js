//Seção 4 - JavaScript Funções(Avançado)
//Aula sobre funções geradoras.

function* geradora1(){
//codigo qualquer...
    yield 'valor 1';
//codigo qualquer...
    yield 'valor 2';
//codigo qualquer...
    yield 'valor 3';
}

const g1 = geradora1();
for (let valor of g1){
    console.log(valor);
}


console.log('------------');
//geradora infinito

function* geradora2(){
let i = 0;
    while(true){
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


console.log('------------');
//função dentro de função

function* geradora3(){
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4(){
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

console.log('------------');

function* geradora5(){
    yield function(){
        console.log('sou o y1');
    }
    yield function(){
        console.log('sou o y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();