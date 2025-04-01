/*try{
console.log(naoExiste);
} catch(err){
    console.log('naoExiste não existe.');
}
*/
/*
function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números');
    }

    return x + y;
}
try{
console.log(soma(1, 2));
console.log(soma('1', 2));
} catch(error){
    //console.log(error);
    console.log("alguma coisa mais amigável")
}*/

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.')
    }
    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:15');
    const hora = retornaHora();
    console.log(hora);
} catch (e){
    //tratar erro
    //console.log(e);
} finally {
    console.log('Tenha um bom dia');
}

