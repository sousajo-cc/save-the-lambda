import {MAP_HEIGHT, MAP_WIDTH, map} from './map.js';

export default class HeroMovement {
	constructor(maxSteps) {
		this.maxSteps = maxSteps;
		this.pos = [0, 0];
		this.dir = [0, 0];
	    this.step = 0;
	    this.directions = {
	        "down": 0,
	        "left": 1,
	        "right": 2,
	        "up": 3,
	    };

	    this.stepSize = 70;
	    this.modifier = {
	        "down": {x: 0, y: stepSize},
	        "left": {x: -stepSize, y: 0},
	        "right": {x: stepSize, y: 0},
	        "up": {x: 0, y: -stepSize},
	    }
	}

	walk(dir) {
		setDir(prev => {
			if(directions[dir] === prev) move(dir);
			return directions[dir];
		});
		setStep(prev =>prev < this.maxSteps - 1 ? prev + 1 : 0)
	}

	move(dir) {
		setPosition(prev => {
            const posToCheck = {x: prev.x + modifier[dir].x,
                y: prev.y + modifier[dir].y,
            }

            if(((posToCheck.x <= MAP_HEIGHT*70 - 70 && posToCheck.x >= 0)
                && (posToCheck.y <= MAP_HEIGHT*70 - 70 && posToCheck.y>= 0)) &&
                (map[posToCheck.y/70][posToCheck.x/70]===0 && posToCheck.x >= 0 && posToCheck.y >= 0
                 && posToCheck.y <= MAP_HEIGHT*70 - 70 && posToCheck.x <= MAP_HEIGHT*70 - 70)) {
                    return {
                        x: posToCheck.x,
                        y: posToCheck.y,
                    };
            }else{
                return {x: prev.x, y: prev.y};
            }
        })
	}
	useWalk(){
		return {walk, dir, step, position};
	}
}