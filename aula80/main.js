//Seção 6 - JavaScript Objetos e prototypes (Avançado)
//Aula sobre Objeto Map()

const pessoas = [
    {id: 3, nome: 'juliano'},
    {id: 2, nome: 'juliana'},
    {id: 1, nome: 'jullia'},
];

// const novasPessoas = {};
// for (const {id, nome} of pessoas){
//     novasPessoas[id] = {id, nome};
// }

const novasPessoas = new Map;
for (const {id, nome} of pessoas){
    novasPessoas.set(id,{id, nome});
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));