import SpriteSheet from './spritesheet.js';

export function loadImg(url) {
	return new Promise(resolve => {
		const image = new Image();
		image.addEventListener('load', () => {
			resolve(image);
		});
		image.src = url;
	});
}

export function loadMapSprites(){
	return loadImg('img/tiles.png')
	.then(img => {
		const sprites = new SpriteSheet(img, 70, 70);
		sprites.define('yellow_exclamation_block', 0, 0);
		sprites.define('brown_exclamation_block', 0, 1);
		// TODO:
		// these weirds offsets are because of the spaces of the tileset
		// find a way to handle this
		sprites.define('win', 1+0.04, 8+0.10); 
		return sprites;
	});
}

export function loadNpcSprites(){
	return loadImg('img/npc.png')
	.then(img => {
		const sprites = new SpriteSheet(img, 65, 90);
		sprites.define('npc', 0, 0);
		return sprites;
	});
}

export function loadHeroSprite(){
	return loadImg('img/p1_walk.png')
	.then(img => {
		const sprites = new SpriteSheet(img, 65, 70);
		sprites.define('start_pos', 0, 0);
		return sprites;
	});
}