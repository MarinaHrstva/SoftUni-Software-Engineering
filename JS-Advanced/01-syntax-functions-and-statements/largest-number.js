function largestNumber(num1, num2, num3) {
  let largest = Math.max(...arguments);

  return `The largest number is ${largest}.`;
}

largestNumber(5, -3, 16);
