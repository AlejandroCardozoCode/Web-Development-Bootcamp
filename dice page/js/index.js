function getRandomNumber() {
    return Math.floor((Math.random() * 6) + 1);
}

function changeDices(dice1, dice2) {
    document.querySelector(".diceP1").setAttribute("src", "assets/img/dice" + dice1 + ".png");
    document.querySelector(".diceP2").setAttribute("src", "assets/img/dice" + dice2 + ".png");
}

function setWinnerText(dice1, dice2) {
    if (dice1 > dice2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
    }
    else if (dice1 < dice2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else {
        document.querySelector("h1").innerHTML = "¡It's a Draw!";
    }
}
function rollDices() {
    var dice1 = getRandomNumber();
    var dice2 = getRandomNumber();

    changeDices(dice1, dice2);
    setWinnerText(dice1, dice2);
}

document.getElementById("button-roll").onclick = rollDices;