//Seção 4 - JavaScript Funções(Avançado)
//Aula sobre Escopo léxico.

const nome = 'juliano';

function falaNome(nome){
    console.log(nome);
}

function usafalaNome(){
    const nome = 'crizel';
    falaNome();
}
usafalaNome();