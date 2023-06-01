function enviar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var aform = document.getElementById('iano')
    var res = document.querySelector('div#res')


    if (aform.value.length == 0 || aform.value > anoatual) {
        alert('Digite seus dados novamente!!!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoatual - Number(aform.value)

        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'homemcrianca.png')
            } else if (idade <= 21) {
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade > 21 && idade <= 50) {
                img.setAttribute('src', 'homemadulto.png')
            } else {
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'mulhercrianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos.`)
        res.appendChild(img)

    }

}