//Seção 4 - JavaScript Funções(Avançado)
//Aula sobre retorno da função - Return.

function soma(a, b){
    return a + b;
}

console.log(soma(2, 3));

//o resto foi bastante teorico de como usar...

//função closer

function criaMultiplicador(multiplicador){
    return function(n){
        return multiplicador*n;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));