//  (condição) ? (resultado verdadeiro) : (resultado falso)
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'usuario VIP' : 'usuario normal';

const corUsuario = null;
const corPadrao = corUsuario || "preto";

console.log(nivelUsuario, corPadrao);

//if(pontuacaoUsuario >= 999){
//    console.log('usuario vip');
//}else{
//    console.log('usuario normal');
//};

