import { Sprite, Game, Utils, Position, Vector } from "../engine"
import { Missle } from "./missle"
import Constants from "../constants"
export class Enemy extends Sprite {
   game:Game

   tag = Constants.ENEMY
   speed:number = 2
   vector:Vector = { x: 0, y: 1 }

   top = 0
   left = 0
   width = 50
   height = 50
   backgroundColor = "white"

    constructor(position: Position){
        super()
        this.top = position.top
        this.left = position.left
    }

    setup(game:Game){
        super.setup(game)
        this.game = game
    }

    hit(damage:number){
        this.destroy()
    }
    
    destroyed(){
        console.log("emeny destroyed")
    }
    
    step(){
        this.left += this.vector.x * this.speed
        this.top += this.vector.y * this.speed
        if(!this.game.world.inBound(this.getBoundingRect())){
            this.game.world.removeObject(this)
        }
    }
}