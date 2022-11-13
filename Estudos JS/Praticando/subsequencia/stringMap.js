function mapString(string){
    var map = {}
    for (i=0; i<string.length; i++){
        let letter = string[i]
        if (map[letter]){
            map[letter].push(i) //adiciona o índice da letra atual na array armazenada na propriedade (letra atual), vai acontecer quando é letra repetida, por exemplo na palavra 'boo'
        } else {
            map[letter] = [i] //o i está entre colchetes [i] pois estou atribuindo arrays para cada letra, sendo que a mesma letra pode estar em 2 espaços da palavra
        }
    }
    return map
}