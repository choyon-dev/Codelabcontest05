function groupStudentsByGradeBand(students) {

  let result = {
    A: [],
    B: [],
    C: [],
    F: []
  };

  for (let i = 0; i < students.length; i++) {

    if (students[i].marks >= 80) {
      result.A.push(students[i]);

    } else if (students[i].marks >= 70) {
      result.B.push(students[i]);

    } else if (students[i].marks >= 60) {
      result.C.push(students[i]);

    } else {
      result.F.push(students[i]);
    }
  }

  return result;
}




// let test = groupStudentsByGradeBand([
//   { name: "Rafi", marks: 85 },
//   { name: "Lina", marks: 75 },
//   { name: "Sam", marks: 65 },
//   { name: "Nila", marks: 50 }
// ]);


// let test = groupStudentsByGradeBand([
//   { name: "A", marks: 80 },
//   { name: "B", marks: 70 },
//   { name: "C", marks: 60 },
//   { name: "D", marks: 59 }
// ]);


// let test = groupStudentsByGradeBand([
//   { name: "Rafi", marks: 95 },
//   { name: "Lina", marks: 88 },
//   { name: "Sam", marks: 72 }
// ]);



let test = groupStudentsByGradeBand([
  { name: "A", marks: 100 },
  { name: "B", marks: 79 },
  { name: "C", marks: 69 },
  { name: "D", marks: 0 }
]);


console.log(test);