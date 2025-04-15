// Função Fábrica -> objetos
// Função Construtora -> objetos
// Função Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados
    const ID = 123;
    const metodoInterno = function(){

    };

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': Sou um método!');
    }
}
//Pessoa.nome / Pessoa.sobrenome

const p1 = new Pessoa('Luiz', 'Pereira');
const p2 = new Pessoa('Pedro', 'Maciel');
p2.metodo();

//console.log(p1.nome);
//console.log(p2.nome);
