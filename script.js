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