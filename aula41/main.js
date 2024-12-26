// Escreva uma função que recebe 2 numeros e retorne o maior deles 
const num1 = 29;
const num2 = 14;

function retornaMaior (num1,num2) {
    if (num1 < num2) {
    console.log(num2);
    } else {
    console.log(num1);
    }
};

retornaMaior(num1, num2);


//ou

function retornaMaior2(A, B){
    if (A < B){
        return B;
    } else {
        return A;
    }
};

console.log(retornaMaior2(6, 8));