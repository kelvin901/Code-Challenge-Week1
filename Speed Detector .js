const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter car speed: ', (speed) => {
  speed = parseFloat(speed);
  let demeritPoints = 0;

  if (speed <= 70) {
    console.log("Ok");
  } else {
    demeritPoints = Math.floor((speed - 70) / 5);

    if (demeritPoints >= 12) {
      console.log("License suspended");
    } else {
      console.log(`Demerit points: ${demeritPoints}`);
    }
  }

  rl.close();
});
