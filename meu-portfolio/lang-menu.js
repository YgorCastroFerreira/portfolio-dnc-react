var port = window.document.getElementById("pt")
var eng = window.document.getElementById("en")
var esp = window.document.getElementById("es")

var portfolio= window.document.getElementById("port-text")
var home = window.document.getElementById("home")
var about = window.document.getElementById("about")
var projects = window.document.getElementById("projects")
var idioma = window.document.getElementById("idioma")

var welc = window.document.getElementById("welcome")

var arq = window.document.getElementById("arq")



function portugues(){
    portfolio.src = './Imagens/portfolio.svg'
    home.innerText = "Início"
    about.innerText = "Sobre"
    projects.innerHTML = "Projetos"
    idioma.innerHTML = "Idioma"

    port.innerHTML = "Português"
    eng.innerHTML = "Inglês"
    esp.innerHTML = "Espanhol"

    welc.innerHTML = "Seja bem Vindo!"

    arq.src = './Projetos/arquit.svg'
}

function ingles(){
    portfolio.src = './Imagens/portfolio-en.svg'
    home.innerHTML = "Home"
    about.innerHTML = "About"
    projects.innerHTML = "Projects"
    idioma.innerHTML = "Language"

    port.innerHTML = "Portuguese"
    eng.innerHTML = "English"
    esp.innerHTML = "Spanish"

    welc.innerHTML = "Welcome!"
    arq.src = "./Projetos/arquit-en.svg"
}

function espanhol(){
    portfolio.src = './Imagens/portfolio-es.svg'

    home.innerHTML = "Inicio"
    about.innerHTML = "Quién soy"
    projects.innerHTML = "Proyectos"
    idioma.innerHTML = "Idioma"

    port.innerHTML = "Portugués"
    eng.innerHTML = "Inglés"
    esp.innerHTML = "Espanhol"

    welc.innerHTML = "Bienvenido!"
    arq.src = "./Projetos/arquit-es.svg"
}