const lightTheme = "style/light.css";
const darkTheme = "style/dark.css";
const theme = document.getElementById("theme");
const themeIcon = document.getElementById("theme-icon");
const moonIcon = "assets/MoonIcon.svg";
const sunIcon = "assets/SunIcon.svg";
const result = document.getElementById("result");

function changeTheme() {
    if (theme.getAttribute("href") === lightTheme) {
        theme.setAttribute("href", darkTheme);
        themeIcon.setAttribute("src", moonIcon);
    } else {
        theme.setAttribute("href", lightTheme);
        themeIcon.setAttribute("src", sunIcon);
    }
}

function display(i) {
    const lastResult = eval(i || null);
    result.value = lastResult;
}

function calculate(input) {
    if (!result.value) {
        result.value = "";
    }
    result.value += input;
    document.addEventListener("keydown", inputHandler);

    function inputHandler(e) {
        e.preventDefault();
        if (e.key === "1") {
            result.value += "1";
        } else if (e.key === "2") {
            result.value += "2";
        } else if (e.key === "3") {
            result.value += "3";
        } else if (e.key === "4") {
            result.value += "4";
        } else if (e.key === "5") {
            result.value += "5";
        } else if (e.key === "6") {
            result.value += "6";
        } else if (e.key === "7") {
            result.value += "7";
        } else if (e.key === "8") {
            result.value += "8";
        } else if (e.key === "9") {
            result.value += "9";
        } else if (e.key === "0") {
            result.value += "0";
        }


        if (e.key === "+") {
            result.value += "+";
        } else if (e.key === "-") {
            result.value += "-";
        } else if (e.key === "*") {
            result.value += "*";
        } else if (e.key === "/") {
            result.value += "/";
        }

        if (e.key === ".") {
            result.value += ".";
        }
    }
}

function backspace() {
    result.value = (result.value).slice(0, (result.value).length - 1);
}