//Seção 6 - JavaScript Objetos e prototypes (Avançado)
//Aula sobre Manipulando Prototypes

////filho de new Object > Object.prototype
const objA = {
    chaveA: 'A'
    //__proto__:Object.prototype
};

//filho de objA
const objB = {
    chaveB: 'B'
    //__proto__:Object.prototype
};

//filho de objB
const objC = new Object();
objC.chaveC = 'C';


//Object.setPrototypeOf - faz com que crie uma herança de prototype o objA herda o objB podendo até mesmo encadear diversos objetos.
// Object.setPrototypeOf((obj.filho), (obj.pai));
Object.setPrototypeOf(objB,objA);
Object.setPrototypeOf(objC,objB);

console.log(objC.chaveA);
console.log('----------')
//exemplo pratico

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
    return this.preco;
};

Produto.prototype.acrescimo = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
    return this.preco;
};

const p1 = new Produto('agua',2.00);

console.log(p1);
console.log(p1.desconto(80));
console.log('-----------');

const p2 = {
    nome: "aguaCara",
    preco: 10
}

//Herdou os metodos de outro objeto atraves do prototype
Object.setPrototypeOf(p2, Produto.prototype);

console.log(p2);
console.log(p2.desconto(80));
console.log('-----------');

//criando objeto e ja settando propriedades
const p3 = Object.create(Produto.prototype, {
preco:{
    enumerable:true,
    value:12,
    writable:true,
    configurable:true
},
tamanho:{
    enumerable:true,
    value:40,
    writable:true,
    configurable:true
}
});


console.log(p3);
console.log(p3.acrescimo(40));
