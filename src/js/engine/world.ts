import StarField from './backgrounds/star-field'
import { Obj } from './obj'
import { Manager } from './interfaces'
export class World implements Manager {
    el:JQuery<HTMLElement>

    private objects:Obj[] = [ ]

    private containerSelector:string

    constructor(containerId?:string){
        this.containerSelector = containerId ? "#" + containerId : "body"
        this.createWorldEl()
        this.createBackground()
    }

    public step(){
        this.objects.forEach(obj=>obj.step())
    }

    public addObject(object:Obj){
        this.objects.push(object)
    }

    private createWorldEl(){
        var el = this.el = $('<div class="game-field"></div>')
        $(this.containerSelector).append(el)
    }

    private createBackground(){
        this.addObject(new StarField(this.el, 5))
        this.addObject(new StarField(this.el, 10))
    }
}