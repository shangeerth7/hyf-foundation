
/* =====================================
   1. Flight booking fullname function
===================================== */

function getFullName(firstName, surname, useFormalName) {
  if (firstName === "" || surname === "") {
    return "Please enter your first name and surname";
  }

  if (useFormalName === true) {
    return "Lord " + firstName + " " + surname;
  }

  return firstName + " " + surname;
}

/*
How I would support women with formal names:

I would add an extra parameter called title to the getFullName function.
The user could choose a title such as "Lord" or "Lady", and the function
would add the selected title before the full name.
*/

const fullName1 = getFullName("Benjamin", "Hughes");
const fullName2 = getFullName("John", "Smith");
const fullName3 = getFullName("David", "Miller", true);
const fullName4 = getFullName("David", "Miller", false);

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName4);


/* =====================================
   2. Event application - Weekday
===================================== */

function getEventWeekday(daysFromToday) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const today = new Date().getDay();
  const eventDay = (today + daysFromToday) % 7;

  return weekdays[eventDay];
}

console.log(getEventWeekday(9));
console.log(getEventWeekday(2));


/* =====================================
   3. Weather wear
===================================== */

function getClothesToWear(temperature) {
  if (temperature >= 25) {
    return "Shorts and a t-shirt";
  } else if (temperature >= 15) {
    return "Trousers and a t-shirt";
  } else if (temperature >= 5) {
    return "Warm clothes and a jacket";
  } else {
    return "A warm coat, scarf and gloves";
  }
}

const clothesToWear = getClothesToWear(18);

console.log(clothesToWear);


/* =====================================
   4. Student manager
===================================== */

const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName.trim() === "") {
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }

  if (studentName === "The Queen") {
    class07Students.push(studentName);
    return;
  }

  if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
    return;
  }

  class07Students.push(studentName);
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Benjamin");
addStudentToClass("John");
addStudentToClass("Anna");
addStudentToClass("David");
addStudentToClass("Emma");
addStudentToClass("Oliver");

addStudentToClass("Peter");
addStudentToClass("Benjamin");
addStudentToClass("The Queen");
addStudentToClass("");

console.log(getNumberOfStudents());


/* =====================================
   5. Candy helper (Optional)
===================================== */

const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
  let pricePerGram;

  if (candyType === "sweet") {
    pricePerGram = 0.5;
  } else if (candyType === "chocolate") {
    pricePerGram = 0.7;
  } else if (candyType === "toffee") {
    pricePerGram = 1.1;
  } else if (candyType === "chewing-gum") {
    pricePerGram = 0.03;
  } else {
    console.log("Unknown candy type");
    return;
  }

  boughtCandyPrices.push(pricePerGram * weight);
}

function canBuyMoreCandy() {
  let totalPrice = 0;

  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice += boughtCandyPrices[i];
  }

  return totalPrice < amountToSpend;
}

addCandy("sweet", 20);
addCandy("chocolate", 10);
addCandy("chewing-gum", 30);

if (canBuyMoreCandy()) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}
