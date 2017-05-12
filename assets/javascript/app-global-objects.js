// ******************************************** GLOBAL OBJECTS ********************************************

/*
	SUMMARY
		A) Questions are objects of type questionObj(), an object constructor
			3 Properties:
				1) qtext --> question text
				2) choices --> an array of the multiple choice answers
					*each choice is an object with properties: .text and .veracity 
				3) correctAnswer --> a string with the correct answer text for display purposes
		B) Categories are objects of type categoryObj, an object constructor
			2 properties:
				1) name --> the name of the category, displayed in the start menu
				2) qAry --> an array of question objects

	TABLE OF CONTENTS FOR THIS PAGE:
		I.   Object Constructor Functions
			   a. questionObj()
			   b. categoryObj()
		II.  Question object declarations
			   a. divided by categories, pushed onto the question array corresponding to their category
		III. Category object declarations
			   a. pushes each category object onto allCategories[] array
*/ 

/* =============== I. OBJECT CONSTRUCTORS =============== */

// FUNCTION CONSTRUCTOR FOR QUESTION OBJECTS
function questionObj (qText, choices, correctAnswer) {
	this.qText = qText;
	this.choices = choices;  // array of objects, properties text and veracity
	this.correctAnswer = correctAnswer;
}

// FUNCTION CONSTRUCTOR FOR CATEGORY OBJECTS

function categoryObj (name, qAry) {
	this.name = name;
	this.qAry = qAry;
}


/* =========== II. QUESTION OBJECT DECLARATIONS =========== */

// BIOLOGY CATEGORY QUESTIONS - push onto biologyQAry[]

var dinosaursQ = new questionObj (
	'Which of the following is NOT a period in which the dinosaurs were alive?', //.qtext property
	[{text: 'Jurassic Period', veracity: false}, // each choice has two properties. false = wrong answer
	{text: 'Triassic Period', veracity: false}, 
	{text: 'Cretaceous Period', veracity: false}, 
	{text: 'Quaternary Period', veracity: true}],
	'Quaternary Period'); //correct answer

var reptilesQ = new questionObj (
	'Which of the following is not a reptile?',
	[{text: 'lizard', veracity: false}, 
	{text: 'salamander', veracity: true}, 
	{text: 'sea turtle', veracity: false}, 
	{text: 'komodo dragon', veracity: false},
	{text: 'snake', veracity: false}],
	'salamander'); //correct answer

var biologyQAry = [];
biologyQAry.push(dinosaursQ, reptilesQ);


// UNIVERSE CATEGORY QUESTIONS - push onto universeQAry[]

var constellationQ = new questionObj (
	'Which of the following is NOT the name of a constellation?',
	[{text: 'Andromeda', veracity: false}, 
	{text: 'Cancer', veracity: false}, 
	{text: 'Polaris', veracity: true}, 
	{text: 'Cetus', veracity: false}],
	'Polaris'); //correct answer

var universeQ = new questionObj (
	'Which of the following is generally accepted by the scientific community to be the age of the universe?',
	[{text: 'About 13.8 billion years old.', veracity: true}, 
	{text: 'About 7.1 trillion years old.', veracity: false}, 
	{text: 'About 605 million years old.', veracity: false},
	{text: '42.', veracity: false}, 
	{text: 'None of these. The scientific community has not even tried to calculate it.', veracity: false}],
	'About 13.8 billion years old.'); //correct answer

var universeQAry = [];
universeQAry.push(constellationQ, universeQ);


// GEOGRAPHY CATEGORY QUESTIONS - push onto geographyQAry[]

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

var geographyQAry = [];
geographyQAry.push(europeQ, volcanoesQ);


// HISTORY CATEGORY QUESTIONS - push onto historyQAry[]

var alexandriaQ = new questionObj (
	'Where was the Library of Alexandria located?',
	[{text: 'Egypt', veracity: true}, 
	{text: 'Rome', veracity: false}, 
	{text: 'Greece', veracity: false}, 
	{text: "What's a library?", veracity: false}],
	'Egypt'); //correct answer

var presidentsQ = new questionObj (
	'Which commanding general of the Union Army served as the 18th US president and led the efforts for post-Civil-War Reconstruction?',
	[{text: 'Robert E. Lee', veracity: false}, 
	{text: 'Andrew Johnson', veracity: false}, 
	{text: 'Ulysses S. Grant', veracity: true}, 
	{text: 'Jake Weary', veracity: false}],
	'Ulysses S. Grant'); //correct answer

var historyQAry = [];
historyQAry.push(alexandriaQ, presidentsQ);


// MATH CATEGORY QUESTIONS - push onto mathQAry[]

var sinQ = new questionObj (
	'What is sin(30 degrees)?',
	[{text: 'square root of 2', veracity: false}, 
	{text: 'square root of 3', veracity: false}, 
	{text: '1/2', veracity: true}, 
	{text: 'This question has baffled mathematicians for centuries...', veracity: false}],
	'1/2'); //correct answer

var mathQAry = [];
mathQAry.push(sinQ);


/* =========== III. CATEGORY OBJECT DECLARATIONS =========== */

// Declare each category as an object of type categoryObj()
var biologyCategory = new categoryObj('Biology', biologyQAry);
var universeCategory = new categoryObj('The Universe', universeQAry);
var geographyCategory = new categoryObj('Geography', geographyQAry);
var historyCategory = new categoryObj('History', historyQAry);
var mathCategory = new categoryObj('Mathematics', mathQAry);


// Declare the allCategories[] array which will hold all the category objects
var allCategories = [];

// Push each category onto allCategories
allCategories.push(biologyCategory);
allCategories.push(universeCategory);
allCategories.push(geographyCategory);
allCategories.push(historyCategory);
allCategories.push(mathCategory);