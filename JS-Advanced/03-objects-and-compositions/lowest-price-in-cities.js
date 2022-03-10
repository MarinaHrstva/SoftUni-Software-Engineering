function solve(arr) {
  let result = {};

  for (const line of arr) {
    let [town, product, price] = line.split(" | ");
    price = Number(price);

    if (!result[product]) {
      result[product] = {};
    }
    result[product][town] = price;
  }

  for (const key in result) {
    let sorted = Object.keys(result[key]).sort(
      (a, b) => result[key][a] - result[key][b]);
      console.log(`${key} -> ${result[key][sorted[0]]} (Sample Town)`);
  }
}

console.log(
  solve([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
  ])
);
