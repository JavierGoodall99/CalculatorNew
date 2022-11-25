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

//delete function
function del() {
    screen.value=screen.value.slice(0,-1);
}


function displayComa(anyVal) {
    if (!screen.value.includes('.')) {
        screen.value += anyVal;
    }
}