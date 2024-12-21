//mais sobre strings

//extrair aspas dentro de aspas
let umaString = "um \"texto\"";

console.log(umaString);

//caracteres são indexados
//                 0123456
let outraString = "ABCDEFG"
console.log(outraString[5]);

//procura o index apartir da palavra desejada
//console.log(outraString.indexOf("PALAVRA CHAVE",{PROCURA APARTIR DO INDEX SEJADO}));
console.log(outraString.indexOf("C",1));
//procura o index do final para o inicio]
//mesmo conceito do indexOf muda apenas a ordem da pesquisa
console.log(outraString.lastIndexOf("C",1));
//toUpperCase - deixa em maisculo as strings
//toLowerCase - deixa em minusculo as trings
//plit - retira letras e palavras das strings
//slice - extrai as letras e palavras das strings
//length - verifica o numero de indices em uma strings