let phrases = ["fox in a box", "dog at the park", "cat has a hat", "where is the clock", "why are you there", "horse with shoes", "not a phrase"];
let curPhrase;
let guess, wrongguesses = [];
let whereyouguess = '';
let amountofsnowmanparts = 0;
let rightguesses = [];
let turn = 1;
let p1score = 0;
let p2score = 0;
let printscore;
let check = false;
let notthesamephrase = 0
let index = 0
let timer1 = 60
let timer2 = 60

function setup() {
	// Make the drawing canvase as big as the window
	createCanvas(windowWidth, windowHeight);

	// Set the RGB background colour
	background(250, 250, 250);

	// Set the frame rate
	frameRate(1);

	// initiate game
	selectRandomPhrase();
}



function selectRandomPhrase() {
	index = Math.floor(random(0, phrases.length));
	print("index is ", index);
	curPhrase = phrases[index];
	guess = [];
	wronguesses = [];
	for (let i = 0; i < curPhrase.length; i++) {
		guess.push(curPhrase[i] == " " ? " " : "_");
		whereyouguess = join(guess, ' ')

		//                               
	}
}

function draw() {
	clear();
	if (!whereyouguess.includes("_")) {
		rightguesses = []
		notthesamephrase = index
		index = Math.floor(random(0, phrases.length));
		while (index == notthesamephrase) {
			index = Math.floor(random(0, phrases.length));
		}

		curPhrase = phrases[index];
		whereyouguess = []
		guess = []
		for (let i = 0; i < curPhrase.length; i++) {
			guess.push(curPhrase[i] == " " ? " " : "_");
			whereyouguess = join(guess, ' ')
		}

	}
	check = false
	textSize(50);
	fill(0, 0, 0); // black
	text(curPhrase, 100, 60);
	text(whereyouguess, 100, 150);

	text(p1score, 0, 50)
	text(p2score, width - 50, 50)

	textSize(30);
	fill(255, 0, 0); // red
	text(join(wrongguesses, ' '), 100, 250);

	showprogress();
	text(timer1, 50, 50);
	if (frameCount % 1 == 0 && timer1 > 0) {
    timer1 --;
  }
  if (timer1 == 0) {
    text("Time is up", 50, 100);
  }
  
}

function showprogress() {
	textSize(50)
	fill(255, 0, 0); // red
	for (let i = 0; i < wrongguesses.length; i++) {
		let letter;
		switch (i) {
			case 0:
				letter = 'U';
				break;
			case 1:
				letter = 'S';
				break;
			case 2:
				letter = 'U';
				break;
			case 3:
				letter = 'C';
				break;
			case 4:
				letter = 'K';
				break;
			case 5:
				letter = '.';
				break;
			default:
				lost()
		}
		text(letter, 400 + i * 30, 250);
	}
}

function keyPressed() {
	// print("key pressed is", key);
	if (key >= 'a' && key <= 'z') {
		print("You guessed", key);

		// Find all instances of key in curPhrase
		let result = [];
		for (var i = 0; i < curPhrase.length; i++) {

			if (rightguesses.includes(key))
				check = false

			else if (curPhrase[i] === key) {
				check = true
				if (turn == 1) {
					p1score++
				}
				if (turn == -1) {
					p2score++
				}

				result.push(i);
				guess[i] = key;
				whereyouguess = join(guess, ' ')
				amountofsnowmanparts++
			}
			if (check == true && i == (curPhrase.length)-1) {
				turn *= -1
				append(rightguesses, key);
			} else if (timer1 == 0)
				turn =-1
		}

		// Check results for matches
		if (result.length > 0) {
			// we found a match
			print("Found matches at indices", result);
		} else if (wrongguesses.includes(key)) {
			print("you already guessed that sinky ");

		} else {
			wrongguesses.push(key);
			print("NO MATCH!")
		}
	}
}

function lost() {
	clear()
	textSize(100)
	fill(255, 0, 0) //red
	text("You lost", 300, 300)
}
