function solveMeFirst(a, b) {
    if (a >= 1 && a <= 1000 && b >= 1 && b <= 1000) {
        console.log(a + b);
    } else {
        console.log("Invalid input: a and b must be between 1 and 1000");
    }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

let stdin = '';
process.stdin.on('data', function (data) {
    stdin += data;
});

process.stdin.on('end', function () {
    let arr = stdin.split('\n');
    let a = parseInt(arr[0]);
    let b = parseInt(arr[1]);
    solveMeFirst(a, b);
});