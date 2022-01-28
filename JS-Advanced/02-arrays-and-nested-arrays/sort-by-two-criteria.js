function sortByTwoCriteria(arr) { 

  return arr.sort((a,b)=>a.length-b.length||a.localeCompare(b))
  .join('\n');

}

console.log(sortByTwoCriteria(["alpha", "beta", "gamma"]));
console.log("beta-alpha-gamma");
console.log(
    sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])
);
console.log('Jack-Isacc-George-Theodor-Harrison');