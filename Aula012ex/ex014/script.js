 function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    data = new Date()

    var hora = data.getHours()

    //var hora = 7

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora <= 12){
        img.src = 'manha.png'

        document.body.style.background = '#97a5b0'  //97a5b0
        //Bom dia

    }else if(hora >= 12 && hora < 18){
        img.src = './tarde.png'
        document.body.style.background = '#f3c623'
        //Boa Tarde
    }else{
        img.src = './noite.png'
        document.body.style.background = '#213742'
        //Boa Noite
    }

 }
    

