let easyphrases = ["snowman", "seven", "cabbage", "eagles", "rabbets", "vaccine", "lettuce" ] 
let hardphrases = ["four knapsacks", "zigzagging zigzags", "jumbo jukeboxes", "jogging wizards", "jovial wyverns", "jinxed xylophones", "ivory iceboxes"]
let /*(change this when ready to implment) Medphrases*/phrases = ["fox in a box", "dog at the park", "cat has a hat", "where is the clock", "why are you there", "horse with shoes", "not a phrase"];
let curPhrase;
let guess, wrongguesses = [];
let guess2, wrongguesses2 = [];
let whereyouguess = '';
let whereyouguess2 = '';
let amountofsnowmanparts = 0;
let amountofsnowmanparts2= 0;
let rightguesses = [];
let rigthguesses2 = [];
let turn = 1;
let p1score = 0;
let p2score = 0;
let printscore;
let check = false;
let notthesamephrase = 0
let notthesamephrase2 = 0
let index = 0
let index2=0
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
	selectRandomPhrase2();
}



function selectRandomPhrase() {
	index = Math.floor(random(0, phrases.length));
	curPhrase = phrases[index];
	guess = [];
	wronguesses = [];
	for (let i = 0; i < curPhrase.length; i++) {
		guess.push(curPhrase[i] == " " ? " " : "_");
		whereyouguess = join(guess, ' ')
	}
}
function selectRandomPhrase2() {
	index2 = Math.floor(random(0, phrases.length));
	curPhrase2 = phrases[index2];
	guess2 = [];
	wronguesses2 = [];
	for (let i = 0; i < curPhrase2.length; i++) {
		guess2.push(curPhrase2[i] == " " ? " " : "_");
		whereyouguess2 = join(guess2, ' ')
	}
		//                               
}

function draw() {
	/////player 1
	clear();
	if (!whereyouguess.includes("_")) {
		rightguesses = []
		wrongguesses = []
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
	/////player 2
	clear();
	if (!whereyouguess2.includes("_")) {
		rightguesses2 = []
		wrongguesses2=[]
		p1score+=5
		notthesamephrase2 = index
		index2 = Math.floor(random(0, phrases.length));
		while (index == notthesamephrase2) {
			index2 = Math.floor(random(0, phrases.length));
		}
	}
		curPhrase2 = phrases[index2];
		whereyouguess2 = []
		guess2 = []
		p2score+=5
		for (let i = 0; i < curPhrase2.length; i++) {
			guess2.push(curPhrase2[i] == " " ? " " : "_");
			whereyouguess2 = join(guess2, ' ')
		}

	}
	check = false
	textSize(20);
	fill(0, 0, 0); // black
	text(whereyouguess, 100, 150);

	textSize(20);
	fill(0, 0, 0); // black
	text(whereyouguess2, width - 400, 150);
	
	text(p1score, 0, 50)
	text(p2score, width - 50, 50)

	textSize(30);
	fill(255, 0, 0); // red
	text(join(wrongguesses, ' '), 100, 250);
	
	textSize(30);
	fill(255, 0, 0); // red
	text(join(wrongguesses2, ' '), width - 350, 250);

	showprogress();
	text(timer1, 150, 50);
	if (turn == 1 && frameCount % 1 == 0 && timer1 > 0) {
    timer1 --;
  }
  if (timer1 == 0) {
    text("Time is up", 50, 100);
  }
	text(timer2, width - 250, 50);
	if (turn == -1 && frameCount % 1 == 0 && timer2 > 0) {
    timer2 --;
  }
  if (timer2 == 0) {
    text("Time is up", 50, 100);
  }
  
}

function showprogress() {
	textSize(50)
	fill(255, 0, 0); // red
	for (let i = 0; i < wrongguesses.length; i++) {
		let letter =' '
		switch (i) {
			case 0:
				fill(200,200,200);//snow gray 
				ellipse(400,400,70)
				break;
			case 1:
								fill(200,200,200);//snow gray 
				ellipse(400,365,60)
				break;
			case 2:
				fill(200,200,200);//snow gray 
				ellipse(400,330,40)
				break;
			case 3:
				line(370,365,330,395)
				break;
			case 4:
				fill(200,200,200);//snow gray 
				line(430,365,470,395)
				break;
			default:

				p1score/=2
				wrongguesses=[]
	
		}
		fill(255,0,0)//red
		text(letter, 400 + i * 30, 250);
	}
	for (let i = 0; i < wrongguesses2.length; i++) {
		let letter= ' '
		switch (i) {
			case 0:

				fill(200,200,200);//snow gray 
				ellipse(width - 400,400,70)
				break;
			case 1:
								fill(200,200,200);//snow gray 
				ellipse(width - 400,365,60)
				break;
			case 2:
								fill(200,200,200);//snow gray 
				ellipse(width - 400,330,40)
				break;
			case 3:
								fill(200,200,200);//snow gray 
				line(width-370,365,width-330,395)
				break;
			case 4:
								fill(200,200,200);//snow gray 
				line(width-430,365,width-470,395)
				break;
			default:
				p2score/=2
				wrongguesses2=[]
	
		}
		fill(255,0,0)//red
		text(letter, width - 500 + i * 30, 250);
	}
}

function keyPressed() {
	if(key >= 'a' && key <= 'z') {

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
			} else if (check == false && i == (wrongguesses.lenght,wrongguesses2.length)+1){
				turn *= -1
			}else if(timer1 == 0)
				turn =-1
		}
	
		// Check results for matches
		if (result.length > 0) {
			// we found a match
		} else if (wrongguesses.includes(key)) {


		} else {
			wrongguesses.push(key);

		}
		// Check results for matches
		if (result.length > 0) {
			// we found a match

		} else if (wrongguesses2.includes(key)) {


		} else {
			wrongguesses2.push(key);

		}
	
}

function lost() {
	clear()
	textSize(100)
	fill(255, 0, 0) //red
	text("You lost", 300, 300)
}
}
