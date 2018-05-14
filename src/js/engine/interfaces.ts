import { Game } from './game'

export interface Manager {
    setup?: (game:Game)=>void
    step: (dt:number)=>void
}

export interface Position {
    top:number
    left:number
}

export interface Vector {
    x: number
    y: number
}
