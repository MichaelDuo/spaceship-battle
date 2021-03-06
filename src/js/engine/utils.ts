import { Vector } from './interfaces'

export class Utils {
    static getVector(direction:string):Vector{
        switch(direction){
            case "up":
                return { x: 0, y: -1 }
            case "right":
                return { x: 1, y: 0 }
            case "down":
                return { x: 0, y: 1 }
            case "left":
                return { x: -1, y: 0 }
            default:
                return { x: 0, y: 0 }
        }
    }
}