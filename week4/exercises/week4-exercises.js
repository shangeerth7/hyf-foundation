
const drink = "Flat white";
const price = 42;
let quantity = 3;
const isTakeaway = true;
const cupFee = 3;

let totalPrice = price * quantity;

if (isTakeaway) {
  totalPrice = totalPrice + cupFee * quantity;
}

console.log("New order: " + quantity + " × " + drink + (isTakeaway ? " (takeaway)" : ""));
console.log("Total: " + totalPrice + " kr");

quantity = 5;
totalPrice = price * quantity;

if (isTakeaway) {
  totalPrice = totalPrice + cupFee * quantity;
}

console.log("Total: " + totalPrice + " kr");

const stamps = 8;
console.log("Free coffees: " + Math.floor(stamps / 10));
console.log("Stamps left: " + (stamps % 10));


//second part

function logDiscount(price) {
  console.log(price * 0.8);
}

function getDiscount(price) {
  return price * 0.8;
}
const a = logDiscount(100);
const b = getDiscount(100);
console.log(a);
console.log(b);
console.log(getDiscount(50) + 10);
console.log(logDiscount(50) + 10);



//cheater
let visitors = 0;

function openShop() {
  visitors = visitors + 1;
  const message = "Welcome, visitor " + visitors;
  console.log(message);
}

function closeShop() {
  if (visitors > 0) {
    const goodbye = "Bye, " + visitors + " visitors!";
    console.log(goodbye);
  }
}

openShop();
openShop();
closeShop();

//third part
function getShipping(total, isMember) {
  if (isMember || total >= 500) {
    return 0;
  } else {
    return 49;
  }
}

function getOrderTotal(basket, isMember) {
  const shipping = getShipping(basket, isMember);
  return "Total: " + (basket + shipping);
}

console.log(getOrderTotal(300, false));
console.log(getOrderTotal(650, false));
console.log(getOrderTotal(300, true));



//fourth part
function getDeliveryFee(orderTotal, distanceKm, isMember, hour) {
      if (isMember || orderTotal >= 300) {
         return 0;
}

let fee = 29;

if (distanceKm > 5) {
    fee = fee + 20;
}

if (hour >= 17 && hour < 20) {
    fee = fee + 10;
}

return fee;
}

console.log(getDeliveryFee(250, 3, false, 12));  // 29
console.log(getDeliveryFee(250, 8, false, 18));  // 59
console.log(getDeliveryFee(150, 8, true, 18));   // 0
console.log(getDeliveryFee(320, 2, false, 18));  // 0


//fourth part
function getProgressBar(percent) {
  percent = Math.max(0, Math.min(100, percent));

  let bar = "";
  const hashes = Math.floor(percent / 10);

  for (let i = 0; i < 10; i++) {
    if (i < hashes) {
      bar += "#";
    } else {
      bar += "-";
    }
  }

  return "[" + bar + "] " + percent + "%";
}

console.log(getProgressBar(0));
console.log(getProgressBar(30));
console.log(getProgressBar(75));
console.log(getProgressBar(100));




//F5 — Scope detective
let visitors =0;

function openShop() {
  visitors = visitors + 1;
  const message = "Welcome, visitor " + visitors;
console.log (message);
}

function closeShop() {
  if (visitors > 0) {
    const goodbye = "Bye, " + visitors + " visitors!";
    console.log(goodbye);
  }
 }

openShop();
openShop();
closeShop();

//D1 — The playlist 🎵
const playlist = [
  { title: "Levitating", artist: "Dua Lipa", seconds: 203 },
  { title: "Yellow", artist: "Coldplay", seconds: 266 },
  { title: "Flowers", artist: "Miley Cyrus", seconds: 200 },
  { title: "Houdini", artist: "Dua Lipa", seconds: 185 },
];

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let sec = seconds % 60;

  if (sec < 10) {
    sec = "0" + sec;
  }

  return minutes + ":" + sec;
}

function getTotalTime(playlist) {
  let total = 0;

  for (let song of playlist) {
    total = total + song.seconds;
  }

  return formatTime(total);
}

function getSongsBy(playlist, artist) {
  let songs = [];

  for (let song of playlist) {
    if (song.artist === artist) {
      songs.push(song.title);
    }
  }

  return songs;
}

for (let song of playlist) {
  console.log(song.title + " — " + song.artist + " (" + formatTime(song.seconds) + ")");
}

console.log(getTotalTime(playlist));
console.log(getSongsBy(playlist, "Dua Lipa"));



//D2 — Opening hours 🕘
const openingHours = {
  monday: { open: 8, close: 17 },
  tuesday: { open: 8, close: 17 },
  wednesday: { open: 8, close: 17 },
  thursday: { open: 8, close: 17 },
  friday: { open: 8, close: 20 },
  saturday: { open: 10, close: 14 },
  sunday: null,
};

function isOpen(day, hour) {
  day = day.toLowerCase();

  const hours = openingHours[day];

  if (hours === null) {
    return false;
  }

  if (hour >= hours.open && hour < hours.close) {
    return true;
  } else {
    return false;
  }
}

function getOpeningText(day) {
  day = day.toLowerCase();

  const hours = openingHours[day];

  if (hours === null) {
    return day + ": closed";
  }

  return day + ": " + hours.open + "–" + hours.close;
}

console.log(isOpen("friday", 19)); 
console.log(isOpen("saturday", 15));
console.log(isOpen("sunday", 12));
console.log(isOpen("Monday", 9));

console.log(getOpeningText("friday"));
console.log(getOpeningText("sunday"));