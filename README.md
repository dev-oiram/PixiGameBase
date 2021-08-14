# PixiGameBase
## _Game Base Structure_

Basic Structure for creating game prototype using [Pixi.js](https://github.com/pixijs) library, this project is intent for creating prototype and game demos if you want to create a full Game the recomendation is to use a Game Engine instead.


## Features

- modules -> Render sprites, objects and GameScreen
- config -> Load basic game configuration and load all assets (images, sound, backgrounds)
- assets -> Folder where all kind of assets are store

The main.js files is where the entire game is loaded, using the config.js library creates Pixi Application and loads gamescreens.

Use the gamescreens to load sprites make all logic inside the update() method

## Tech

- [Pixi.js](https://github.com/pixijs) -> main libarary for rendering the game in the browser
- [Vite](https://vitejs.dev/) ->  build tool that aims to provide a faster and leaner development experience for modern web projects, lets you create a dev server for development and a build command to create bundle for prduction.



## Installation and Run
```sh
npm install
npm run dev
```
When runing try press "Right Arrow" for interaction.


## License

MIT

**Free Software** by Mario Contreras