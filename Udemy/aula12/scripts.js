//Declaração de função (function hoisting)

falaOi();

function falaOi(){
    console.log('Oi');
}

//First-class objects (Objetos de primeira classe)
//tratar função como dados - Function Expression

const souUmDado = function(){
    console.log('sou um dado.');
}

function executaFuncao(funcao){
    console.log('vou executar sua função abaixo:');
    funcao();
}

/*

    * nesse caso a function executaFuncao está esperando receber um parâmetro chamado funcao, e assim que receber, precisa guardar dentro de executaFuncao declarando funcao() e para exibir o parâmetro guardado é executaFuncao(souUmDado), souUmDado é o parâmetro
 
    * se eu mudar o final executaFuncao(falarOi) o parâmetro se torna a function falarOi

    * O que determina o parâmetro é a declaração de exibição | executaFuncao(parâmetro); logo abaixo:

 */

executaFuncao(souUmDado);

//Arrow function

const arrowFunction = () => {
    console.log('sou uma arrow function');
}

arrowFunction();

setInterval(function(){

}, 1000);

//Dentro de um objeto


/*
const objeto = {
    falar: function(){
        console.log('estou falando...');
    }
}
*/

const objeto = {
    falar(){
        console.log('estou falando...');
    }
}
objeto.falar();