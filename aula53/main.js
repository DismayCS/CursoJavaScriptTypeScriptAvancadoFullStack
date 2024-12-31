//Seção 4 - JavaScript Funções(Avançado)
//Aula sobre closures.

function exibeNome(nome){
    return function(){
        return nome;
    };
}

const usaNome = exibeNome('juliano');
const usaNome2 = exibeNome('crizel');

console.dir(usaNome);
console.dir(usaNome2);