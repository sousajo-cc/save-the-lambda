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
		this.msgWarningPathText = "Which path you want to take?\n" +
      "Both paths are dangerous but you need to decide now.\n" +
      "Up is the longest path, Down the shortest...\n" +
      "Which one will let you live and find the lost lambda?\n" +
      "Remember...choosing the wrong one will kill you little hero."
		this.pathMsgShown = false;
		this.randomMsgsToShow = ["Here again?\nYou need to decide where to go and face your destiny.",
      "Going back now is not an option my dear.",
      "I already told you what to expect.",
      "Forward is the path my little blue friend.",
      "Try to go Up.\n Or maybe Down.\n Ehehehehe..."];
	}


	move(dir){
		const posToCheck = {x: this.x + modifier[dir].x,
               y: this.y + modifier[dir].y,
        };

        if ((posToCheck.x < 560 && posToCheck.x >= 0) &&  (posToCheck.y < 560 && posToCheck.y >= 0)){
        	if((map[posToCheck.y/70][posToCheck.x/70]===0 || map[posToCheck.y/70][posToCheck.x/70] === 3)){
			    if (map[posToCheck.y/70][posToCheck.x/70] === 3){
			    	if(!this.pathMsgShown){
			    		this.pathMsgShown = true;
			    		alert(this.msgWarningPathText);
			    	}else{
			    		const rand = Math.floor(Math.random() * 5);
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
          if (map[posToCheck.y/70][posToCheck.x/70] === 8){
            alert("you died :(!\n Try again...");
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          }
        }        
	//}
}
}