import {loadMapSprites, loadNpcSprites, loadHeroSprite} from './loaders.js';
import {drawMap} from './map.js';
import KeyState from './keyState.js'
import Hero from './hero.js'


const canvas = document.getElementById('game');
const context = canvas.getContext('2d');


// TODO: 
// get rid of this promise hell
loadMapSprites()
.then(sprites => {
	loadNpcSprites().
	then(npcSprites => {
		drawMap(sprites, npcSprites, context);
		loadHeroSprite()
		.then(heroSprite =>{
			const input = new KeyState();
			const hero = new Hero();
			
			hero.draw = function drawHero(context) {
				heroSprite.draw('start_pos', context, this.x, this.y);
			}


			hero.updatePosition = function updateHeroPos(dir){
				/*switch(dir){
					case "up":
						this.y -= 70;
						break;
					case "down":
						this.y += 70;
						break;
					case "right":
						this.x += 70;
						break;
					case "left":
						this.x -= 70;
						break;
				}*/
				console.log("here");
				console.log(dir);
				this.move(dir);
			}

			window.addEventListener('keydown', event => {
				const dir = input.useKeyPressed(event);
				if (dir){
					hero.updatePosition(dir);
				}
			});

			function updatePos(){
				loadMapSprites()
					.then(sprites => {
						loadNpcSprites().
						then(npcSprites => {
						drawMap(sprites, npcSprites, context);
					});
				});
				hero.draw(context);
				//hero.updatePosition();
				requestAnimationFrame(updatePos);
			}
			updatePos();
		});
	})
});
