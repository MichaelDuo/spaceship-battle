import { Game, Manager } from './engine'
export class GameManager implements Manager {
    game:Game

    setup(game: Game){
        this.game = game
        // game.world.addObject
    }

    step(){

    }
}