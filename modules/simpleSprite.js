import { Sprite, Texture, AnimatedSprite } from 'pixi.js';

//basicSprite(TexturePath,x,y,width,height)
function basicSprite(texturePath,x,y,wi,he) {
	var sprt;
	sprt = Sprite.from(texturePath);
  	sprt.width = wi;
  	sprt.height = he;
  	sprt.x = x;
  	sprt.y = y;
  	sprt.anchor.set(0.5);
  	return sprt;
}


//Single Sprites and animation functions===============================================>
function animSprite(name,x,y,wi,he,num,aspeed){
	// create an array of textures from an image path
	var frames = [];

	for (var i = 1; i <= num; i++) {
	    var val = i < 10 ? i : i;

	    // magically works since the spritesheet was loaded with the pixi loader
	    frames.push(Texture.from(name + val));
	}

	// create an AnimatedSprite (brings back memories from the days of Flash, right ?)
	var anim = new AnimatedSprite(frames);

	/*
	 * An AnimatedSprite inherits all the properties of a PIXI sprite
	 * so you can change its position, its anchor, mask it, etc
	 */
	anim.anchor.set(0.5);
	anim.x = x;
	anim.y = y;
	anim.width = wi;
	anim.height = he;
	anim.animationSpeed = aspeed;

	return anim;
}


export {
    basicSprite,
	animSprite
}