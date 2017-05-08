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

var timer = {
	initialTime: 30;
	countDown: function() {
		// set interval

		// conditions for calling timer.pause()

			// if interval = 0, pause

			// if userwins, pause
	}
	reset: function() {
		// insert reset code here
	}
	timeOut: function() {
		// insert timeout code here, changes the number of unanswered questions
	}
	pause: function() {
		// stops the timer where it is at
	}
};

// ******************************************** GLOBAL VARIABLES ********************************************


// *************************************** GLOBAL METHOD DECLARATIONS ***************************************
	

// ******************************************* MAIN APP FUNCTIONS *******************************************

$(document).ready(function(){


}); // end Document Ready