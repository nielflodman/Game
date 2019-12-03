function startGame(){
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120)   
}

function updateGameArea(){
    myGameArea.clear();  
    myGamePiece.newPos();
    myGamePiece.update();
   
}
