import { Game } from './game'
export class Sprite {
    tag:string = ""
    left:number = 0
    top:number = 0
    width:number = 0
    height:number = 0
    backgroundColor:string = 'rgba(0,0,0,0)'
    backgroundImage:string = ''
    private backgroundImageEl?:HTMLImageElement = null

    // Position inside parent element
    public getPosition():{ top: number, left: number } {
        return {
            top: this.top,
            left: this.left
        }
    }

    public getWidth():number {
        return this.width
    }

    public getHeight():number {
        return this.height
    }

    public setup(game:Game){
        if(this.backgroundImage){
            this.backgroundImageEl = new Image()
            this.backgroundImageEl.src = this.backgroundImage
        }
    }

    public step(){
        // Implement in subclasses
    }

    public destroy(){
        // Implement in subclasses
    }

    public draw(ctx:CanvasRenderingContext2D){
        ctx.save()
        ctx.fillStyle = this.backgroundColor
        ctx.fillRect(this.left, this.top, this.width, this.height)
        if(this.backgroundImageEl){
            ctx.drawImage(this.backgroundImageEl, this.left, this.top, this.width, this.height)
        }
        ctx.restore()
    }
}