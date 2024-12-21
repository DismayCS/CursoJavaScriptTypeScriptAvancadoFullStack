//exercico com For, adicionar os elementos na index.html usando javascript e FOR

const elementos = [
    {tag: 'p', texto: 'frase1'},
    {tag: 'div', texto: 'frase2'},
    {tag: 'footer', texto: 'frase3'},
    {tag: 'section', texto: 'frase4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
let { tag, texto } = elementos[i];
let etiqueta = document.createElement(tag);
etiqueta.innerHTML = texto;
div.appendChild(etiqueta);
};

container.appendChild(div);