import { Game } from './game'
// Event emitter?
// Call every couple miller seconds function
// this.callEvery(200, ()=>{})
export class Sprite {
    tag:string = ""
    protected game:Game
    private _left:number = 0
    private _top:number = 0
    private _width:number = 0
    private _height:number = 0
    backgroundColor:string = 'rgba(0,0,0,0)'
    backgroundImage:string = ''
    private backgroundImageEl?:HTMLImageElement = null

    get height(){
        return this._height
    }

    set height(value){
        this._height = value
    }

    get width(){
        return this._width
    }

    set width(value){
        this._width = value
    }

    get top(){
        return this._top
    }

    set top(value){
        this._top = value
    }

    get left(){
        return this._left
    }

    set left(value){
        this._left = value
    }

    get bottom(){
        return this.top + this.height
    }

    get right(){
        return this.left + this.width
    }

    // Position inside parent element
    public getPosition():{ top: number, left: number } {
        return {
            top: this.top,
            left: this.left
        }
    }

    public getBoundingRect():{left: number, top: number, width:number, height:number}{
        return {
            left: this.left,
            top: this.top,
            width: this.width,
            height: this.height
        }
    }

    public getWidth():number {
        return this.width
    }

    public getHeight():number {
        return this.height
    }

    public getTop():number {
        return this.top
    }

    public setup(game:Game){
        this.game = game
        if(this.backgroundImage){
            this.backgroundImageEl = new Image()
            this.backgroundImageEl.src = this.backgroundImage
        }
    }

    public step(){
        // Implement in subclasses
    }

    public destroy(){
        this.game.world.removeObject(this)
    }

    public destroyed(){
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