//Seção 5 - JavaScript Array (Avançado)
//Aula de revisão do básico em Arrays.


//valor por referencia
const nomes = ['juliano','juliana','jullia'];
// const nome = new Array('juliano','juliana','jullia') - funciona exatamente do meu jeito que a constante acima.
const novo = [...nomes];
const array = nomes;

nomes.push('carol');
nomes.unshift('diego');
array[1] = 'joao';
delete array[2];


console.log(novo);
console.log(nomes);

console.log('--------');

const nomes2 = 'Juliano Crizel Sigales';
const nome2 = nomes2.split(' ');

const nomes3 = [ 'Juliano', 'Crizel', 'Sigales' ];
const nome3 = nomes3.join(' ');

console.log(nome2);
console.log(nome3);