//Aula sobre try, catch, throw

try {
    console.log(naoExiste);
} catch (error) {
//nunca exisbir o erro para o usuario
    console.log("naoExiste Não Existe");
    console.log(error);
}

console.log('-----------')

//usabilidade

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error("X e y precisam ser números.");
    }
    return x + y;
}
try{
    console.log(soma(1,2));
    console.log(soma('1',2));
} catch (error) {
    console.log('alguma coisa ')
}