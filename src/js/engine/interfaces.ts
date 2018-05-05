import { Game } from './game'

export interface Manager {
    setup?: (game:Game)=>void
    step: ()=>void
}

export interface Position {
    top:number
    left:number
}

export interface Vector {
    x: number
    y: number
}