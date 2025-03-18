
//atribuição via desestruturação array



/*let a = "A"; //B
let b = "B"; //C
let c = "C"; //A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);*/

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
const [um, dois, tres, ...resto] = numbers;
console.log(um, dois, tres);
console.log(resto);
*/

/*const [um, , tres, , cinco, , sete, , nove] = numbers;
console.log(um, tres, cinco, sete, nove);*/

            //       1           2          3
//                0  1  2     0  1  2    0  1  2
const numbers = [[1, 2, 3,], [4, 5, 6], [7, 8, 9]];

const[lista1, lista2, lista3] = numbers;

console.log(lista3[2]);