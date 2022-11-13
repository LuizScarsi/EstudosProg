function contagem(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.textContent = 'Impossível contar'
    } else {
        res.textContent = 'Contando: '
        let n1 = Number(ini.value)
        let n2 = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0){
            alert('Passo inválido. Considerando Passo 1')
            p=1
        }
        if (n1<n2){
            //contagem crescente
            for (let c=n1; c<=n2; c+=p){
                res.textContent += ` ${c} \u{1f449} `
            }
        } else {
            //contagem regressiva
            for (let c=n1; c>=n2; c-=p)
                res.textContent += ` ${c} \u{1f449} `
        }
        res.textContent += `\u{1f3c1}`
    }
}