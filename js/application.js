(function(){
    var gameBoard = new GameBoard()
    var keyboardInputManager = new KeyboardInputManager()
    var gameManager = new GameManager(gameBoard, keyboardInputManager)
    function main(){
        window.requestAnimationFrame(function(){
            gameBoard.step()
            gameManager.step()
            main()
        })
    }
    main()
})()