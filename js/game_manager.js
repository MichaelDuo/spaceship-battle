function GameManager(gameBoard, keyboardInputManager){
    this.gameBoard = gameBoard
    this.keyboardInputManager = keyboardInputManager
    this.player = null
    this.setup()
}

GameManager.prototype.setup = function(){
    this.setPlayer()
}

GameManager.prototype.setPlayer = function(){
    var player = this.player = new Player()
    this.gameBoard.addObject(player)
}

GameManager.prototype.step = function(){
    var key = this.keyboardInputManager.getKeyName()
    this.movePlayer(key)
}

GameManager.prototype.getVector = function(direction){
    switch(direction){
        case "up":
            return { x: 0, y: -1 }
        case "right":
            return { x: 1, y: 0 }
        case "down":
            return { x: 0, y: 1 }
        case "left":
            return { x: -1, y: 0 }
        default:
            return { x: 0, y: 0 }
    }
}

GameManager.prototype.movePlayer = function(directon){
    var vector = this.getVector(directon)
    var player = this.player
    player.setLeft(player.getLeft() + vector.x * player.velocity)
    player.setTop(player.getTop() + vector.y * player.velocity)

    if(player.getLeft()<0){
        player.setLeft(0)
    }
    if(player.getTop()<0){
        player.setTop(0)
    }
    if(player.left+player.width()>this.gameBoard.width()){
        player.setLeft(this.gameBoard.width() - player.width())
    }
    if(player.top+player.height()>this.gameBoard.height()){
        player.setTop(this.gameBoard.height() - player.height())
    }
}