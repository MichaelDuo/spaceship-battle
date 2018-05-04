import { Obj, Game, Utils } from "../engine"
import { Missle } from "./missle"

export class Player extends Obj {
    el:JQuery = $('<div class="object player"></div>')
    game:Game

    tag = "player"
    speed:number = 0
    
    top:number = 0
    left:number = 0

    constructor(speed:number){
        super()
        this.speed = speed
        // Set parameters
    }

    setup(game:Game){
        // Set Environment
        this.game = game
    }

    create(){
        // el is added to the dom, create component
        let missle = new Missle(1, this.getPosition(), {x: 0, y: -1})
        this.game.world.addObject(missle)
    }

    destroy(){
        // el is removed from dom
        // Destroy
    }

    step(){
        let direction = this.game.keyboardInputManager.getKeyName()
        let vector = Utils.getVector(direction)
        this.left = this.left + vector.x * this.speed
        this.top = this.top + vector.y * this.speed
        // Bounded option?
        if(this.left < 0){
            this.left = 0
        }
        if(this.top < 0){
            this.top = 0
        }
        
        let playerWidth = this.getWidth()
        let playerHeight = this.getHeight()
        let worldWidth = this.game.world.getWidth()
        let worldHeight = this.game.world.getHeight()

        if(this.left + playerWidth > worldWidth){
            this.left = worldWidth - playerWidth
        }
        if(this.top + playerHeight > worldHeight){
            this.top = worldHeight - playerHeight
        }

        // let missle = new Missle(1, this.getPosition(), {x: 0, y: -1})
        // this.game.world.addObject(missle)

        // let missle = new Missle(15, this.getPosition(), {x: 0, y: -1})
        // this.game.world.addObject(missle)
        
        this.render()
    }

    render(){
        this.el.css({ top: this.top, left: this.left })
    }
}