import { Sprite, Game, Utils, Vector } from "../engine"
import Constants from "../constants"
import { Enemy } from "./enemy"
export class Missle extends Sprite {
    tag = Constants.MISSLE
    speed = 30
    game:Game
    damage = 1

    top = 0
    left = 0
    width = 3
    height = 15
    backgroundColor = "yellow"
    vector:Vector
    target:string

    constructor(speed:number, position:{top: number, left: number}, vector:Vector, target:string){
        super()
        this.speed = speed
        this.top = position.top
        this.left = position.left - this.width/2
        this.vector = vector
        this.target = target
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
        let collisionTarget = this.game.world.collide(this, [this.target])
        if(collisionTarget instanceof Enemy){
            this.destroy()
            collisionTarget.hit(this.damage)
        }
    }

    destroyed(){ }
}