/**
 * let loader = new Preloader()
 * await loader.load({
 *  images: [...path]
 * })
 * loader.on('load', function(){
 *  // Loaded
 * })
*/

export interface PreloaderOptions {
    [key:string]:string[]
}

export class Preloader {
    eventListeners:{[key:string]: Array<(...arg:any[])=>void>} = { }

    private totalAssets = 0
    private assetsLoaded = 0

    load(options:PreloaderOptions):Promise<any>{
        for(let key in options){
            this.totalAssets += options[key].length
        }

        this._loadImages(options.images)

        return new Promise((resolve, reject)=>{
            this.on('load', resolve)
        })
    }

    emit(eventName:string, data?:any){
        (this.eventListeners[eventName] || []).forEach(listener=>listener(data))
    }

    on(eventName:string, listener:(...any:any[])=>void){
        this.eventListeners[eventName] ? 
        this.eventListeners[eventName].push(listener) :
        this.eventListeners[eventName] = [listener]
    }

    private _assetOnLoad(){
        this.assetsLoaded++
        if(this.totalAssets === this.assetsLoaded){
            this.emit('load')
        }
    }

    private _loadImages(imageArr:string[]){
        for(let src of imageArr){
            let image = new Image()
            image.addEventListener('load', ()=>{
                this._assetOnLoad()
            }, false)
            image.src = src
        }
    }
}