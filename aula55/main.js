//Seção 4 - JavaScript Funções(Avançado)
//Aula sobre Funções imediatas - IIFE (Immediately Invoke Function Expression)

(function(){
    const nome = 'juliano';
    console.log(nome);
})();

const nome = 'juliana';
console.log(nome);

console.log('---------');

//IIFE (Immediately Invoke Function Expression) - recebendo parametros

(function(altura,idade,peso){

const nome = 'juliano';

function falaPessoa(){
    console.log(nome,altura,idade,peso);
}
falaPessoa()

})(1.75, 19, 74.68);