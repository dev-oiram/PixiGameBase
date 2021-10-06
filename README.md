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

Copyright 2021 - Mario Contreras
  
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
