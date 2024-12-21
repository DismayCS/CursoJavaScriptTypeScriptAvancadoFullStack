//array.

//array inicial.
const alunos = ["jullia", "carolina", "juliano"];
//alterar o indice escolhido por outro.
alunos[0] = 'juliana';
//Ao escolher um indice fora dos ja existentes, o mesmo sera adicionado a array.
alunos[3] = 'luiza'; 
//exibir array.
console.log(alunos);
//Exibir apenas o indice desejado.
console.log(alunos[0]);
console.log(alunos[2]);

//adicionando variveis a array sem saber o indice.
//adiciona no fim da array.
alunos[alunos.length] = 'diego';
alunos[alunos.length] = 'rodrigo';
alunos[alunos.length] = 'vanessa';
//outras formas.
alunos.push('joao');
alunos.push('  alex');
alunos.push('kaua');
//adiciona no inicio da array.
alunos.unshift('nomes');
alunos.unshift('de');
alunos.unshift('chega');

//removendo variaveis da array.
//remove do final da array.
alunos.pop();
//remove o começo da array.
alunos.shift();
//remove variavel sem alterar o indice.
delete alunos[9];

//selecionar as variaveis entre indices.
console.log(alunos.slice(0, 3));

//exibir array.
console.log(alunos);

//tipo da variavel.
console.log(typeof alunos);
//retorna true ou false, se for uma array.
console.log(alunos instanceof Array);
