// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// Questions and answer key stored as an object for each question 

//  create a function that starts the game with an addeventlistener click on a button

// timer function starts inside function that starts game 

//  inside each question function store property that takes time away for wrong answer

// create right/wrong conditional statement that answers your response, counts your right/wrong questions, and subtracts or leaves alone time

var questionText = document.querySelector("#game-question")
var gameStarter = document.querySelector("#gameStarter");
var button1 = document.querySelector("#button-1");
var button2 = document.querySelector("#button-2");
var button3 = document.querySelector("#button-3");
var button4 = document.querySelector("#button-4");
var ans = document.querySelector('#ans');
;




// Display Object strings on buttons




var questionKey1 = {
    A: 'The Force',
    B: 'The Way',
    C: 'The Holy Spirit', 
    D: 'Duralock',
    Q: 'In Star Wars, what do they call the invisible power that binds the galaxy together?',
};

var questionKey2 = {
    A: 'Jedi',
    B:'Wookies',
    C:'Bothans',
    D: 'Clones',
    Q:'What species stole the plans to the Death Star?',
};

var questionKey3 = {
    A: 'Yoda',
    B: 'Syfo Dyas',
    C: 'Mace Windu',
    D: 'Luke SKywalker',
    Q: 'Who was the Jedi master that ordered to create clones?',
};

var questionKey4 = {
    A: 'Twilek',
    B: 'Hutt',
    C: 'Mon Calamari',
    D: 'Son Malamari',
    Q: ' What alien race does Admiral Ackbar belong to?',
};

var questionKey5 = {
    A: 'Call of the Wild',
    B: 'Ancient Steel',
    C: 'Clone Trooper',
    D: 'Mandalorian',
    Q: 'What is the battle armor used by Boba Fett?',
};

var questionKey6 = {
    A: 'Megaannom cruiser',
    B: 'Millenium Falcon',
    C: 'Aluminium Eagle', 
    D: 'Hans Solo', 
    Q: 'What is the name of Han Solo’s ship?',
};

var questionKey7 = {
    A: 'George Lucas',
    B: 'George R.R. Martin',
    C: 'J. R. R. Tolkien', 
    D: 'Gene Roddenberry',
    Q: 'Who is the creator of Star Wars?',
};

var questionKey8 = {
    A: 'Coruscant',
    B: 'Tatooine',
    C: 'Hoth', 
    D: 'Kashyyyk',
    Q: 'Where did Obi-Wan take Luke after his birth?',
};

var questionKey9 = {
    A: '1982',
    B: '1980',
    C: '1996', 
    D: '1977',
    Q: 'What year did the first Star Wars movie come out?',
};

var questionKey10 = {
    A: 'Darth Sidious',
    B: 'Darth vader',
    C: 'Anakin Skywalker', 
    D: 'Count Duko',
    Q: 'Who killed Mace Windu?',
};


















// This appends object children to html buttons Q1
gameStarter.addEventListener('click', function(){
    button1.append(questionKey1.A);
    button2.append(questionKey1.B);
    button3.append(questionKey1.C);
    button4.append(questionKey1.D);
    questionText.append(questionKey1.Q)
})

// // This appends object children to html buttons Q2
// gameStarter.addEventListener('click', function(){
//     button1.append(questionKey2.A);
//     button3.append(questionKey2.C);
//     button4.append(questionKey2.D);
//     button2.append(questionKey2.B);
//     questionText.append(questionKey2.Q)
// })

// // This appends object children to html buttons Q3
// gameStarter.addEventListener('click', function(){
//     button1.append(questionKey3.A);
//     button2.append(questionKey3.B);
//     button3.append(questionKey3.C);
//     button4.append(questionKey3.D);
//     questionText.append(questionKey3.Q)
// })

// // This appends object children to html buttons Q4
// gameStarter.addEventListener('click', function(){
//     button1.append(questionKey4.A);
//     button2.append(questionKey4.B);
//     button3.append(questionKey4.C);
//     button4.append(questionKey4.D);
//     questionText.append(questionKey4.Q)
// })

// // This appends object children to html buttons Q5
// gameStarter.addEventListener('click', function(){
//     button1.append(questionKey5.A);
//     button2.append(questionKey5.B);
//     button3.append(questionKey5.C);
//     button4.append(questionKey5.D);
//     questionText.append(questio0nKey5.Q)
// })

// // This appends object children to html buttons Q6
// gameStarter.addEventListener('click', function(){
//     button1.append(questionKey6.A);
//     button2.append(questionKey6.B);
//     button3.append(questionKey6.C);
//     button4.append(questionKey6.D);
//     questionText.append(questionKey6.Q)
// })

// // This appends object children to html buttons Q7
// gameStarter.addEventListener('click', function(){
//     button1.append(questionKey7.A);
//     button2.append(questionKey7.B);
//     button3.append(questionKey7.C);
//     button4.append(questionKey7.D);
//     questionText.append(questionKey7.Q)
// })

// // This appends object children to html buttons Q8
// gameStarter.addEventListener('click', function(){
//     button1.append(questionKey8.A);
//     button2.append(questionKey8.B);
//     button3.append(questionKey8.C);
//     button4.append(questionKey8.D);
//     questionText.append(questionKey8.Q)
// })

// // This appends object children to html buttons Q9
// gameStarter.addEventListener('click', function(){
//     button1.append(questionKey9.A);
//     button2.append(questionKey9.B);
//     button3.append(questionKey9.C);
//     button4.append(questionKey9.D);
//     questionText.append(questionKey9.Q)
// })

// // This appends object children to html buttons Q10
// gameStarter.addEventListener('click', function(){
//     button1.append(questionKey10.A);
//     button2.append(questionKey10.B);
//     button3.append(questionKey10.C);
//     button4.append(questionKey10.D);
//     questionText.append(questionKey10.Q);
// })
 

//  Object  QUESTION 6
//  Object  QUESTION 7
//  Object  QUESTION 8