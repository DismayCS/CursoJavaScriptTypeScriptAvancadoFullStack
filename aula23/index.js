/*
Short-circuit
Verifica valores até achar a expressão falsa. caso a tenha.
&&
||

 - Valores Falsos -

FALSY
false
0
'' "" ``
null
undefined
NaN

 - Valores True - 

Qualquer valor que não esteja dentro dos valores falsos.

*/

//Para de checar ao encontrar valor falso
console.log("Juliano" && "" && "Carol");
console.log("Juliano" && undefined && "Carol");
console.log("Juliano" && NaN && "Carol");
console.log("Juliano" && null && "Carol");
console.log("Juliano" && false && "Carol");
console.log("Juliano" && 0 && "Carol");
//Mostra sempre o ultimo valor checado
console.log("Juliano" && "e" && "Carol");
