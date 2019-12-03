function moveup(){
    myGamePiece.speedY -=1;
}

function movedown(){
    myGamePiece.speedY +=1;
}

function moveleft(){
    myGamePiece.speedX -=1;
}

function moveright(){
    myGamePiece.speedX +=1;
}

function stopMove(){
    myGamePiece.speedY = 0;
    myGamePiece.speedX = 0;
}

document.addEventListener("keypress", function(e){
    var press = e.keyCode;
    console.log(press);
})
    
