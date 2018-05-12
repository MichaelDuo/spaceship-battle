export class Eventemitter {
    private events:{[key:string] : Function[]} = { }

    on(event:string, listener:Function){
        if(!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(listener)
    }

    removeListener(event:string, listener:Function){
        var idx
        if(this.events[event]){
            idx = this.events[event].indexOf(listener)
            if(idx>=0){
                this.events[event].splice(idx, 1)
            }
        }
    }

    emit(event:string, ...args:any[]){
        if(this.events[event]){
            for(let listener of this.events[event]){
                listener.apply(this, args)
            }
        }
    }

    once(event:string, listener:Function){
        this.on(event, function g(){
            this.removeListener(event, g)
            listener.apply(this, arguments)
        })
    }
}