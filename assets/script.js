// Questions and answer key stored as an object for each question 

//  create a function that starts the game with an addeventlistener click on a button

// timer function starts inside function that starts game 

//  inside each question function store property that takes time away for wrong answer

// create right/wrong conditional statement that answers your response, counts your right/wrong questions, and subtracts or leaves alone time



// HTML buttons and tags
var questionText = document.querySelector("#game-question")
var gameStarter = document.querySelector("#gameStarter");
var button1 = document.querySelector("#button-1");
var button2 = document.querySelector("#button-2");
var button3 = document.querySelector("#button-3");
var button4 = document.querySelector("#button-4");
var score = document.getElementById('score');
var timer = document.getElementById('timer');
var screenStart = document.getElementsByClassName('.start-screen');
var gameScreen = document.getElementsByClassName('gameScreen');
 var timeLeft = 45;
// 
var qCounter = 0;

// score that is to be displayed at the end of the game


var score = 0;



// Objects with questions and answers
var questionKey1 = {
    answer: 'The Force',
    choices: ['The Force', 'The Way','The Holy Spirit','Duralock'],
    question: 'In Star Wars, what do they call the invisible power that binds the galaxy together?',
};

var questionKey2 = {
    answer: 'Bothans',
    choices: ['Wookies', 'Jedi','Clones', 'Bothans'],
    question: 'What species stole the plans to the Death Star?',
};

var questionKey3 = {

    Answer:'Syfo Dyas',
    Choices: ['Yoda','Mace Windu','Luke SKywalker','Syfo Day'],
    Question:'Who was the Jedi master that ordered to create clones?',
};

var questionKey4 = {
    answer: 'Mon Calamari',
    choices: ['Hutt','Jedi','Son Malamari','Mon Calamari'],
    question: ' What alien race does Admiral Ackbar belong to?',
};

var questionKey5 = {
    answer: 'Mandalorian',
    choices: ['Call of the Wild', 'Delorean', 'Clone Trooper','Mandalorian',],
    question: 'What is the battle armor used by Boba Fett?',
};

var questionKey6 = {
    answer: 'Millenium Falcon',
    choices: ['Megaannom cruiser','Millenium Falcon','Aluminium Eagle', 'Hans Solo',], 
    question: 'What is the name of Han Solo’s ship?',
};

var questionKey7 = {
    answer: 'George Lucas',
     choices: ['George Lucas', 'George R.R. Martin','J. R. R. Tolkien', 'Gene Roddenberry',],
    question: 'Who is the creator of Star Wars?',
};

var questionKey8 = {
    answer: 'Tatooine',
    choices: ['Coruscant','Tatooine', 'Hoth', 'Kashyyyk'],
    question: 'Where did Obi-Wan take Luke after his birth?',
};

var questionKey9 = {
    answer: '1977',
    choices: ['1982', '1980','1996', '1977'],
    questions: 'What year did the first Star Wars movie come out?',
};

var questionKey10 = {
    answer: 'Darth Sidious',
    choices: ['Darth Sidious','Darth vader','Anakin Skywalker','Count Duko'],
    question: 'Who killed Mace Windu?',
};



var questionArray = [questionKey1,questionKey2,questionKey3, questionKey4, questionKey5, questionKey6, questionKey7,questionKey8, questionKey9, questionKey10];
console.log(questionArray);

 


// Timer that counts down from 5
function countdown() {
   

    
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timer` to show the remaining seconds
        timer.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timer.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timer` to an empty string
        timer.textContent = 'Game Over';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // this will dynamically change the screen to the score board
        showScore();
      }
    }, 1000);
}


  function showScore(){
    var newDiv = document.createElement("div");
    newDiv.textContent('Your score is ' + score);
  }



// Function to check the correct answer 
function checkAnswer(event){
    console.log(event);
    //  Reads the name of the item clicked
    var ansClick = event.target.textContent;
    var correctAnswer = questionArray[qCounter].answer; 
    if(ansClick === correctAnswer){

    //subtract time
    console.log("yes");
    qCounter++;
    score = score + 10;
 
    displayQ();
}else{
  
    qCounter++;
    timeLeft = timeLeft - 5;
    displayQ();
}}






// Changes texts on buttons
function displayQ(){
    button1.textContent = questionArray[qCounter].choices[0];
    button2.textContent = questionArray[qCounter].choices[1];
    button3.textContent = questionArray[qCounter].choices[2];
    button4.textContent = questionArray[qCounter].choices[3];

  
    questionText.textContent = questionArray[qCounter].question;    
    
}


// This button starts the game using an addEventListener
gameStarter.addEventListener('click', function(){
    displayQ();
    countdown();


})

//  This adds functionality to the buttons.
button1.addEventListener('click', checkAnswer)
button2.addEventListener('click', checkAnswer)
button3.addEventListener('click', checkAnswer)
button4.addEventListener('click', checkAnswer)
 
