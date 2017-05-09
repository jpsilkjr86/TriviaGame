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
function questionObj (qText, answerOne, answerTwo, answerThree, answerFour, correctAnswer) {
		this.qText = qText;
		this.answerOne = answerOne;
		this.answerTwo = answerTwo;
		this.answerThree = answerThree;
		this.answerFour = answerFour;
		this.correctAnswer = correctAnswer;
}

// QUESTION GLOBAL OBJECTS (push onto questionsAry[] array)

var questionsAry = [];

var dinosaursQ = new questionObj(
	"Which of the following is NOT a period in which the dinosaurs were alive?",
	"Jurassic Period", "Triassic Period", "Cretaceous Period", "Quaternary Period", 4);
var constellationQ = new questionObj(
	"Which of the following is NOT the name of a constellation?",
	"Andromeda", "Cancer", "Polaris", "Cetus", 3);

questionsAry.push(dinosaursQ, constellationQ);


// ******************************************* GLOBAL VARIABLES *******************************************

var startBtn = '<button type="button" class="btn btn-danger">Click Here to Start the Game!</button>';

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
			var objCopy = jQuery.extend(true, {}, questionsAry[i]);
			trivia.remainingQuestions[i] = objCopy;
		});
		console.log("trivia.remainingQuestions(local:", trivia.remainingQuestions);
		// sets initial values
		trivia.numCorrect = 0;
		trivia.numIncorrect = 0;
		trivia.numUnanswered = 0;

		console.log(trivia.numCorrect, trivia.numIncorrect, trivia.numUnanswered);
		// prints startGame button
		$("#start-btn").html(startBtn);

		// listens for button click to start the game
		$("#start-btn").click(function(){
			// calls displayQuestion()
			trivia.displayQuestion();
		});
	},
	displayQuestion: function() {
		// calls clearScreen(), removes any DOM elements from the board and their data
		console.log("displayQuestion() called");
		trivia.clearScreen();

		// calls countDown() to start the timer

		// pulls a random question from remainingQuestions array, saves as new question
		var randInd = Math.floor(Math.random() * trivia.remainingQuestions.length);
		var thisQuestion = trivia.remainingQuestions[randInd];

		// dipslays question and its multiple choice options
		$("#question-div").html(thisQuestion.qText);
		$("#answerone-div").html(thisQuestion.answerOne);
		$("#answertwo-div").html(thisQuestion.answerTwo);
		$("#answerthree-div").html(thisQuestion.answerThree);
		$("#answerfour-div").html(thisQuestion.answerFour);

		console.log("before splice:", trivia.remainingQuestions);
		console.log("before splice:", thisQuestion);
		// deletes question from remaining questions
		trivia.remainingQuestions.splice(randInd, 1);

		console.log("after splice:", trivia.remainingQuestions);
		console.log("after splice:", thisQuestion);

		trivia.numCorrect++;
		trivia.numIncorrect++;
		trivia.numUnanswered++;
		console.log(trivia.numCorrect, trivia.numIncorrect, trivia.numUnanswered);

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
		console.log("clearScreen() called");
		// clears the screen so that the displays can appear to be a new "screen" when they are printed

		// clears buttons
		$("#start-btn").empty();

		// clears questions and answers
		$("#question-div").empty();
		$("#answerone-div").empty();
		$("#answertwo-div").empty();
		$("#answerthree-div").empty();
		$("#answerfour-div").empty();
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




// ERROR CHECKING: 
	$(document).keypress(function(e){

		if (e.key === 'q') {
			trivia.startGame();
			console.log("questionsAry(global):", questionsAry);			
		} // end of if (e.key === 'q')
	}); // end of document.keypress


}); // end of Document Ready

