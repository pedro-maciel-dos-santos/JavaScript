function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 ||  Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0  && idade < 10) {
                //criança
                img.setAttribute('src', 'homemcrianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0  && idade < 10) {
                //criança
                img.setAttribute('src', 'mulhercrianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}