import StarField from './backgrounds/star-field'
import { Sprite } from './sprite'
import { Manager } from './interfaces'
import { Game } from './game'
export class World extends Sprite implements Manager {
    game:Game
    canvas:HTMLCanvasElement
    ctx:CanvasRenderingContext2D
    width:number
    height:number

    private sprites:Sprite[] = [ ]

    constructor(canvasId?:string){
        super()
        this.width = $(document).width()
        this.height = $(document).height()
        this.setupCanvas(canvasId)
    }
    
    setup(game:Game){
        this.game = game
        this.createBackground()
    }

    private setupCanvas(canvasId?:string){
        let canvas = this.canvas = <HTMLCanvasElement>document.getElementById(canvasId)
        this.ctx = canvas.getContext("2d")
        $(canvas).attr({ width: this.width, height: this.height})
    }

    public step(dt:number){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.sprites.forEach(obj=>{
            obj.step(dt)
            obj.draw(this.ctx)
        })
    }

    public addSprite(sprite:Sprite){
        this.sprites.push(sprite)
        sprite.setup(this.game)
    }

    public removeObject(sprite:Sprite){
        // this.sprites.splice(this.sprites.indexOf(sprite), 1) // why this will cause flashing problem?
        this.sprites = this.sprites.filter((s)=>s!==sprite)
        sprite.destroyed()
    }

    public inBound(rect: {top:number, left:number, width:number, height:number}){
        return rect.top + rect.height >= 0
            && rect.left + rect.width >= 0
            && rect.top <= this.getHeight()
            && rect.left <= this.getWidth()
    }

    public collide(sprite:Sprite, targetTags:string[]):Sprite | undefined{
        return this.sprites
        .filter(sprite=>targetTags.indexOf(sprite.tag)>=0)
        .find((target)=>{
            return (
                (sprite.left > target.left && sprite.right < target.right) &&
                (
                    (sprite.bottom > target.top && sprite.top < target.bottom) || 
                    (sprite.top < target.bottom && sprite.bottom > target.top)
                )
            ) ||
            (
                (sprite.top > target.top && sprite.bottom < target.bottom) && 
                (
                    (sprite.left < target.right && sprite.right > target.left) ||
                    (sprite.right > target.left && sprite.left < target.right)
                )
            )
        })
    }

    private createBackground(){
        this.addSprite(new StarField(100))
        this.addSprite(new StarField(150, true))
        this.addSprite(new StarField(200, true))
    }
}