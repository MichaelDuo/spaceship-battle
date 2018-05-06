import { Game } from './game'
export class Obj {

    el:JQuery<HTMLElement>
    tag:string = ""

    top:number = 0
    right:number = 0
    width:number = 0
    height:number = 0
    
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

    public destroy(){
        // Implement in subclasses
    }

    public draw(ctx:CanvasRenderingContext2D){
        
    }
}