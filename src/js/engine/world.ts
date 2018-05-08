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

    private objects:Sprite[] = [ ]

    constructor(canvasId?:string){
        super()
        this.width = $(window).width()
        this.height = $(window).height()
        this.setupCanvas(canvasId)
        this.createBackground()
    }

    private setupCanvas(canvasId?:string){
        let canvas = this.canvas = <HTMLCanvasElement>document.getElementById(canvasId)
        this.ctx = canvas.getContext("2d")
        $(canvas).attr({ width: this.width, height: this.height})
    }

    public step(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.objects.forEach(obj=>{
            obj.step()
            obj.draw(this.ctx)
        })
    }

    public addObject(object:Sprite){
        object.setup(this.game)
        this.objects.push(object)
        object.create()
        object.step()
        object.draw(this.ctx)
    }

    public removeObject(object:Sprite){
        this.objects.splice(this.objects.indexOf(object), 1)
        object.destroy()
    }

    public inBound(rect: {top:number, left:number, width:number, height:number}){
        return rect.top >= 0
            && rect.left >= 0
            && rect.top + rect.height <= this.getHeight()
            && rect.left + rect.width <= this.getWidth()
    }

    private createBackground(){
        this.addObject(new StarField(2))
        this.addObject(new StarField(3))
    }
}