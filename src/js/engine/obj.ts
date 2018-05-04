import { Game } from './game'
export class Obj {

    public el:JQuery<HTMLElement>
    
    // Position relative to the view port
    public top():number {
        return this.el.offset().top
    }

    public left():number {
        return this.el.offset().left
    }

    public width():number {
        return this.el.width()
    }

    public height():number {
        return this.el.height()
    }

    // Position inside parent element
    public position():{ top: number, left: number } {
        return this.el.position()
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