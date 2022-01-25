function sumFirstAndLast(arr) {
  let first = Number(arr.shift());
  let last = Number(arr.pop());

  return first + last;
  
}

sumFirstAndLast(["20", "30", "40"]);
