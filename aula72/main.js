//Seção 6 - JavaScript Objetos e prototypes (Avançado)
//Aula sobre Getters e Setters

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty( this, 'estoque',{
        enumerable:true,//mostra a chave
        configurable: true, //é configuravel? - reconfigurar ou deletar a chave
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('não é um numero!');
                return;
            }
            estoque = valor;
        }
    });
}

const p1 = new Produto('kinder bueno',9.98,"juli");
p1.estoque = 'juliano';
console.log(p1.estoque);


