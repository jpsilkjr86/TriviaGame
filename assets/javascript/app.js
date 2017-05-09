// ********************************************** PSEUDO-CODE **********************************************
/* 

Pseudo-Code: First Draft

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
	 

questionsAry.push(dinosaursQ, constellationQ);


// ******************************************* GLOBAL VARIABLES *******************************************
// div is added so that we can remove the button
var startBtn = '<button type="button" class="btn btn-danger" id="start-btn">Click Here to Start the Game!</button>';
var playAgainBtn = '<button type="button" class="btn btn-success btn-sm" id="playagain-btn">Play Again?</button>';

var scoreboardDiv = '';
var qDiv = '<div class="questions" id="question-div"></div>'
		 + '<div class="choices" id="choice-a-div"></div>'
		 + '<div class="choices" id="choice-b-div"></div>'
		 + '<div class="choices" id="choice-c-div"></div>'
		 + '<div class="choices" id="choice-d-div"></div>';
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

		// prints Q and choices on DOM and assigns data to DOM elements simultaneously
		$('#question-div').html(thisQ.qText).data(thisQ.qText); // stores question here
		$('#choice-a-div').html(thisQ.choices[0].text).data(thisQ.choices[0]); // stores choices here
		$('#choice-b-div').html(thisQ.choices[1].text).data(thisQ.choices[1]);
		$('#choice-c-div').html(thisQ.choices[2].text).data(thisQ.choices[2]);
		$('#choice-d-div').html(thisQ.choices[3].text).data(thisQ.choices[3]);

		// deletes question from remaining questions
		trivia.remainingQuestions.splice(randInd, 1);

		console.log('after splice:', trivia.remainingQuestions);

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
		$('#user-guess').append('You guessed: ' + userGuess.text + '.');
		$('#correct-answer').append('Correct answer: ' + corAnsw + '.');

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
		$('#choice-a-div').remove();
		$('#choice-b-div').remove();
		$('#choice-c-div').remove();
		$('#choice-d-div').remove();
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
		$('#scoreboard').html('Correct: ' + trivia.numCorrect + 
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incorrect: ' + trivia.numIncorrect + 
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unsanswered: ' + trivia.numUnanswered);
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