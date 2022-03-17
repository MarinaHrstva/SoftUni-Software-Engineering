function solve() {
   document.querySelector("#btnSend").addEventListener("click", onClick);

   function onClick() {
      let restaurants = document.querySelector("#inputs textarea").value;
      restaurants = JSON.parse(restaurants);

      let output = {};
      let avgSalary = 0;
      let bestRestaurant = "";

      for (const line of restaurants) {
         let [restaurant, workers] = line.split(" - ");
         workers = workers.split(", ");

         for (const worker of workers) {
            let [name, salary] = worker.split(" ");
            salary = Number(salary);

            if (!output[restaurant]) {
               output[restaurant] = {};
            }
            output[restaurant][name] = salary;
         }
      }

      let keys = Object.keys(output);

      for (const key of keys) {
         let currentAvgSalary = 0;
         let wCount = Object.keys(output[key]).length;
         // console.log(wCount);
         for (const w in output[key]) {
            currentAvgSalary += output[key][w];
         }
         currentAvgSalary /= wCount;

         if (currentAvgSalary > avgSalary) {
            avgSalary = currentAvgSalary;
            bestRestaurant = key;
         }
      }

      let sorted = Object.keys(output[bestRestaurant]).sort(
         (a, b) => output[bestRestaurant][b] - output[bestRestaurant][a]
      );
      let bestWSalary = output[bestRestaurant][sorted[0]];

      let bestRElement = document.querySelector("#bestRestaurant p");
      bestRElement.textContent = `Name: ${bestRestaurant} Average Salary: ${avgSalary.toFixed(
         2
      )} Best Salary: ${bestWSalary.toFixed(2)}`;

      let bestWorkersElement = document.querySelector("#workers p");
      bestWorkersElement.textContent = "";

      for (const line of sorted) {
         bestWorkersElement.textContent += `Name: ${line} With Salary: ${output[bestRestaurant][line]} `;
      }
   }
}
