function verificar(){
    let inicio = Number(document.querySelector('input#inicio').value)
    let resposta = document.querySelector('#select-control')
    let options = document.querySelector('option')
    let contador = 0
    let resultado = ""
    if (resposta.length < 10) {
        while (contador < 10) {
            contador += 1
            resultado = inicio * contador
            resposta.innerHTML += `<option class='options'> Detectamos: ${inicio} X ${contador} = ${resultado} </option>`
        }
    }else{
        
    }
}
