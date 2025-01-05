//Seção 4 - JavaScript Funções(Avançado)
//Aula pratica conveter a aula57 feita em Funções de fábrica (Factory Functions) para Funcões construtoras (construction function).

function CriaCalculadora(){

    this.display = document.querySelector('.display');

    this.inicia = ()=> {
        clickBotao();
        pressTecla();
    };

    const bntParaDisplay = (valor)=> {
        this.display.value += valor;
    };

    const clearParaDisplay = ()=> {
        this.display.value = '';
    };

    const apagaUmKeyPress = ()=> {
        this.display.value = this.display.value.slice(0,-1);
    };

    const somaValores = ()=> {
        let conta = this.display.value;

        try {
        conta = eval(conta);
           if(!conta){
               alert('Conta invalida!');
               return;
           }
           this.display.value = String(conta);
        } catch(e) {
           alert('Conta invalida!');
           return;
        }

    };

    const clickBotao = ()=> {
    document.addEventListener('click', (e)=>{
        const el = e.target;
        
        if(el.classList.contains('bnt-num')){
            bntParaDisplay(el.innerText);
        }

        if(el.classList.contains('bnt-clear')){
            clearParaDisplay();
        }

        if(el.classList.contains('bnt-equal')){
            somaValores();
        }
    });
    };

    const pressTecla = ()=> {
    document.addEventListener('keydown', (e)=>{
        
        if(e.keyCode === 8){
            apagaUmKeyPress();
        }
    
    });

    this.display.addEventListener('keypress', (e)=>{

    if(e.keyCode === 13){
       somaValores();
    }

    });
    };

};

const Calculadora = new CriaCalculadora();
Calculadora.inicia();
