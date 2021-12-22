function petShop(dogs, animals) {
    let dogsFood = Number(dogs);
    let animalsFood = Number(animals);
    let priceDogsFood = 2.5;
    let priceAnimalsFood = 4;

    let amount = dogsFood * priceDogsFood + animalsFood * priceAnimalsFood;
 
    console.log(`${amount} lv.`);

}

petShop("5", "4")