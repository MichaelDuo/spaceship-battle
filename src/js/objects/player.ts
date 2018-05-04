import * as Engine from "../engine"

class Player extends Engine.Obj {
    el:JQuery = $('<div class="player"></div>')
    game:Engine.Game

    constructor(){
        super()
        // Set parameters
    }

    setup(game:Engine.Game){
        // Set Environment
        this.game = game
    }

    create(){
        // el is added to the dom, create component
    }

    destroy(){
        // el is removed from dom
        // Destroy
    }

    step(){
        // Step
    }
}