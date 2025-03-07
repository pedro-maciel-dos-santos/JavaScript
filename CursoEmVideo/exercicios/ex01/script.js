function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora < 12){
        img.src = 'fotos/dia.png'
        document.body.style.background = '#ecd8bd'
    } else if (hora >= 12 && hora <= 18){
       img.src = 'fotos/tarde.png'
       document.body.style.background = '#fd9301'
    } else{
       img.src = 'fotos/noite.png'
       document.body.style.background = '#021e3b'
    }
}

