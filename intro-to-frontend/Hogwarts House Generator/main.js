
const studentName = document.getElementById("studentName");
const sortButton = document.getElementById("sortButton");
const result = document.getElementById("result");
const errorMessage = document.getElementById("errorMessage");
const tryAgainButton = document.getElementById("tryAgainButton");

const houses = [
    "Gryffindor",
    "Slytherin",
    "Ravenclaw",
    "Hufflepuff"
];

function findHouse() {
    const name = studentName.value.trim();

    if (name === "") {
        errorMessage.textContent = "Please enter your name!";
        result.textContent = "";
        tryAgainButton.classList.add("hidden");
        return;
    }

    errorMessage.textContent = "";

    const randomIndex = Math.floor(Math.random() * houses.length);

    const selectedHouse = houses[randomIndex];

    result.textContent = `${name} belongs in ${selectedHouse}!`;

    result.className = "result " + selectedHouse;

    tryAgainButton.classList.remove("hidden");
}

sortButton.addEventListener("click", findHouse);

tryAgainButton.addEventListener("click", function () {
    studentName.value = "";
    result.textContent = "";
    errorMessage.textContent = "";
    result.className = "result";
    tryAgainButton.classList.add("hidden");
});
