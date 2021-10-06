import { settings, GC_MODES, SCALE_MODES, Application, Loader, Ticker } from 'pixi.js-legacy';

// Game App Screen Size and base color
const width = 800
const height = 600
const baseColor = 0x1099bb

// Game config object
const config = {
    gameWidth: width,
    gameHeight: height,
    color: baseColor
}

// Garbage mode auto-activate
settings.GC_MODE = GC_MODES.AUTO

// Scale mode for all textures, will retain pixelation
settings.SCALE_MODE = SCALE_MODES.NEAREST;

//Set Pixi Application
var app = new Application({width:config.gameWidth, height: config.gameHeight})
app.renderer.backgroundColor = config.color;
app.autoResize = true;

var gameApp = app

// Aling canvas to the center
gameApp.view.style.display = "block";
gameApp.view.style.margin = "0 auto";

// Define the stage
var stage = app.stage

// Define assets loader
var loader = new Loader()

// Define ticker
var ticker = new Ticker()

export { config, gameApp, stage, loader, ticker }
