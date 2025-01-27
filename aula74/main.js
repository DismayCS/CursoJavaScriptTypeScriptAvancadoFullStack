//Seção 6 - JavaScript Objetos e prototypes (Avançado)
//Aula sobre Prototypes

//Contrutora - Molde (Classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

//faz com que seja enviada objeto "PAI", onde podera ser puxado o uso do metodo (herança) sem que perca drasticamente a performance do computador do cliente.
Pessoa.prototype.nomeCompleto = function(){
     return `${this.nome} ${this.sobrenome} `
    };

//Instancia
const p1 = new Pessoa('juliano', 'crizel');
const p2 = new Pessoa('jullia', 'crizel');

console.log(p1.nomeCompleto());
