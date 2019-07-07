let a1 = parseInt(prompt('Enter a1', ''));
let a2 = parseInt(prompt('Enter a2', ''));
let b1 = parseInt(prompt('Enter b1', ''));
let b2 = parseInt(prompt('Enter b2', ''));
let c1 = parseInt(prompt('Enter c1', ''));
let c2 = parseInt(prompt('Enter c2', ''));

const midDiv = 2;
let middlePoint1 = (a1 + b1) / midDiv;
let middlePoint2 = (a2 + b2) / midDiv;

if (middlePoint1 === c1 && middlePoint2 === c2) {
    let result = true;
    console.log(result);
} else {
    let result = false;
    console.log(result);
}
