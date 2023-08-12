element = document.getElementById("start_now");

element.addEventListener("mouseover", () => {
    document.getElementById("home").className="imagem2";
});

element.addEventListener("mouseout", () => {
    document.getElementById("home").className="imagem1";
});

function closed_nivels(){
    document.getElementById("fases").className="open";
}

function open_nivels(){
    document.getElementById("fases").className="closed";
}

function close_modal(id){
    document.getElementById(id).className="invisible";
}

function open_modal(id){
    document.getElementById(id).className="visible";
}