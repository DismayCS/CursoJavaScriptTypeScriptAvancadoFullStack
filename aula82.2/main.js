//Seção 6 - JavaScript Objetos e prototypes (Avançado)
//Aula sobre Herança com classes

class DispositivoEletronico{
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} esta ligado!`);
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(this.ligado){
            console.log(`${this.nome} esta desligado!`);
            return;
        }
        this.ligado = false;
    }
}

const g1 = new DispositivoEletronico('geladeira');
g1.ligar();
console.log(g1.ligar())

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor){
        super(nome);
        this.cor = cor;
    }
}

const s21 = new DispositivoEletronico('s21');
s21.ligar();
console.log(s21.ligar())