// Map - Sempre terá o mesmo tamanho do array original

const num = [5, 50, 80, 1, 2, 4, 7, 11, 15, 22, 27];

const numDobro = num.map(valor => valor * 2);

//console.log(numDobro);

const pessoas = [
    { nome: 'Pedro', idade: 19},
    { nome: 'Amanda', idade: 20},
    { nome: 'Carlos', idade: 18},
    { nome: 'Nicolas', idade: 15},
    { nome: 'Letícia', idade: 32},
];

//const nomes = pessoas.map(obj => obj.nome);

//const idades = pessoas.map(obj => ({ idade: obj.idade }));
/*
const idades = pessoas.map(function(obj) {
    delete obj.nome;
    return obj;
});*/
//const idades = pessoas.map(obj => obj.idade);


//Quando faço obj.id estou mexendo no OBJETO ORIGINAL
/*const comIDs = pessoas.map(function(obj, indice) {
    obj.id = (indice + 1) * 1000;
    return obj;
});*/


//Para não mexer no Objeto Original, devemos criar um novo Objeto ao invés de alterar o Objeto Original
const comIDs = pessoas.map(function(obj, indice) {
    const newObj = { ...obj};
    newObj.id = indice;
    return newObj;
});

//console.log(pessoas);
//console.log(comIDs);