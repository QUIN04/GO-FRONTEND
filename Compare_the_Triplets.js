const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs = [];

rl.on('line', (input) => {
  inputs = inputs.concat(input.split(' ').map(Number));
  if (inputs.length === 6) {
    let a = inputs.slice(0, 3);
    let b = inputs.slice(3, 6);
    let aliceCount = 0;
    let bobCount = 0;

    for (let i = 0; i < 3; i++) {
      if (a[i] > b[i]) {
        aliceCount++;
      } else if (a[i] < b[i]) {
        bobCount++;
      }
    }

    console.log(`${aliceCount} ${bobCount}`);
    rl.close();
  }
});
