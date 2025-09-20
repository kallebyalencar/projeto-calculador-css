/* Clicar em um dos botões e aparecer na tela */

function adicionarCaracter(caracter){
    const valorInput = document.querySelector('.display').value
    
    document.querySelector('.display').value = valorInput + caracter
}   

function limparTela(){
    document.querySelector('.display').value = ' ' /*caracter vazio = nada = limpar tela*/
}

function calcular(){
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = eval(valorInput)
    /*eval = pega o que é texto, e faz uma conta*/
}

/* valor x -1*/
function inverte(){
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = valorInput * -1
}

