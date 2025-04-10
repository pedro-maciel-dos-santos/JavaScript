// Factory Function (Função Fábrica)

//podemos fazer com que a function imc, finja ser um atributo usando o get (conhecido como Getter)

function criaPessoa(nome, sobrenome, a, p){
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            //console.log(valor);
        },

        fala(assunto = 'falando sobre NADA..'){
            return `${this.nome} está ${assunto}.`
        },
        altura: a,
        peso: p,

        // Getter 
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

/*
 * this é = ao p1
 */

const p1 = criaPessoa('Pedro', 'Maciel', 1.7, 65);
const p2 = criaPessoa('Nicolas', 'Peck', 1.8, 80);
const p3 = criaPessoa('Ananda', 'Conterno', 1.5, 52);


console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);


//p1.nomeCompleto = 'Ananda Conterno Moraes';

//console.log(p1.nomeCompleto);
//console.log(p1.nome);
//console.log(p1.sobrenome);
//console.log(p1.fala());

/*
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);

*/



/*
const p2 = criaPessoa('Ananda', 'Conterno', 1.5, 52);
console.log(p2.imc());

console.log(p2.fala('falando sobre JS'));
*/
//console.log(p1.nome);