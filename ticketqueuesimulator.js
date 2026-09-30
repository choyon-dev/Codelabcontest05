function simulateTicketQueue(commands) {

  let queue = [];
  let served = [];

  for (let i = 0; i < commands.length; i++) {

    let command = commands[i];

    if (command === "serve") {

      if (queue.length > 0) {
        let person = queue.shift();
        served.push(person);
      }

    } else {

      let spaceIndex = command.indexOf(" ");
      let action = command.slice(0, spaceIndex);
      let name = command.slice(spaceIndex + 1);

      if (action === "join") {

        if (!queue.includes(name)) {
          queue.push(name);
        }

      } else if (action === "leave") {

        if (queue.includes(name)) {
          let index = queue.indexOf(name);
          queue.splice(index, 1);
        }
      }
    }
  }

  return {
    queue: queue,
    served: served
  };
}


// let test = simulateTicketQueue([
//   "join Rafi",
//   "join Lina",
//   "serve"
// ]);


// let test = simulateTicketQueue([
//   "join Rafi",
//   "join Rafi",
//   "join Lina"
// ]);


// let test = simulateTicketQueue([
//   "join Rafi",
//   "join Lina",
//   "join Sam",
//   "leave Lina"
// ]);



let test = simulateTicketQueue([
  "serve",
  "join Rafi",
  "serve",
  "serve"
]);
console.log(test);



