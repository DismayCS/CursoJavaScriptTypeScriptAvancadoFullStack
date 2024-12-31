//Seção 4 - JavaScript Funções(Avançado)
//Aula sobre maneiras de declarar as funções

// Declaração de função (Function hoisting)
falaOi();
function falaOi(){
    console.log('Oie');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function(){
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const funcArrow = () => {
    console.log('Sou uma Arrow function.');
};
funcArrow();

// Dentro de um objeto
const obj = {
    falar(){
        console.log("Estou falando.");
    }
};

//ou

// falar: function(){
//     console.log("Estou falando.");
// }


obj.falar();