function fatorial(){
    let num = document.getElementById('num')
    let res = document.getElementById('res')
    if (num.value.length == 0){
        alert('[ERRO] Insira um número')
    } else {
        let n = Number(num.value)
        res.textContent = `O resultado de ${n} `
        for (var r=n; n>1; n--){
            res.textContent += `*${n-1} `
            r *= n-1
        }
    }
    res.textContent += `= ${r}`
}