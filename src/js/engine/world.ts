import StarField from './backgrounds/star-field'
import { Obj } from './obj'
import { Manager } from './interfaces'
import { Game } from './game'
export class World extends Obj implements Manager {
    el:JQuery<HTMLElement>
    game:Game

    private objects:Obj[] = [ ]

    private containerSelector:string

    constructor(containerId?:string){
        super()
        this.containerSelector = containerId ? "#" + containerId : "body"
        this.createWorldEl()
        this.createBackground()
    }

    private lastEnemeyCreatedTime:number
    private createEnemyRoutine(){
        // if
    }

    public step(){
        this.objects.forEach(obj=>obj.step && obj.step())
    }

    public addObject(object:Obj){
        object.setup(this.game)
        if(object.el){
            object.el.addClass("invisible")
            this.el.append(object.el)
        }
        this.objects.push(object)
        object.create()
        object.step && object.step()
        object.el.removeClass("invisible")
    }

    public removeObject(object:Obj){
        this.objects.splice(this.objects.indexOf(object), 1)
        object.el.remove()
        object.destroy()
    }

    public inBound(rect: {top:number, left:number, width:number, height:number}){
        return rect.top >= 0
            && rect.left >= 0
            && rect.top + rect.height <= this.getHeight()
            && rect.left + rect.width <= this.getWidth()
    }

    private createWorldEl(){
        var el = this.el = $('<div class="game-field"></div>')
        $(this.containerSelector).append(el)
    }

    private createBackground(){
        this.addObject(new StarField(2))
        this.addObject(new StarField(3))
    }
}