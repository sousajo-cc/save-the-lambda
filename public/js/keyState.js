export default class KeyState {
	constructor() {
		this.keyStates = new Map();
		this.keyStates.set("down", 0);
		this.keyStates.set("left", 1);
		this.keyStates.set("right", 2);
		this.keyStates.set("up", 3);
	}

	useKeyPressed(event) {
		const keyPressed = event.key.replace("Arrow", "").toLowerCase().toString();
		if(this.keyStates.has(keyPressed)){
			this.walk(keyPressed);
			event.preventDefault();
			return keyPressed;
		}
	}

	walk(dir){
		console.log(dir)
	}

	listen(window){
		window.addEventListener('keydown', event => {
			this.useKeyPressed(event);
		});
	}
};