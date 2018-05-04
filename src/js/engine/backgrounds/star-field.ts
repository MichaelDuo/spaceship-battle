import { Obj } from '../obj'
export default class StarField extends Obj {
    stop:boolean = false
    el:JQuery

    private container:JQuery
    private speed:number
    private starField1:JQuery
    private starField2:JQuery

    constructor(container:JQuery, speed:number){
        super()

        this.container = container
        this.speed = speed

        let el = this.el = $('<div class="starfield-container"></div>')
        container.append(el)

        let s1 = this.starField1 = $('<div class="starfield"></div>')
        let s2 = this.starField2 = $('<div class="starfield"></div>')

        s1.css({top: "-" + el.height() + "px"})
        s2.css({top: "0px"})

        el.append(s1)
        el.append(s2)

        this.randomStars(s1)
        this.randomStars(s2)
    }

    step(){
        if(this.stop) { 
            return 
        }
        var s1Top = this.starField1.position().top + this.speed
        var s1Height = this.starField1.height()
        var containerHeight = this.container.height()

        if(s1Top>=containerHeight){
            this.starField1.css({top: "-" + containerHeight+ "px"})
            s1Top = -containerHeight
        } else {
            this.starField1.css({top: (s1Top )+"px"})
        }

        if(s1Top < 0) {
            this.starField2.css({top: (s1Top + s1Height)+"px"})
        } else {
            this.starField2.css({top: (s1Top - s1Height)+"px"})
        }
    }

    private randomStars(starField:JQuery){
        let width = starField.width()
        let height = starField.height()
        starField.empty()
        let count = Math.floor(50 + Math.random() * 30)
        let star
        while(count>0){
            star = $('<div class="star"></div>')
            star.css({
                top: Math.floor(Math.random() * height),
                left: Math.floor(Math.random() * width)
            })
            starField.append(star)
            count--
        }
    }
}