import * as css from './index.css'
import {loadMapSprites, loadNpcSprites, loadHeroSprite} from './loaders.js';
import {drawMap} from './map.js';
import KeyState from './keyState.js'
import Hero from './hero.js'

export default class App {
    constructor (elem) {
      if (!elem) return
      this.elem = elem
    }

    render () {
      const canvas = document.getElementById('game');
      const context = canvas.getContext('2d');


// TODO: 
// get rid of this promise hell
// use this instead:
// Promise.all([promise1, promise2, promise3]).then((values) => {
//  console.log(values);
//});
      loadMapSprites()
        .then(sprites => {
          loadNpcSprites().
          then(npcSprites => {
            drawMap(sprites, npcSprites, context); // draw this to buffer to draw onluy once
            loadHeroSprite()
              .then(heroSprite =>{
                const input = new KeyState();
                const hero = new Hero();

                hero.draw = function drawHero(context) {
                  heroSprite.draw('start_pos', context, this.x, this.y);
                }

                // TODO: this does nothing
                hero.updatePosition = function updateHeroPos(dir){
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
                  requestAnimationFrame(updatePos);
                }
                updatePos();
              });
          })
        });
    }
}