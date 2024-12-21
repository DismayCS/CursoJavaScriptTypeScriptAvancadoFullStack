//operadores aritméticos
const num1 = 10;
const num2 = 5;

//| + = concatenação/adição
console.log('num1'+'num2');
console.log(num1 + num2);
//| - = subtração   
console.log(num1 - num2);
//| / = divisão
console.log(num1 / num2);
//| * = multiplicação
console.log(num1 * num2);
//| ** = potenciação
console.log(num1 ** num2);
//| % = Resto da Divisão
console.log(num1 % num2);
//| ++ = incremento
let num3 = 1;
num3++; // 2 
num3++; // 3 
num3++; // 4
console.log(num3);
//pre-incremento
console.log(++num3);
//pos-incremento
console.log(num3++);
console.log(num3);
//| -- = decremento
let num4 = 4;
num4--; // 3 
num4--; // 2 
num4--; // 1
console.log(num4);
//pre-decremento
console.log(--num4);
//pos-decremento
console.log(num4--);
console.log(num4);
// += faz a pre soma da variavel
//pode ser usado com qualquer operador aritmético
num4 += num3
// NaN - Not a Number, parseInt(inteiro), parseFloat(decimal), Number(number)
let num5 = 10;
let num6 = 'top';
console.log(num5 * num6);
// convertendo string em numeros (somente se a tring for um numero)
num5 = 10;
num6 = Number('5');
console.log(num5 + num6);
