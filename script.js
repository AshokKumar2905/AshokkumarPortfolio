const text = ["Developer", "Designer", "Problem Solver", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;
let currentText = "";
let letter = "";

(function type() {
    if (index === text.length) {
        index = 0;
    }
    currentText = text[index];
    letter = currentText.slice(0, ++charIndex);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        index++;
        charIndex = 0;
        setTimeout(type, 1000);
    } else {
        setTimeout(type, 120);
    }
})();
