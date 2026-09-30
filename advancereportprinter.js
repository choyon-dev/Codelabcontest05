function formatAttendanceReport(students) {

  let reports = [];

  for (let i = 0; i < students.length; i++) {

    let name = students[i].name;
    let present = students[i].present;
    let total = students[i].total;

    let percentage = Math.round((present / total) * 100);

    let status;

    if (percentage >= 90) {
      status = "Excellent";
    } else if (percentage >= 75) {
      status = "Good";
    } else {
      status = "At Risk";
    }

    let report = `${name}: ${present}/${total} (${percentage}%) - ${status}`;

    reports.push(report);
  }

  return reports;
}


// let test = formatAttendanceReport([
//   { name: "Rafi", present: 18, total: 20 }
// ]);


// let test = formatAttendanceReport([
//   { name: "Lina", present: 15, total: 20 }
// ]);

let test = formatAttendanceReport([
  { name: "Sam", present: 12, total: 20 }
]);

console.log(test)