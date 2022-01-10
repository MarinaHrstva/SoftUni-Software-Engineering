function bitcoin(arr) {

    let bitcoinPrice = 11949.16
    let money = 0;
    let bitcoins = 0;
    let firstDay = 0;


    for (let i = 0; i < arr.length; i++) {
        let currentGold = Number(arr[i]);
        let currentDay = i + 1;

        if (currentDay % 3 === 0) {
            currentGold *= 0.7;
        }

        money += currentGold * 67.51;

        while (money > bitcoinPrice) {
            bitcoins ++
            money -= bitcoinPrice
            if (firstDay === 0) {
                firstDay = currentDay;
            }
        }

    }

    

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (firstDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);


}


bitcoin([3124.15, 504.212, 2511.124])