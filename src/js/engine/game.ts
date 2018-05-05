import { World } from './world'
import { Manager } from './interfaces'
import { KeybordInputManager } from './keyboard-input-manager'
export class Game {
    world:World
    keyboardInputManager:KeybordInputManager

    private managers:Manager[] = [ ]
    private startTime:number

    constructor(world:World){
        this.world = world
        world.game = this
        this.addManager(world)
        this.keyboardInputManager = new KeybordInputManager()
    }

    public addManager(manager:Manager) {
        manager.setup && manager.setup(this)
        this.managers.push(manager)
    }

    public start(){
        this.startTime = Date.now()
        this.loop()
    }

    public getGameTime():number{
        return Date.now() - this.startTime
    }

    private loop(){
        window.requestAnimationFrame(()=>{
            this.step()
            this.loop()
        })
    }

    private step(){
        this.managers.forEach(manager=>manager.step && manager.step())
    }
}