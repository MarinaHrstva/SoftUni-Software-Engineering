function listOfProducts(array) {
   let sorted= array.sort();

    for (let i = 0; i < sorted.length; i++) {
      console.log(`${i+1}.${sorted[i]}`);
        
    }
    
}

console.log(listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]));