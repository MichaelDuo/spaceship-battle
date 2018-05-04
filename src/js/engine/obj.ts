import { Game } from './game'
export class Obj {

    public el:JQuery<HTMLElement>
    public tag:string = ""
    
    public getOffset():JQuery.Coordinates | undefined{
        return this.el.offset()
    }

    // Position inside parent element
    public getPosition():{ top: number, left: number } {
        return this.el.position()
    }

    public getWidth():number {
        return this.el.width()
    }

    public getHeight():number {
        return this.el.height()
    }

    public setup(game:Game){
        // Implement in subclasses
        // called before insert to DOM
    }

    public create(){
        // called after insert dom
    }

    public step(){
        // Implement in subclasses
    }
}