function negativePositiveNumbers(arr) {
  let output = [];

  for (const element of arr) {
    if (element < 0) {
      output.unshift(element);
    } else {
      output.push(element);
    }
  }

  return output.join("\n");
}
