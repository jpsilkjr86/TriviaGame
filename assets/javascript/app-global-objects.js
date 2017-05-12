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
	'Which commanding general of the Union Army served as the 18th US president and led the efforts for post-Civil-War Reconstruction?',
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