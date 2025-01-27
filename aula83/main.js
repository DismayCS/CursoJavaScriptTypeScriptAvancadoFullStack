//Seção 6 - JavaScript Objetos e prototypes (Avançado)
//Aula sobre Métodos de instância e estáticos

function teste(){
    console.log('Este é um teste')
}


class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    //metodo de instancia
    aumentarVolume(){
        this.volume += 2;
    }

    dimuirVolume(){
        this.volume -= 2;
    }

    //medoto estatico
    static trocaPilha(x, y){
        return x+y;
    }
}

const c1 = new ControleRemoto('Samsung');
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
console.log(c1);
console.log(ControleRemoto.trocaPilha(2,2));