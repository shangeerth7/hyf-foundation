const yearOfBirth = 2005;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture);

// Goodboy-Oldboy

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;

const dogAge = dogYearFuture - dogYearOfBirth;
const dogYear = dogAge * 7;

const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  console.log(
    "Your dog will be " + dogYear + " dog years old in " + dogYearFuture,
  );
} else {
  console.log(
    "Your dog will be " + dogAge + " human years old in " + dogYearFuture,
  );
}
// Housey pricey - Peter

const peterWidth = 8;
const peterDepth = 10;
const peterHeight = 10;
const peterGardenSize = 100;
const peterActualPrice = 2500000;

const peterVolume = peterWidth * peterDepth * peterHeight;

const peterHousePrice = peterVolume * 2.5 * 1000 + peterGardenSize * 300;

if (peterActualPrice > peterHousePrice) {
  console.log("Peter is paying too much");
} else {
  console.log("Peter is paying too little");
}

// Housey pricey - Julia

const juliaWidth = 5;
const juliaDepth = 11;
const juliaHeight = 8;
const juliaGardenSize = 70;
const juliaActualPrice = 1000000;

const juliaVolume = juliaWidth * juliaDepth * juliaHeight;

const juliaHousePrice = juliaVolume * 2.5 * 1000 + juliaGardenSize * 300;

if (juliaActualPrice > juliaHousePrice) {
  console.log("Julia is paying too much");
} else {
  console.log("Julia is paying too little");
}
// Ez Namey - Startup name generator

const firstWords = [
  "Easy",
  "Awesome",
  "Smart",
  "Future",
  "Digital",
  "Happy",
  "Creative",
  "Bright",
  "Quick",
  "Amazing",
];

const secondWords = [
  "Corporation",
  "Technology",
  "Solutions",
  "Systems",
  "Labs",
  "Studio",
  "Works",
  "Company",
  "Ideas",
  "Software",
];

const randomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log(
  "The startup: " +
    startupName +
    " contains " +
    startupName.length +
    " characters",
);
