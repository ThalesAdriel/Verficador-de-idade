function verificar(){
    let inicio = Number(document.querySelector('input#inicio').value)
    let fim = Number(document.querySelector('input#fim').value)
    let passo = Number(document.querySelector('input#passo').value)
    let resposta = document.querySelector('div#ask-div-control')
    let contador = ""

    if (!!passo) {
        while (inicio < fim) {
            contador = contador+` 👉${inicio}`
            inicio+=passo
            resposta.innerHTML = `Detectamos: ${contador} 👉 ${fim}🚩`
        }
        while (inicio > fim) {
            contador = contador+` 👉${inicio}`
            inicio-=passo
            resposta.innerHTML = `Detectamos: ${contador} 👉 ${fim}🚩`
        }
    } else {
        alert('[erro] por favor insira os dados corretamente.')
    }

    
}
