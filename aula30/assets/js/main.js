const h1 = document.querySelector('.container P')
const data = new Date();
const dia = data.getDay();
const mes = data.getMonth();
const ano = data.getFullYear();
const tempo = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;


function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;
    
    switch(diaSemana){
    case 0:
        diaSemanaTexto = "Domingo";
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = "Segunda-feira";
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = "Terça-feira";
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = "Quarta-feira";
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = "Quinta-feira";
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = "Sexta-feira";
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = "Sabado";
        return diaSemanaTexto;
    default:
        diaSemanaTexto = "";
        return diaSemanaTexto;
    }
    
    console.log(diaSemana, diaSemanaTexto);
    };

    function getMesTexto (mes) {
        let mesTexto;
        
        switch(mes){
        case 0:
            mesTexto = "janeiro";
            return mesTexto;
        case 1:
            mesTexto = "fevereiro";
            return mesTexto;
        case 2:
            mesTexto = "março";
            return mesTexto;
        case 3:
            mesTexto = "abril";
            return mesTexto;
        case 4:
            mesTexto = "maio";
            return mesTexto;
        case 5:
            mesTexto = "junho";
            return mesTexto;
        case 6:
            mesTexto = "julho";
            return mesTexto;
            case 7:
                mesTexto = "agosto";
                return mesTexto;
                case 8:
                    mesTexto = "setembro";
                    return mesTexto;
                    case 9:
                        mesTexto = "outubro";
                        return mesTexto;
                        case 10:
                            mesTexto = "novembro";
                            return mesTexto;
                            case 11:
                                mesTexto = "dezembro";
                                return mesTexto;
        default:
            mesTexto = "";
            return mesTexto;
        }
        
        console.log(diaSemana, diaSemanaTexto);
        };

h1.innerHTML = `Dia ${dia} ${getDiaSemanaTexto(dia)} de ${getMesTexto(mes)}, ${ano}. as ${tempo} `;