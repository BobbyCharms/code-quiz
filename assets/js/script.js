// When I open the page, I am prompted to start playing a quiz 
// Once I click start quiz, a timer starts and a question is asked with options 1-4 displayed 
// If the correct answer is selected, the next question is asked until 5 questions have bene asked, then final time is displayed
// - render method for rendering the question
// If incorrect answer is selected, the timer decrements by 10 seconds and the next question is asked, until 5 seconds have been asked, then final time is displayed
// At the end of the game, the user is prompted to input their initials and their high score is recorded 
// They are then prompted if they'd like to play again
// View High Schools is always visible in the upper left hand side

// DEPENENCIES
let startButton = document.querySelector("#start");

// FUNCTIONS

// USER INTERACTIONS 
// when the user clicks start, they are taken to the first question
function startGame() {
    console.log("Game Started");
    // countdown timer at 120 seconds starts 
    // user is prompted to select one of the answers
    // if correct answer is selected, next question is displayed
    // if incorrect answer is selected, 10 seconds is deducted from the timer
        // then next question is displayed 
}

startButton.addEventListener("click", startGame);
// when the user clicks start, a timer countdown starts 

console.log("Testing this.")