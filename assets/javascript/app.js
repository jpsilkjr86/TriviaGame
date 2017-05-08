// ********************************************** PSEUDO-CODE **********************************************
/* 
	Title: Trivia Game (Advanced)

	MAIN METHODS:
		1) Timer (object)
			a) has a set initial start time property
			b) has a countdown method using setInterval, starts on question screen
			c) the interval gets cleared when the user makes a guess or when the timer reaches 0
			d) if the timer reaches 0, unanswered++.
			e) restarts for each new question
		2) Questions (array of objects, can display in random order)
			a) each question has at least four possible answers
				*only one answer is true, the others are false
			b) user guesses by clicking on an answer
			c) has a method where it checks the clicked answer and returns whether it is right or wrong
			d) if wrong, losses++. if right, wins++.
			e) status message which tells the user if they are right or wrong, along with the correct answer
				*can include a gif or other animation
			f) has a method for printing messages on a div, replacing old text if needed
			g) has a method for clearning messages on a div so that question screen and status screen
				appear to be separate pages
		3) Game Over page (function)
			a) displays number of correct / incorrect / unsanwered repsonses
			b) prints button which allows the user to play again
	
*/

// ********************************************* GLOBAL OBJECTS *********************************************

// FUNCTION CONSTRUCTOR FOR QUESTION OBJECTS
// function questionObj (arg,arg,arg...) {
// 		this.arg....
// }

// QUESTION GLOBAL OBJECTS (push onto questions[] array)

// Trivia game housed in an object
var trivia = {
	initialTime: 30, // initial time set to 30 seconds
	correctAnswers: 0,
	incorrectAnswers: 0,
	unansweredQuestions: 0,
	countDown: function() {
		// set interval

		// conditions for calling timer.pause()

			// if interval = 0, call timeOut()

			// if userwins, pause
	},
	resetTimer: function() {
		// insert reset code here
	},
	timeOut: function() {
		// unansweredQuestions++
	},
	pauseTimer: function() {
		// stops the timer where it is at
	},
	displayQuestion: function(question) {
		// takes in question object argument 

		// dipslays question and multiple choice options
	},
	isAnswerCorrect: function(question, answer) {
		// takes in question object argument (has correct answers within it) and user's answer

		// pauses timer right away

		// if correct, return true

		// if incorrect, return false
	}
	displayResult: function(answeredRight) {
		// answeredRight argument is a bool, method prints corresponding messages
	},
	displayGameOver: function() {
		// displays number of correct / incorrect / unsanswered responses
	},
	clearScreen: function() {
		// clears the screen so that the displays can appear to be a new "screen" when they are printed
	}
};

// ******************************************** GLOBAL VARIABLES ********************************************


// *************************************** GLOBAL METHOD DECLARATIONS ***************************************
	

// ******************************************* MAIN APP FUNCTIONS *******************************************

$(document).ready(function(){


}); // end Document Ready