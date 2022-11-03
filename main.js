// How much sleep you get every night in a week
const getSleepHours = day => {
  switch (day) {
    case "monday":
      return 5;
      break;
    case "tuesday":
      return 6;
      break;
    case "wednesday":
      return 3;
      break;
    case "thursday":
      return 9;
      break;
    case "friday":
      return 0;
      break;
    case "saturday":
      return 4;
      break;
    case "sunday":
      return 7;
    default: 
      return "Error!";
  }
};
//console.log(getSleepHours('sunday'));

// Total sleep hours per week
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");
//console.log(getActualSleepHours());

// Ideal total sleep hours per week
const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
};
//console.log(getIdealSleepHours());
//console.log(getActualSleepHours());

// Calulating sleep debt (the difference between actual and ideal sleep)
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You slept " + (actualSleepHours - idealSleepHours) + " more hour(s) than recommended!");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("You slept " + (idealSleepHours - actualSleepHours) + " less hour(s) than recommended!");
  } else {
    console.log("Error!");
  }
};

calculateSleepDebt(); // Logs "You slept 15 less hour(s) than recommended!"
