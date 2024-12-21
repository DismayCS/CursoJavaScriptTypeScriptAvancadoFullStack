function escopo(){
const form = document.querySelector('.form');
const resultado = form.querySelector('.resultado');

const pessoa = [];


function recebeEventoForm(event){
    event.preventDefault();
    const peso = parseFloat(form.querySelector('.peso').value);
    const altura = parseFloat(form.querySelector('.altura').value);

    const IMC = (peso/(altura*altura)).toFixed(2);
    let classe = "";

    if(IMC < 18.5){
    classe = "Abaixo do peso";
    } else if (IMC >= 18.5 && IMC <= 24.9){
    classe = "Peso normal";
    } else if (IMC >= 25 && IMC <= 29.9){
    classe = "Sobrepeso";
    } else if (IMC >= 30 && IMC <= 34.9){
    classe = "Obesidade grau 1";
    } else if (IMC >= 35 && IMC <= 39.9){
    classe = "Obesidade grau 2";
    } else if (IMC >= 40){
    classe = "Obesidade grau 3";
    };

    resultado.innerHTML += `<p>seu IMC é ${IMC} (${classe}).</p>`;
};
    form.addEventListener("submit", recebeEventoForm);
};
escopo();