//Seção 5 - JavaScript Array (Avançado)
//Aula sobre Reduce - Reduzindo o array

//Reduce - Reduzindo o array
//Some todos os numeros(reduce)
//Retorne um array com os pares (filter)
//Retorne um array com o dobro dos valores (map)


//Some todos os numeros(reduce)
const numeros = [10,11,55,30,22,14,9,33,2,4,1,5,7,60];
const somaTodos = numeros.reduce(function(acumulador,valor,indice,array){
    acumulador += valor;
return acumulador;
},0);

console.log(somaTodos);
console.log("----------------");

//Retorne um array com os pares (filter)
const somaTodos2 = numeros.reduce(function(acumulador,valor,indice,array){
    if(valor % 2 === 0) acumulador.push(valor);
return acumulador;
},[]);

console.log(somaTodos2);
console.log("----------------");

//Retorne um array com o dobro dos valores (map)
const somaTodos3 = numeros.reduce(function(acumulador,valor,indice,array){
    acumulador.push(valor*2);
return acumulador;
},[]);

console.log(somaTodos3);
console.log("----------------");

//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'joca', idade: 12},
    {nome: 'juliano', idade: 17},
    {nome: 'juliana', idade: 37},
    {nome: 'jullia', idade: 5},
    {nome: 'diego', idade: 40},
    {nome: 'carol', idade:17}
    ];

    const velha = pessoas.reduce(function(acumulador,valor,indice,array){
        if(acumulador.idade > valor.idade) return acumulador;
        return valor;
    });
    
    console.log(velha);