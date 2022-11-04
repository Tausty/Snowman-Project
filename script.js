let phrases = ["fox in a box", "dog at the park", "cat has a hat"];
let curPhrase;
let guess;
let whereyouguess= ''

function setup() {
	// Make the drawing canvase as big as the window
	createCanvas(windowWidth, windowHeight);
	
	// Set the RGB background colour
	background(250,250,250);
	
	// Set the frame rate
	frameRate(1);
	
	// initiate game
	selectRandomPhrase();
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function selectRandomPhrase() {
	let index = Math.floor(random(0, phrases.length));
	print("index is ", index);
	curPhrase = phrases[index];
	guess = [];
	for(let i = 0; i < curPhrase.length; i++) {
		guess.push(curPhrase[i] == " " ? " " : "_"); 
    whereyouguess=join(guess, '')
    //                               
	}
}

function draw() {
	clear();
	textSize(50);
	text(curPhrase, 100, 60);
	text(whereyouguess, 100, 150);
}

function keyPressed() {
	// print("key pressed is", key);
  if (key >= 'a' && key <= 'z') { 
		print("You guessed", key);
		
		// Find all instances of key in curPhrase
		let result = [];
		for(var i=0; i < curPhrase.length; i++) {
    	if (curPhrase[i] === key) {
				result.push(i);
				guess[i] = key;
				whereyouguess=join(guess,'')
			}
		}
		
		// Check results for matches
		if (result.length > 0) {
			// we found a match
			print("Found matches at indices", result);
		}
		else {
			print("NO MATCH!");
		}
  }
}
