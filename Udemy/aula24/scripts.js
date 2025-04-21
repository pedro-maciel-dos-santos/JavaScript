/*Funções geradoras*/

/*yield assim que fazer a primeira chamada, vai retornar o primeiro valor, na segunda chamada o segundo valor...*/

/*
{ value: 'Valor 1', done: false }

Value refere-se ao valor dentro do gerador

done refere-se se o gerador acabou ou não, no caso é FALSE, ainda não acabou pois possui o Valor 2 e Valor 3.

para chamar o yield precisa utilizar o .next() e para conseguir pegar o valor separado utiliza .value no final no next:

.next().value

o mesmo vale para o done, podendo pegar utiizando o .done no final do next.

(LEMBRANDO, CASO CHAME O .DONE 3 VEZES, AS 3 RESULTARÁ COMO FALSE POIS O JS NÃO SABE QUE TERMINOU, ELE FARÁ COM QUE A QUARTA (4) CHAMADA SEJA TRUE).

podemos utilizar o FOR para executar automáticamente e mostrar os resultaods sem a necessidade de chamar 3 vezes separadamente, pois o FOR sabe exatamente quando termina o gerador.
*/

function* geradora1() {
    // Código qualquer ...
    yield 'Valor 1';
    // Código qualquer ...
    yield 'Valor 2';
    // Código qualquer ...
    yield 'Valor 3';
}
const g1 = geradora1();
console.log(g1.next());
console.log(g1.next());
/*
const g1 = geradora1();
for (let valor of g1) {
    console.log(valor);
}*/
/*
console.log(g1.next().value);*/
/*
function* geradora2() {
    let i = 0;
    while(true) {
    yield i;
    i++
    }
}

const g2 = geradora2();
console.log(g2.next().value);
*/
/*
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();*/
/*
for (let valor of g4) {
    console.log(valor);
}
*/
/*
function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };
*/
  /*  return function() {
        console.log('Vim do return');
    }*/
/*
    yield function() {
        console.log('Vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();*/