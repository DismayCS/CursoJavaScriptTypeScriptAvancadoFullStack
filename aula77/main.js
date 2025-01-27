//Seção 6 - JavaScript Objetos e prototypes (Avançado)
//Exercicio de validação de CPF.

// 705.484.450-52 070.987.720-03
/*
7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número dígito for maior que 9, consideramos 0.

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10 = 284

11 - (284 % 11) = 2 (Segundo dígito)
Se o número dígito for maior que 9, consideramos 0.
*/

function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const calculo = function(digito){ let numero = 11 - (digito % 11)
        if(9 < numero) return numero = 0;
        return numero;
    };
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + calculo(digito1));
    const validaD = this.validaDigito(calculo(digito1), calculo(digito2));

    if(validaD !== true) return false;
    
    return true;
};

ValidaCPF.prototype.validaDigito = function(digito1, digito2){
    const penulDigito = this.cpfLimpo.slice(9,-1);
    const ultimDigito = this.cpfLimpo.slice(10);

    
    if(digito1 > 9 && digito1 < 0) return false;
    if(digito2 > 9 && digito2 < 0) return false;
    
    if(Number(digito1) === Number(penulDigito) && Number(digito2) === Number(ultimDigito)) return true;
    
}


ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);

    let regressiva = cpfArray.length + 2;

    const digito = cpfArray.reduce(function(ac, vl){
      ac += ((regressiva * Number(vl))-Number(vl));
      regressiva--;
      return ac;
    },0);
    return digito;
};


const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());
