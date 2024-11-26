let fib = [0, 1];
while (true) {
  let next = fib[fib.length - 1] + fib[fib.length - 2];
  if (next > 100) break;
  fib.push(next);
}
console.log(fib);