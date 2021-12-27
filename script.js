    //chaveRGB = false;

/* function testeevent() {
    if(chaveRGB == false) {
        chaveRGB = true;
        console.log("Chave ligada!");
        changeColor();
    }
    else {
        chaveRGB = false;
        console.log("Chave desligada!");
    }
}*/

/*function changeColor() {
    while(chaveRGB == true) {
        color = 0;
        switch(color) {
            case 0: console.log("Vermelho!"), color+1;
            case 1: console.log("Verde!"), color+1;
            case 2: console.log("Blue!"), color = 0;
        }
    }
}*/

velocidade = 50;

function eventRGB() {
    console.log("Iniciando o evento RGB");
    changeRed();
}

function changeRed() {
    console.log("Vermelho");
    document.body.style.backgroundColor = "#FF0000";
    setTimeout(changeOrange, velocidade);
}

function changeOrange() {
    console.log("Laranja");
    document.body.style.backgroundColor = "#FF7F00";
    setTimeout(changeYellow, velocidade);
}

function changeYellow() {
    console.log("Amarelo");
    document.body.style.backgroundColor = "#FFFF00";
    setTimeout(changeGreen, velocidade);
}

function changeGreen() {
    console.log("Verde");
    document.body.style.backgroundColor = "#00FF00";
    setTimeout(changeCian, velocidade);
}

function changeCian() {
    console.log("Ciano");
    document.body.style.backgroundColor = "#00FFFF";
    setTimeout(changeBlue, velocidade);
}

function changeBlue() {
    console.log("Azul");
    document.body.style.backgroundColor = "#0000FF";
    setTimeout(changePurple, velocidade);
}

function changePurple() {
    console.log("Roxo");
    document.body.style.backgroundColor = "#8B00FF";
    setTimeout(changeRed, velocidade);
}

function stopRGB() {

}