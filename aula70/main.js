//Seção 6 - JavaScript Objetos e prototypes (Avançado)
//Aula revisando Objetos

const pessoa = {
    nome: 'juliano',
    sobrenome: 'crizel'
}

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
//ou para um acesso dinamico
console.log('-----------');

const al = 'nome';

console.log(pessoa[al]);
console.log(pessoa['sobrenome']);

//em objetos
console.log('----------');

const pessoa1 = new Object();
pessoa1.nome = 'juliano';
pessoa1.sobrenome = 'crizel';
pessoa1.idade = 30;
pessoa1.falarNome = function(){
    return `${this.nome} ${this.sobrenome} esta falando seu nome.`;
};
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());

//factory functions / constructor functions / classes
console.log('----------');

//factory functions
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('juliano','crizel');
console.log(p1.nomeCompleto());
console.log('----------');

//constructor functions

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);//congela qualquer alteração do objeto após este freeze
}

const p2 = new Pessoa('juliano','crizel');
console.log(p2);