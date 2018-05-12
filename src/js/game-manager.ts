import { Game, Manager } from './engine'
import { Player } from './objects/player'
import { Enemy } from './objects/enemy'
export class GameManager implements Manager {
    game:Game

    setup(game: Game){
        this.game = game
        let player = new Player(7)
        this.game.world.addSprite(player)

        let enemy = new Enemy({top: 0, left: Math.random() * this.game.world.width})
        this.game.world.addSprite(enemy)
    }

    step(){
        // console.log(this.game.keyboardInputManager.getKeyName())
    }
}