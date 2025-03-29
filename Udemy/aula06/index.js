//Operadores Ternários 
// (condição) ? 'valor para TRUE' : 'valor para FALSE'

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
;
/*
if (pontuacaoUsuario >= 1000){
    console.log('Usuário Vip');
} else {
    console.log('Usuário Normal');
}
*/

