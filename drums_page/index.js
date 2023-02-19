
// método que se ejecuta cuando se activa el listener 
function makeSound(key) {

    switch (key) {
        case "w":
            sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "a":
            sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "s":
            sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "d":
            sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case "j":
            sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "k":
            sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "l":
            sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;

        default:
            console.log(letter);
            break;
    }
}

function animation(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (event) {
        makeSound(this.innerHTML);
        animation(this.innerHTML);
    });
}

//detectar cuando una tecla es presionada
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    animation(event.key);
});