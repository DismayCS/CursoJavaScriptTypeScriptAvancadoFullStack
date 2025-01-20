//Seção 6 - JavaScript Objetos e prototypes (Avançado)
//Aula sobre Métodos úteis para objetos

/*
Object.values
Object.entries
Object.assing(des, any)
Object.getOwnPropertyDescriptor(o, "prop")
...(spread)

//Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

//Object.assing - Cria copia de objetos
const produto = {nome:'caneta', preco:1.50};
const caneta = Object.assign({}, produto, {material:'aluminio'});

caneta.nome = 'caneta azul';
caneta.preco = 2.5;

console.log(caneta);
console.log(produto);
console.log('--------------');

//Object.getOwnPropertyDescriptor - descreve as propriedades do atributo do objeto
console.log(Object.getOwnPropertyDescriptor(caneta, "nome"));
console.log('--------------');

//Object.values - mostra apenas os valores do objeto
console.log(Object.values(produto));
console.log('--------------');

//Object.values - mostra os valores e as keys do objeto
console.log(Object.entries(produto));