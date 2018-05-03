function GameBoard(){
    this.gameField = this.createGameField("game-container")
    var objects = this.objects = [ ]
    objects.push(new StarField(this.gameField, 5))
    objects.push(new StarField(this.gameField, 1))

    this.elements = [ ]
}

GameBoard.prototype.width = function(){
    return this.gameField.width()
}

GameBoard.prototype.height = function(){
    return this.gameField.height()
}

GameBoard.prototype.createGameField = function(containerId){
    var gameField = $('<div class="game-field"></div>')
    $("#" + containerId).append(gameField)
    return gameField
}

GameBoard.prototype.step = function(){
    for(var i=0; i<this.objects.length; i++){
        this.objects[i].step ? this.objects[i].step() : null
    }
}

GameBoard.prototype.addObject = function(obj){
    if(obj.el){
        this.gameField.append(obj.el)
    }
    this.objects.push(obj)
}