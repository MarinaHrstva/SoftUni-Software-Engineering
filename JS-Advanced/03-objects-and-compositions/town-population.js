function townPopulation(arr) {
  let towns = {};

  arr.forEach((element) => {
    let [town, population] = element.split(" <-> ");
    population = Number(population);
    if (!towns[town]) {
      towns[town] = 0;
    }
    towns[town] += population;
  });

  
  for (const key in towns) {
      console.log(`${key} : ${towns[key]}`);
  }
}

townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);


