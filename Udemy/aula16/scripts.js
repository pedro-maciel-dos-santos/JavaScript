//Closures


//Escopo Global
function retornaFuncao(nome){ //Escopo pai/mãe
    return function(){ //Escopo filho
        return nome;
    };
}

const funcao = retornaFuncao('Pedro');
const funcao2 = retornaFuncao('Camilly');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());