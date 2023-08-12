element = document.getElementById("start_now");

element.addEventListener("mouseover", () => {
    document.getElementById("home").className="imagem2";
});

element.addEventListener("mouseout", () => {
    document.getElementById("home").className="imagem1";
});

function open_page(id){
    document.getElementById(id).className="open";
}

function close_page(id){
    document.getElementById(id).className="closed";
}

function close_modal(id){
    document.getElementById(id).className="invisible";
}

function open_modal(id){
    document.getElementById(id).className="visible";
}

function teste(){
    document.getElementById("loading").className="visible";

    setTimeout(() => {
        document.getElementById("loading").className="invisible";
    }, "3000");

}