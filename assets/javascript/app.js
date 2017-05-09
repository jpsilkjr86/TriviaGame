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
function questionObj (qText, answerOne, answerTwo, answerThree, answerFour) {
		this.qText = qText;
		this.answerOne = answerOne;
		this.answerTwo = answerTwo;
		this.answerThree = answerThree;
		this.answerFour = answerFour;
}

// QUESTION GLOBAL OBJECTS (push onto questionsAry[] array)

var questionsAry = [];

var dinosaursQ = new questionObj (
	'Which of the following is NOT a period in which the dinosaurs were alive?', //.qtext property
	{text: 'Jurassic Period', veracity: false}, // each answer has two properties. false = wrong answer
	{text: 'Triassic Period', veracity: false}, 
	{text: 'Cretaceous Period', veracity: false}, 
	{text: 'Quaternary Period', veracity: true}  );
var constellationQ = new questionObj (
	'Which of the following is NOT the name of a constellation?',
	{text: 'Andromeda', veracity: false}, 
	{text: 'Cancer', veracity: false}, 
	{text: 'Polaris', veracity: true}, 
	{text: 'Cetus', veracity: false}  );
	 

questionsAry.push(dinosaursQ, constellationQ);


// ******************************************* GLOBAL VARIABLES *******************************************
// div is added so that we can remove the button
var startBtn = '<button type="button" class="btn btn-danger" id="start-btn">Click Here to Start the Game!</button>';
var qdiv = '<div class="questions" id="question-div"></div>'
		+ '<div class="answers" id="answerone-div"></div>'
		+ '<div class="answers" id="answertwo-div"></div>'
		+ '<div class="answers" id="answerthree-div"></div>'
		+ '<div class="answers" id="answerfour-div"></div>';

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

		// appends all empty divs related to questions and answers
		$('#question-space').append(qdiv);

		// prints Q's and A's on DOM and assigns data to DOM elements simultaneously
		$('#question-div').html(thisQ.qText).data(thisQ.qText);
		$('#answerone-div').html(thisQ.answerOne.text).data(thisQ.answerOne);
		$('#answertwo-div').html(thisQ.answerTwo.text).data(thisQ.answerTwo);
		$('#answerthree-div').html(thisQ.answerThree.text).data(thisQ.answerThree);
		$('#answerfour-div').html(thisQ.answerFour.text).data(thisQ.answerFour);

		// deletes question from remaining questions
		trivia.remainingQuestions.splice(randInd, 1);

		console.log('after splice:', trivia.remainingQuestions);
		console.log('after splice:', thisQ);

		trivia.getAnswer();
	},
	getAnswer: function() {
		
		var userGuess;

		// selector for getting response from user click on the DOM (data stored on DOM already)
		$('.answers').click(function(){
			userGuess = $(this).data();
			console.log('veracity:', userGuess.veracity);

			// calls pauseTimer()

			trivia.displayResult(userGuess);
		});
			

			
	},
	displayResult: function(userGuess) {
		// stores DOM element animation / gif if there is any
		console.log('You guessed ' + userGuess.text + '. That is ' + userGuess.veracity + '.');
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
		console.log('clearScreen() called');
		// clears the screen so that the displays can appear to be a new "screen" when they are printed

		// removes buttons and its event listener
		$('#start-btn').remove();

		// removes questions, answers and data
		$('#question-div').remove();
		$('#answerone-div').remove();
		$('#answertwo-div').remove();
		$('#answerthree-div').remove();
		$('#answerfour-div').remove();
	},
	waitForNext: function() {
		// setInterval timer for 5 seconds before moving to the next screen

		// if remainingQuestions.length === 0
			// call displayGameOver()
		// else
			// call displayQuestion()
	},
	addButton: function(btn) {
		$('#button-space').append(btn);
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

