import { Container } from 'pixi.js-legacy'
import { gameApp, stage, loader, config } from './config/config'
import { assets } from './config/assets'
import { ScreenHandler, TitleScreen, GameScreen } from './modules/screens'

import { basicSprite } from  './modules/simpleSprite'


// Adds the app canvas to the html <body>
document.body.appendChild(gameApp.view);

// Loading Screen ===============
const loadingScreen = new Container()
stage.addChild(loadingScreen)

loader.onStart.add(() => {
  let load_background = basicSprite(
    './assets/loadingscreen.png',
    config.gameWidth/2,
    config.gameHeight/2,
    config.gameWidth,
    config.gameHeight)
  loadingScreen.addChild(load_background)
})
// Loading Screen ===============


// Load assets and start Game
loader
  .add(assets)
  .load(start);


// Screen ceation and pass to handler
const titlescreen = new TitleScreen(stage)
const gamescreen = new GameScreen(stage)
// Set screens with name to be call inside each one
const screens = [
  {name:'titlescreen',data:titlescreen},
  {name:'gamescreen',data:gamescreen}
]


// Start Game
function start() {
    loadingScreen.visible = false // Hide Loading Screen
    new ScreenHandler(screens) // Set initialize handler
    titlescreen.init = true // Initialize Title Screen

    gameApp.ticker.add((deltaTime) => {
        // Update Loop
        titlescreen.update(deltaTime)
        gamescreen.update(deltaTime)
    });
}
