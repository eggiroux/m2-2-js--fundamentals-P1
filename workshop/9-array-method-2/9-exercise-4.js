/**
 * NOTE: For the exercises in this section, you are not allowed to use the
 * `for` or `while` loops.
 *
 * You must solve them using array methods like filter, map, forEach, etc.
 *
 * You will also need to verify that your functions work as expected.
 * Be sure to test them. :)
 */

// Q4
// Write a function that accepts a list of numbers and returns a new list with
// all of the even numbers removed.
function removeEvens(lst) {
  return lst.filter(function (item) {
    return item % 2 === 1;
  });
}

console.log(removeEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
// should log [1, 3, 5, 7, 9, 11]
