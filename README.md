# Snowball Project

This is a collaborative school project between Taust and Koko-Mx. 

## Important!!!
This code is not Javascript! it is p5js, a JavaScript library for creative coding. This means there is a lot of premade functions in use in this code, so it has to be run on something that supports that. If you wish to run this online, here is a [link](https://openprocessing.org/sketch/1723309) to run it on Open Processing. If you want to run this on VScode, I would reccomend this [extension](https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode#:~:text=Open%20the%20Command%20Palette%20with,your%20sketch%20in%20a%20browser)
 

## how to play
players take turns guessing thier indivuidual phrases.  

player 1 can press "~" to throw a snowball, and player 2 can press "\\"    

player with the highest points once both timers run out wins.   


## Basic Rundown of Our Concept

### How to Get Points:
every time you get a letter right by guessing, plus 1 point per letter. If you complete a word, you get points based on the diffuclty of the phrase, and the player receives a snowball   

### How to Lose Points:
every time you get a letter wrong, minus one point, also add a part on the snowman. (it has 6 parts) if the snowman is completed lose half your points, and restart the word and snowman. 

### Difficulty scaling
There are 3 seperat types of phrases to guess: easy, medium, and hard. The player will first guess 2 easy phrases, then 2 medium, then it will loop hard ones untill the timer runs out.  

Easy phrases will net you 3 points. 

Meduim phrases will net you 5 points.   

Hard phrases will net you 8 points. 

this is to incentivice playing faster and less careful to try and keep the game at a fast pace. 

### What is a Snowball: 
snowballs are used to remove a part off of your snowman, and add one for the enemys. This feature is the least imporant on our list, and might not make it to the final copy. i hope to be able to add it.

### Timers:
there will be a seperate timer for both players (like in chess). once your timer reaches 0 you no longer can guess, or have a snowball thrown at you. once both timers are 0 end the game. whoever has the most points wins. 

### Extra rules:
if you guess a letter that you already guessed, it becomes wrong and adds a snowman peice.

## Psudo psudeo code 
- there are 3 diffucly of phrases, each with 7 phrases
- the game starts with 3 easy phrases, 3 meduim phrases, then hard phrases until the timer runs out.
- phrases are choesn at random, and have code to try and stop repeats. 
- a timer for each player is running at all times, and will alternate depending on whos turn it is
- for each wrong guess a snowman peice is added, once you reach 6 you lost half your points, and the wrong guesses reset (making it so if you dont remember your wrong guesses you get punished)
- if you can complete a phrases you can get a snowball that you can throw at the other player to add a snowman peice. 
- once both timers end which ever player has more points will win, with an according win screen. 








