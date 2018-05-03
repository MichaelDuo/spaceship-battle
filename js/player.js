function Player(){
    var el = this.el = $('<div class="object player"></div>')
    this.top = 0
    this.left = 0
    this.velocity = 10
}

Player.prototype.getTop = function(){
    return this.top
}

Player.prototype.setTop = function(val){
    this.top = val
}

Player.prototype.getLeft = function(){
    return this.left
}

Player.prototype.setLeft = function(val){
    this.left = val
}

Player.prototype.width = function(){
    return this.el.width()
}

Player.prototype.height = function(){
    return this.el.height()
}

Player.prototype.step = function(){
    this.el.css({ top: this.top, left: this.left })
}