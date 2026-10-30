
let userName = "";
let todos = [];

function getReply(command) {

  // 1. Remember my name

  if (command.startsWith("Hello my name is ")) {

    userName = command.slice(17);

    return "Nice to meet you " + userName;
  }

  // 2. What is my name?

  if (command === "What is my name?") {

    if (userName === "") {
      return "You have not told me your name yet";
    }

    return "Your name is " + userName;
  }

  // 3. Add something to my todo

  if (command.startsWith("Add ") && command.endsWith(" to my todo")) {

    let todo = command.slice(4, command.length - 11);

    todos.push(todo);

    return todo + " added to your todo";
  }

  // 4. Remove something from my todo

  if (command.startsWith("Remove ") && command.endsWith(" from my todo")) {

    let todo = command.slice(7, command.length - 13);

    for (let i = 0; i < todos.length; i++) {

      if (todos[i] === todo) {

        todos.splice(i, 1);

        return "Removed " + todo + " from your todo";
      }
    }

    return todo + " was not found in your todo";
  }

  // 5. Show my todo list

  if (command === "What is on my todo?") {

    if (todos.length === 0) {
      return "You have no todos";
    }

    let todoList = "";

    for (let i = 0; i < todos.length; i++) {

      todoList = todoList + todos[i];

      if (i < todos.length - 1) {
        todoList = todoList + " and ";
      }
    }

    if (todos.length === 1) {
      return "You have 1 todo - " + todoList;
    }

    return "You have " + todos.length + " todos - " + todoList;
  }

  // 6. Today's date

  if (command === "What day is it today?") {

    let today = new Date();

    let day = today.getDate();

    let months = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];

    let month = months[today.getMonth()];

    let year = today.getFullYear();

    return day + ". of " + month + " " + year;
  }

  // 7. Simple math

  if (command.startsWith("What is ")) {

    let calculation = command.slice(8);

    if (calculation.endsWith("?")) {
      calculation = calculation.slice(0, calculation.length - 1);
    }

    let numbers = calculation.split(" ");

    let number1 = Number(numbers[0]);
    let operator = numbers[1];
    let number2 = Number(numbers[2]);

    if (operator === "+") {
      return String(number1 + number2);
    }

    if (operator === "-") {
      return String(number1 - number2);
    }

    if (operator === "*") {
      return String(number1 * number2);
    }

    if (operator === "/") {

      if (number2 === 0) {
        return "Cannot divide by zero";
      }

      return String(number1 / number2);
    }

    return "Sorry, I cannot calculate that";
  }

  // 8. Timer

  if (command.startsWith("Set a timer for ")) {

    let minutes = Number(command.slice(16).split(" ")[0]);

    if (minutes > 0) {

      setTimeout(function() {
        console.log("Timer done");
      }, minutes * 60 * 1000);

      if (minutes === 1) {
        return "Timer set for 1 minute";
      }

      return "Timer set for " + minutes + " minutes";
    }

    return "Please enter a valid number of minutes";
  }

  // 9. Extra command

  if (command === "How are you?") {
    return "I am doing great! Thank you for asking";
  }

  // 10. Unknown command

  return "Sorry, I don't understand";
}


// TEST THE ASSISTANT

console.log(getReply("Hello my name is Benjamin"));

console.log(getReply("What is my name?"));

console.log(getReply("Add fishing to my todo"));

console.log(getReply("Add singing in the shower to my todo"));

console.log(getReply("What is on my todo?"));

console.log(getReply("Remove fishing from my todo"));

console.log(getReply("What is on my todo?"));

console.log(getReply("What day is it today?"));

console.log(getReply("What is 3 + 3?"));

console.log(getReply("What is 4 * 12?"));

console.log(getReply("How are you?"));

console.log(getReply("Set a timer for 1 minutes"));
