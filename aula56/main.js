//Seção 4 - JavaScript Funções(Avançado)
//Aula sobre Funções de fábrica (Factory Functions) e leve introdução de this.
//constructor function (função construtora)

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} esta falando sobre ${assunto} e seu imc é:`;
        },
        altura,
        peso,
        imc(){
            const indice = this.peso / (this.altura * 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('juliano', 'crizel', 1.75, 74.68);
console.log(p1.fala('JS e TS fullstack'),p1.imc());
const p2 = criaPessoa('juliana', 'pereira', 1.65, 65.68);
console.log(p2.fala('JS e TS fullstack'),p2.imc());
console.log('-------------------------');

//com Getter e Setters


function criaPessoa2(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        fala(assunto){
            return `${this.nome} esta falando sobre ${assunto} e seu imc é:`;
        },
        altura,
        peso,
        get imc(){
            const indice = this.peso / (this.altura * 2);
            return indice.toFixed(2);
        }
    };
}

const p3 = criaPessoa2('juliano', 'crizel', 1.75, 74.68);
p3.nomeCompleto = 'juliana pereira';
console.log(p3.sobrenome);
