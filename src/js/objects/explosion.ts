import { Sprite, Game, Utils, Vector, Position } from "../engine"

export class Explosion extends Sprite {

    top = 0
    left = 0
    width = 50
    height = 50
    backgroundColor = "red"

    constructor(position: Position){
        super()
        this.top = position.top
        this.left = position.left
    }

    setup(game:Game){
        super.setup(game)
        this.timer.setTimeout(200, ()=>{
            this.destroy()
        })
    }
}