var arraynum = []
function adicionar(){
    var num = document.getElementById('num')
    var n = Number(num.value)
    var tab = document.getElementById('tab')
    if (num.value.length == 0 || num.value > 100 || num.value < 1 || arraynum.indexOf(n) != -1){
        alert('[ERRO] Insira um número válido')
    } else {
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        tab.appendChild(item)
        arraynum.push(n)
    }
    res.textContent = ``
    num.value = ''
    num.focus()
}
function finalizar(){
    var restxt = document.getElementById('res')
    var res = document.createElement('p')
    restxt.appendChild(res)
    let maior = arraynum[0], menor = arraynum[0], soma = 0
    for (let pos in arraynum){
        if (arraynum[pos]>maior){
            maior = arraynum[pos]
        }
        if (arraynum[pos]<menor){
            menor = arraynum[pos]
        }
        soma += arraynum[pos]
    }
    res.innerHTML = `Ao todo, temos ${arraynum.length} números cadastrados`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${soma/arraynum.length}</p>`
}