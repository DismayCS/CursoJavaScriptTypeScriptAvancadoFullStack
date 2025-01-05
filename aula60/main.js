//Seção 4 - JavaScript Funções(Avançado)
//Aula sobre funções recursivas(função que se chama devolta).

function recursivas(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursivas(max);
}

recursivas(-10);