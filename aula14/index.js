let num1 = 1;
let num2 = 2.5423423;
let carac = num1 * "oi";

console.log(num1 + num2);
//.toString() - transforma em string somente no local desejado
console.log(num1.toString() + num2);
//.toFixed(2) - limita o numero de casas decimais
console.log(num2.toFixed(2));
//.isInteger() - retorna true ou false se o numero é inteiro 
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));
//.isNaN() - retorna true ou false se o numero é NaN
console.log(Number.isNaN(carac));
console.log(Number.isNaN(num1*num2));
//para tirar a imprecisão em casas decimais bem baixas
num1 = Number(num1.toFixed(2));