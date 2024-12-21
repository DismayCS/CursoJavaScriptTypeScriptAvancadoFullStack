//criando objetos

const amendoim = {
    nome: "juliano",
    sobrenome: "crizel",
    idade: 24,

    //declara funcções sem o function quando for dentro de um objeto
    fala() {
    console.log(`ola eu sou o ${this.nome} ${this.sobrenome} e tenho ${this.idade}`);
    },
};

amendoim.fala();


// Em função

function criaPessoa(nome, sobrenome, idade) {

    //  return {
    //    nome: nome,
    //    sobrenome: sobrenome,
    //    idade: idade
    //          };
    //  OU    

return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa("nietz","gama",25);
const pessoa2 = criaPessoa("michael","jackson",34);

console.log(pessoa1.nome, pessoa1.sobrenome);
console.log(pessoa2);
