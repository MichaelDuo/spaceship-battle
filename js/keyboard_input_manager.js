function KeyboardInputManager(){
    this.init()
    this.keymap = {
        38: "up",
        39: "right",
        40: "down",
        37: "left"
    }

    this.keyPressing = []
    this.action = ""
}

KeyboardInputManager.prototype.init = function(){
    var self = this
    document.addEventListener("keydown", function(e){
        if(e.keyCode in self.keymap && self.keyPressing.indexOf(e.keyCode)===-1){
            self.keyPressing.push(e.keyCode)
        }
    })
    document.addEventListener("keyup", function(e){
        let i = self.keyPressing.indexOf(e.keyCode)
        if(i>=-1){
            self.keyPressing.splice(i, 1)
        }
    })
}

KeyboardInputManager.prototype.getKeyName = function(){
    if(this.keyPressing.length===0){
        return ""
    } else {
        return this.keymap[this.keyPressing[this.keyPressing.length-1]]
    }
}