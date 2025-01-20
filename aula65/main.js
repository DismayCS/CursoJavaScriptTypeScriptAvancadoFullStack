//Seção 5 - JavaScript Array (Avançado)
//Aula sobre Filter - Filtrando o array

//filter (filtra)
//Retorne elementos maiores que 10.

const numeros = [10,11,55,30,22,14,9,33,2,4,1,5,7,60];

function callBackFilter(valor, indice, array){
    //retorna todos os tipos descritos nas variaveis da função
    console.log(valor);
    console.log(indice);
    console.log(array);
    
    return valor > 10;
}

const numerosFiltrados = numeros.filter(callBackFilter);
console.log(numerosFiltrados);

// Codigo resumido ao maximo.

const numerosFiltrados2 = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados2);
console.log('--------------')
//com objetos

const pessoas = [
{nome: 'joca', idade: 12},
{nome: 'juliano', idade: 17},
{nome: 'juliana', idade: 37},
{nome: 'jullia', idade: 5},
{nome: 'diego', idade: 40},
{nome: 'carol', idade:17}
];

const pessoasComNomeGrande = pessoas.filter( objeto => objeto.nome.length >= 6);
const pessoasComIdadeGrande = pessoas.filter( objeto => objeto.idade >= 30);
const pessoasComLetraA = pessoas.filter( objeto => objeto.nome.toLowerCase().endsWith('a'));
console.log(pessoasComLetraA);