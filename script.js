let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snacke= [];
snacke[0]= {
    x: 8 * box,
    y:8*box
}

function criarBG(){
    context.fillStyle= "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box);
}

function criarCobra() {
    for(i=0; i<snacke.length; i++){
        context.fillStyle = "green"
        context.fillRect(snacke[i].x, snacke[i].y, box, box);
    }
}

criarBG();
criarCobra();