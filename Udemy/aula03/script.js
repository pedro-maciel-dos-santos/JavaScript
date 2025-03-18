
//atribuição via desestruturação objeto

/*
const pessoa = {
    sobrenome: 'Maciel',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        complemento: 'Casa',
        numero: 134
    }
};

const { nome = 'Não existe', sobrenome, idade } = pessoa;

console.log(nome, sobrenome);
*/



const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Maciel',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        complemento: 'Casa',
        numero: 134
    }
};

//const nome = pessoa.nome;
//const { nome, sobrenome, idade } = pessoa;
//const { nome: teste = '', sobrenome, idade } = pessoa;
//const { endereco: { rua, numero}, endereco } = pessoa;
const { nome, ...resto } = pessoa;

console.log(resto);