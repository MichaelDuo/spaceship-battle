import { Sprite, Game, Utils } from "../engine"
import { Missle } from "./missle"
import PlayerImage from '../../img/player-ship.png'

export class Player extends Sprite {
    el:JQuery = $('<div class="object player"></div>')
    game:Game

    tag = "player"
    speed = 0
    
    top = 0
    left = 0
    width = 50
    height = 50
    backgroundImage = PlayerImage

    constructor(speed:number){
        super()
        this.speed = speed
    }

    setup(game:Game){
        super.setup(game)
        this.game = game
    }

    create(){

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

        // Bounded option
        if(this.left < 0){
            this.left = 0
        }
        if(this.top < 0){
            this.top = 0
        }
        
        let playerWidth = this.width
        let playerHeight = this.height
        let worldWidth = this.game.world.width
        let worldHeight = this.game.world.height

        if(this.left + playerWidth > worldWidth){
            this.left = worldWidth - playerWidth
        }
        if(this.top + playerHeight > worldHeight){
            this.top = worldHeight - playerHeight
        }

        this.lauchMissle()
    }

    private lastMissleLaunchTime:number
    private missleTimeGap = 200 //ms
    lauchMissle(){
        let gameTime = this.game.getGameTime()
        if(gameTime-this.lastMissleLaunchTime>=this.missleTimeGap || !this.lastMissleLaunchTime){
            let leftPosition = this.getPosition()
            let missleLeft = new Missle(15, leftPosition, {x: 0, y: -1})
            this.game.world.addObject(missleLeft)

            let rightPosition = Object.assign({}, leftPosition, { left: leftPosition.left + this.getWidth() })
            let missleRight = new Missle(15, rightPosition, {x: 0, y: -1})
            this.game.world.addObject(missleRight)

            this.lastMissleLaunchTime = gameTime
        }
    }

    render(){
        this.el.css({ top: this.top, left: this.left })
    }
}