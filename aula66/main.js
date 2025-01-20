//Seção 5 - JavaScript Array (Avançado)
//Aula sobre  Map - Mapeando o array

//map (altera)

const numeros = [10,11,55,30,22,14,9,33,2,4,1,5,7,60];
const numerosEmDobro = numeros.map((valor, indice, array)=>{
return valor * 2;
});

console.log(numerosEmDobro);

console.log('-------------');

//Para cada elemento:
//retorne apenas uma string com o nome da pessoa
//remova a chave do "nome" do objeto
//adicione uma chave ID para cada objeto
const pessoas = [
    {nome: 'joca', idade: 12},
    {nome: 'juliano', idade: 17},
    {nome: 'juliana', idade: 37},
    {nome: 'jullia', idade: 5},
    {nome: 'diego', idade: 40},
    {nome: 'carol', idade:17}
    ];

const ApenasString = pessoas.map(obj => obj.nome);
console.log(ApenasString);

console.log('------------')

//removendo o "nome"
//criando objeto novo
const ApenasIdade = pessoas.map(obj => {delete obj.nome; return obj;});
//ou
//usando delete
const ApenasIdade2 = pessoas.map(obj => { return {idade: obj.idade}; });
console.log(ApenasIdade);
console.log(ApenasIdade2);

//adicionando ID 
const addID = pessoas.map( (obj,indice) => {
obj.id = (indice + 1) * 1000;
return obj;
});
console.log(addID);
