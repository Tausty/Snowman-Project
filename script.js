let grade1phrases = ["girl", "boy", "hello", "four", "cat", "dog", "name"]
let easyphrases = ["snowman", "seven", "cabbage", "eagles", "rabbets", "vaccine", "lettuce"]
let hardphrases = ["four knapsacks", "zigzagging zigzags", "jumbo jukeboxes", "jogging wizards", "jovial wyverns", "jinxed xylophones", "ivory iceboxes"]
let /*(change this when ready to implment) Medphrases*/ phrases = ["fox in a box", "dog at the park", "cat has a hat", "where is the clock", "why are you there", "horse with shoes", "not a phrase"];
let curPhrase;
let guess, wrongguesses = [];
let guess2, wrongguesses2 = [];
let whereyouguess = '';
let whereyouguess2 = '';
let amountofsnowmanparts = 0;
let amountofsnowmanparts2 = 0;
let rightguesses = [];
let rightguesses2 = [];
let turn = 1;
let p1score = 0;
let p2score = 0;
let printscore;
let check = false;
let check2 = false;
let notthesamephrase = 0
let notthesamephrase2 = 0
let index = 0
let index2 = 0
let timer1 = 60
let timer2 = 60
let wrongguesseslength = wrongguesses.length
let wrongguesses2length = wrongguesses2.length
let completedphrases = 0
let completedphrases2 = 0

// should use classes here somewhere, but idk how to do that so L 

function setup() {
	// Make the drawing canvase as big as the window
	createCanvas(windowWidth, windowHeight);

	// Set the RGB background colour
	background(250, 250, 250); // white

	// Set the frame rate
	frameRate(60); // changes the frame rate, if you want to change dont forget about changing the timer 

	// initiate game
	selectRandomPhrase(); // slects the first random phrase for p1
	selectRandomPhrase2(); // selects the first random phrase for p2 
}



function selectRandomPhrase() {
	index = Math.floor(random(0, phrases.length));
	curPhrase = easyphrases[index];
	guess = [];
	wronguesses = [];
	for (let i = 0; i < curPhrase.length; i++) {
		guess.push(curPhrase[i] == " " ? " " : "_"); // short hand if statments here, read below 
		whereyouguess = join(guess, ' ') // the vierable names are really confusing here, dw about it 
	} // close for loop
} // close selecting of random phrases for curphrase 

function selectRandomPhrase2() {
	index2 = Math.floor(random(0, phrases.length));
	curPhrase2 = easyphrases[index2];
	guess2 = [];
	wronguesses2 = [];
	for (let i = 0; i < curPhrase2.length; i++) {
		guess2.push(curPhrase2[i] == " " ? " " : "_"); // shorthand if statments here, just checcking for specific letters and replacing them
		whereyouguess2 = join(guess2, ' ') // the virable names are really confusing here, dw about it 
	} //close making the guess place                         
} // close selecting of random phrases for curphrase2

function draw() {

	if (timer1 <= 1 && timer2 <= 1) {
		if (p1score > p2score) {
			clear()
			textSize(100)
			fill(255, 0, 0)
			text("PLAYER 1 WINS", 100, 100)
		} // win screen
		if (p1score < p2score) {
			clear()
			textSize(100)
			fill(255, 0, 0)
			text("PLAYER 2 WINS", 100, 100)
		} // winn screen
	} // close both timer over check 
	else {
		/////player 1
		clear();
		resetp1(); // if the guessing space phrase is filled out, run a new one
		/////player 2
		clear();
		resetp2(); // if the guessing space phrase is filled out, run a new one


		check = false
		textSize(20);
		fill(0, 0, 0); // black
		text(whereyouguess, 100, 150);
		// prints the actual guessing space for p1 

		textSize(20);
		fill(0, 0, 0); // black
		text(whereyouguess2, width - 400, 150);
		// prints the actuall guessing space  for p2 

		text(p1score, 0, 50)
		text(p2score, width - 50, 50)
		//prints the score 

		textSize(30);
		fill(255, 0, 0); // red
		text(join(wrongguesses, ' '), 100, 250);
		// prints the wrongguess for p1 

		textSize(30);
		fill(255, 0, 0); // red
		text(join(wrongguesses2, ' '), width - 350, 250);
		// prints the wronguesses for p2


		showprogress(); // read comments there for more info

fill(255,0,0) //red
		text(timer1, 150, 50); // actually prints the timer
		if (turn == 1 && frameCount % 60 == 0 && timer1 >= 0) {
			timer1--;
		} else if (turn == 1) {
			fill(0, 255, 0)
			ellipse(50, 50, 50)
		} //runs the timer, frame count just collects all the frames, and every time its dibisable by 60 it changes the timer number
		if (timer1 == -1) {
			timer1 = 0
		} // for some reason there is a bug that wehn both timers finish, timer 1 becomes negative one, this should fix it?
		if (timer1 == 0) {
			turn = -1
			text("Time is up", 50, 100);
		} // prints time is up when timer 1 is over, changes turn as well
		
		fill(255,0,0)//red
		text(timer2, width - 250, 50); // actually prints the timer
		if (turn == -1 && frameCount % 60 == 0 && timer2 > 0) {
			timer2--;
		} else if (turn == -1) {
			fill(0, 255, 0)
			ellipse(width - 100, 50, 50)
		} //runs the timer, frame count just collects all the frames, and every time its dibisable by 60 it changes the timer number
		if (timer2 == -1) {
			timer2 = 0
		} // there is a bug with timer 1, hopfully this should prepare timer 2 for that 
		if (timer2 == 0) {
			turn = 1
			text("Time is up", width - 400, 100);
		} // prints time is up when timer 2 is over, changes turn as well. 
	} // close else 
} // close draw 

function showprogress() {
	textSize(50)
	fill(255, 0, 0); // red
	for (let i = 0; i < wrongguesses.length; i++) {
		let letter = ' '
		switch (i) { // gonna be honest this chain of code is a black box, no clue how it works its from the sample code
			case 0:
				fill(200, 200, 200); //snow gray 
				ellipse(400, 400, 70)
				break; // bottem snowman circle 
			case 1:
				fill(200, 200, 200); //snow gray 
				ellipse(400, 365, 60)
				break; // middle circle 
			case 2:
				fill(200, 200, 200); //snow gray 
				ellipse(400, 330, 40)
				break; // top circle 
			case 3:
				line(370, 365, 330, 395)
				break; // left arm
			case 4:
				fill(200, 200, 200); //snow gray 
				line(430, 365, 470, 395)
				break; // right arm
			default:
				p1score /= 2
				wrongguesses = []
				//snowman completed 

		} // close weird if statment chain (idk what its called)
		fill(255, 0, 0) //red
		text(letter, 400 + i * 30, 250);
	} // close for loop


	for (let i = 0; i < wrongguesses2.length; i++) {
		let letter = ' '
		switch (i) {
			case 0:

				fill(200, 200, 200); //snow gray 
				ellipse(width - 400, 400, 70)
				break; // bottem snowman circle 
			case 1:
				fill(200, 200, 200); //snow gray 
				ellipse(width - 400, 365, 60)
				break; // middle circle 
			case 2:
				fill(200, 200, 200); //snow gray 
				ellipse(width - 400, 330, 40)
				break; // top circle 
			case 3:
				fill(200, 200, 200); //snow gray 
				line(width - 370, 365, width - 330, 395)
				break; // left arm
			case 4:
				fill(200, 200, 200); //snow gray 
				line(width - 430, 365, width - 470, 395)
				break; // right arm
			default:
				p2score /= 2
				wrongguesses2 = []
				// snowman completed 
		} // close the weird if statment chain thing (idk what its called)
		fill(255, 0, 0) //red
		text(letter, width - 500 + i * 30, 250); // prints nothing XD
	} // close the loop
} // close show progress 

function keyPressed() {
	let pleasework = false
	if (key >= 'a' && key <= 'z') {

		// Find all instances of key in curPhrase
		let result = []; // gonna be honset no clue what this does, but it stays :D
		if (turn == 1 && pleasework == false) {
			pleasework = true
			wrongguesseslength = wrongguesses.length
			check = false
			for (var i = 0; i < curPhrase.length; i++) {
				if (timer1 == 0)
					turn *= -1 // making sure that the timer is not over
				if (curPhrase[i] === key && !rightguesses.includes(key) && turn == 1) {

					check = true // for later use to prove that there was a correct guess 
					p1score++

					result.push(i); // again idk why this is here, result is not used anywhere else 
					guess[i] = key;
					whereyouguess = join(guess, ' ')
					amountofsnowmanparts++ // this viarable is unused as well ooops
				} // close correct guess checker 
				if (check == true && i == (curPhrase.length) - 1) {
					rightguesses.push(key)
				} // this makes it so taht if u get a correct guess it goes to the next turn 
				else if (check == false && i == curPhrase.length - 1 && wrongguesses.length != wrongguesseslength && turn == 1) {
					turn *= -1
					wrongguesseslength = wrongguesses.length
				} // makes it so if you guess wrong it moves on 
			} // close the checker 
		} // close if turn==1

		let result2 = [] // idk why we have this :(
		if (turn == -1 && pleasework == false) {
			wrongguesses2length = wrongguesses2.length
			pleasework = true
			check2 = false
			for (var j = 0; j < curPhrase2.length; j++) {
				if (timer2 == 0)
					turn *= -1 // makes sure timer is not over 
				else if (curPhrase2[j] === key && !rightguesses2.includes(key) && turn == -1) {
					check2 = true // for later use to prove there was a correct guess 
					p2score++

					result2.push(j); // unused 
					guess2[j] = key;
					whereyouguess2 = join(guess2, ' ')
					amountofsnowmanparts2++ //unused
				} // close correct guess checker 
				if (check2 == true && j == (curPhrase2.length) - 1) {
					rightguesses2.push(key)
				} // makes it so the turn moves on if u make a correct guess 
				else if (check2 == false && j == curPhrase2.length - 1 && wrongguesses2length != wrongguesses2.length && turn == -1) {
					turn *= -1
					wrongguesses2length = wrongguesses2.length
				} // makes it so the turn moves on if u make a wrong guess 
			} // close the checker 
		} // close if turn==-1

		if (check == false && turn == 1) { // if there was no correct guess, and the turn is right, add to wrong guessses
			if (!wrongguesses.includes(key) && turn == 1) {
				wrongguesses.push(key);
				turn *= -1
			} // close if 
		} // close if  
		else if (check2 == false && turn == -1) { // if there was no correct guess, and the turn is right, and the prior if statment was wrong, add to wrong guesses
			if (!wrongguesses2.includes(key) && turn == -1) {
				wrongguesses2.push(key);
				turn *= -1
			} // close if 
		} // close else if 
		pleasework = false
		if (check == true) {
			turn *= -1
			check = false
			check2 = false
		}
		if (check2 == true) {
			turn *= -1
			check2 = false
			check = false
		}
	} // close making sure keys are not special characters 
} //close keypressed


function resetp1() {
	if (!whereyouguess.includes("_")) {
		completedphrases += 1
		rightguesses = []
		wrongguesses = []
		p1score += 5
		notthesamephrase = index
		index = Math.floor(random(0, phrases.length));
		while (index == notthesamephrase) {
			index = Math.floor(random(0, phrases.length));
		} //close making the current prhase not equal to the last one

		if (completedphrases <= 2) {
			curPhrase = easyphrases[index];
		}
		if (completedphrases > 2 && completedphrases <= 5) {
			curPhrase = phrases[index];
		}
		if (completedphrases > 5) {
			curPhrase = hardphrases[index];
		}
		whereyouguess = []
		guess = []
		for (let i = 0; i < curPhrase.length; i++) {
			guess.push(curPhrase[i] == " " ? " " : "_");
			whereyouguess = join(guess, ' ')
		} // re make the the guess place 
	} // close the reset 
} // close resetp1 


function resetp2() {
	if (!whereyouguess2.includes("_")) {
		completedphrases2 += 1
		rightguesses2 = []
		wrongguesses2 = []
		p2score += 5
		notthesamephrase2 = index2
		index2 = Math.floor(random(0, phrases.length));
		while (index2 == notthesamephrase2) {
			index2 = Math.floor(random(0, phrases.length));
		} // close making the current phrase not equal to the last one 
		if (completedphrases2 <= 2) {
			curPhrase2 = easyphrases[index2];
		}
		if (completedphrases2 > 2 && completedphrases2 <= 5) {
			curPhrase2 = phrases[index2];
		}
		if (completedphrases2 > 5) {
			curPhrase2 = hardphrases[index2];
		}
		whereyouguess2 = []
		guess2 = []
		for (let i = 0; i < curPhrase2.length; i++) {
			guess2.push(curPhrase2[i] == " " ? " " : "_");
			whereyouguess2 = join(guess2, ' ')
		} // remaking the guess place 
	} // close the reset 
} // close resetp2
