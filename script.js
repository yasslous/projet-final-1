
function savoir() {
    alert("Pour savoir plus , vous pouvez nous contacter")
}
function admission () {
    alert("le formulaire est disponsible actuellement dans notre ètablissement IT")
}
function tèlè () {
    alert("Notre info est encore en tèlèchargement , vous pouvez nous attendre")
}
function portes () {
    alert("soyez le bienvenue chez nous en 7 novembre 2011")
}
function certf () {
alert("https://www.kicklox.com/blog-talent/les-7-certifications-informatiques-pour-valoriser-son-cv/")

}
// change color

function  espace() {
    let demo = document.getElementById("idm") ;
   
        demo.style.color="yellow" ;
    
}
// coeur
// cycle d'ingènieur
let choix = true ;
function change() {
    let button = document.getElementById("button") ;
    if (choix == true ) {
        button.style.color = "red" ;
        choix = false ;
    } else {
        button.style.color = "black" ;
        choix = true ;
    }
}
//licence
let choose = true ;
function li() {
    let span = document.getElementById("span") ;
    if (choose == true ) {
        span.style.color = "red" ;
        choose= false ;
    } else {
        span.style.color = "black" ;
        choose = true ;
    }
}
// master
let want = true ;
function mas() {
    let span = document.getElementById("mum") ;
    if (want == true ) {
        span.style.color = "red" ;
        want= false ;
    } else {
        span.style.color = "black" ;
        want = true ;
    }
}
// cycel prèparatoire
let pref = true ;
function cycle() {
    let span = document.getElementById("input") ;
    if (pref == true ) {
        span.style.color = "red" ;
        pref= false ;
    } else {
        span.style.color = "black" ;
        pref = true ;
    }
}



