
function highScores() {
    // checks if there are high scores in local storage
    let highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
    // sorts scores from highest to lowest
    highScores.sort(function(a, b) {
        return b.score - a.score
    });
    // for each new score, create a <li> with the information
    highScores.forEach(function(score) {
        let listItemEl = document.createElement("li");
        listItemEl.textContent = score.initialsInput + " - " + score.score;
          //create ordered list element
        let highScoresEl = document.querySelector("#highscores");
        // display on page
        highScoresEl.appendChild(listItemEl);
    });
}

function clearHighScores() {
    window.localStorage.removeItem("highScores");
    window.location.reload();
}
document.querySelector("#clear").onclick = clearHighScores;

highScores();