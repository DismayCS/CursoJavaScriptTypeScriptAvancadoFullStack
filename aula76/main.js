//Seção 6 - JavaScript Objetos e prototypes (Avançado)
//Aula sobre Herança

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia){
    return this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    return this.preco -= quantia;
};

function Camiseta(nome,preco,cor){
 Produto.call(this, nome, preco);
    this.cor = cor;
};

Camiseta.prototype.aumento = function(percentual){
    return this.preco = this.preco + (this.preco * (percentual / 100));
};

Camiseta.prototype.desconto = function(percentual){
    return this.preco = this.preco - (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

Object.defineProperty(this, 'estoque', {
    enumerable: true,
    get: function(){
     return estoque;
    },
    set: function(valor){
        if(typeof valor !== 'number') return;
        estoque = valor;
    }
});

}

Object.setPrototypeOf(Caneca.prototype, Produto.prototype);
Object.setPrototypeOf(Camiseta.prototype, Produto.prototype);


const p1 = new Produto('bandeira', 35,);
const p2 = new Camiseta('brasil', 25, 'amarela');
const p3 = new Caneca('gremio', 14, "aluminio", 12);

p3.estoque = 100;

console.log(p1);
console.log(p2);
console.log(p2.aumento(25));
console.log(p3);
console.log(p3.estoque);
