import { Game, Manager, Timer } from './engine'
import { Player } from './objects/player'
import { Enemy } from './objects/enemy'
export class GameManager implements Manager {
    game:Game
    timer:Timer

    player:Player

    setup(game: Game){
        this.game = game
        let player = this.player = new Player(7)
        this.game.world.addSprite(player)
        this.timer = new Timer(game)

        this.timer.setInterval(200, ()=>{
            this.generateEnemy()
        })
    }

    private lastEnemyGeneratedTime = -1
    generateEnemy(){
        let enemy = new Enemy({top: 0, left: Math.random() * (this.game.world.width - this.player.width)})
        this.game.world.addSprite(enemy)
    }

    step(){
        this.timer.step()
    }
}