import { Obj, Game, Utils, Vector } from "../engine"

export class Missle extends Obj {
    el = $('<div class="missle"></div>')
    tag = "missle"
    speed = 15
    game:Game

    top = 0
    left = 0
    vector:Vector

    constructor(speed:number, position:{top: number, left: number}, vector:Vector){
        super()
        this.speed = speed
        this.top = position.top
        this.left = position.left
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
            width: this.getWidth(),
            height: this.getHeight()
        })){
            console.log("Out of bounds")
            this.game.world.removeObject(this)
        }
        this.render()
    }

    destroy(){
        console.log("Missle on destroy")
    }

    render(){
        this.el.css({ top: this.top, left: this.left })
    }
}