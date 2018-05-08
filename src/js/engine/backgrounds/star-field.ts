import { Sprite } from '../sprite'
import { Game } from '../game'
export default class StarField extends Sprite {
    stop:boolean = false
    el:JQuery = $('<div class="starfield-container"></div>')

    private speed:number
    private offset:number = 0
    private numStars:number = 100
    private starfield:HTMLCanvasElement
    private game:Game

    constructor(speed:number){
        super()
        this.speed = speed
    }

    setup(game:Game){
        this.game = game
        let starfield = this.starfield = document.createElement("canvas")
        starfield.width = game.world.width
        starfield.height = game.world.height
        let starfieldCtx = starfield.getContext("2d")
        
        starfieldCtx.fillStyle = "#000"
        starfieldCtx.fillRect(0,0,game.world.width,game.world.height)
        
        starfieldCtx.fillStyle = "white"
        for(var i=0; i<this.numStars; i++){
            starfieldCtx.fillRect(
                Math.floor(Math.random()*starfield.width),
                Math.floor(Math.random()*starfield.height),
                2,
                2
            )
        }
    }


    step(){
        this.offset += this.speed
        if(this.offset>=this.game.world.height){
            this.offset = 0
        }
    }

    draw(ctx:CanvasRenderingContext2D){
        ctx.drawImage(this.starfield, 0, this.starfield.height-this.offset, this.starfield.width, this.offset, 0, 0, this.game.world.width, this.offset)
        ctx.drawImage(this.starfield, 0, 0, this.starfield.width, this.starfield.height-this.offset, 0, this.offset, this.game.world.width, this.game.world.height-this.offset)
    }
}