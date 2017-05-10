// ********************************************** PSEUDO-CODE **********************************************
/* 

Pseudo-Code: First Draft of Pseudo-Code (implementation is a bit different)

TITLE: Trivia Game (Advanced)


// FUNCTION CONSTRUCTOR FOR QUESTION OBJECTS
// function questionObj (arg,arg,arg...) {
// 		this.arg....
// }

// QUESTION GLOBAL OBJECTS (push onto questionsAry[] array)


$(document).ready(function(){

// Whole trivia game housed in an object called trivia
var trivia = {
	timeRemaining: 30, // initial time set to 30 seconds
	remainingQuestions: [], // empty array of remaining questions, which has deep copies of question objects
	numCorrect: 0,
	numIncorrect: 0,
	numUnanswered: 0,
	countDown: function() {
		// set interval

		// conditions for calling pauseTimer

			// if interval = 0, call  pauseTimer and timeOut()

	},
	resetTimer: function() {
		// insert reset code here
	},
	timeOut: function() {
		// numUnanswered++
		// calls clearScreen() to remove DOM elements and their data
		// display messages 
		// waitforNext()
	},
	pauseTimer: function() {
		// stops the timer where it is at
	},
	startGame: function() {
		// deep copies questionsAry onto remainingQuestions

		// sets initial values
		// numCorrect = 0;
		// numIncorrect = 0;
		// numUnanswered = 0;

		// prints startGame button

		// listens for button click to start the game
			// calls displayQuestion()

		console.log(trivia);
	},
	displayQuestion: function() {
		// calls clearScreen(), removes any DOM elements from the board and their data

		// calls countDown() to start the timer

		// pulls a random question from remainingQuestions array, saves as new question

		// deletes question from remaining questions

		// dipslays question and its multiple choice options

		// assigns option data to the DOM element directly

		// calls getAnswer()
	},
	getAnswer: function() {
		// selector for getting response from user click on the DOM (data stored on DOM already)

			// var result = $(this).data("isItRight");  // data key references a bool

			// calls pauseTimer()

			// displayResult(result);
	},
	displayResult: function(result) {
		// stores DOM element animation / gif if there is any

		// calls clearScreen(), removes DOM elements from the board and their data

		// prints message "Good job!" or "Answer is incorrect" depending on "result"

		// plays gif or animation

		// call waitForNext()
	},
	displayGameOver: function() {
		// calls clearScreen()

		// displays number of correct / incorrect / unsanswered responses

		// prints continue button "Click Here to Continue"

			// listens for button click to call startGame()
	},
	clearScreen: function() {
		// clears the screen so that the displays can appear to be a new "screen" when they are printed
	},
	waitForNext: function() {
		// setInterval timer for 5 seconds before moving to the next screen

		// if remainingQuestions.length === 0
			// call displayGameOver()
		// else
			// call displayQuestion()
	}
};

trivia.startGame(); // calls startGame() to initialize!

}); // end of Document Ready
	
*/  //END OF PSEUDOCODE

// ******************************************** GLOBAL OBJECTS ********************************************

// FUNCTION CONSTRUCTOR FOR QUESTION OBJECTS
function questionObj (qText, choices, correctAnswer) {
		this.qText = qText;
		this.choices = choices;  // array of objects, properties text and veracity
		this.correctAnswer = correctAnswer;
}

// QUESTION GLOBAL OBJECTS (push onto questionsAry[] array)

var questionsAry = [];

var dinosaursQ = new questionObj (
	'Which of the following is NOT a period in which the dinosaurs were alive?', //.qtext property
	[{text: 'Jurassic Period', veracity: false}, // each choice has two properties. false = wrong answer
	{text: 'Triassic Period', veracity: false}, 
	{text: 'Cretaceous Period', veracity: false}, 
	{text: 'Quaternary Period', veracity: true}],
	'Quaternary Period'); //correct answer
var constellationQ = new questionObj (
	'Which of the following is NOT the name of a constellation?',
	[{text: 'Andromeda', veracity: false}, 
	{text: 'Cancer', veracity: false}, 
	{text: 'Polaris', veracity: true}, 
	{text: 'Cetus', veracity: false}],
	'Polaris'); //correct answer
var reptilesQ = new questionObj (
	'Which of the following is not a reptile?',
	[{text: 'lizard', veracity: false}, 
	{text: 'salamander', veracity: true}, 
	{text: 'sea turtle', veracity: false}, 
	{text: 'komodo dragon', veracity: false},
	{text: 'snake', veracity: false}],
	'salamander'); //correct answer
var alexandriaQ = new questionObj (
	'Where was the Library of Alexandria located?',
	[{text: 'Egypt', veracity: true}, 
	{text: 'Rome', veracity: false}, 
	{text: 'Greece', veracity: false}, 
	{text: "What's a library?", veracity: false}],
	'Egypt'); //correct answer
var europeQ = new questionObj (
	'Which of the following is not a country in Europe?',
	[{text: 'Albania', veracity: false}, 
	{text: 'Algeria', veracity: true}, 
	{text: 'Serbia', veracity: false}, 
	{text: 'Lithuania', veracity: false}],
	'Algeria'); //correct answer
var volcanoesQ = new questionObj (
	'Which of the following volcanoes also happens to be the tallest mountain in Africa?',
	[{text: 'Mt. Rainier', veracity: false}, 
	{text: 'Mt. Fuji', veracity: false}, 
	{text: 'Mt. Steve', veracity: false}, 
	{text: 'Mt. Kilimanjaro', veracity: true},
	{text: 'Mt. St. Helens', veracity: false}],
	'Mt. Kilimanjaro'); //correct answer
var presidentsQ = new questionObj (
	'Which commanding general of the Union Army served as the 18th US president in support of post-Civil War Reconstruction?',
	[{text: 'Robert E. Lee', veracity: false}, 
	{text: 'Andrew Johnson', veracity: false}, 
	{text: 'Ulysses S. Grant', veracity: true}, 
	{text: 'Jake Weary', veracity: false}],
	'Ulysses S. Grant'); //correct answer
var universeQ = new questionObj (
	'Which of the following is generally accepted by the scientific community to be the age of the universe?',
	[{text: 'About 13.8 billion years old.', veracity: true}, 
	{text: 'About 7.1 trillion years old.', veracity: false}, 
	{text: 'About 605 million years old.', veracity: false},
	{text: '42.', veracity: false}, 
	{text: 'None of these. The scientific community has not even tried to calculate it.', veracity: false}],
	'About 13.8 billion years old.'); //correct answer
var sinQ = new questionObj (
	'What is sin(30 degrees)?',
	[{text: 'square root of 2', veracity: false}, 
	{text: 'square root of 3', veracity: false}, 
	{text: '1/2', veracity: true}, 
	{text: 'This question has baffled mathematicians for centuries...', veracity: false}],
	'1/2'); //correct answer


questionsAry.push(dinosaursQ, constellationQ, reptilesQ, 
	alexandriaQ, europeQ, volcanoesQ, presidentsQ, universeQ, sinQ);


// ******************************************* GLOBAL VARIABLES *******************************************
// div is added so that we can remove the button
var startBtn = '<button type="button" class="btn btn-danger" id="start-btn">Click Here to Start the Game!</button>';
var playAgainBtn = '<button type="button" class="btn btn-primary" id="playagain-btn">Play Again?</button>';

var scoreboardDiv = '';
var qDiv = '<div class="questions" id="question-div"></div>'
		 + '<ol type="A" id="choices-list"></ol>';
var answDiv = '<div id="user-guess"></div>'
			+ '<div id="correct-answer"></div>'
			+ '<div id="result"></div>';
var gameOverDiv = '<div class="text-center" id="game-over"></div>';

// ****************************************** MAIN GAME FUNCTION ******************************************
$(document).ready(function(){

// Whole trivia game housed in an object called trivia
var trivia = {
	timeRemaining: 30, // initial time set to 30 seconds
	remainingQuestions: [], // empty array of remaining questions, which has deep copies of question objects
	numCorrect: 0,
	numIncorrect: 0,
	numUnanswered: 0,
	countDown: function() {
		// set interval

		// conditions for calling pauseTimer

			// if interval = 0, call  pauseTimer and timeOut()

	},
	resetTimer: function() {
		// insert reset code here
	},
	timeOut: function() {
		// numUnanswered++
		// calls clearScreen() to remove DOM elements and their data
		// display messages 
		// waitforNext()
	},
	pauseTimer: function() {
		// stops the timer where it is at
	},
	startGame: function() {
		// first clears the screen
		trivia.clearScreen();

		// deep copies questionsAry onto remainingQuestions to avoid global data changes, thus ensuring
		// the game can restart with no issues.
		trivia.remainingQuestions = [];
		jQuery.each(questionsAry, function(i){
			trivia.remainingQuestions[i] = jQuery.extend(true, {}, questionsAry[i]);
		});
		console.log('initial set of questions:', trivia.remainingQuestions);
		// sets initial values
		trivia.numCorrect = 0;
		trivia.numIncorrect = 0;
		trivia.numUnanswered = 0;

		// prints initial scoreboard
		trivia.updateScoreboard();

		// prints startGame button
		trivia.addButton(startBtn);

		// listens for button click to start the game
		$('#start-btn').click(function(){
			// calls displayQuestion()
			trivia.displayQuestion();
		});
	},
	displayQuestion: function() {
		// calls clearScreen(), removes any DOM elements from the board and their data
		console.log('displayQuestion() called');
		trivia.clearScreen();

		// calls countDown() to start the timer

		// pulls a random question from remainingQuestions array, saves as new question
		var randInd = Math.floor(Math.random() * trivia.remainingQuestions.length);
		var thisQ = trivia.remainingQuestions[randInd];
		var corAnsw = thisQ.correctAnswer; // stores string of correct answer

		// appends all empty divs related to questions and choices
		$('#question-space').append(qDiv);

		// prints question on DOM and assigns data to DOM elements simultaneously
		$('#question-div').html(thisQ.qText).data(thisQ.qText); // stores question here

		// loops through the array and prints out the choices as an ordered list of type="A". I found this array
		// approach to be more extensible, allowing me to vary the number of choices for a given question and
		// still be able to bind the data to each element correctly.
		jQuery.each(thisQ.choices, function(i){
			var thisChoiceId = 'choice-' + i; // gives choice a unique id
			$('#choices-list').append('<li class="choices" id="' + thisChoiceId + '">' 
				+ thisQ.choices[i].text + '</li>');   // puts choice text in <li> tag
			thisChoiceId = '#' + thisChoiceId; // adds # to beginning so i don't have to fight with quotes
			$(thisChoiceId).data(thisQ.choices[i]); // appends data to the element
		});		

		// deletes question from remaining questions array
		trivia.remainingQuestions.splice(randInd, 1);

		trivia.getAnswer(corAnsw); // sends string argument with correct answer
	},
	getAnswer: function(corAnsw) {
		
		var userGuess;

		// selector for getting response from user click on the DOM (data stored on DOM already)
		$('.choices').click(function(){
			userGuess = $(this).data();

			// calls pauseTimer()

			trivia.displayResult(userGuess, corAnsw);
		});
			

			
	},
	displayResult: function(userGuess, corAnsw) {
		// stores DOM element animation / gif if there is any

		// calls clearScreen(), removes DOM elements from the board and their data
		trivia.clearScreen();

		// populates screen with empty div's
		$('#result-space').append(answDiv);

		// display results according to information stored in this method's arguments
		$('#user-guess').append('You guessed: "' + userGuess.text + '"');
		$('#correct-answer').append('Correct answer: "' + corAnsw + '"');

		// conditional checking if their answer was correct
		if (userGuess.veracity) {
			$('#result').append('<strong>You are correct! Good job!</strong>');
			trivia.numCorrect++;
		}
		else {
			$('#result').append('<strong>Sorry, you are incorrect.</strong>');
			trivia.numIncorrect++;
		}

		// updates scoreboard
		trivia.updateScoreboard();

		// plays gif or animation

		// call waitForNext()
		trivia.waitForNext();
	},
	displayGameOver: function() {
		// calls clearScreen()
		trivia.clearScreen();
		// displays number of correct / incorrect / unsanswered responses


		$('#result-space').append(gameOverDiv);
		$('#game-over').append("<strong>Game over.</strong>");

		// prints startGame button
		trivia.addButton(playAgainBtn);

		// listens for button click to start the game
		$('#playagain-btn').click(function(){
			// calls displayQuestion()
			trivia.startGame();
		});


		// prints continue button "Click Here to Continue"

			// listens for button click to call startGame()
	},
	clearScreen: function() {
		// clears the screen so that the displays can appear to be a new "screen" when they are printed

		// removes buttons and its event listener
		$('#start-btn').remove();
		$('#playagain-btn').remove();

		// removes questions, choices and data
		$('#question-div').remove();
		$('#choices-list').remove();
		$('#user-guess').remove();
		$('#correct-answer').remove();
		$('#result').remove();
		$('#game-over').remove();
	},
	waitForNext: function() {
		// setTimeout timer for 5 seconds before moving to the next screen
		setTimeout(function(){
			if (trivia.remainingQuestions.length === 0) 
				{trivia.displayGameOver();}
			else
				{trivia.displayQuestion();}
		}, 3500);
	},
	addButton: function(btn) {
		$('#button-space').append(btn);
	},
	updateScoreboard: function() {
		$('#scoreboard').html('Correct: <span class="badge">' + trivia.numCorrect + '</span>' +
			'&nbsp;&nbsp;&nbsp;&nbsp;Incorrect: <span class="badge">' + trivia.numIncorrect + '</span>' +
			'&nbsp;&nbsp;&nbsp;&nbsp;Unsanswered: <span class="badge">' + trivia.numUnanswered + '</span>');
	}
};

trivia.startGame(); // calls startGame() to initialize!




// ERROR CHECKING: 
	$(document).keypress(function(e){

		if (e.key === 'q') {
			trivia.startGame();
			console.log('questionsAry(global):', questionsAry);			
		} // end of if (e.key === 'q')
	}); // end of document.keypress


}); // end of Document Ready