function component(width, height, color , x ,y){
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

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