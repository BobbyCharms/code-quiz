// When I open the page, I am prompted to start playing a quiz 
// Once I click start quiz, a timer starts and a question is asked with options 1-4 displayed 
// If the correct answer is selected, the next question is asked until 5 questions have bene asked, then final time is displayed
// - render method for rendering the question
// If incorrect answer is selected, the timer decrements by 10 seconds and the next question is asked, until 5 seconds have been asked, then final time is displayed
// At the end of the game, the user is prompted to input their initials and their high score is recorded 
// They are then prompted if they'd like to play again
// View High Schools is always visible in the upper left hand side

// DEPENENCIES
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
let startButton = document.querySelector("#start");
let timeLeftEl = document.querySelector("#timeLeft");
let startDiv = document.querySelector("#startDiv");
let questionsDiv = document.querySelector("#questions");
let questionTitle = document.querySelector("#questionTitle");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");
let rightWrong = document.querySelector("#rightWrong")
let timerID; 
let timeLeft = 120;
let currentIndex = 0;
let currentQuestion;
// FUNCTIONS
function oneSecondHandler() {
    timeLeft--;
    timeLeftEl.textContent = timeLeft;
    if (timeLeft <= 0) {
        endGame();
    }
}

function endGame(){
    // to be completed 
}
function handleAnswer(event) {
    let button = event.target; 
    if (button.textContent !== currentQuestion.ca) {
        rightWrong.textContent - "Wrong."
        timeLeft -= 15; 
        if (timeLeft < 0) {
            timeLeft === O
        }
        timeLeftEl.textContent = timeLeft;
    } else {
        rightWrong.textContent - "Right!";
    }
    rightWrong.removeAttribute("class");
    setTimeout(function(){
        rightWrong.setAttribute("class", "hide");
    }, 1000)
    currentIndex++;
    if (timeLeft <= 0 || currentIndex === questions.length) {
        endGame()
    } else {
        showQuestion()
    }
}

function showQuestion(){
    currentQuestion = questions[currentIndex];
    questionTitle.textContent = currentQuestion.q;
    answer1.textContent = currentQuestion.a[0];
    answer2.textContent = currentQuestion.a[1];
    answer3.textContent = currentQuestion.a[2];
    answer4.textContent = currentQuestion.a[3];
    answer1.onclick = handleAnswer;
}
// USER INTERACTIONS 
// when the user clicks start, they are taken to the first question
function startGame() {
    console.log("Game Started");
    // countdown timer at 120 seconds starts 
    timerID = setInterval(oneSecondHandler, 1000);
    timeLeftEl.textContent = timeLeft;
    startDiv.setAttribute("class", "hide");
    questionsDiv.removeAttribute("class");
    showQuestion();
    // user is prompted to select one of the answers
    // if correct answer is selected, next question is displayed
    // if incorrect answer is selected, 10 seconds is deducted from the timer
        // then next question is displayed 
}

startButton.addEventListener("click", startGame);
// when the user clicks start, a timer countdown starts 