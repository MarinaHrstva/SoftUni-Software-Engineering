function fruit(fruit, weightInGrams, pricePerKg){

let total=weightInGrams/1000*pricePerKg


return `I need $${total.toFixed(2)} to buy ${(weightInGrams/1000).toFixed(2)} kilograms ${fruit}.`
}

console.log(
    fruit('orange', 2500, 1.80)
);