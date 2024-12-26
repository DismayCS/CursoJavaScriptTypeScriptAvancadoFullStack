//continue e break

const numeros = [1,2,3,4,5,6,7,8,9];

for( let i of numeros){
  
  if(i === 3){
    console.log('pulei o numero 2');
    continue
  };

  console.log(i);

  if(i === 7){
    console.log('7 encontrado, saindo...');
    break;
  };
}