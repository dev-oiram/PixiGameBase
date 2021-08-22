import { sound } from '@pixi/sound';

// Assets Source
// https://opengameart.org/

const assets = [
    // BackGrounds
    { name: "titlescreen", url: "../assets/titlescreen.png" },
    { name: "gamescreen", url: "../assets/gamescreen.png" },
    { name: "menuscreen", url: "../assets/menuScreen.png" },
    // Sprites
    { name: "btn_ok", url: "../assets/btn_ok.png" },
    { name: "btn_menu", url: "../assets/btn_menu.png" },
    { name: "btn_cancel", url: "../assets/btn_cancel.png" },
    { name: "btn_exit", url: "../assets/btn_exit.png" },
    // Animations Sprites
    { name: "campfire", url: "../assets/campfire.json" },
]

// Load Sounds & Music
sound.add('titleMusic', '../assets/sounds/TitleMusic.wav')
sound.add('gameMusic', '../assets/sounds/GameMusic.wav')

export { assets, sound }