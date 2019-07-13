function addOne(x) {
  return x + 1;
}

function pipe(a, ...args) {
  let sum = a;
  for (let i = 0; i < args.length; i++) {
    sum = args[i](sum);
  }
  return sum;
}

pipe(1, addOne); 
pipe(1, addOne, addOne);
