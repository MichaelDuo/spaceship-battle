import { Sprite, Game, Utils, Vector } from "../engine"
import Constants from "../constants"
import { Enemy } from "./enemy"
export class Missle extends Sprite {
    tag = Constants.MISSLE
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
        super.setup(game)
        this.game = game
    }

    step(){
        this.left += this.speed * this.vector.x
        this.top += this.speed * this.vector.y
        if(!this.game.world.inBound(this.getBoundingRect())){
            this.game.world.removeObject(this)
        }
        let collisionTarget = this.game.world.collide(this, [Constants.ENEMY])
        if(collisionTarget instanceof Enemy){
            collisionTarget.hit(2)
        }
    }

    destroyed(){ }
}