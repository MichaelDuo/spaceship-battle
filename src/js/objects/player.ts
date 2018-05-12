import { Sprite, Game, Utils } from "../engine"
import { Missle } from "./missle"
import PlayerImage from '../../img/player-ship.png'
import Constants from "../constants"
import constants from "../constants";
export class Player extends Sprite {
    game:Game

    tag = Constants.PLAYER
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
        this.top = this.game.world.height - this.height - 10
        this.left = (this.game.world.width/2) - (this.width / 2)
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

    private lastMissleLaunchTime:number = -1
    private missleTimeGap = 200 //ms
    lauchMissle(){
        let gameTime = this.game.getGameTime()
        if(gameTime-this.lastMissleLaunchTime>=this.missleTimeGap){
            let leftPosition = this.getPosition()
            let missleLeft = new Missle(15, leftPosition, {x: 0, y: -1}, constants.ENEMY)
            this.game.world.addSprite(missleLeft)

            let rightPosition = Object.assign({}, leftPosition, { left: leftPosition.left + this.getWidth() })
            let missleRight = new Missle(15, rightPosition, {x: 0, y: -1}, constants.ENEMY)
            this.game.world.addSprite(missleRight)

            this.lastMissleLaunchTime = gameTime
        }
    }
}