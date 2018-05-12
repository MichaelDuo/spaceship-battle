/**
 * let intervalManager = new IntervalManager(game)
 * intervalManager.register(100, ()=>{ })
 * intervalManager.step()
 */

 import { Game } from './game'

 interface TimerObj {
    interval:number
    lastTriggered:number
    handler:Function
 }

 export class Timer {
    game:Game
    timerObjs:TimerObj[] = []

    constructor(game:Game){
        this.game = game
    }

    setInterval(interval:number, handler:Function){
        handler()
        this.timerObjs.push({
            interval,
            handler,
            lastTriggered: this.game.getGameTime()
        })
    }

    setTimeout(interval:number, handler:Function){
        let g = ()=>{
            this.removeHandler(g)
            handler()
        }
        this.timerObjs.push({
            interval,
            handler: g,
            lastTriggered: this.game.getGameTime()
        })
    }

    removeHandler(handler:Function){
        let idx = this.timerObjs.findIndex((timerObj)=>timerObj.handler === handler)
        if(idx>=0){
            this.timerObjs.splice(idx, 1)
        }
    }

    step(){
        for(let i of this.timerObjs){
            if(this.game.getGameTime() - i.lastTriggered >= i.interval){
                i.handler()
                i.lastTriggered = this.game.getGameTime()
            }
        }
    }
 }