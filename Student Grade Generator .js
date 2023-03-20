const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter student marks (between 0 and 100): ', (marks) => {
    marks = Number(marks);
    let grade;
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else if (marks >= 50 && marks <= 59) {
      grade = "C";
    } else if (marks >= 40 && marks <= 49) {
      grade = "D";
    } else {
      grade = "E";
    }
    
    // Output grade
    console.log(`The grade for ${marks} marks is ${grade}.`);
  
    readline.close();
  });
  