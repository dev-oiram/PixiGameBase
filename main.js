import { Container } from 'pixi.js-legacy'
import { gameApp, stage, loader } from './config/config'
import { assets } from './config/assets'
import { TitleScreen, GameScreen } from './modules/screens'

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


// Start Game
function start() {
    loadingScreen.visible = false // Hide Loading Screen

    // Creacion de Screens
    let titlescreen = new TitleScreen(stage)
    let gamescreen = new GameScreen(stage)

    gameApp.ticker.add((deltaTime) => {
        // Update Loop
        titlescreen.update(deltaTime)
    });
}
