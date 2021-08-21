import { basicSprite } from './simpleSprite'

// Static Object
class StaticObject {
    constructor(x,y,width,height,spritePath) {
        this.sprite = basicSprite(spritePath,x,y,width,height)
    }

    getSprite(){ return this.sprite; }
}

class Button extends StaticObject {
    constructor(x,y,width,height,spritePath) {
        super(x,y,width,height,spritePath)
        this.setup()
    }

    setup() {
        // Opt-in to interactivity
        this.sprite.interactive = true;
        // Shows hand cursor
        this.sprite.buttonMode = true;
    }
}

//Game Background
class GameBackground extends StaticObject {
    constructor(x,y,width,height,spritePath) {
        super(x,y,width,height,spritePath)
    }
}

class Element {
    constructor(x,y,width,height,spritePath) {
        this.movingRight = false
        this.sprite = basicSprite(spritePath,x,y,
            width,height);
    }

    update(delta) {
        // Update Sprite
        if(this.movingRight)
            this.sprite.x += 1 * delta
    }

    moveRight(status) { this.movingRight = status }

    getSprite(){ return this.sprite; }
}

export {
    Element,
    Button,
    GameBackground
}