//Seção 5 - JavaScript Array (Avançado)
//Aula sobre Concatenando arrays.

const a1 = [1,2,3];
const a2 = [4,5,6];
//variavel.concat();
const a3 = a1.concat(a2, [7,8,9], "legal");
//... spread
const a4 = [...a1,'luiz',...a2,...[7,8,9]];
console.log(a3);
console.log(a4);