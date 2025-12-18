/*
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Santos'
};

const chave = 'nome';
*/

//console.log(pessoa[chave]); // dinâmico
//console.log(pessoa['nome']);
//console.log(pessoa.nome);

// new Array(); ou [] para criar novo Array. Também existe para Objeto

//Construtor
/*
const pessoa1 = new Object();
pessoa1.nome = 'Pedro';
pessoa1.sobrenome = 'Maciel';
pessoa1.idade = 19;
pessoa1.falarNome = function(){
    return (`Seja bem-vindo(a), ${this.nome}!`)
};
pessoa1.getDataNasc = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}
*/

//console.log(pessoa1.getDataNasc());

//Literal
/*
const pessoa2 = {
    nome: 'Pedro',
    sobrenome: 'Maciel'
};

delete pessoa2.sobrenome;
console.log(pessoa2);
*/

// Factory function / Constructor function / Classes

/*
function criaPessoa(nome, sobrenome) {
    return {
      nome,
      sobrenome ,
      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
      } 
    };
}

const p1 = criaPessoa('Pedro', 'Maciel');
console.log(p1.nomeCompleto);
*/


// Construtor. Não pode-se esquecer do "new"
// new cria um objeto e atrela o this ao objeto criado
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

//p1 = (ENDEREÇO DE MEMÓRIA) -> 'Valor'
//ERRADO: p1 = (NOVO ENDEREÇO DE MEMÓRIA) / p1 = 'Outra coisa';
//Object.freeze(p1);

const p1 = new Pessoa('Pedro', 'Maciel');
p1.nome = 'Outra coisa';

console.log(p1);