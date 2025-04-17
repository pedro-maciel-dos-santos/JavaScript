//                 0         1        2
/*
const nomes = ['Eduardo', 'Maria', 'Kelvin'];
nomes[2] = 'Camilly';
delete nomes[0];
console.log(nomes);
*/


//--- String, Objetos, Funções, Numbers ---//

//const nomes = new Array('Eduardo', 'Maria', 'Kelvin');

//------------------------------------------------------------//

// valor por referência
//                 0         1        2
//const nomes = ['Eduardo', 'Maria', 'Kelvin'];
//const novo = [...nomes];

//------------------------------------------------------------//

/*
pop() -> remove no final do array
push() -> adiciona no final do array
shift() -> remove no começo do array
unshift() -> adiciona no começo do array
*/

//const removido = nomes.pop();
//const removido = nomes.shift();
//console.log(nomes, removido);

//console.log(nomes.length);

//novo.pop();
//console.log(nomes);
//console.log(novo);

//                 0         1        2
//const nomes = ['Eduardo', 'Maria', 'Kelvin'];
/*
nomes.push('Camilly');
nomes.unshift('Luiza');
console.log(nomes);
*/

//------------------------------------------------------------//

/*
    slice() -> fatiar o array

    ("1", 3) determina o primeiro e irá aparecer 

    (1, "3") determina o último e não irá aparecer

    podendo utilizar números negativos dentro do slice()

    slice(0, -1) vai aparecer todos os indices, menos o último

    se adicionarmos (1, -1), remove as duas pontas, indice 0 e 4
*/
/*
//                 0         1        2          3         4
const nomes = ['Eduardo', 'Maria', 'Kelvin', 'Camilly', 'Luiza'];

const novo = nomes.slice(0, -1);
console.log(novo);
*/

//------------------------------------------------------------//

// Converter string em array | Converter array em string

//const nome = 'Pedro Maciel dos Santos';
//const nomes = nome.split(' ');

//const nome = 'Pedro, Maciel, dos, Santos';
//const nomes = nome.split(',');

//console.log(nomes);

//const nomes = [ 'Pedro', 'Maciel', 'dos', 'Santos' ];
//const nome = nomes.join(' ');

//console.log(nome);

//------------------------------------------------------------//

// Função que faz a mesma coisa que pop, push, shift e unshift
// (e ainda mais)

// nomes.splice(índice, delete, elem1, elem2, elem3);


//                -5        -4       -3         -2        -1
//                 0         1        2          3         4
const nomes = ['Eduardo', 'Maria', 'Kelvin', 'Camilly', 'Luiza'];

// pop
//const pop = nomes.splice(-1, 1);

//shift
//const shift = nomes.splice(0, 1);

//push
//const push = nomes.splice(nomes.length, 0, 'Pedro');

//unshift
//const unshift = nomes.splice(0, 0, 'Ananda');



//const removidos = nomes.splice(3, 2);
//const removidos = nomes.splice(-3, 1);
//const removidos = nomes.splice(-3, Number.MAX_VALUE);
//const removidos = nomes.splice(2, 1, 'Pedro');
//const removidos = nomes.splice(0, 3, 'Pedro', 'Ananda', 'Íris');
console.log(nomes);