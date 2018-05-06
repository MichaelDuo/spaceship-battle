import StarField from './backgrounds/star-field'
import { Obj } from './obj'
import { Manager } from './interfaces'
import { Game } from './game'
export class World extends Obj implements Manager {
    game:Game
    canvas:HTMLCanvasElement
    ctx:CanvasRenderingContext2D

    private objects:Obj[] = [ ]

    constructor(canvasId?:string){
        super()
        let canvas = this.canvas = <HTMLCanvasElement>document.getElementById(canvasId)
        this.ctx = canvas.getContext("2d")
        $(canvas).attr({ width: $(window).width(), height: $(window).height()})
    }

    public step(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        // this.objects.forEach(obj=>obj.step && obj.step())
    }

    public addObject(object:Obj){
        // object.setup(this.game)
        // if(object.el){
        //     object.el.addClass("invisible")
        //     this.el.append(object.el)
        // }
        // this.objects.push(object)
        // object.create()
        // object.step && object.step()
        // object.el.removeClass("invisible")
    }

    public removeObject(object:Obj){
        // this.objects.splice(this.objects.indexOf(object), 1)
        // object.el.remove()
        // object.destroy()
    }

    public inBound(rect: {top:number, left:number, width:number, height:number}){
        return rect.top >= 0
            && rect.left >= 0
            && rect.top + rect.height <= this.getHeight()
            && rect.left + rect.width <= this.getWidth()
    }

    private createBackground(){
        // this.addObject(new StarField(2))
        // this.addObject(new StarField(3))
    }
}