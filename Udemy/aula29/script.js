// Reduce - Reduzindo o Array para um elemento só

const num = [5, 50, 80, 1, 2, 4, 7, 11, 15, 22, 27];

/*const total = num.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0);*/

//Recomendado utilizar Filter para esse caso de filtrar número ímpar
/*
const total = num.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
*/
/*
const total = num.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) {
        acumulador += valor;
        console.log(valor);
    }
    return acumulador;
}, 0);

console.log(total);
*/


const pessoas = [
    { nome: 'Pedro', idade: 19},
    { nome: 'Amanda', idade: 21},
    { nome: 'Carlos', idade: 17},
    { nome: 'Nicolas', idade: 15},
    { nome: 'Letícia', idade: 32},
];

//Se o acumulador não for definido, ele sempre será o primeiro elemento do Array. Ex: { nome: 'Pedro', idade: 19}. E o valor será o segundo. Ex: { nome: 'Amanda', idade: 21}.

// Se o acumulador for definido, então o valor passará a ser o primeiro elemento.


const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);