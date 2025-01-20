//Seção 6 - JavaScript Objetos e prototypes (Avançado)
//Aula sobre Object.defineProperty() e Object.defineProperties()

//Object.defineProperty()
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty( this, 'estoque',{
        enumerable:true,//mostra a chave
        value: estoque,//valor
        writable: false,//é alteravel ? - é alteravel o valor
        configurable: false //é configuravel? - reconfigurar ou deletar a chave
    })
}

const p1 = new Produto('kinder bueno',9.98,3);
console.log(p1);
//mostra exclusivamente as chaves 
console.log(Object.keys(p1));
console.log('--------------');

//Object.defineProperties()
function Produto(nome, preco, estoque){

    Object.defineProperties( this, {
        nome:{
            enumerable:true,//mostra a chave
            value: nome,//valor
            writable: true,//é alteravel ? - é alteravel o valor
            configurable: true //é configuravel? - reconfigurar ou deletar a chave
        },
        preco:{
            enumerable:true,//mostra a chave
            value: preco,//valor
            writable: true,//é alteravel ? - é alteravel o valor
            configurable: true //é configuravel? - reconfigurar ou deletar a chave
        },
        estoque:{
            enumerable:false,//mostra a chave
            value: estoque,//valor
            writable: true,//é alteravel ? - é alteravel o valor
            configurable: true //é configuravel? - reconfigurar ou deletar a chave
        }
    });
}

const p2 = new Produto('kinder ovo',11.98,3);
console.log(p2);
//mostra exclusivamente as chaves 
console.log(Object.keys(p2));