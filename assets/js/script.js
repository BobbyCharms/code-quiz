// DEPENDENCIES
// the questions and answers for the quiz
let questions = [
    {
        q: "In the UK, the abbreviation NHS stands for National what Service?",
        a: [
            "1. Humanity",
            "2. Health",
            "3. Honour",
            "4. Household",
        ],
        ca: "2. Health",
    },    
    {
        q: "Which Disney character famously leaves a glass slipper behind at a royal ball?",
        a: [
            "1. Pocahontas",
            "2. Sleeping Beauty",
            "3. Cinderella",
            "4. Elsa",
        ],
        ca: "3. Cinderella",
    },     
    {
        q: "What does the word loquacious mean?",
        a: [
            "1. Angry",
            "2. Chatty",
            "3. Beautiful",
            "4. Shy",
        ],
        ca: "2. Chatty",
    },     
    {
        q: "Which of these religious observances lasts for the shortest period of time during the calendar year?",
        a: [
            "1. Ramadan",
            "2. Diwali",
            "3. Lent",
            "4. Hanukkah",
        ],
        ca: "2. Diwali",
    },
]
// used to initialize the game 
let startButton = document.querySelector("#start");
// used to count down after game start and record the score
let timeLeftEl = document.querySelector("#timeLeft");
// used as the welcome message for the game 
let startDiv = document.querySelector("#startDiv");
// used to populate the questions div
let questionsDiv = document.querySelector("#questions");
// used to populate the question itself
let questionTitle = document.querySelector("#questionTitle");
// used to populate the answers to the questions
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");
// used to populate whether the selected answer is right or wrong 
let rightWrong = document.querySelector("#rightWrong");
// used when the game is over at the end screen needs to appear 
let endScreen =  document.querySelector("#endScreen");
// used to capture the information input into the initials field 
let initials = document.querySelector("#initials")
// used as the timer
let timerID; 
// start time of the timer
let timeLeft = 120;
// used as the container for the timer
let timerDiv = document.querySelector("#timer");
// used to start the question set at zero
let currentIndex = 0;
// used to populate the next question in the index 
let currentQuestion;

// FUNCTIONS
// starts the timer from the 120 mark 
function oneSecondHandler() {
    timeLeft--;
    timeLeftEl.textContent = timeLeft;
    if (timeLeft <= 0) {
        endGame();
    }
}

// shows the first question and then the next question as it loops through 
function showQuestion() {
    currentQuestion = questions[currentIndex];
    questionTitle.textContent = currentQuestion.q;
    answer1.textContent = currentQuestion.a[0];
    answer2.textContent = currentQuestion.a[1];
    answer3.textContent = currentQuestion.a[2];
    answer4.textContent = currentQuestion.a[3];
    answer1.onclick = handleAnswer;
    answer2.onclick = handleAnswer;
    answer3.onclick = handleAnswer;
    answer4.onclick = handleAnswer;
}

// handles the answer input from each question 
function handleAnswer(event) {
    // targets the buttons as the event to run the conditional 
    let button = event.target;
    // if  the answer is incorrect, shows Wrong and deducts 15 seconds 
    if (button.textContent !== currentQuestion.ca) {
      rightWrong.textContent = "Wrong.";
      timeLeft -= 15;
      // ensures that the timer stays at 0 instead of going below 0
      if (timeLeft < 0) {
        timeLeft = 0;
      }
      timeLeftEl.textContent = timeLeft;
    } else {
      rightWrong.textContent = "Right!";
    }
    // makes the right/wrong div visible
    rightWrong.removeAttribute("class");
    // sets the visibility timeout to 1 second 
    setTimeout(function() {
      rightWrong.setAttribute("class", "hide");
    }, 700);
    // advances the index to the next one, the next question
    currentIndex++;
    // checks if the timer is 0 or if the questions set has run out 
    if (timeLeft <= 0 || currentIndex === questions.length) {
        // if timer is 0 the run the end game function 
      endGame();
    } else {
        // if timer isn't 0 and there are questions left, then advance to the next questions
      showQuestion();
    }
}

// function runs when the game is over 
function endGame() {
    // stops the timer from counting down 
    clearInterval(timerID);
    // hides the question div
    questionsDiv.setAttribute("class", "hide");
    // shows the end screen div 
    endScreen.removeAttribute("class") 
    // calls the highScore function to run
    highScore();
    let playAgain = confirm("Would you like to play again?"); 
    if (playAgain) {
        currentIndex = 0;
        timeLeft = 120;
        startDiv.removeAttribute("class");
        questionsDiv.setAttribute("class", "hide");
        timerDiv.setAttribute("class", "hide");z
    }
}

function highScore(event) {
    // prevents the default behavior 
    event.preventDefault();
    // takes the input from the initials form and puts it in a variable 
    let initialsInput = initials.value.toUpperCase();   
    // holds the time remaining as the new score 
    let score = timeLeft;
    let newScore = {
        score: timeLeft,
        initialsInput: initialsInput
    }
    // creates an array to store high scores if there's no array containing high scores already 
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    // adds the initals input variable and the score variable to the highScores array 
    highScores.push(newScore);
    // stores high score in the local storage 
    window.localStorage.setItem("highScores", JSON.stringify(highScores));
}
  
// USER INTERACTIONS 
// kicks off teh game when start is pressed 
function startGame() {
    console.log("Game Started");
    // countdown timer at 120 seconds starts 
    timerID = setInterval(oneSecondHandler, 1000);
    // ensures the timer updates on the page
    timeLeftEl.textContent = timeLeft;
    // hides the welcome screen div
    startDiv.setAttribute("class", "hide");
    // unhides the question div 
    questionsDiv.removeAttribute("class");
    // unhides the timer element so it's shown on the page 
    timerDiv.removeAttribute("class");
    // shows the first question
    showQuestion();
}

startButton.addEventListener("click", startGame);
