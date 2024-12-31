//Seção 4 - JavaScript Funções(Avançado)
//Aula sobre parametros de funções

//nota:função com function possui um argumento especial chamado arguments onde armazena tudo enviado atraves de parametro
function funcao(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    };
    console.log(total);
};

funcao(3,3);

//o resto foi so conteudo explicativo.