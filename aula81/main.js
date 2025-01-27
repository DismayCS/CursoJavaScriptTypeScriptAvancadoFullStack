//Seção 6 - JavaScript Objetos e prototypes (Avançado)
//Aula sobre Criando classes

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }   

    falar(){
        console.log(`${this.nome} esta falando`);
    }

    comer(){
        console.log(`${this.nome} esta comendo`);
    }

    beber(){
        console.log(`${this.nome} esta bebendo`);
    }
}

const p1 = new Pessoa('juliano', 'crizel');
console.log(p1);