// Escreva uma função chamada ePaisagem que 
// recebe dois argumentos, largura e altura
// de uma imagem (number)
// Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (L, A) => L > A ? true : false;

console.log(ePaisagem(200,300));

//Fiz utilizando o padrão de Arrow function