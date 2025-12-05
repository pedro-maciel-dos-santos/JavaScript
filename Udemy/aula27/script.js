// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
const num = [5, 50, 80, 1, 2, 4, 7, 11, 15, 22, 27];

/*
function callbackFilter(valor) {
    return valor > 10;
}
*/

//const numFilter = num.filter(callbackFilter);

/*const numFilter = num.filter(function(valor) {
    return valor > 10;
});
*/

const numFilter = num.filter(valor => valor > 10);

//console.log(numFilter);

// Retorne as pessoas que tem o nome com 6 letras ou mais
// Retorne as pessoas com mais de 19 anos
// Retorne as pessoas cujo nome termina com A
const pessoas = [
    { nome: 'Pedro', idade: 19},
    { nome: 'Amanda', idade: 20},
    { nome: 'Carlos', idade: 18},
    { nome: 'Nicolas', idade: 15},
    { nome: 'Letícia', idade: 32},
];

const pessoaNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);

const pessoaIdadeGrande = pessoas.filter(obj => obj.idade > 19);

const pessoaFinalA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoaFinalA);
