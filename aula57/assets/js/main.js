//Seção 4 - JavaScript Funções(Avançado)
//Aula de pratica sobre Funções de fábrica (Factory Functions) e leve introdução de this.
//objetivo fazer uma calculadora inspirada no google

// function criaCalculadora(){
//     return {

//         display: document.querySelector('.display'),

//         inicia(){
//             this.clickBotao();
//             this.pressTecla();
//         },

//         bntParaDisplay(valor){
//             this.display.value += valor;
//         },
   
//         clearParaDisplay(){
//             this.display.value = '';
//         },
   
//         apagaUmKeyPress(){
//             this.display.value = this.display.value.slice(0,-1);
//         },
   
//         somaValores(){
//             let conta = this.display.value;
   
//             try {
//             conta = eval(conta);
//                if(!conta){
//                    alert('Conta invalida!');
//                    return;
//                }
//                this.display.value = String(conta);
//             } catch(e) {
//                alert('Conta invalida!');
//                return;
//             }
   
//         },

//         clickBotao(){
//         document.addEventListener('click', (e)=>{
//             const el = e.target;
            
//             if(el.classList.contains('bnt-num')){
//                 this.bntParaDisplay(el.innerText);
//             }

//             if(el.classList.contains('bnt-clear')){
//                 this.clearParaDisplay();
//             }

//             if(el.classList.contains('bnt-equal')){
//                 this.somaValores();
//             }
//         });
//         },

//         pressTecla(){
//         document.addEventListener('keydown', (e)=>{
            
//             if(e.keyCode === 8){
//                 this.apagaUmKeyPress();
//             }
        
//         });

//         this.display.addEventListener('keypress', (e)=>{

//         if(e.keyCode === 13){
//            this.somaValores();
//         }
    
//         });
//         }

//     }
// }

// const Calculadora = criaCalculadora();
// Calculadora.inicia();

