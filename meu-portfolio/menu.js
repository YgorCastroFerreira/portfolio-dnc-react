// var inicio = window.document.getElementById("main-container")
// var sobre = window.document.getElementById("sobre")
// var projetos = window.document.getElementById("projetos")

function inicio(){
    const element = window.document.getElementById("main-container");
    element.scrollIntoView(true);
}


function sobre(){
    const target = document.getElementById("sobre");
    target.scrollIntoView(true);
}

function projetos(){
    const target = document.querySelector('#projetos');
    target.scrollIntoView(false);
}


