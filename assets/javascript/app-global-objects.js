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

var organismQ = new questionObj (
	'Which of the following is not an organism?<br/>(Hint: An organism must have at least one cell.)',
	[{text: 'fungus', veracity: false}, 
	{text: 'bacteria', veracity: false}, 
	{text: 'virus', veracity: true}, 
	{text: 'algae', veracity: false}],
	'virus'); //correct answer

var mammalsQ = new questionObj (
	'Which of the following is a defining characteristic of a mammal?',
	[{text: 'lay eggs', veracity: false}, 
	{text: 'females give milk to their young', veracity: true}, 
	{text: 'undergo metamorphosis from egg to larva to adult', veracity: false}, 
	{text: 'have gills', veracity: false}],
	'females give milk to their young'); //correct answer

var dnaQ = new questionObj (
	'Which of the following best describes what DNA is?',
	[{text: 'a molecule with genetic instructions', veracity: true}, 
	{text: 'the smallest unit of life', veracity: false}, 
	{text: 'everything you can see, hear, taste, smell, or touch', veracity: false}, 
	{text: 'carries oxygen to different parts of our bodies', veracity: false}],
	'a molecule with genetic instructions'); //correct answer

var authorQ = new questionObj (
	'Who is the author of "On the Origin of Species"?',
	[{text: 'Sigmund Freud', veracity: false}, 
	{text: 'Isaac Newton', veracity: false}, 
	{text: 'Albert Einstein', veracity: false}, 
	{text: 'Jake Weary', veracity: false},
	{text: 'Charles Darwin', veracity: true}],
	'Charles Darwin'); //correct answer

var batsQ = new questionObj (
	'Which of the following statements about bats is true?',
	[{text: 'Bats navigate via echolocation.', veracity: true}, 
	{text: 'Bats are birds.', veracity: false}, 
	{text: 'Bats are not mammals.', veracity: false}, 
	{text: 'Bats see primarily with their eyes.', veracity: false}],
	'Bats navigate via echolocation.'); //correct answer

var biologyQAry = [];
biologyQAry.push(dinosaursQ, reptilesQ, organismQ, mammalsQ, dnaQ, authorQ, batsQ);


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

var starsQ = new questionObj (
	'Which of the following is not a kind of star?',
	[{text: 'Red dwarf', veracity: false}, 
	{text: 'Neutron star', veracity: false}, 
	{text: 'Blue giant', veracity: false},
	{text: 'Wooly mammoth', veracity: true}, 
	{text: 'Supergiant', veracity: false}],
	'Wooly mammoth'); //correct answer

var lightQ = new questionObj (
	'According to Einstein, the speed of light is:',
	[{text: 'Relative to the observer', veracity: false}, 
	{text: 'A universal constant', veracity: true}, 
	{text: 'Always changing', veracity: false},
	{text: 'Unable to be determined', veracity: false}],
	'A universal constant'); //correct answer

var forceQ = new questionObj (
	'Which of the following is an example of a kind of force?',
	[{text: 'Velocity', veracity: false}, 
	{text: 'Acceleration', veracity: false}, 
	{text: 'Mass', veracity: false},
	{text: 'Gravity', veracity: true},
	{text: 'Potential energy', veracity: false}],
	'Gravity'); //correct answer

var planetQ = new questionObj (
	'Which of these is the fifth planet from the sun?',
	[{text: 'Saturn', veracity: false}, 
	{text: 'Venus', veracity: false}, 
	{text: 'Earth', veracity: false},
	{text: 'Mars', veracity: false},
	{text: 'Jupiter', veracity: true}],
	'Jupiter'); //correct answer

var brightestQ = new questionObj (
	"What is the brightest object in Earth's sky?",
	[{text: 'Sirius', veracity: false}, 
	{text: 'Betelgeuse', veracity: false}, 
	{text: 'The Sun', veracity: true},
	{text: 'The Moon', veracity: false},
	{text: 'Jupiter', veracity: false}],
	'The Sun'); //correct answer

var auQ = new questionObj (
	"What is the value of one astronomical unit?",
	[{text: 'The mean distance between the Earth and the Sun', veracity: true}, 
	{text: 'The mean distance between the Earth and the Moon', veracity: false}, 
	{text: 'The distance traveled by light after one year', veracity: false},
	{text: '1,000 miles', veracity: false}],
	'The mean distance between the Earth and the Sun'); //correct answer

var universeQAry = [];
universeQAry.push(constellationQ, universeQ, starsQ, lightQ, forceQ, planetQ, brightestQ, auQ);


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

var continentQ = new questionObj (
	'After Eurasia, which of these is the largest continent?',
	[{text: 'North America', veracity: false}, 
	{text: 'South America', veracity: false}, 
	{text: 'Antarctica', veracity: false}, 
	{text: 'Australia', veracity: false},
	{text: 'Africa', veracity: true}],
	'Africa'); //correct answer

var landlockedQ = new questionObj (
	'Which of these countries is landlocked?',
	[{text: 'India', veracity: false}, 
	{text: 'Thailand', veracity: false}, 
	{text: 'Somalia', veracity: false}, 
	{text: 'Afghanistan', veracity: true},
	{text: 'Chile', veracity: false}],
	'Afghanistan'); //correct answer

var germanyQ = new questionObj (
	'What is the capital of Germany?',
	[{text: 'Berlin', veracity: true}, 
	{text: 'Hamburg', veracity: false}, 
	{text: 'Frankfurt', veracity: false}, 
	{text: 'Vienna', veracity: false},
	{text: 'Deutschland', veracity: false}],
	'Berlin'); //correct answer

var islandQ = new questionObj (
	'Which of these is not an island?',
	[{text: 'Madagascar', veracity: false}, 
	{text: 'Taiwan', veracity: false}, 
	{text: 'Cuba', veracity: false}, 
	{text: 'Ireland', veracity: false},
	{text: 'Vietnam', veracity: true}],
	'Vietnam'); //correct answer

var pakistanQ = new questionObj (
	'What is the national language of Pakistan?',
	[{text: 'Arabic', veracity: false}, 
	{text: 'Farsi', veracity: false}, 
	{text: 'Urdu', veracity: true}, 
	{text: 'Sanskrit', veracity: false},
	{text: 'Swahili', veracity: false}],
	'Urdu'); //correct answer

var geographyQAry = [];
geographyQAry.push(europeQ, volcanoesQ, continentQ, landlockedQ, germanyQ, islandQ, pakistanQ);


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

var dynastyQ = new questionObj (
	'Which of these was the last Chinese dynasty?',
	[{text: 'Ming Dynasty', veracity: false}, 
	{text: 'Tang Dynasty', veracity: false}, 
	{text: 'Han Dynasty', veracity: false}, 
	{text: 'Qing Dynasty', veracity: true}],
	'Qing Dynasty'); //correct answer

var japanQ = new questionObj (
	'What is the term for a Japanese military dictator between the 12th to 19th centuries?',
	[{text: 'Samurai', veracity: false}, 
	{text: 'Emperor', veracity: false}, 
	{text: 'Ninja', veracity: false}, 
	{text: 'Shogun', veracity: true},
	{text: 'Totoro', veracity: false}],
	'Shogun'); //correct answer

var causeOfDeathsQ = new questionObj (
	"What is of these is estimated to have caused the deaths of 30%-60% of Europe's population during the 14th century?",
	[{text: "Hundred Years' War", veracity: false}, 
	{text: "Second Hundred Years' War", veracity: false}, 
	{text: "The Black Death", veracity: true}, 
	{text: "The First Zombie Apocalypse", veracity: false},
	{text: "The Crusades", veracity: false}],
	"The Black Death"); //correct answer

var civilizationQ = new questionObj (
	'Which of these civilizations came first?',
	[{text: 'Mesopotamia', veracity: true}, 
	{text: 'Ancient Greece', veracity: false}, 
	{text: 'Ancient Rome', veracity: false}, 
	{text: 'Ancient Israel', veracity: false},
	{text: 'Aztec Civilization', veracity: false}],
	'Mesopotamia'); //correct answer

var classStruggleQ = new questionObj (
	'Who is the author of the quote, "The history of all hitherto existing society is the history of class struggles"?',
	[{text: 'John Locke', veracity: false}, 
	{text: 'Adam Smith', veracity: false},
	{text: 'Karl Marx', veracity: true}, 
	{text: 'Machiavelli', veracity: false},
	{text: 'Jake Weary', veracity: false}],
	'Karl Marx'); //correct answer

var historyQAry = [];
historyQAry.push(alexandriaQ, presidentsQ, dynastyQ, japanQ, causeOfDeathsQ, civilizationQ, classStruggleQ);


// MATH CATEGORY QUESTIONS - push onto mathQAry[]

var sinQ = new questionObj (
	'What is sin(30 degrees)?',
	[{text: 'square root of 2', veracity: false}, 
	{text: 'square root of 3', veracity: false}, 
	{text: '1/2', veracity: true}, 
	{text: 'This question has baffled mathematicians for centuries...', veracity: false}],
	'1/2'); //correct answer

var angleQ = new questionObj (
	'What is these is not a type of angle?',
	[{text: 'Right angle', veracity: false}, 
	{text: 'Acute angle', veracity: false}, 
	{text: 'Obtuse angle', veracity: false}, 
	{text: 'Alt-right angle', veracity: true}],
	'Alt-right angle'); //correct answer

var primeQ = new questionObj (
	'Which of the following is a prime number?',
	[{text: '58', veracity: false}, 
	{text: '63', veracity: false}, 
	{text: '77', veracity: false}, 
	{text: '91', veracity: false},
	{text: '47', veracity: true}],
	'47'); //correct answer

var sequenceQ = new questionObj (
	'Complete the sequence: 2,  4,  8,  16,  ?',
	[{text: '64', veracity: false}, 
	{text: '24', veracity: false}, 
	{text: '30', veracity: false}, 
	{text: '32', veracity: true},
	{text: '128', veracity: false}],
	'32'); //correct answer

var algebraQ = new questionObj (
	'Solve for x:<br/>2x + 17 = 33 + x',
	[{text: '8', veracity: false}, 
	{text: '16', veracity: true}, 
	{text: '4', veracity: false}, 
	{text: '20', veracity: false},
	{text: '9', veracity: false}],
	'16'); //correct answer

var trigQ = new questionObj (
	'Which of these statements about triangles is false?',
	[{text: 'For all triangles, a^2 + b^2 = c^2', veracity: true}, 
	{text: 'All angles must add up to 180 degrees.', veracity: false}, 
	{text: 'tan(x) = sin(x) / cos(x)', veracity: false}, 
	{text: 'cos(x) = 1 / sec(x)', veracity: false}],
	'For all triangles, a^2 + b^2 = c^2.<br/>(Remember, the Pythagorean Theorem only applies to right triangles!'); //correct answer

var hardSequenceQ = new questionObj (
	'Complete the sequence: 1, 5, 7, 3, 9, ?, 3, 7, 5, 1',
	[{text: '10', veracity: false}, 
	{text: '0', veracity: false}, 
	{text: '5', veracity: false}, 
	{text: '9', veracity: true},
	{text: '7', veracity: false}],
	'9 - (The sequence is symmetrical!)'); //correct answer


var mathQAry = [];
mathQAry.push(sinQ, angleQ, primeQ, sequenceQ, algebraQ, trigQ, hardSequenceQ);


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