function cleverLily(arg1, arg2, arg3) {
    let age = Number(arg1);
    let priceWashingMachine = Number(arg2);
    let priceToy = Number(arg3);

    let money = 0;
    let toys = 0;
    let tempMoney = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toys++;
        } else {
            money += tempMoney - 1;
            tempMoney += 10;
        }
    }


    money += toys * priceToy;

    if (money >= priceWashingMachine) {
        console.log(`Yes! ${(money - priceWashingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWashingMachine - money).toFixed(2)}`);

    }
}
cleverLily("10", "170", "6")