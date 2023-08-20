var audio = document.querySelector("audio"); // Seleciona o elemento <audio>
audio.play();

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

let nivel_atual = 1;
let nivel_desbloc = 1;
atualiza_mudar_nivel();

function atualiza_mudar_nivel() {
    const elementsSeg = document.getElementsByClassName("level_seg");
    const elementsAnt = document.getElementsByClassName("level_ant");

    for (let i = 0; i < elementsSeg.length; i++) {
        elementsSeg[i].classList.toggle("block", nivel_atual === nivel_desbloc);
    }

    for (let i = 0; i < elementsAnt.length; i++) {
        elementsAnt[i].classList.toggle("block", nivel_atual === 1);
    }
}

function mudarnivel(element) {
    close_modal(`nivel${nivel_atual}`);
    nivel_atual += element.classList.contains("level_ant") ? -1 : 1;
    open_modal(`nivel${nivel_atual}`);
    atualiza_mudar_nivel();
    getText();
}

function proxnivel(){
    if(nivel_atual == 4){
        close_modal('jogo');
        close_page('pre_pantanal');
    }else{
        close_modal(`nivel${nivel_atual}`);
        nivel_atual++;
        open_modal(`nivel${nivel_atual}`)
        atualiza_mudar_nivel();
        close_modal('sucess');
    }
}

function tentar_nov(id){
    close_modal(id);
    document.getElementById(`resp_nivel${nivel_atual}`).value = '';

    posicaoInitial();
}

function posicaoInitial(){
    const campo = document.getElementById(`campo_nivel${nivel_atual}`);

    campo.style.justifyContent = "initial";
    campo.style.alignItems = "initial";
    campo.style.flexDirection = "initial";

    switch(nivel_atual){
        case 1:
            campo.style.justifyContent = "flex-end";
            break;
        case 2:
            campo.style.alignItems = "flex-end";
            break;
    }
}

let resp_user;

function getText(){
    let respElem = document.getElementById(`resp_nivel${nivel_atual}`);
    resp_user = respElem.value.toLowerCase().replace(/\s/g, '');

    atualizaCSS(resp_user, nivel_atual);
}


/*document.addEventListenerresp_nivel2("keydown", (event) => {
    if (document.getElementById('jogo').className === "visible") {
        if (event.key === ";") {
            const nivel = nivel_atual;
            const nivelElem = document.getElementById(`nivel${nivel}`);
            const respElem = document.getElementById(`resp_nivel${nivel}`);
            resp_user = respElem.value.toLowerCase().replace(/\s/g, '');

            atualizaCSS(resp_user, nivel);
        }
    }
});*/

function atualizaCSS(texto, nivel) {
    const campo = document.getElementById(`campo_nivel${nivel}`);
    
    switch (texto) {
        case "justify-content:flex-end;":
            campo.style.justifyContent = "flex-end";
            break;
        case "justify-content:flex-start;":
            campo.style.justifyContent = "flex-start";
            break;
        case "justify-content:space-between;":
            campo.style.justifyContent = "space-between";
            break;
        case "justify-content:center;":
            campo.style.justifyContent = "center";
            break;
        case "justify-content:space-around;":
            campo.style.justifyContent = "space-around";
            break;
        case "justify-content:space-evenly;":
            campo.style.justifyContent = "space-evenly";
            break;
        case "align-items:flex-end;":
            campo.style.alignItems = "flex-end";
            break;
        case "align-items:flex-start;":
            campo.style.alignItems = "flex-start";
            break;
        case "align-items:center;":
            campo.style.alignItems = "center";
            break;
        case "align-items:baseline;":
            campo.style.alignItems = "baseline";
            break;
        case "align-items:stretch;":
            campo.style.alignItems = "stretch";
            break;
        case "flex-direction:row;":
            campo.style.flexDirection = "row";
            break;
        case "flex-direction:row-reverse;":
            campo.style.flexDirection = "row-reverse";
            break;
        case "flex-direction:column;":
            campo.style.flexDirection = "column";
            break;
        case "flex-direction:column-reverse;":
            campo.style.flexDirection = "column-reverse";
            break;
        default:
            posicaoInitial();
            break;
    }
}

function verifica(resposta){
    if(resposta == resp_user){
        if(nivel_atual == 4){
            document.getElementById("titulo_sucess").textContent = "Parabéns, você encerrou sua jornada no Pantanal! Todos animais estão salvos! :)";

            document.getElementById("botao_sucess").textContent = "próxima fase";
        }else{
            document.getElementById("titulo_sucess").textContent = `Parabéns você concluiu o nível ${nivel_atual}!!`;
        }
        open_modal('sucess');
        if(nivel_atual == nivel_desbloc){
            nivel_desbloc++;
            atualiza_mudar_nivel();
        }
        
    }else{
        document.getElementById("titulo_fail").textContent = "Oh, não! parece que isso não funcionou... Tente novamente!" ;
        open_modal('fail');
    }
}

function mudar_instrucao() {
    const title_story = document.getElementById(`t_hist${nivel_atual}`);
    const title_flex = document.getElementById(`t_flex${nivel_atual}`);
    const story = document.getElementById(`hist${nivel_atual}`);
    const expla = document.getElementById(`expl${nivel_atual}`);

    title_story.classList.toggle("active");
    title_flex.classList.toggle("active");
    story.classList.toggle("invisible");
    expla.classList.toggle("invisible");
}
