function verificar(){
    let inicio = Number(document.querySelector('input#inicio').value -1)
    let fim = Number(document.querySelector('input#fim').value)
    let passo = Number(document.querySelector('input#passo').value)
    let resposta = document.querySelector('div#ask-div-control')
    let contador = ""

    if (!!passo) {
        while (inicio < fim) {
            contador = contador+`👉${inicio}`
            inicio+=passo
            resposta.innerHTML = `Detectamos: ${contador}🚩`
        }
        while (inicio > fim) {
            contador = contador+`👉${inicio}`
            inicio-=passo
            resposta.innerHTML = `Detectamos: ${contador}🚩`
        }
    } else {
        alert('[erro] por favor insira os dados corretamente.')
    }


}