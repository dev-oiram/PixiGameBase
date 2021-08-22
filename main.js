import { Container } from 'pixi.js-legacy'
import { gameApp, stage, loader } from './config/config'
import { assets } from './config/assets'
import { ScreenHandler, TitleScreen, GameScreen } from './modules/screens'

import { basicSprite } from  './modules/simpleSprite'


// Adds the app canvas to the html <body>
document.body.appendChild(gameApp.view);

// Loading Screen ===============
let loadingScreen = new Container()
stage.addChild(loadingScreen)

loader.onStart.add(() => {
  let load_background = basicSprite('./assets/loadingscreen.png',800/2,600/2,800,600)
  loadingScreen.addChild(load_background)
})
// Loading Screen ===============


// Load assets and start Game
loader
  .add(assets)
  .load(start);


// Screen ceation and pass to handler
let titlescreen = new TitleScreen(stage)
let gamescreen = new GameScreen(stage)
// Set screens with name to be call inside each one
let screens = [
  {name:'titlescreen',data:titlescreen},
  {name:'gamescreen',data:gamescreen}
]


// Start Game
function start() {
    loadingScreen.visible = false // Hide Loading Screen
    let screenhandler = new ScreenHandler(screens) // Set handler
    titlescreen.init = true // Initialize Title Screen

    gameApp.ticker.add((deltaTime) => {
        // Update Loop
        titlescreen.update(deltaTime)
        gamescreen.update(deltaTime)
    });
}
