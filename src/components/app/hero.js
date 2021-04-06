import {MAP_WIDTH, MAP_HEIGHT, map} from './map.js';

const stepSize = 70;
const modifier = new Map();
modifier["down"] = {x: 0, 
	y: stepSize};
modifier["left"] = {x: -stepSize, y: 0};
modifier["right"] = {x: stepSize, y: 0};
modifier["up"] = {x: 0, y: -stepSize};


export default class Hero {
	constructor(){
		this.x = 0;
		this.y = 0;
		this.pathMsgShown = false;
		this.randomMsgsToShow = ["0","1","2","3","4"];
	}


	move(dir){
		const posToCheck = {x: this.x + modifier[dir].x,
               y: this.y + modifier[dir].y,
        };

        console.log(posToCheck);
        if ((posToCheck.x < 560 && posToCheck.x >= 0) &&  (posToCheck.y < 560 && posToCheck.y >= 0)){
        	if((map[posToCheck.y/70][posToCheck.x/70]===0 || map[posToCheck.y/70][posToCheck.x/70] === 3)){
			    if (map[posToCheck.y/70][posToCheck.x/70] === 3){
			    	if(!this.pathMsgShown){
			    		this.pathMsgShown = true;
			    		alert("what path you want to take?");
			    	}else{
			    		const rand = Math.floor(Math.random() * 4);
			    		alert(this.randomMsgsToShow[rand]);
			    	}
			    }
			    this.x = posToCheck.x;
			    this.y = posToCheck.y;
        	}
        	if (map[posToCheck.y/70][posToCheck.x/70] === 9){
        		alert("you saved the lambda!");
				// eslint-disable-next-line no-restricted-globals
        		location.reload();
        	}
        }        
	//}
}
}