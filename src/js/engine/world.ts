import StarField from './backgrounds/star-field'
import { Obj } from './obj'
import { Manager } from './interfaces'
import { Game } from './game'
export class World implements Manager {
    el:JQuery<HTMLElement>
    game:Game

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
        object.setup(this.game)
        if(object.el){
            this.el.append(object.el)
        }
        this.objects.push(object)
        object.create()
    }

    private createWorldEl(){
        var el = this.el = $('<div class="game-field"></div>')
        $(this.containerSelector).append(el)
    }

    private createBackground(){
        this.addObject(new StarField(5))
        this.addObject(new StarField(10))
    }
}