function clearHighScores() {
    window.localStorage.removeItem("highScores");
    window.location.reload();
}
document.querySelector("#clear").onclick = clearHighScores;

highScores();