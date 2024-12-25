//Aula sobre FOR OF
const nome = ['Juliano Crizel','Juliana Pereira','Carol Jardim'];

// for classico
for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log("-----------");

// For in
for (let i in nome){
    console.log(nome[i]);
}

console.log("-----------");

//For of
for (let i of nome){
    console.log(i);
}

console.log("-----------");

//For Each
nome.forEach(function(nomes, indice, array){
    console.log(nomes, indice, array);
});

console.log("-----------");

//com objetos

let pessoa = {
    nome:'Juliano',
    sobrenome:'Crizel'
};

for (let i in pessoa){
    console.log(i, pessoa[i])
}

//For Classico - Geralmente com Iteráveis (Array ou Strings)
//For In - Retorna o indice ou chave (String, Array ou Objetos)
//For of - Retorna o valor em si (Iteráveis, Arrays ou Strings)
