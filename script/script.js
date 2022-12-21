function verificar(){
    let ano_atual = new Date().getFullYear()
    let ano_nascimento = document.querySelector('input#ano-nascimento')
    let resposta = document.querySelector('div#ask-div-control')
    let idade = ano_atual - (ano_nascimento.value)
    let sexo = document.getElementsByName('sex')
    let genero = ''
    let img = document.createElement('img')
    let random = Math.floor(Math.random() * 3) + 1
    img.setAttribute('id','photo')
    img.setAttribute('width','300')
    if ((ano_nascimento.value) == '' || (ano_nascimento.value) > ano_atual){
        alert('[erro] por favor insira os dados corretamente.')
    }else{
        if(sexo[1].checked == false){
            genero = 'Homem'
            if (idade > 0 && idade <= 12){
                //criança
                img.setAttribute('src',`assets/male/crianca-male${random}.jpeg`)
                
            } else if (idade <= 21){
                //adolescente
                img.setAttribute('src',`assets/male/ado-male${random}.jpeg`)
            } else if (idade <= 60){
                //adulto
                img.setAttribute('src',`assets/male/adulto-male${random}.jpeg`)
            }   else if (idade <= 110){
                //idoso
                img.setAttribute('src',`assets/male/idoso-male${random}.jpeg`)
                
            }
        }else{
            genero = 'Mulher'
            if (idade > 0 && idade <= 12){
                //criança
                img.setAttribute('src',`assets/female/crianca-female${random}.jpeg`)
            } else if (idade <= 21){
                //adolescente
                img.setAttribute('src',`assets/female/ado-femele${random}.jpeg`)
                
            } else if (idade <= 60){
                //adulto
                img.setAttribute('src',`assets/female/adulto-femele${random}.jpeg`)
            }   else if (idade <= 110){
                //idoso
                img.setAttribute('src',`assets/female/idoso-femele${random}.jpeg`)
                
            }
        }
        resposta.innerHTML = `Detectamos: ${genero} com ${idade} anos de idade`
        resposta.appendChild(img)
        
    } 
}
