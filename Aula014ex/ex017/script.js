function tabuada() {
    let num = document.getElementById('itabu')
    let tab = document.getElementById('seltab')

    let resp = document.getElementById('msg')


    if (num.value == 0) {
        alert('Digite alguma coisa para continuar!')
    } else {
        let n = Number(num.value)
        for (i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n * i}`
            tab.appendChild(item)

        }
    }




















}