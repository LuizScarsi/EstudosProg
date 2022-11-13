function carregar() {
    var img = document.querySelector('img#imagem');
    var msg = document.getElementById('msg');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.jpg';
        document.body.style.background = '#e2cd9f'
    } else if (hora<=18){
        img.src = 'tarde.jpg';
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noite.jpg';
        document.body.style.background = '#515154'
    }
}