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
        q: "Q1",
        a: [
            "A1",
            "A2",
            "A3",
            "A4",
        ],
        ca: "A3",
    },    
    {
        q: "Q2",
        a: [
            "A1",
            "A2",
            "A3",
            "A4",
        ],
        ca: "A4",
    },     
    {
        q: "Q3",
        a: [
            "A1",
            "A2",
            "A3",
            "A4",
        ],
        ca: "A1",
    },     
    {
        q: "Q4",
        a: [
            "A1",
            "A2",
            "A3",
            "A4",
        ],
        ca: "A3",
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
    // to be completed 
}

function showQuestion(){
    let currentQuestion = questions[currentIndex];
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