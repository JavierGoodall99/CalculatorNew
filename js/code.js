let screen = document.getElementById("screen");

// display function
function display(arg) {
    screen.value += arg;
}

//solve function
function solve() {
    screen.value = eval(screen.value)
}

//clear function
function clearScreen() {
    screen.value = "";
}

