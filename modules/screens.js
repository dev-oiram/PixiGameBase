import { Container } from 'pixi.js-legacy'
import { GameBackground, Button } from '../modules/objects'
import { sound } from '../config/assets'
import { config } from '../config/config'

import { animSprite } from '../modules/simpleSprite'

// Title Screen
class TitleScreen {
    constructor(stage) {
        this.container = new Container();
        this.mainStage = stage;
        this.setup();
    }

    loadBackground() {
        this.background = new GameBackground(config.gameWidth/2,config.gameHeight/2,
            config.gameWidth,config.gameHeight,"titlescreen")

        this.container.addChild(this.background.getSprite())
    }

    // Screen init
    setup() {
        this.loadBackground()
        this.mainStage.addChild(this.container)

        // Play Music
        //sound.play('titleMusic',{loop:true,volume:0.25})

        // Button Sprite
        this.btn_ok = new Button(400,550,104,43,'btn_ok').getSprite()
        this.container.addChild(this.btn_ok)
        this.btn_ok.on('pointerdown', () => {
            sound.stop('titleMusic')
        });

    }

    // Screen Update
    update(delta) {}
}


// Game Screen
class GameScreen {
    constructor(stage) {
        this.container = new Container();
        this.mainStage = stage;
        this.setup();
    }

    loadBackground() {
        this.background = new GameBackground(config.gameWidth/2,config.gameHeight/2,
            config.gameWidth,config.gameHeight,"gamescreen")

        this.container.addChild(this.background.getSprite())
    }

    // Screen init
    setup() {
        this.loadBackground()
        this.mainStage.addChild(this.container)

        // Play Music
        //sound.play('titleMusic',{loop:true,volume:0.25})

        // ============ Animation Sprites =========================
        this.fire = animSprite('fire',400,300,128,128,5,0.1)
        this.container.addChild(this.fire)
        this.fire.play()

        // Kyeboard Actions
        window.onkeydown = (key) =>{
            if(key.code == "ArrowRight"){
                console.log("right")
            }
        }

    }

    // Screen Update
    update(delta) {}
}



export {
    TitleScreen,
    GameScreen
}