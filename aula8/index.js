const nome = 'juliano crizel';
const sobrenome ='sigales';
const idade = 19;
const peso = 76;
const altura = 1.75;
let imc = peso/(altura * altura); // peso/(altura * altura)
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
let anoNascimento = anoAtual-idade;

//Template string (usar crase*)

console.log(`Meu nome é ${nome} ${sobrenome} meu IMC é ${imc}, e eu nasci em: ${anoNascimento}`);

//Sem Template string

console.log('Meu nome é', nome, sobrenome,'meu IMC é',imc,'E eu nasci em:',anoNascimento);