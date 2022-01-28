function extractSequence(array) {
  let result = [array.shift()];

  for (const el of array) {
    if (el > result[result.length - 1]) {
      result.push(el);
    }
  }

  return result;
}

console.log(extractSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
