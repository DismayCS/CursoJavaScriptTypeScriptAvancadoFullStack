//Seção 6 - JavaScript Objetos e prototypes (Avançado)
//Aula sobre Factory Functions + Prototypes

const falar = {
    falar(){
        console.log(`olá meu nome é ${this.nome} ${this.sobrenome}`)
    },
};
const comer = {
    comer(){
        console.log(`${this.nome} esta comendo!`)
    },
};
const beber = {
    beber(){
        console.log(`${this.nome} esta bebendo!`);
    }
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome){

 return Object.create(pessoaPrototype,{
    nome: {
        enumerable: true,
        value: nome
    },
    sobrenome: {
        enumerable: true,
        value: sobrenome
    }
 });

}

const p1 = criaPessoa('juliano','crizel');
p1.falar();