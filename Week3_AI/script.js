const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", function () {

  const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender"];

  const randomNumber = Math.floor(Math.random() * colors.length);

  const randomColor = colors[randomNumber];

  document.body.style.backgroundColor = randomColor;

});