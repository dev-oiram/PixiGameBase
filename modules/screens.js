import { Container } from 'pixi.js-legacy'
import { GameBackground, Button } from '../modules/objects'
import { sound } from '../config/assets'
import { config } from '../config/config'

import { animSprite } from '../modules/simpleSprite'


class ScreenHandler {
    constructor(screens = []) {
        this.screens = screens
        screens.forEach(s => {
            s.data.handler = this
        });
    }

    activeScreen(screen) {
        this.screens.forEach(s => {
            if(s.name == screen){
                s.data.container.visible = true
                s.data.init = true
            }else {
                s.data.container.visible = false
            }
        });
    }
}


// Title Screen
class TitleScreen {
    constructor(stage) {
        // Use for calling activeScreen() to set screen by name
        this.handler 
        this.container = new Container();
        this.container.visible = false
        this.mainStage = stage;
        this.init = false
    }

    loadBackground() {
        this.background = new GameBackground(config.gameWidth/2,config.gameHeight/2,
            config.gameWidth,config.gameHeight,"titlescreen")

        this.container.addChild(this.background.getSprite())
    }

    // Screen init
    setup() {
        this.container.visible = true
        this.loadBackground()
        this.mainStage.addChild(this.container)

        // Play Music
        sound.play('titleMusic',{loop:true,volume:0.25})

        // Button Sprite
        this.btn_ok = new Button(400,550,150,40,'btn_ok').getSprite()
        this.container.addChild(this.btn_ok)
        this.btn_ok.on('pointerdown', () => {
            sound.stop('titleMusic')
            this.handler.activeScreen('gamescreen')
        });

    }

    // Screen Update
    update(delta) {
        if(this.init) {
            this.setup()
            this.init = false
        }

        // Render all updates when visible
        if(this.container.visible){
            //TODO
        }
    }
}


// Game Screen
class GameScreen {
    constructor(stage) {
        this.handler
        this.container = new Container();
        this.container.visible = false
        this.mainStage = stage;
        this.init = false

        this.menuScreen = new Container()
    }

    setmenuScreen() {
        this.menu_background = new GameBackground(config.gameWidth/2,config.gameHeight/2,
            config.gameWidth,config.gameHeight,'menuscreen')
        
        this.btn_cancel = new Button(570,90,40,40,'btn_cancel').getSprite()
        this.btn_cancel.on('pointerdown', () => {
            this.menuScreen.visible = false
        });

        this.btn_exit = new Button(400,490,150,40,'btn_exit').getSprite()
        this.btn_exit.on('pointerdown', () => {
            sound.stop('gameMusic')
            this.menuScreen.visible = false
            this.handler.activeScreen('titlescreen')
        });

        
        this.menuScreen.addChild(this.menu_background.getSprite(),
            this.btn_cancel,this.btn_exit)
    }

    loadBackground() {
        this.background = new GameBackground(config.gameWidth/2,config.gameHeight/2,
            config.gameWidth,config.gameHeight,"gamescreen")

        this.container.addChild(this.background.getSprite())
    }

    // Screen init
    setup() {
        this.container.visible = true
        this.setmenuScreen()
        this.loadBackground()
        this.mainStage.addChild(this.container)

        // Play Music
        sound.play('gameMusic',{loop:true,volume:0.25})

        // ============ Animation Sprites =========================
        this.fire = animSprite('fire',400,300,128,128,5,0.1)
        this.container.addChild(this.fire)
        this.fire.play()

        // Button Sprite
        this.btn_menu = new Button(60,30,150,40,'btn_menu').getSprite()
        this.container.addChild(this.btn_menu)
        this.btn_menu.on('pointerdown', () => {
            this.menuScreen.visible = true
        });

        // Kyeboard Actions
        window.onkeydown = (key) =>{
            if(key.code == "ArrowRight"){
                this.fire.x += 10
            }
            if(key.code == "ArrowLeft"){
                this.fire.x -= 10
            }
        }

        this.container.addChild(this.menuScreen)
        this.menuScreen.visible = false

    }

    // Screen Update
    update(delta) {
        if(this.init) {
            this.setup()
            this.init = false
        }

        // Render all updates when visible
        if(this.container.visible){
            //TODO
        }
    }
}



export {
    ScreenHandler,
    TitleScreen,
    GameScreen
}