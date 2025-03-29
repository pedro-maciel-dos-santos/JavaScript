//const frutas = ['Pera', 'Maçã', 'Uva'];
/*const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Maciel dos Santos',
    idade: 19
}
*/
//console.log(pessoa.nome);
//const chave = 'nome';
//console.log(pessoa[chave]);
//const nome = 'Pedro Maciel';
const nome = ['Pedro', 'Cammily', 'Nicolas'];
//-----------------------------------------------//
//For clássico - Geralmente com iteráveis (array ou string)
/*
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}
*/
//-----------------------------------------------//
//For in - lê e retorna os índices ou chaves do objeto (string, arrays ou objetos)

/*
for (let indice in frutas){
    console.log(frutas[indice]);
}
*/

/*
for ( let key in pessoa){
    console.log(key, pessoa[key]);
}
*/
//-----------------------------------------------//
//For of - retorna o valor em si (iteráveis, arrays ou strings)

for (let valor of nome){
    console.log(valor);
}