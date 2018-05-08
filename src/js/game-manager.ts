import { Game, Manager } from './engine'
import { Player } from './objects/player'
export class GameManager implements Manager {
    game:Game

    setup(game: Game){
        this.game = game
        let player = new Player(10)
        this.game.world.addObject(player)
    }

    step(){
        // console.log(this.game.keyboardInputManager.getKeyName())
    }
}