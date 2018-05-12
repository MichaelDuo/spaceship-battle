/**
 * let intervalManager = new IntervalManager(game)
 * intervalManager.register(100, ()=>{ })
 * intervalManager.step()
 */

 import { Game } from './game'

 export class IntervalManager {
    game:Game
    intervals:{interval:number, lastTriggered:number, handler:Function}[] = []

    constructor(game:Game){
        this.game = game
    }

    register(interval:number, handler:Function){
        handler()
        this.intervals.push({
            interval,
            handler,
            lastTriggered: this.game.getGameTime()
        })
        console.log(this.intervals)
    }

    step(){
        for(let i of this.intervals){
            // console.log(i)
            if(this.game.getGameTime() - i.lastTriggered >= i.interval){
                i.handler()
                i.lastTriggered = this.game.getGameTime()
            }
        }
    }
 }