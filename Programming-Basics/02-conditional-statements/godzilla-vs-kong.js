function godzillaVsKong(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let statistCount = Number(arg2);
    let priceForOne = Number(arg3);



    let priceForStatists = statistCount * priceForOne;
    let decorPrice = budget * 0.1;

    if (statistCount > 150) {
        priceForStatists = priceForStatists * 0.9;
    }
    let total = decorPrice + priceForStatists;
    if (total <= budget) {

        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(total - budget).toFixed(2)} leva more.`)

    }



}
godzillaVsKong("9587.88", "222", "55.68")