function newHouse(arg1, arg2, arg3) {
    let typeFlower = arg1;
    let quantity = Number(arg2);
    let budget = arg3;
    let totalFlowerPrice = 0;

    // "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"

    switch (typeFlower) {
        case "Roses":
            if (quantity > 80) {
                totalFlowerPrice = quantity * 5 * 0.9;
            } else {
                totalFlowerPrice = quantity * 5;
            }; break;
        case "Dahlias":
            if (quantity > 90) {
                totalFlowerPrice = quantity * 3.80 * 0.85;
            } else {
                totalFlowerPrice = quantity * 3.8;
            }; break;
        case "Tulips":
            if (quantity > 80) {
                totalFlowerPrice = quantity * 2.8 * 0.85;
            } else {
                totalFlowerPrice = quantity * 2.8;
            }; break;
        case "Narcissus":
            if (quantity < 120) {
                totalFlowerPrice = quantity * 3 * 1.15;
            } else {
                totalFlowerPrice = quantity * 3;
            } break;
        case "Gladiolus":
            if (quantity < 80) {
                totalFlowerPrice = quantity * 2.5 * 1.2;
            } else {
                totalFlowerPrice = quantity * 2.5;
            }; break;
    }

    if (totalFlowerPrice > budget) {
        console.log(`Not enough money, you need ${(totalFlowerPrice - budget).toFixed(2)} leva more.`)
    } else {
        console.log(`Hey, you have a great garden with ${quantity} ${typeFlower} and ${(budget - totalFlowerPrice).toFixed(2)} leva left.`)
    }


}

newHouse("Tulips",
    "88",
    "260")
