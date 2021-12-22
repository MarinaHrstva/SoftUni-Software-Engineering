function yardGreening(squareMeters) {
    let sqMeters = Number(squareMeters);
    let pricePerSqMeter = 7.61;

    let standartPrice = sqMeters * pricePerSqMeter;
    let discount = standartPrice * 0.18;
    let theFinalPrice = standartPrice - discount;

    console.log(`The final price is ${theFinalPrice} lv.`);
    console.log(`The discount is ${discount} lv.`)
}

yardGreening("550")