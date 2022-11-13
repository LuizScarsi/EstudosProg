function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let n1 = Number(inicio.value) //o input de número considera o número como string, converter para poder realizar operações
    let n2 = Number(fim.value)
    let p = Number(passo.value)
    //manipulação dos valores dos input de número
    let res = document.getElementById('res')
    if (n1.length == 0 || n2.length == 0 || p.length == 0){
        alert('[ERRO] Verifique as informações!')
    } else {
        res.textContent = 'Contando: '
        if (p==0){
            alert('Valor de passo inválido, considerando passo 1')
            p = 1
        }
        if (n1<n2){
            for (let c=n1; c<=n2; c+=p) {
                res.textContent += ` ${c} \u{1f449} `
            }
        } else {
            for (let c=n1; c>=n2; c-=p){
                res.textContent += ` ${c} \u{1f449} `
            }
        }
        res.textContent += `\u{1f3c1}`
    }
}