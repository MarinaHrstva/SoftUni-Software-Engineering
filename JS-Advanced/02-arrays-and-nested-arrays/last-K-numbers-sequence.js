function lastKNUmbersSequence(n, k) {
  let output = [1];

  for (let i = 0; i < n-1; i++) {
    let temp = 0;

    for (let j = i - k +1; j <= i; j++) {
      if (j < 0) {
        j = 0;
      }

      temp += output[j];
    }

    output.push(temp);
  }

  return output

}

console.log(lastKNUmbersSequence(6, 3));
