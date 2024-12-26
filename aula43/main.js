// Escreva uma função que recebe um número e
// retorne o seguinte:
// numero é divisivel por 3 = fizz
// numero é divisivel por 5 = buzz
// numero é divisivel por 3 e 5 = fizzbuzz
// numero NÃO é divisivel por 3 e 5 = retorna o próprio número
// checar se o numero é realmente um numero = retorna o proprio numero
// use a função com numeros de 0 a 100

function fizzBuzz(a){

    if(Number.isInteger(a/3) && Number.isInteger(a/5)){ 
 return 'fizzbuzz';
    } else if (Number.isInteger(a/3)){
 return 'fizz';
    } else if(Number.isInteger(a/5)) {
 return 'buzz';
    } else {
 return a;
    }
};

//Em arrow function e ternarios

const fB = (a) => Number.isInteger(a / 3) && Number.isInteger(a / 5)
    ? 'fizzbuzz'
    : Number.isInteger(a / 3)
    ? 'fizz'
    : Number.isInteger(a / 5)
    ? 'buzz'
    : a;

//laço de repetição para testar função de 0 a 100

for (let i = 0; i <= 100; i++){
console.log(fB(i));
};

