//funções imediatas / funções autoinvocadas / (IIFE) -> immediately invoked function expression
/*
(function(){
    console.log(12345);
    const sobrenome = 'Maciel';
})();

const sobrenome = 'Oliveira';
*/

(function(idade, peso, altura){
    const sobrenome = 'Ferreira';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Pedro'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(19, 65, 1.70);