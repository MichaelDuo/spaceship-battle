function StarField(container, speed){
    this.stop = false
    this.container = container
    this.speed = speed
    var starfield1 = this.starfield1 = $('<div class="starfield"></div>')
    var starfield2 = this.starfield2 = $('<div class="starfield"></div>')
    starfield1.css({top:"-" + container.height()+ "px"})
    starfield2.css({top: "0px"})
    container.append(starfield1)
    container.append(starfield2)
    this.randomStars(starfield1)
    this.randomStars(starfield2)
}

StarField.prototype.step = function(){
    if(this.stop) return
    var s1Top = this.starfield1.position().top + this.speed
    var s1Height = this.starfield1.height()
    var containerHeight = this.container.height()

    if(s1Top>=containerHeight){
        this.starfield1.css({top: "-" + containerHeight+ "px"})
        s1Top = -containerHeight
    } else {
        this.starfield1.css({top: (s1Top )+"px"})
    }

    if(s1Top < 0) {
        this.starfield2.css({top: (s1Top + s1Height)+"px"})
    } else {
        this.starfield2.css({top: (s1Top - s1Height)+"px"})
    }
}

StarField.prototype.randomStars = function(starfield){
    var width = starfield.width()
    var height = starfield.height()
    starfield.empty()
    var count = Math.floor(50 + Math.random() * 30)
    var star
    while(count>0){
        star = $('<div class="star"></div>')
        star.css({
            top: Math.floor(Math.random() * height),
            left: Math.floor(Math.random() * width)
        })
        starfield.append(star)
        count--
    }
}