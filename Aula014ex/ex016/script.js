
function contar() {

    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('Preencha os dados para continuar!')
    } else {
        //res.innerHTML = 'Contando....'
        let i = parseInt(ini.value)
        let f = parseInt(fim.value)
        let p = parseInt(pas.value)

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F600}`
        }
        res.innerHTML += `\u{1F911}`


    }







}