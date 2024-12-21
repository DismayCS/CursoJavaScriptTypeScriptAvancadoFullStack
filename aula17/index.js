//funções
function saudacao(nome){
    return `Bom dia, ${nome}!`;
}

const variavel = saudacao("julianos");
console.log(variavel);

//para não dar erro de NaN
//function soma(x=1, y=1){
    function soma(x, y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(3, 3));

//forma resumida de uma function
const raiz = x => x ** 0.5;

console.log(raiz(9));
