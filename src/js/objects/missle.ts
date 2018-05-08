import { Sprite, Game, Utils, Vector } from "../engine"

export class Missle extends Sprite {
    tag = "missle"
    speed = 30
    game:Game

    top = 0
    left = 0
    width = 3
    height = 15
    backgroundColor = "yellow"
    vector:Vector

    constructor(speed:number, position:{top: number, left: number}, vector:Vector){
        super()
        this.speed = speed
        this.top = position.top
        this.left = position.left - this.width/2
        this.vector = vector
    }

    setup(game:Game){
        this.game = game
    }

    step(){
        this.left += this.speed * this.vector.x
        this.top += this.speed * this.vector.y
        if(!this.game.world.inBound({
            top: this.top,
            left: this.left,
            width: this.width,
            height: this.height
        })){
            this.game.world.removeObject(this)
        }
    }

    destroy(){ }
}