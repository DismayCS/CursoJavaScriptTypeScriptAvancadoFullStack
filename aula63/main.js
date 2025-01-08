//Seção 5 - JavaScript Array (Avançado)
//Aula sobre Método Splice

//nomes.splice(indice, delete, elem1, elem2, elem3);
//pop

const nomes = ['juliano','carol','diego','juliana','jullia'];

const removidos = nomes.splice(1,1,'crizel');
console.log(nomes, removidos);

//faz todas as funções como:
//shift
//unshift
//pop
//push