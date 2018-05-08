import { World } from './world'
import { Manager } from './interfaces'
import { KeybordInputManager } from './keyboard-input-manager'
import { Preloader, PreloaderOptions } from './preloader'
export class Game {
    world:World
    keyboardInputManager:KeybordInputManager

    private managers:Manager[] = [ ]
    private startTime:number
    private preloader = new Preloader()
    private preloaderOptions:PreloaderOptions
    private loadingAssets = false

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

    public async preload(options:PreloaderOptions){
        this.preloaderOptions = options
        this.loadingAssets = true
        await this.preloader.load(options)
        this.loadingAssets = false
    }

    private loop(){
        window.requestAnimationFrame(()=>{
            this.step()
            this.loop()
        })
    }

    private step(){
        if(this.loadingAssets){
            return
        }
        this.managers.forEach(manager=>manager.step && manager.step())
    }
}