function verificar(){
    var data =  new Date()
    var ano = document.getElementById('txtano') //por querySelector não funciona, não sei pq
    var idade = data.getFullYear() - ano.value //preciso adicionar o .value para pegar o valor digitado
    var res = document.getElementById('res')
    if (ano.value.length == 0 || ano.value > data.getFullYear()){
        window.alert('[ERRO] Verifique novamente')
    } else {
        resFinal()
    }
    function resFinal(){
        var genero = ''
        var fsex = document.getElementsByName('radsex') //como tenho 2 radio e quero ver qual está selecionado eu acesso por nome, sendo que os 2 tem o mesmo nome e id diferente
        //consigo acessar masculino com [0] e feminino com [1]
        var img = document.createElement('img') //criei um elemento de imagem dinâmicamente no documento
        img.setAttribute('id', 'foto') //agora a imagem tem um id="foto"
        if (fsex[0].checked) { //se masculino está marcado
            genero = 'Homem'
            if (idade > 0 && idade < 12){
                img.setAttribute('src', 'foto-bebe-m.png') //atribui a imagem que eu quero
            } else if (idade > 11 && idade < 25){
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade > 24 && idade < 40){
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade > 0 && idade < 12){
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade > 11 && idade < 25){
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade > 24 && idade <40){
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' //alinha o texto
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //adiciona a imagem na página
    }
}