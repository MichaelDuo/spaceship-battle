import { Obj, Game, Utils, Vector } from "../engine"

export class Missle extends Obj {
    el = $('<div class="missle"></div>')
    tag = "missle"
    speed = 15

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

    step(){
        this.left += this.speed * this.vector.x
        this.top += this.speed * this.vector.y
        this.render()
    }

    render(){
        this.el.css({ top: this.top, left: this.left })
    }
}