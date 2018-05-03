class Engine {
    private managers:manager[] = []

    constructor(){

    }

    /**
     * addManager
     */
    public addManager(manager:manager) {
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
        console.log("Step")
    }
}

interface manager {
    step: ()=>void
}

export default Engine

export * from "./object"
