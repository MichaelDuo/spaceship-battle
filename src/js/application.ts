import { Game, World } from './engine'
import { GameManager } from './game-manager'

let world = new World('game')
let game = new Game(world)
let manager = new GameManager()
game.addManager(manager)
game.start()
