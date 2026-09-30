function getDayOfWeek(year, month, day) {

  let date = new Date(year, month - 1, day);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return days[date.getDay()];
}



// let test = getDayOfWeek(2024, 5, 11);

// let test = getDayOfWeek(2023, 1, 1);

// let test = getDayOfWeek(2024, 1, 1);
let test = getDayOfWeek(2024, 2, 29);

console.log(test);