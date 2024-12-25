//Aula sobre For In
const frutas = ['laranja', 'abacaxi', 'banana'];

for (let i in frutas){
    console.log(frutas[i]);
}

// for (let i = 0; i < frutas.length; i++){
//   console.log(frutas[i]);
//}

const pessoa = {
    nome: 'juliano',
    sobrenome:'crizel',
    idade: 19
};

//console.log(pessoa.nome);
//console.log(pessoa['nome']);

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}
