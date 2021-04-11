import SpriteSheet from './spritesheet.js';

// 0 - background -> can go thru
// 1 - solid -> can not go thru
// 2 - npc -> can not go thru
// 3 - trigger msg path -> alert shows can go thru
// 8 - hero dies here -> black screen
// 9 - eog -> win!!!

export const map = [
    [0,1,1,1,1,1,1,1],
    [0,1,1,0,0,0,0,1],
    [0,1,1,0,1,0,0,1],
    [0,0,2,0,1,0,0,1],
    [0,0,3,0,1,1,0,1],
    [0,0,3,0,1,0,0,1],
    [0,0,3,0,8,0,9,1],
    [1,1,1,1,1,1,1,1],
]

export const MAP_WIDTH = 7
export const MAP_HEIGHT = 7

export function drawMap(spritesMap, spritesNpc, context){
    for (let x = 0; x <= MAP_WIDTH; ++x) {
        for (let y = 0; y <= MAP_HEIGHT; ++y){
            switch (map[y][x]){
                case 0:
                    spritesMap.draw('brown_exclamation_block', context, x*70, y*70);
                    break;
                case 1:
                    spritesMap.draw('yellow_exclamation_block', context, x*70, y*70);
                    break;
                case 2:
                    spritesMap.draw('brown_exclamation_block', context, x*70, y*70);
                    spritesNpc.draw('npc', context, x*70, y*70);
                    break;
                case 3:
                    //TODO: create flag and check here if already displayed
                    spritesMap.draw('brown_exclamation_block', context, x*70, y*70);
                    break;
                case 8:
                    spritesMap.draw('brown_exclamation_block', context, x*70, y*70);
                    break;
                case 9:
                    spritesMap.draw('win', context, x*70, y*70);
                    break;
            }
        }
    }
}