buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];
userPattern = [];
level = 0;
gameRunning = false;

function animateButton(color) {
    $("#" + color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

function playSound(name) {
    sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function handlerButton(color) {
    userPattern.push(color);
    animateButton(color);
    $("#" + color).addClass("pressed");
    setTimeout(() => {
        $("#" + color).removeClass("pressed");
    }, 100);
    switch (color) {
        case "red":
            playSound(color);
            break;
        case "green":
            playSound(color);
            break;
        case "yellow":
            playSound(color);
            break;
        case "blue":
            playSound(color);
            break;

        default:
            alert("error");
            break;
    }
    checkAnswer(userPattern.length - 1);
}


function nextSecuence() {
    gameRunning = true;
    randomNumber = Math.floor(Math.random() * 4);
    chosenColor = buttonColors[randomNumber];
    gamePattern.push(chosenColor);
    animateButton(chosenColor);
    switch (chosenColor) {
        case "red":
            playSound(chosenColor);
            break;
        case "green":
            playSound(chosenColor);
            break;
        case "yellow":
            playSound(chosenColor);
            break;
        case "blue":
            playSound(chosenColor);
            break;

        default:
            alert("error");
            break;
    }
    level = level + 1;
    console.log(gamePattern);
    console.log(userPattern);

}

function checkAnswer(lastIndex) {
    if (userPattern[lastIndex] !== gamePattern[lastIndex]) {
        console.log("bad");
        userPattern = [];
        $("h1").text("Game Over - Press Enter to start again");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
        return;
    }
    if (lastIndex + 1 === gamePattern.length) {
        userPattern = [];
        $("h1").text("Level " + level);
        setTimeout(() => {
            nextSecuence();
        }, 500);
    }
}

function startOver() {
    gameRunning = false;
    gamePattern = [];
    level = 0;
}
$(document).on("keydown", function (event) {
    if (!gameRunning) {
        $("h1").text("Level " + level);
        nextSecuence();
    }
});

$(".btn").on("click", function () {
    color = $(this).attr("id");
    handlerButton(color);
});
