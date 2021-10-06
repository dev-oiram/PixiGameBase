import { Container } from 'pixi.js-legacy'
import { GameBackground, Button } from '../modules/objects'
import { sound } from '../config/assets'
import { config } from '../config/config'

import { animSprite } from '../modules/simpleSprite'


// Screen Handler to set active screen
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
        const btn_ok_x=400, btn_ok_y=550, btn_ok_width=150, btn_ok_height=40
        this.btn_ok = new Button(btn_ok_x,btn_ok_y,btn_ok_width,btn_ok_height,'btn_ok').getSprite()
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
        
        const btn_cancel_x=570, btn_cancel_y=90, btn_cancel_width=40, btn_cancel_height=40
        this.btn_cancel = new Button(btn_cancel_x,btn_cancel_y,btn_cancel_width,btn_cancel_height,'btn_cancel').getSprite()
        this.btn_cancel.on('pointerdown', () => {
            this.menuScreen.visible = false
        });

        const btn_exit_x=400, btn_exit_y=490, btn_exit_width=150, btn_exit_height=40
        this.btn_exit = new Button(btn_exit_x,btn_exit_y,btn_exit_width,btn_exit_height,'btn_exit').getSprite()
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
        const fire_x=400, fire_y=300, fire_width=128, fire_height=128, fire_sprites=5, fire_aspeed=0.15
        const fire_speed = 10
        this.fire = animSprite('fire',fire_x,fire_y,fire_width,fire_height,fire_sprites,fire_aspeed)
        this.container.addChild(this.fire)
        this.fire.play()

        // Button Sprite
        const btn_menu_x=60, btn_menu_y=30, btn_menu_width=150, btn_menu_height=40
        this.btn_menu = new Button(btn_menu_x,btn_menu_y,btn_menu_width,btn_menu_height,'btn_menu').getSprite()
        this.container.addChild(this.btn_menu)
        this.btn_menu.on('pointerdown', () => {
            this.menuScreen.visible = true
        });

        // Kyeboard Actions
        window.onkeydown = (key) =>{
            if(key.code == "ArrowRight"){
                this.fire.x += fire_speed
            }
            if(key.code == "ArrowLeft"){
                this.fire.x -= fire_speed
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