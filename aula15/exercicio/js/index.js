let num1 = prompt("Escolha seu numero:");
let numeroTitulo = document.getElementById("numero-titulo");
let texto = document.getElementById("texto");

num1 = Number(num1);

numeroTitulo.innerHTML = num1
texto.innerHTML += `Raiz quadrada: ${num1 ** 0.5} <br />`;
texto.innerHTML += `${num1} é inteiro: ${Number.isInteger(num1)}<br />`;
texto.innerHTML += `É NaN: ${Number.isNaN(num1)}<br />`;
texto.innerHTML += `Arrendondamento para baixo: ${Math.floor(num1)}<br />`;
texto.innerHTML += `Arrendondamento para cima: ${Math.ceil(num1)}<br />`;
texto.innerHTML += `Com duas casas decimais: ${num1.toFixed(2)}<br />`;

