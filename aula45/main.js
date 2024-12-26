//Aula sobre try, catch, finally

try{
    console.log('abri um arquivo');
    console.log('manipulei o arquivo e gerou um erro');
    console.log('fechei o arquivo');
} catch {
    console.log('tratando o erro');
} finally {
    console.log('eu sempre sou executado');
};

//exemplo

function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de date');
    }
    if(!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false
    });
};

const data = new Date('01-01-1970 15:25:58');
const hora = retornaHora(data);
console.log(hora)
