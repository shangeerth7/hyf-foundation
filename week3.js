
console.log("========== TASK 1: ARRAY REMOVAL ==========");

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];

const nameToRemove = "Ahmad";
const nameIndex = names.indexOf(nameToRemove);

if (nameIndex !== -1) {
  names.splice(nameIndex, 1);
}

console.log(names);


// ============================================
console.log("\n========== TASK 2: TRAVEL TIME ==========");

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTime(travelInformation) {
  const totalHours =
    travelInformation.destinationDistance /
    travelInformation.speed;

  const hours = Math.floor(totalHours);
  const minutes = Math.floor((totalHours - hours) * 60);

  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);


// ============================================
console.log("\n========== TASK 3: SERIES DURATION ==========");

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText() {
  const lifetimeMinutes = 80 * 365 * 24 * 60;
  let totalSeriesMinutes = 0;

  for (const series of seriesDurations) {
    const seriesMinutes =
      series.days * 24 * 60 +
      series.hours * 60 +
      series.minutes;

    const percentage =
      (seriesMinutes / lifetimeMinutes) * 100;

    totalSeriesMinutes += seriesMinutes;

    console.log(
      `${series.title} took ${percentage.toFixed(3)}% of my life`
    );
  }

  const totalPercentage =
    (totalSeriesMinutes / lifetimeMinutes) * 100;

  console.log(
    `In total that is ${totalPercentage.toFixed(3)}% of my life`
  );
}

logOutSeriesText();


// ============================================
console.log("\n========== TASK 4: SAVE A NOTE ==========");

const notes = [];

function saveNote(content, id) {
  notes.push({
    content: content,
    id: id,
  });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);


// ============================================
console.log("\n========== TASK 5: GET A NOTE ==========");

function getNote(id) {
  if (typeof id !== "number" || id === undefined || Number.isNaN(id)) {
    console.log("Error: Please provide a valid note ID");
    return;
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }

  console.log("Error: Note not found");
  return;
}

const firstNote = getNote(1);
console.log(firstNote);

// Optional tests:
// getNote();
// getNote("hello");
// getNote(99);


// ============================================
console.log("\n========== TASK 6: LOG OUT NOTES ==========");

function logOutNotesFormatted() {
  for (const note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`
    );
  }
}

logOutNotesFormatted();


// ============================================
console.log("\n========== TASK 7: UNIQUE FEATURE ==========");

// Extra feature: remove a note using its ID.
function removeNote(id) {
  const index = notes.findIndex(function (note) {
    return note.id === id;
  });

  if (index === -1) {
    console.log("Error: Note not found");
    return;
  }

  notes.splice(index, 1);
  console.log(`Note with id ${id} removed`);
}

removeNote(2);
console.log("Notes remaining:", notes);


// ============================================
console.log("\n========== OPTIONAL: CACTUSIO ==========");

const activities = [];
const dailyUsageLimit = 120;

function addActivity(date, activity, duration) {
  activities.push({
    date: date,
    activity: activity,
    duration: duration,
  });
}

function showStatus(activities) {
  if (activities.length === 0) {
    const message = "Add some activities before calling showStatus";
    console.log(message);
    return message;
  }

  let totalDuration = 0;

  for (const activity of activities) {
    totalDuration += activity.duration;
  }

  const status =
    `You have added ${activities.length} activities. ` +
    `They amount to ${totalDuration} min. of usage`;

  console.log(status);

  if (totalDuration > dailyUsageLimit) {
    console.log(
      "You have reached your limit, no more smartphoning for you!"
    );
  }

  return status;
}


// Extra feature: find the activity with the most total time.
function findMostUsedActivity(activities) {
  if (activities.length === 0) {
    console.log("No activities found");
    return;
  }

  const totals = {};

  for (const item of activities) {
    if (totals[item.activity] === undefined) {
      totals[item.activity] = 0;
    }

    totals[item.activity] += item.duration;
  }

  let mostUsed = "";
  let longestDuration = -1;

  for (const activityName in totals) {
    if (totals[activityName] > longestDuration) {
      longestDuration = totals[activityName];
      mostUsed = activityName;
    }
  }

  console.log(
    `Most used activity: ${mostUsed} (${longestDuration} minutes)`
  );
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 20);
addActivity("23/7-18", "Netflix", 28);

showStatus(activities);
findMostUsedActivity(activities);
