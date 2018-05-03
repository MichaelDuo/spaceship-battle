function HTMLActuator(){
    this.gameField = this.createGameField("game-container")
    this.renderStarfield()
}

HTMLActuator.prototype.createGameField = function(containerId){
    var gameField = $('<div class="game-field"></div>')
    $("#" + containerId).append(gameField)
    return gameField
}

HTMLActuator.prototype.renderStarfield = function(){
    let speed = 2
    let starfield1 = $('<div class="starfield"></div>')
    let starfield2 = $('<div class="starfield"></div>')
    starfield1.css({top:"-" + this.gameField.height()+ "px"})
    starfield2.css({top: "0px"})
    this.gameField.append(starfield1)
    this.gameField.append(starfield2)

    loopBackground()

    var self = this, s1Top, s1Height, gameFieldHeight

    function loopBackground(){
        window.requestAnimationFrame(function(){
            s1Top = starfield1.position().top + speed
            s1Height = starfield1.height()
            gameFieldHeight = self.gameField.height()

            if(s1Top>=gameFieldHeight){
                // Move to the top
                starfield1.css({top: "-" + gameFieldHeight+ "px"})
                // Update the new position
                s1Top = -gameFieldHeight
            } else {
                starfield1.css({top: (s1Top )+"px"})
            }

            if(s1Top < 0) {
                starfield2.css({top: (s1Top + s1Height)+"px"})
            } else {
                starfield2.css({top: (s1Top - s1Height)+"px"})
            }

            loopBackground()
        })
    }
}