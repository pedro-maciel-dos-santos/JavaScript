//Funções recursivas
//Função que chama ela mesma de volta

function recursiva(max) {
    console.log(max);
    if(max >= 10) return;
    max++;
    
    recursiva(max);
}

recursiva(0);