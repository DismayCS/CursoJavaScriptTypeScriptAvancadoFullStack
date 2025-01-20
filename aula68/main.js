//Seção 5 - JavaScript Array (Avançado)
//Aula sobre Filter + Map + Reduce

//Some todos os numeros(reduce)
//Retorne um array com os pares (filter)
//Retorne um array com o dobro dos valores (map)

//Retorne um array com os pares (filter)
const numeros = [10,11,55,30,22,14,9,33,2,4,1,5,7,60];
const pares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((acumulador, valor) => acumulador+valor);
console.log(pares);