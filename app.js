
let visor = '';
let visorPrioridade = '0';
let calculoPrioridade = 1.0;
let calculo = 0.0;
let listNum = [];
let sinal = ' ';

function adicionarNumero(num){
    let tela = document.querySelector('input');
        tela.value += num;
        visor += num;
}
// adiciona zero no visor
function addNumZero(){
    adicionarNumero(0);
}
// adiciona um no visor
function addNumUm(){
    adicionarNumero(1);
}
// adiciona dois no visor
function addNumDois(){
    adicionarNumero(2);
}
// adiciona tres no visor
function addNumTres(){
    adicionarNumero(3);
}
// adiciona quatro no viso
function addNumQuatro(){
    adicionarNumero(4);
}
// adiciona cinco no visor
function addNumCinco(){
    adicionarNumero(5);
}
// adiciona seis no visor
function addNumSeis(){
    adicionarNumero(6);
}
// adicona sete no visor
function addNumSete(){
    adicionarNumero(7);
}
// adiciona oito no visor
function addNumOito(){
    adicionarNumero(8);
}
// adiciona nove no visor
function addNumNove(){
    adicionarNumero(9);
}

function atribuir(){
    let resultado = 0.0;
    if(sinal == '+' || sinal == '-'){
        calculo += parseFloat(visor);
        
        document.querySelector('input').value = ' ';
    }
    if(sinal == '*'){
        calculoPrioridade *= parseFloat(visor);
        document.querySelector('input').value = ' ';
        alert(calculo);
    }

    document.querySelector('input').value = calculo;
    visor = calculo;
    calculo = 0.0;
    //alert(visor);
}

// somar numeros
function somar(){
    sinal = '+';
    let temp = document.querySelector('input').value;
    if(temp.slice(-1) == '*' || temp.slice(-1) == '-' || temp.slice(-1) == '/'){
        //alert(temp);
        visor = sinal;
        let troca = temp.slice(0, -1) + sinal;
        document.querySelector('input').value = troca;
    }else{
        document.querySelector('input').value += '+';
        calculo += parseFloat(visor);
       // alert(calculo);
        visor = sinal;
    }
    
}

function subtrair(){
    sinal = '-';
    let temp = document.querySelector('input').value;
    if(temp.slice(-1) == '*' || temp.slice(-1) == '+' || temp.slice(-1) == '/'){
        alert(temp);
        visor = sinal;
        let troca = temp.slice(0, -1) + sinal;
        document.querySelector('input').value = troca;
    }else{
        document.querySelector('input').value += '-';
        calculo += parseFloat(visor);
        //alert(calculo);
        visor = sinal;
    }    
}

function multiplicar(){
    sinal = '*';
    //visorPrioridade = visor;
    alert(visor);
    calculoPrioridade *= parseFloat(visor);
    alert(calculoPrioridade);
    document.querySelector('input').value += '*';
    visor = '';
    calculo += calculoPrioridade; 
   // alert(calculo);
}