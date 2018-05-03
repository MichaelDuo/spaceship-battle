export default class Object {

    public el:JQuery<HTMLElement>
    
    // Position relative to the view port
    public top():number {
        return this.el.offset().top
    }

    public left():number {
        return this.el.offset().left
    }

    public width():number {
        return this.el.width()
    }

    public height():number {
        return this.el.height()
    }

    // Position inside parent element
    public position():{ top: number, left: number } {
        return this.el.position()
    }
}