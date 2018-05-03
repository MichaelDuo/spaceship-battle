import World from './world'
import { Manager } from './interfaces'

class Engine {
    private world:World
    private managers:Manager[] = []

    constructor(world:World){
        this.world = world
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
        this.world.step()
        this.managers.forEach(manager=>manager.step())
    }
}

export default Engine
export * from './object'
export * from './interfaces'
export { default as World } from './world'