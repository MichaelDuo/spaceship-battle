import { Game, World } from "./engine"

let world = new World("game-container")
let game = new Game(world)
game.start()
