function enviar(){
    var data = new Date()
    var anoatual = data.getFullYear()
    var aform = document.getElementById('iano')
    var res = document.querySelector('div#res')
    if(aform.value.length == 0 || aform.value > anoatual){
        alert('Digite seus dados novamente!!!')
        
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = anoatual - Number(aform.value)

        res.innerHTML = (`Sua idade é: ${idade} anos`)
        
    }

}