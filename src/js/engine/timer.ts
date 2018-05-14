/**
 * let intervalManager = new IntervalManager(game)
 * intervalManager.register(100, ()=>{ })
 * intervalManager.step()
 */

 import { Game } from './game'

 interface TimerObj {
    interval:number
    remainingTime:number
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
            remainingTime: interval
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
            remainingTime: interval
        })
    }

    removeHandler(handler:Function){
        let idx = this.timerObjs.findIndex((timerObj)=>timerObj.handler === handler)
        if(idx>=0){
            this.timerObjs.splice(idx, 1)
        }
    }

    step(dt:number){
        for(let i of this.timerObjs){
            if(i.remainingTime <= 0){
                i.handler()
                i.remainingTime = i.interval
            } else {
                i.remainingTime -= dt * 1000 // s to ms
            }
        }
    }
 }