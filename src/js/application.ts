import { Game, World } from './engine'
import { GameManager } from './game-manager'
import playerShipImage from '../img/player-ship.png'

$(window).on("load", function(){
    let world = new World('game')
    let game = new Game(world)
    let manager = new GameManager()
    game.preload({
        images: [ "https://wallpapercave.com/wp/cmxyfTV.jpg" ]
    })
    game.addManager(manager)
    game.start()
})