function carregar() {
    var msg = document.getElementById("msg")
    var foto = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora}h.</p>`
    if (hora >= 0 && hora <= 12){
        //manhã
        sds.innerHTML = `Bom dia!`
        imagem.src = "manhã.webp"
        document.body.style.background = "#F9D697"
    } else if (hora >= 12 && hora <= 17){
        //tarde
        sds.innerHTML = `Boa tarde!`
        imagem.src = "tarde.webp"
        document.body.style.background = "#B5605F"
    } else {
        //noite
        sds.innerHTML = `Boa noite!`
        imagem.src = "noite.webp"
        document.body.style.background = "#1F2F5B"
    }
}