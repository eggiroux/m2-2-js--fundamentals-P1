// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here
function calculateAverage(grades) {
  let sum = 0;
  grades.forEach(function (score) {
    sum += score;
  });
  averageNum = Math.round(sum / grades.length);
  if (averageNum < 60) {
    return "F";
  } else if (averageNum < 70) {
    return "D";
  } else if (averageNum < 80) {
    return "C";
  } else if (averageNum < 90) {
    return "B";
  } else if (averageNum < 100) {
    return "A";
  }
}

console.log(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65]));
console.log(calculateAverage([96, 95, 95, 88, 89, 98, 82, 95]));
console.log(calculateAverage([98, 95, 65, 88, 59, 78, 88, 65]));

// Try with other values as well
