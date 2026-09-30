function swapKeysAndValues(obj) {

  let result = {};

  for (let key in obj) {
    let value = obj[key];

    result[value] = key;
  }

  return result;
}

// let test = swapKeysAndValues({
//   name: "Choyon",
//   city: "Dhaka"
// });


// let test = swapKeysAndValues({
//   a: "x",
//   b: "y",
//   c: "z"
// });



let test = swapKeysAndValues({
  first: "one",
  second: "two",
  third: "three"
});

console.log(test);