let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snacke= [];
snacke[0]= {
    x: 8 * box,
    y:8*box
}

let direction = "right";
let food ={
    x:Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 +1) * box
}

function criarBG(){
    context.fillStyle= "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box);
}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

function criarCobra() {
    for(i=0; i<snacke.length; i++){
        context.fillStyle = "green"
        context.fillRect(snacke[i].x, snacke[i].y, box, box);
    }
}

document.addEventListener("keydown", update)

function update(event){

    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down" 

}

function iniciarJogo(){
    
     if(snacke[0].x > 15*box && direction == "right") snacke[0].x = 0;
     if(snacke[0].x <0 && direction == "left") snacke[0].x = 16 * box;
     if(snacke[0].y > 15*box && direction == "down") snacke[0].y = 0;
     if(snacke[0].y < 0 && direction == "up") snacke[0].y = 16 * box;

    for(i=1; i< snacke.length;i++){
        if(snacke[0].x == snacke[i].x && snacke[0].y == snacke[i].y){
            clearInterval(jogo);
            alert('game over :(')
        }
    }
   
    criarBG();
    criarCobra();
    drawFood();

    let snakeX = snacke[0].x;
    let snakeY = snacke[0].y;

    if(direction == "right") snakeX +=box;
    if(direction == "left") snakeX-=box;
    if(direction == "up") snakeY -=box;
    if(direction == "down") snakeY +=box;

    if(snakeX != food.x || snakeY != food.y){
        snacke.pop();
    }
    else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y =Math.floor(Math.random() * 15 +1) * box;
    }



    let newHwad = {
        x: snakeX,
        y:snakeY
    }

    snacke.unshift(newHwad);
}

let jogo = setInterval(iniciarJogo, 100);


