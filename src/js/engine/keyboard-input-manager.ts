export class KeybordInputManager {
    private keymap:{[key: number]: string} = {
        38: "up",
        39: "right",
        40: "down",
        37: "left"
    }
    private keyPressing:number[] = []

    constructor(){
        this.setup()
    }

    setup(){
        document.addEventListener("keydown", (e)=>this.onKeyDown(e))
        document.addEventListener("keyup", (e)=>this.onKeyUp(e))
    }

    getKeyName():string{
        if(this.keyPressing.length === 0){
            return ""
        } else {
            return this.keymap[this.keyPressing[this.keyPressing.length-1]]
        }
    }

    private onKeyDown(e:KeyboardEvent){
        if(e.keyCode in this.keymap && this.keyPressing.indexOf(e.keyCode)===-1){
            this.keyPressing.push(e.keyCode)
        }
    }

    private onKeyUp(e:KeyboardEvent){
        let i = this.keyPressing.indexOf(e.keyCode)
        if(i>=-1){
            this.keyPressing.splice(i, 1)
        }
    }
}