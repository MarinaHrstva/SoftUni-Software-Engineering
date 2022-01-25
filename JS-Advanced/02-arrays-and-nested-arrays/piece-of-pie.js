function pieceOfPie(arr, startPie, endPie) {
  let start = arr.indexOf(startPie);
  let end = arr.indexOf(endPie) + 1;

  return arr.slice(start, end);
}

console.log(
  pieceOfPie(
    [
      "Pumpkin Pie",
      "Key Lime Pie",
      "Cherry Pie",
      "Lemon Meringue Pie",
      "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie"
  )
);
