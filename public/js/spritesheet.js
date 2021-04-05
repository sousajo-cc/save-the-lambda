export default class SpriteSheet {
	constructor(image, width, height) {
	        this.image = image;
	        this.width = width;
	        this.height = height;
	        this.tiles = new Map();
	}

	define(name, x, y) {
		const buf = document.createElement('canvas');
		buf.width = this.width;
		buf.height = this.height;
		buf
		.getContext('2d')
		.drawImage(
			this.image,
			x * this.width,
			y * this.height+y,
			this.width,
			this.height,
			0,
			0,
			this.width,
			this.height);
		this.tiles.set(name, buf);
	}

	draw(name, context, x, y) {
		const buf = this.tiles.get(name);
		context.drawImage(buf, x, y);
	}
}