import { Game, Manager } from './engine'
import { Player } from './objects/player'
import { Enemy } from './objects/enemy'
export class GameManager implements Manager {
    game:Game

    setup(game: Game){
        this.game = game
        let player = new Player(7)
        this.game.world.addObject(player)

        let enemy = new Enemy({top: 0, left: 0})
        this.game.world.addObject(enemy)
    }

    step(){
        // console.log(this.game.keyboardInputManager.getKeyName())
    }
}