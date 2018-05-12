import { World } from './world'
import { Manager } from './interfaces'
import { KeybordInputManager } from './keyboard-input-manager'
import { Preloader, PreloaderOptions } from './preloader'
import { Eventemitter } from './event-emitter'
export class Game extends Eventemitter {
    world:World
    keyboardInputManager:KeybordInputManager

    private managers:Manager[] = [ ]
    private startTime:number = 0
    private preloader = new Preloader()
    private preloaderOptions:PreloaderOptions
    private loadingAssets = false
    private running = false

    constructor(world:World){
        super()
        this.world = world
        this.addManager(world)
        this.keyboardInputManager = new KeybordInputManager()
    }

    public addManager(manager:Manager) {
        if(this.running){
            manager.setup(this)
        } else {
            this.on("start", ()=>{
                manager.setup(this)
            })
        }
        this.managers.push(manager)
    }

    public start(){
        this.startTime = Date.now()
        this.running = true
        this.emit("start")
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