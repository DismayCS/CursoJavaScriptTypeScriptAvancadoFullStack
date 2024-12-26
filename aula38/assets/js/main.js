//Exercicios com NodeList
//Pegar o background do body e colocar nos paragrafos

const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);

for (let i of ps){
    i.style.backgroundColor = backgroundColorBody;
    i.style.color = 'white'
}