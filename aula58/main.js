//Seção 4 - JavaScript Funções(Avançado)
//Aula sobre Constructor function (função construtora).

//função construtora (Constructor function) -> objeto
//função fabrica (frabic function) -> objeto
//construtora -> Pessoa (new)

function Pessoa(nome,sobrenome){

//variaveis privadas - não podem ser acessadas, vivem apenas dentro da função.
   
    const ID = 12345;

    const metodoInterno = (e)=> {
        return this.nome + ' ' + this.sobrenome;
    };

//variaveis publicas - podem ser acessadas.

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = (e)=> {
        console.log(`${metodoInterno()} sou um metodo`);
    };
}

const p1 = new Pessoa('juliano','crizel');
const p2 = new Pessoa('juliana','pereira');

p2.metodo();