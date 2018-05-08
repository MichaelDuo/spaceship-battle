import { Sprite, Game, Utils, Position, Vector } from "../engine"
import { Missle } from "./missle"
export class Enemy extends Sprite {
   el:JQuery = $('<div class="object enemy"></div>')
   game:Game

   tag = "ememy"
   speed:number = 1
   vector:Vector = { x: 0, y: -1 }

   top:number = 0
   left:number = 0

    constructor(position: Position){
        super()
        this.top = position.top
        this.left = position.left
    }

    setup(game:Game){
        this.game = game
    }

    create(){}

    destroy(){}

    step(){
        this.left += this.vector.x * this.speed
        this.top += this.vector.y * this.speed
    }
}