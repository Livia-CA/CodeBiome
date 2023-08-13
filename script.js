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

function loading(){
    document.getElementById("loading").className="visible";

    setTimeout(() => {
        document.getElementById("loading").className="invisible";
        document.getElementById("jogo").className="visible";
    }, "3000");

}

var nivel_atual = 1;
var nivel_desbloc = 1;
atualiza_mudar_nivel();

function atualiza_mudar_nivel(){
    if(nivel_atual == nivel_desbloc){
        var elements = document.getElementsByClassName("level_seg");
    
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add("block");
        }
    }else{
        var elements = document.getElementsByClassName("level_seg");
    
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("block");
        }
    }
    if(nivel_atual == 1){
        var elements = document.getElementsByClassName("level_ant");
    
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add("block");
        }
    }else{
        var elements = document.getElementsByClassName("level_ant");
    
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("block");
        }
    }    
}

function mudarnivel(element){
    close_modal(`nivel${nivel_atual}`);
    if(element.classList.contains("level_ant")){
        nivel_atual--;
    }else{
        nivel_atual++;
    }
    open_modal(`nivel${nivel_atual}`)
    atualiza_mudar_nivel();
}

var resp_user;

document.addEventListener("keydown", (event)=>{
    var nivel;
    if(document.getElementById('jogo').className == "visible"){
        if(event.key === ";"){
            if(document.getElementById('nivel1').className == "visible"){
                resp_user = document.getElementById("resp_nivel1").value;
                nivel = 1;
            }
            if(document.getElementById('nivel2').className == "visible"){
                resp_user = document.getElementById("resp_nivel2").value;
                nivel = 2;
            }
            if(document.getElementById('nivel3').className == "visible"){
                resp_user = document.getElementById("resp_nivel3").value;
                nivel = 3;
            }
    
            resp_user = resp_user.toLowerCase();
            resp_user = resp_user.replace(/\s/g,'');

            atualizaCSS(resp_user, nivel);
        }
    }
})

function atualizaCSS(texto, nivel){
    switch (texto){
        case "justify-content:flex-end":
            document.getElementById(`campo_nivel${nivel}`).style.justifyContent = "flex-end";
            break;
        case "justify-content:flex-start":
            document.getElementById(`campo_nivel${nivel}`).style.justifyContent = "flex-start";
            break;

        case "justify-content:space-between":
            campo.style.justifyContent = "space-between";
            break;
    }
}

function verifica(resposta){
    if(resposta == resp_user){
        alert("acertouuu");
        if(nivel_atual == nivel_desbloc){
            nivel_desbloc++;
            atualiza_mudar_nivel();
        }
    }
}

function mudar_instrucao(){

    var title_story = document.getElementById(`t_hist${nivel_atual}`);
    var title_flex = document.getElementById(`t_flex${nivel_atual}`);

    var story = document.getElementById(`hist${nivel_atual}`);
    var expla = document.getElementById(`expl${nivel_atual}`);
    
    if(title_story.classList.contains("active")){
        title_story.classList.remove("active");
        title_flex.classList.add("active");

        story.classList.add("invisible");
        expla.classList.remove("invisible");
    }else{
        title_story.classList.add("active");
        title_flex.classList.remove("active");

        story.classList.remove("invisible");
        expla.classList.add("invisible");
    }
    
}