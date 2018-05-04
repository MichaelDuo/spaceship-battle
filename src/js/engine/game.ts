import { World } from './world'
import { Manager } from './interfaces'
export class Game {
    world:World
    private managers:Manager[] = [ ]

    constructor(world:World){
        this.world = world
        world.game = this
        this.addManager(world)
    }

    public addManager(manager:Manager) {
        this.managers.push(manager)
    }

    public start(){
        this.loop()
    }

    private loop(){
        window.requestAnimationFrame(()=>{
            this.step()
            this.loop()
        })
    }

    private step(){
        this.managers.forEach(manager=>manager.step())
    }
}