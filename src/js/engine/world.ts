export default class World {
    el:JQuery<HTMLElement>

    private containerSelector:string

    constructor(containerId?:string){
        this.containerSelector = containerId ? "#" + containerId : "body"
        this.createWorldEl()
        this.createBackground()
    }

    private createWorldEl(){
        var el = this.el = $('<div class="game-field"></div>')
        $(this.containerSelector).append(el)
    }

    private createBackground(){
        
    }

    public step(){
        console.log("World Step")
    }
}