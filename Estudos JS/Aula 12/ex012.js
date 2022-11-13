var agora = new Date() //Pega a data/horas/min/etc de onde o programa está sendo rodado
var hora = agora.getHours() //Pegando especificamente a hora
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log('Bom dia!')
} else if (hora <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
} //Adicionar Boa madrugada, mais complexidade