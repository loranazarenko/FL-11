let a = parseInt(prompt('Enter a', ''));
let b = parseInt(prompt('Enter b', ''));
let c = parseInt(prompt('Enter c', ''));

if (!(a + b > c && b + c > a && c + a > b)) {
  console.log("Triangle doesn't exist");
} else {
  if (a === b && b === c) {
    console.log('Eequivalent triangle');
  }

  if (a === b && a !== c || a === c && a !== b || b === c && a !== b) {
    console.log('Isosceles triangle');
  }

  if (a !== b && a !== c && c !== b) {
    console.log('Normal triangle');
  }
}
