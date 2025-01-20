//Seção 5 - JavaScript Array (Avançado)
//Aula sobre forEach

const numeros = [1,2,3,4,5,6,7,8,9,10];

for(let valor of numeros){
    console.log(valor)
}

//mais simples com o mesmo resultado 
console.log('--------------')

numeros.forEach(valor => console.log(valor));
//extendido
numeros.forEach(function(valor,indice,array){console.log(valor,indice,array)});