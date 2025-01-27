//Seção 6 - JavaScript Objetos e prototypes (Avançado)
//Aula sobre Getters e Setters

const _velocidade = Symbol('velocidade');
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    };

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
        console.log('SETTER');
    };

    get velocidade(){
        console.log('GETTER');
        return this[_velocidade];
    };

    acelerar(){
        if(this[_velocidade] >= 240) return;
        this[_velocidade]++;
    };

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    };
}

const c1 = new Carro('civic');
c1.velocidade = 99;
console.log(c1.velocidade);