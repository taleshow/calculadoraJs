let entradaAtual = '';
let operador = '';
let entradaAnterior = '';

function appendNumber(numero){
    entradaAtual += numero;
    displayAtual();

}

function setOperator(op) {
    if (entradaAtual === '') return;
    if (entradaAnterior !== ''){
        calculate();
    }
    operador = op;
    entradaAnterior = entradaAtual;
    entradaAtual = '';
}

function calculate() {
let result; 
const anterior = parseFloat(entradaAnterior);
const atual = parseFloat(entradaAtual);
    if (isNaN(anterior) || isNaN(atual))return;
    switch (operador) {
        case '+':
            result = anterior + atual;            
            break; 
        case '-':
            result = anterior - atual;            
            break; 
        case '*':
            result = anterior * atual;            
            break; 
        case '/':
            result = anterior / atual;            
            break;  
                        
        default:
            return
    }
    entradaAtual = result;
    operador = '';
    entradaAnterior = '';
    displayAtual();
}

 function limparDisplay() {
    entradaAtual = '';
    operador = '';
    entradaAnterior = '';
    displayAtual();    
 }

 function displayAtual() {
    document.getElementById('display').value = entradaAtual;    
 }