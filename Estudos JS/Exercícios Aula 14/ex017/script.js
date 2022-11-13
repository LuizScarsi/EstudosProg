function calcTabela(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        alert('[ERRO] Informe um número')
    } else {
        let n = Number(num.value)
        let r = [] //não precisava usar array, usei pra teste
        tab.innerHTML = '' //utilizado para limpar cálculos armazenados no <select>
        for (let i = 1; i<=10; i++){
            r[i] = n*i
            let item = document.createElement('option') //cria um elemento <option> dentro do <select>
            //interessante que não teve referência ao <select>
            //Dar uma pesquisada nisso
            item.text = `${n} x ${i} = ${r[i]}` //a princípio tem que ser entre aspas `` //modifica o texto dentro da <option>
            item.value = `tab${i}` //adiciona um value para cada item, importante para PHP
            tab.appendChild(item) //adiciona um elemento do tipo Child, nesse caso item. Se não usar isso, não aparece nada
        }
    }
}//na aula o professor não usou array para resolver, eu usei para ver se ia funcionar certinho.
//Na aula ficou mais simples e eficiente.