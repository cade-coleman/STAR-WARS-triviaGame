


// HTML buttons and tags
let questionText = document.getElementById("game-question")
let gameStarter = document.querySelector("#gameStarter");
let timer = document.getElementById('timer');
let screenStart = document.getElementsByClassName('.start-screen');
let gameScreen = document.getElementsByClassName('gameScreen');
let saberButtons = document.getElementById('#saberButtons');
let gameScore = document.getElementById('score');
let button1 = document.querySelector("#button-1");
let button2 = document.querySelector("#button-2");
let button3 = document.querySelector("#button-3");
let button4 = document.querySelector("#button-4");
let timeInterval
let timeLeft = 45;
let qCounter = 0;
let score = 0;
let qaContainerEl = document.getElementById('qaContainer');
let submitScoreEl = document.getElementById('submitScore');
let highScore = JSON.parse(localStorage.getItem('highScore')) || [];
let topFive = document.querySelector('.top-five-scores');





let questionKey1 = {
  answer: 'The Force',
  choices: ['The Force', 'The Way', 'The Holy Spirit', 'Duralock'],
  question: 'In Star Wars, what do they call the invisible power that binds the galaxy together?',
};
let questionKey2 = {
  answer: 'Bothans',
  choices: ['Wookies', 'Jedi','Bothans','Clones'],
  question: 'What species stole the plans to the Death Star?',
};
let questionKey3 = {

  answer: 'Syfo Dyas',
  choices: ['Yoda', 'Mace Windu', 'Luke Skywalker', 'Syfo Dyas'],
  question: 'Who was the Jedi master that ordered to create clones?',
};
let questionKey4 = {
  answer: 'Mon Calamari',
  choices: ['Hutt', 'Jedi', 'Son Malamari', 'Mon Calamari'],
  question: ' What alien race does Admiral Ackbar belong to?',
};
let questionKey5 = {
  answer: 'Mandalorian',
  choices: ['Mandalorian','Call of the Wild', 'Delorean', 'Clone Trooper'],
  question: 'What is the battle armor used by Boba Fett?',
};
let questionKey6 = {
  answer: 'Millenium Falcon',
  choices: ['Megaannom cruiser', 'Millenium Falcon', 'Aluminium Eagle', 'Hans Solo',],
  question: 'What is the name of Han Solo’s ship?',
};
let questionKey7 = {
  answer: 'George Lucas',
  choices: ['George Lucas', 'George R.R. Martin', 'J. R. R. Tolkien', 'Gene Roddenberry',],
  question: 'Who is the creator of Star Wars?',
};
let questionKey8 = {
  answer: 'Tatooine',
  choices: ['Coruscant', 'Tatooine', 'Hoth', 'Kashyyyk'],
  question: 'Where did Obi-Wan take Luke after his birth?',
};
let questionKey9 = {
  answer: '1977',
  choices: ['1982', '1980', '1996', '1977'],
  questions: 'What year did the first Star Wars movie come out?',
};
let questionKey10 = {
  answer: 'Darth Sidious',
  choices: ['Darth Sidious', 'Darth vader', 'Anakin Skywalker', 'Count Duko'],
  question: 'Who killed Mace Windu?',
};



// This button starts the game using an addEventListener
gameStarter.addEventListener('click', function () {
  displayQ();
  countdown();

})



let questionArray = [questionKey1, questionKey2, questionKey3, questionKey4, questionKey5, questionKey6, questionKey7, questionKey8, questionKey9, questionKey10];
console.log(questionArray);



// Changes texts on buttons
function displayQ() {

  questionText.textContent = questionArray[qCounter].question
  button1.textContent = questionArray[qCounter].choices[0]
  button2.textContent = questionArray[qCounter].choices[1]
  button3.textContent = questionArray[qCounter].choices[2]
  button4.textContent = questionArray[qCounter].choices[3]
}



// Timer that counts down from 5
function countdown() {

  qaContainerEl.classList.remove('hidden');
  questionText.classList.remove('hidden');


  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
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

      // this will dynamically change the screen to the score board
      showScore();
    }
  }, 1000);
}


function showScore() {
  gameScore.textContent = ('Your score is ' + score);
  timer.textContent = 'Game Over';

  // Use `clearInterval()` to stop the timer
  clearInterval(timeInterval);
  questionText.classList.add('hidden');
  qaContainerEl.classList.add('hidden');
  submitScoreEl.classList.remove('hidden');

}

function handleScore(event) {
  if (event.target.matches('button')) {

    let initials = event.target.previousElementSibling.value;
    let tempObject = {
      initials,
      score,
    }
    highScore.push(tempObject)
    localStorage.setItem('highScore', JSON.stringify(highScore))
    renderTopScores();
  }
}

function renderTopScores() {
  topFive.classList.remove('hidden')
  submitScoreEl.classList.add('hidden');

  topFive.innerHTML = '';
  for (let i = 0; i < highScore.length; i++) {
    let p = document.createElement('p')
    p.textContent = 'initials: ' + highScore[i].initials + ' score: ' + highScore[i].score;
    topFive.append(p);
  }

}

// Function to check the correct answer 
function checkAnswer(event) {

  console.log(event);
  //  Reads the name of the item clicked
  let ansClick = event.target.textContent;
  let correctAnswer = questionArray[qCounter].answer;
  if (ansClick === correctAnswer) {

    //subtract time
    qCounter = qCounter + 1;
    score = score + 10;
    console.log('true');
    console.log(score)

  } else {
    timeLeft = timeLeft - 5;
    qCounter = qCounter + 1;
    console.log('false');
    console.log(score);

  }
  console.log(qCounter);
  console.log(questionArray.length);
  if (qCounter + 1 > questionArray.length) {
    showScore();
  } else {
    displayQ();
  }
}



submitScoreEl.addEventListener('click', handleScore)

button1.addEventListener('click', checkAnswer);
button2.addEventListener('click', checkAnswer);
button3.addEventListener('click', checkAnswer);
button4.addEventListener('click', checkAnswer);








