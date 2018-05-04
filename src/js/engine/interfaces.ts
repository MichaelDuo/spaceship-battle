import { Game } from './game'
export interface Manager {
    setup?: (game:Game)=>void
    step: ()=>void
}