function commonSkills(skills1, skills2) {

  let result = [];

  for (let i = 0; i < skills1.length; i++) {

    let skill1 = skills1[i].toLowerCase();

    for (let j = 0; j < skills2.length; j++) {

      let skill2 = skills2[j].toLowerCase();

      if (skill1 === skill2) {

        if (!result.includes(skill1)) {
          result.push(skill1);
        }

      }
    }
  }

  result.sort();

  return result;
}


// let test = commonSkills(
//   ["JavaScript", "HTML", "CSS"],
//   ["javascript", "Python", "CSS"]
// );



// let test = commonSkills(
//   ["React", "Node.js", "MongoDB"],
//   ["Python", "React", "MongoDB"]
// );
// console.log(test);




let test = commonSkills(
  ["HTML", "CSS"],
  ["Python", "JavaScript"]
);
console.log(test);



