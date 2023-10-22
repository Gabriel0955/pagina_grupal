let conte = document.getElementById("conte")

let futbol = document.getElementById("futbol")

let noticias = document.getElementById("noticias")
let apuesta = document.getElementById("apuesta")
let apue = document.getElementById("apue")
let notici = document.getElementById("notici")
let noti = document.getElementById("noti")
let hotele = document.getElementById("hotele")
let pr = document.getElementById("pr")
function mostrar(){
    conte.style.display = "block"
    futbol.style.display = "none"
    noticias.style.display = "none"
    pr.style.display="none"
    
    
}
function mostras(){
    conte.style.display = "none"
    noticias.style.display = "none"
    futbol.style.display = "block"
    apue.style.display = "none"
}
function mostra(){
    conte.style.display = "none"
    futbol.style.display = "none"
    noticias.style.display = "block"
    noti.style.display = "none"
}
document.getElementById("hote").addEventListener("click",mostrar)
document.getElementById("fut").addEventListener("click",mostras)
document.getElementById("note").addEventListener("click",mostra)


apue.style.display="none"
noti.style.display = "none"
pr.style.display = "none"

function mostraa(){
    apue.style.display = "block"

}
function most(){
    pr.style.display = "block"

}
function mostraal(){
    noti.style.display = "block"

}
notici.addEventListener("click",mostraal)
apuesta.addEventListener("click",mostraa)
hotele.addEventListener("click",most)
