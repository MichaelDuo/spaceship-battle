import { Game, Manager, IntervalManager } from './engine'
import { Player } from './objects/player'
import { Enemy } from './objects/enemy'
export class GameManager implements Manager {
    game:Game
    intervalManager:IntervalManager

    player:Player

    setup(game: Game){
        this.game = game
        let player = this.player = new Player(7)
        this.game.world.addSprite(player)
        this.intervalManager = new IntervalManager(game)

        this.intervalManager.register(1000, ()=>{
            this.generateEnemy()
        })
    }

    private lastEnemyGeneratedTime = -1
    generateEnemy(){
        let enemy = new Enemy({top: 0, left: Math.random() * (this.game.world.width - this.player.width)})
        this.game.world.addSprite(enemy)
    }

    step(){
        // this.generateEnemy()
        this.intervalManager.step()
    }
}