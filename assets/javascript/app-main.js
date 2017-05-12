// ******************************************* GLOBAL VARIABLES *******************************************
// div is added so that we can remove the button
var startBtn = '<button type="button" class="btn btn-danger" id="start-btn">Click Here to Start the Game!</button>';
var mainMenuBtn = '<button type="button" class="btn btn-primary" id="mainmenu-btn">Return to Main Menu</button>';

var qDiv = '<div class="questions" id="question-div"></div>'
		 + '<ol type="A" id="choices-list"></ol>';
var answDiv = '<div id="user-guess"></div>'
			+ '<div id="correct-answer"></div>'
			+ '<div id="result"></div>';
var gameOverDiv = '<div class="text-center" id="game-over"></div>';
var timeOutDiv = '<div class="text-center" id="timeout"></div>';

// ****************************************** MAIN GAME FUNCTION ******************************************
$(document).ready(function(){

var timerInterval;

// Whole trivia game housed in an object called trivia
var trivia = {
	timeRemaining: 30, // initial time set to 30 seconds
	remainingQuestions: [], // empty array of remaining questions, which will receive deep copies of question objects
	numCorrect: 0,
	numIncorrect: 0,
	numUnanswered: 0,
	countDown: function() {
		// sets initial time remaining and displays it
		trivia.timeRemaining = 30;
		trivia.convertAndDisplayTime(trivia.timeRemaining);

		// sets the interval for displaying the time
		timerInterval = setInterval(function(){
			trivia.timeRemaining--;
			trivia.convertAndDisplayTime(trivia.timeRemaining);
			// conditions for calling pauseTimer() and timeOut()
			if(trivia.timeRemaining === 0) {
				trivia.pauseTimer();
				trivia.timeOut();
			}
		}, 1000);

	},
	timeOut: function() {
		// calls clearScreen() to remove DOM elements and their data
		trivia.clearScreen();

		// updates scoreboard
		trivia.numUnanswered++;
		trivia.updateScoreboard();		

		// creates an empty div #timeout
		$('#result-space').append(timeOutDiv);

		// displays timeout message
		$('#timeout').html('<strong>Sorry, you are out of time.</strong>');

		trivia.waitForNext();
	},
	pauseTimer: function() {
		// stops the timer where it is at
		clearInterval(timerInterval);
	},
	convertAndDisplayTime: function(t) {
		if (t >= 10 && t < 60) {
			$('#timer').html('Time Remaining: 0:' + t);
		}
		else if  (t >= 0 && t < 10) {
			$('#timer').html('Time Remaining: 0:0' + t);
		}
	},
	startScreen: function() {
		// first clears the screen
		trivia.clearScreen();
		$('#timer').empty(); // clears the timer in case there is any

		// prints startScreen header
		var h = $('<h3>');
		h.text('Choose a category.')
			.appendTo('#menu-space');
		
		// creates a div with data for each category in allCategories
		jQuery.each(allCategories, function(i){
			var newCat = $('<h4>');
			newCat.addClass('category') // adds class for CSS and click event listeners
				.text(allCategories[i].name) // prints the category name
				.attr('id', 'category-' + i) // gives it a unique id 
				.data(allCategories[i].qAry) // data equals the array of questions in that category
				.appendTo('#menu-space'); // appends all this onto menu-space div
		});
		
		// click event listener for choosing the category of trivia questions and sending that
		// data to trivia.startGame()
		$('.category').click(function(){
			var selectedCategory = $(this).data();
			$('#menu-space').empty();
			trivia.startGame(selectedCategory);
		});
	},
	startGame: function(category) {
		// first clears the screen
		trivia.clearScreen();
		$('#timer').empty(); // clears the timer in case there is any

		// deep copies each question in category[] onto .remainingQuestions array property of trivia object. This 
		// ensures that the game can restart properly with no alteration of global data.
		trivia.remainingQuestions = [];
		jQuery.each(category, function(i){
			trivia.remainingQuestions[i] = jQuery.extend(true, {}, category[i]); // deep copy 
		});

		console.log('initial set of questions:', trivia.remainingQuestions);
		
		// sets initial values
		trivia.numCorrect = 0;
		trivia.numIncorrect = 0;
		trivia.numUnanswered = 0;
		trivia.timeRemaining = 0;

		// prints initial scoreboard
		trivia.updateScoreboard();

		// prints startBtn button
		trivia.addButton(startBtn);

		// listens for button click to start the game
		$('#start-btn').click(function(){
			// calls displayQuestion()
			trivia.displayQuestion();
		});
	},
	displayQuestion: function() {
		// calls clearScreen(), removes any DOM elements from the board and their data
		console.log('remainingQuestions:', trivia.remainingQuestions);
		trivia.clearScreen();

		// calls countDown() to start the timer
		trivia.countDown();

		// pulls a random question from remainingQuestions array, saves as new question
		var randInd = Math.floor(Math.random() * trivia.remainingQuestions.length);
		var thisQ = trivia.remainingQuestions[randInd];
		var corAnsw = thisQ.correctAnswer; // stores string of correct answer

		// appends all empty divs related to questions and choices
		$('#question-space').append(qDiv);

		// prints question on DOM and assigns data to it simultaneously
		$('#question-div').html(thisQ.qText).data(thisQ.qText);

		trivia.printMixedUpChoices(thisQ.choices);

		// splices question from remaining questions array
		trivia.remainingQuestions.splice(randInd, 1);

		trivia.getAnswer(corAnsw); // sends string argument with correct answer
	},
	// loops through the choices array and prints them out in a random order wrapped in <ol type"A"><li> DOM tags.
	// I found this approach to be more extensible as it allows me to vary the number of choices for any given
	// question and still be able to mix up the order and bind data to each element with precision.
	printMixedUpChoices: function(choices) {   // takes in a choices array as an argument
		// uniqueId is for creating a unique div id for each choice
		var uniqueId = 1;

		// special for-loop that randomly loops through the array and prints the choices in random order
		for (i = Math.floor(Math.random() * choices.length); // iterator starts as a random choice
			choices.length > 0;  // closing condition is when choices array length equals 0
			i = Math.floor(Math.random() * choices.length))  // pulls another random choice after each iteration
		
		// beginning of for-loop
		{ 
			// sets a unique id for the given choice
			var thisChoiceId = 'choice-' + uniqueId; 

			// appends choice as a <li> child of <ol id="choices-list">
			$('#choices-list').append('<li id="' + thisChoiceId + '">');

			// adds # before id to avoid fighting with quotes later on
			thisChoiceId = '#' + thisChoiceId; 

			// adds class, html, and data to thisChoiceId
			$(thisChoiceId).addClass('choices') // for event listeners later in the game
				.append('<div class="choice-bkg-div">' + choices[i].text + '</div>') // div for CSS styling including hover
				.data(choices[i]); // appends data to the element

			// splices the choice from the array. this ensures the loop doesn't continue forever
			choices.splice(i, 1); 

			// change the uniqueId for the next choice
			uniqueId++; 
		} // end of for-loop
	},
	getAnswer: function(corAnsw) {
		// selector for getting response from user click on the DOM (data stored on DOM already)
		$('.choices').click(function(){
			var userGuess = $(this).data();

			trivia.pauseTimer();

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

		// prints mainMenuBtn button
		trivia.addButton(mainMenuBtn);

		// listens for button click to return to the main menu
		$('#mainmenu-btn').click(function(){
			trivia.startScreen();
		});

	},
	// clears the screen so that the displays can appear to be a new "screen" when they are printed
	clearScreen: function() {
		// removes buttons and its event listener
		$('#start-btn').remove();
		$('#mainmenu-btn').remove();

		// removes DOM elements and their data
		$('#question-div').remove();
		$('#choices-list').remove();
		$('#user-guess').remove();
		$('#correct-answer').remove();
		$('#result').remove();
		$('#game-over').remove();
		$('#timeout').remove();		
	},
	// functionality for setting an interval after a user chooses an answer & deciding which function to call next
	waitForNext: function() {
		// setTimeout timer for 5 seconds before moving to the next screen
		setTimeout(function(){
			// conditions for determining whether to display game over or proceed to the next question
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
}; // end of trivia object declaration

trivia.startScreen(); // calls startScreen() to initialize trivia game!

// ERROR CHECKING: 
	// $(document).keypress(function(e){

	// 	if (e.key === 'q') {
	// 		trivia.pauseTimer();
	// 		trivia.startScreen();
	// 		console.log('questionsAry(global):', questionsAry);			
	// 	} // end of if (e.key === 'q')
	// }); // end of document.keypress

}); // end of Document Ready