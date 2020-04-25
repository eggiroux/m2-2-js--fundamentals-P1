// Q3
// Write a function that accepts 5 grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(a, b, c, d, e) {
  let sum = a + b + c + d + e;
  let average = Math.round(sum / 5);
  return average;
}

console.log(calculateAverage(76, 60, 83, 100, 78));
